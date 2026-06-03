import { NextRequest, NextResponse } from "next/server";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

function extractOgImage(html: string, pageUrl: string): string | null {
  const patterns = [
    /property=["']og:image["'][^>]*content=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*property=["']og:image["']/i,
    /name=["']twitter:image(?::src)?["'][^>]*content=["']([^"']+)["']/i,
    /content=["']([^"']+)["'][^>]*name=["']twitter:image(?::src)?["']/i,
  ];
  for (const pattern of patterns) {
    const m = html.match(pattern);
    if (m?.[1]) {
      const v = m[1];
      if (v.startsWith("//")) return `https:${v}`;
      if (v.startsWith("/")) return `${new URL(pageUrl).origin}${v}`;
      if (v.startsWith("http")) return v;
    }
  }
  return null;
}

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");
  if (!url) return new NextResponse(null, { status: 400 });

  let imageUrl: string | null = null;

  // Step 1: fetch the page and extract og:image
  try {
    const page = await fetch(url, {
      headers: { "User-Agent": UA, Accept: "text/html,application/xhtml+xml" },
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (page.ok) {
      imageUrl = extractOgImage(await page.text(), url);
    }
  } catch {
    // fallthrough to screenshot service
  }

  // Step 2: fall back to thum.io if no og:image found
  if (!imageUrl) {
    imageUrl = `https://image.thum.io/get/width/1200/${url}`;
  }

  // Step 3: proxy the image bytes so hotlink protection is bypassed
  try {
    const siteOrigin = new URL(url).origin;
    const img = await fetch(imageUrl, {
      headers: {
        "User-Agent": UA,
        Referer: `${siteOrigin}/`,
        Accept: "image/*,*/*",
      },
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    if (!img.ok) return new NextResponse(null, { status: 502 });

    const buffer = await img.arrayBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": img.headers.get("Content-Type") ?? "image/jpeg",
        "Cache-Control": "private, max-age=86400",
      },
    });
  } catch {
    return new NextResponse(null, { status: 502 });
  }
}
