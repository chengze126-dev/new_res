"use client";

import { useState } from "react";
import { experience } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(experience[0].id);
  const active = experience.find((item) => item.id === activeTab) ?? experience[0];

  return (
    <section id="experience" className="mb-16 scroll-mt-24 lg:mb-32">
      <SectionHeading number="02" title="Where I&apos;ve Worked" />

      <div className="mt-8 flex flex-col gap-8 md:flex-row">
        <div
          role="tablist"
          aria-label="Job history"
          className="flex overflow-x-auto md:flex-col md:overflow-visible"
        >
          {experience.map((job) => (
            <button
              key={job.id}
              role="tab"
              aria-selected={activeTab === job.id}
              aria-controls={`panel-${job.id}`}
              id={`tab-${job.id}`}
              onClick={() => setActiveTab(job.id)}
              className={`whitespace-nowrap border-l-2 px-4 py-3 text-left font-mono text-sm transition-colors md:w-[180px] md:px-5 md:py-3 ${
                activeTab === job.id
                  ? "border-green bg-green-tint text-green"
                  : "border-navy-lighter text-slate hover:bg-green-tint hover:text-green"
              }`}
            >
              {job.company}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="flex-1 py-1"
        >
          <h3 className="text-xl font-medium text-slate-lightest">
            {active.title}{" "}
            <span className="text-green">
              @{" "}
              {active.companyUrl ? (
                <a
                  href={active.companyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {active.company}
                </a>
              ) : (
                active.company
              )}
            </span>
          </h3>
          <p className="mt-1 font-mono text-sm text-slate">{active.period}</p>
          <ul className="mt-4 space-y-2">
            {active.description.split(". ").filter(Boolean).map((point, index) => (
              <li
                key={index}
                className="relative pl-5 text-sm leading-relaxed text-slate"
              >
                <span className="absolute left-0 text-green" aria-hidden="true">
                  ▹
                </span>
                {point.endsWith(".") ? point : `${point}.`}
              </li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {active.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-green-tint px-3 py-1 font-mono text-xs text-green"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
