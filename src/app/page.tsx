import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="lg:flex lg:justify-between lg:gap-4 lg:px-12 lg:py-0 lg:min-h-screen lg:max-w-[1280px] lg:mx-auto">
      <Sidebar />
      <main className="flex flex-col justify-center px-6 py-24 lg:py-24 lg:max-w-[52rem] lg:min-h-screen">
        <About />
        <Experience />
        <Projects />
        <footer className="mt-16 text-center text-sm text-slate">
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="text-green hover:underline"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="text-green hover:underline"
            >
              Tailwind CSS
            </a>
            . Inspired by{" "}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noreferrer"
              className="text-green hover:underline"
            >
              Tim Demars
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
