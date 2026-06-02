"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig, navItems } from "@/data/content";
import SocialLinks from "./SocialLinks";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 lg:px-0">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-lightest sm:text-5xl">
          <Link href="/">{siteConfig.name}</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium text-slate-light sm:text-xl">
          {siteConfig.title}
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate sm:text-base">
          {siteConfig.tagline}
        </p>

        <nav className="hidden lg:block mt-16" aria-label="In-page navigation">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center gap-4 text-xs font-mono uppercase tracking-widest"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-16 bg-green"
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-green"
                    }`}
                  />
                  <span
                    className={`transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-green"
                        : "text-slate group-hover:text-green"
                    }`}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SocialLinks className="hidden lg:flex mt-8" />
    </header>
  );
}
