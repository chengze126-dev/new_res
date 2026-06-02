import { about } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-24 lg:mb-32">
      <SectionHeading number="01" title="About Me" />

      <div className="mt-4 space-y-4 text-slate leading-relaxed">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3" aria-label="Technologies">
        {about.skills.map((skill) => (
          <li key={skill} className="relative pl-5 text-sm text-slate-light font-mono">
            <span className="absolute left-0 text-green" aria-hidden="true">
              ▹
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
