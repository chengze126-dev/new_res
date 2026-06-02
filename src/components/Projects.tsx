import { projects, type Project } from "@/data/content";
import SectionHeading from "./SectionHeading";
import ProjectImage from "./ProjectImage";

function imgSrc(project: Project): string {
  if (project.screenshotUrl) return project.screenshotUrl;
  return `/api/og-image?url=${encodeURIComponent(project.url ?? "")}`;
}

function ExternalLinkIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4.5a.75.75 0 011.5 0v4.5A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
        clipRule="evenodd"
      />
      <path
        fillRule="evenodd"
        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="mb-16 scroll-mt-24 lg:mb-32">
      <SectionHeading number="03" title="Things I&apos;ve Built" />

      {/* Featured projects — screenshot on top, description below */}
      <ul className="mt-8 grid gap-8 sm:grid-cols-2">
        {featured.map((project) => (
          <li
            key={project.id}
            className="group flex flex-col overflow-hidden rounded-lg border border-navy-lighter bg-navy-light shadow-xl transition-all duration-300 hover:border-green/25 hover:shadow-green/5"
          >
            {/* Screenshot */}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-video overflow-hidden"
              tabIndex={-1}
              aria-hidden="true"
            >
              <ProjectImage
                src={imgSrc(project)}
                alt={`${project.title} screenshot`}
                title={project.title}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green/15 transition-colors duration-300 group-hover:bg-transparent" />
            </a>

            {/* Content */}
            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-xs text-green">Featured Project</p>
              <h3 className="mt-2 text-lg font-bold text-slate-lightest">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-green"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs text-slate-light">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.url && (
                <div className="mt-4 flex gap-3 text-slate-light">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} live site`}
                    className="transition-colors hover:text-green"
                  >
                    <ExternalLinkIcon />
                  </a>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Other projects — compact grid */}
      <div className="mt-20">
        <h3 className="mb-6 font-mono text-sm font-semibold uppercase tracking-widest text-slate-light">
          Other Noteworthy Projects
        </h3>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <li key={project.id} className="group">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col overflow-hidden rounded border border-slate/10 bg-navy-light transition-all duration-300 hover:-translate-y-1 hover:border-green/30 hover:shadow-lg hover:shadow-green/5"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <ProjectImage
                    src={imgSrc(project)}
                    alt={`${project.title} screenshot`}
                    title={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy/40 transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Card body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-semibold text-slate-lightest transition-colors group-hover:text-green">
                      {project.title}
                    </h4>
                    <ExternalLinkIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate transition-colors group-hover:text-green" />
                  </div>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-slate line-clamp-3">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-green/10 px-2 py-0.5 font-mono text-[10px] text-green"
                      >
                        {tech}
                      </li>
                    ))}
                    {project.technologies.length > 4 && (
                      <li className="rounded-full bg-slate/10 px-2 py-0.5 font-mono text-[10px] text-slate">
                        +{project.technologies.length - 4}
                      </li>
                    )}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
