"use client";

import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export default function ProjectImage({ src, alt, title, className }: ProjectImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    // If API route failed, fall back to thum.io directly in the browser
    if (imgSrc.startsWith("/api/og-image")) {
      const urlParam = new URLSearchParams(imgSrc.split("?")[1]).get("url");
      if (urlParam) {
        setImgSrc(`https://image.thum.io/get/width/1200/${urlParam}`);
        return;
      }
    }
    setHasError(true);
  };

  if (hasError) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-navy-lighter px-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-slate/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span className="text-center font-mono text-xs text-slate">{title}</span>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={imgSrc}
      alt={alt}
      className={className ?? "absolute inset-0 h-full w-full object-cover object-top"}
      onError={handleError}
    />
  );
}
