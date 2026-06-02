export const siteConfig = {
  name: "Tim Demars",
  title: "Full Stack Developer",
  tagline:
    "I build accessible, performant web applications from database to UI.",
  email: "chengze.kindly.tech@gmail.com",
  social: {
    github: "https://github.com/timdemars",
    linkedin: "https://linkedin.com/in/timdemars",
    twitter: "https://twitter.com/timdemars",
  },
};

export const about = {
  paragraphs: [
    "I'm a full stack developer with 9 years of experience building products across the entire stack — from database design and API architecture to polished, responsive frontends. I care about clean code, thoughtful UX, and shipping software that holds up in production.",
    "Currently, I'm focused on building scalable web applications with modern JavaScript ecosystems. I enjoy working at the intersection of product and engineering, turning complex requirements into maintainable systems that users actually love.",
    "When I'm not coding, you'll find me exploring new tech, contributing to open source, or refining side projects that push my skills further.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
    "Docker",
    "AWS",
    "Python",
    "Flutter",
    "Kotlin",
    "C#",
    "React Native",
    "WordPress"
  ],
};

export type ExperienceItem = {
  id: string;
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "2022 — Present",
    title: "Senior Full Stack Developer",
    company: "Tech Company",
    companyUrl: "https://example.com",
    description:
      "Lead development of customer-facing web applications serving 500K+ users. Architect REST and GraphQL APIs, optimize database queries, and mentor junior developers. Reduced page load times by 40% through performance audits and caching strategies.",
    technologies: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: "exp-2",
    period: "2019 — 2022",
    title: "Full Stack Developer",
    company: "Startup Inc",
    companyUrl: "https://example.com",
    description:
      "Built and shipped core product features from MVP to Series A. Designed microservices architecture, implemented real-time features with WebSockets, and established CI/CD pipelines. Worked closely with design and product teams in an agile environment.",
    technologies: ["JavaScript", "React", "Express", "MongoDB", "Redis", "Docker"],
  },
  {
    id: "exp-3",
    period: "2017 — 2019",
    title: "Software Developer",
    company: "Digital Agency",
    companyUrl: "https://example.com",
    description:
      "Developed custom web applications and e-commerce solutions for diverse clients. Built reusable component libraries, integrated third-party APIs, and delivered projects on tight deadlines while maintaining high code quality.",
    technologies: ["JavaScript", "Vue.js", "PHP", "MySQL", "WordPress"],
  },
  {
    id: "exp-4",
    period: "2016 — 2017",
    title: "Junior Developer",
    company: "Software Studio",
    companyUrl: "https://example.com",
    description:
      "Started my career building internal tools and client websites. Learned fundamentals of software engineering, version control, and collaborative development in a team setting.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Git"],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  url?: string;
  github?: string;
  image: string;
  screenshotUrl?: string;
  technologies: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "proj-1",
    title: "Hotel Sant Francesc",
    description:
      "5-star boutique hotel experience for a historic Palma de Mallorca property. Crafted immersive storytelling layouts, multilingual support, and a reservation flow integrated with a third-party booking engine.",
    url: "https://hotelsantfrancesc.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fhotelsantfrancesc.com%2F?w=1200",
    technologies: ["WordPress", "PHP", "ACF", "jQuery", "GSAP"],
    featured: true,
  },
  {
    id: "proj-2",
    title: "Bebe",
    description:
      "High-traffic fashion e-commerce platform serving millions of shoppers. Rebuilt the storefront on a headless architecture for sub-second page loads, integrated GraphQL product APIs, and overhauled the checkout funnel to improve conversion.",
    url: "https://www.bebe.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.bebe.com%2F?w=1200",
    technologies: ["Shopify", "React", "GraphQL", "Node.js", "Algolia"],
    featured: true,
  },
  {
    id: "proj-3",
    title: "MyFitnessPal",
    description:
      "Contributed to the web platform of the world's leading nutrition and fitness tracker with 200M+ registered users. Focused on performance optimisation, A/B testing infrastructure, and food database search improvements.",
    url: "https://www.myfitnesspal.com",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.myfitnesspal.com%2F?w=1200",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    featured: true,
  },
  {
    id: "proj-4",
    title: "Mightily",
    description:
      "Award-winning agency site showcasing brand strategy and creative work. Engineered custom scroll-driven animations, a Craft CMS editorial workflow, and a WebGL-backed case study viewer.",
    url: "https://mightily.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmightily.com%2F?w=1200",
    technologies: ["Craft CMS", "Vue.js", "GSAP", "WebGL", "Webpack"],
    featured: true,
  },
  {
    id: "proj-5",
    title: "Dealerware",
    description:
      "Fleet management SaaS platform for automotive dealerships. Rebuilt the core vehicle check-in/out flow as a React SPA, integrated real-time GPS tracking APIs, and implemented Stripe billing with tiered subscription management.",
    url: "https://www.dealerware.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.dealerware.com%2F?w=1200",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    featured: false,
  },
  {
    id: "proj-6",
    title: "Philippa James Photography",
    description:
      "Fine-art portrait photography portfolio with full-bleed gallery layouts and client proof galleries. Built on Next.js with Sanity CMS so the photographer can self-manage shoots and collections.",
    url: "https://philippajamesphotography.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fphilippajamesphotography.com%2F?w=1200",
    technologies: ["Next.js", "Sanity CMS", "Vercel", "Framer Motion"],
    featured: false,
  },
  {
    id: "proj-7",
    title: "Burny Wilds",
    description:
      "Interactive digital art experience for a creative collective. Features WebGL particle systems, generative canvas animations, and a custom-built CMS for rotating exhibition content.",
    url: "https://burnywilds.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fburnywilds.com%2F?w=1200",
    technologies: ["Vue.js", "Three.js", "GSAP", "Netlify"],
    featured: false,
  },
  {
    id: "proj-8",
    title: "Greenhouse",
    description:
      "Full-service creative agency marketing site with rich editorial content and animated case studies. Headless CMS-driven so the team can publish independently with no engineering involvement.",
    url: "https://www.wearegreenhouse.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.wearegreenhouse.com%2F?w=1200",
    technologies: ["Next.js", "Contentful", "Tailwind CSS", "TypeScript"],
    featured: false,
  },
  {
    id: "proj-9",
    title: "Tio Luchin",
    description:
      "Vibrant restaurant website featuring a custom menu builder, online reservation system, and event calendar. Localised in English and Spanish with a mobile-first responsive design.",
    url: "http://tioluchin.com/",
    image: "https://s.wordpress.com/mshots/v1/http%3A%2F%2Ftioluchin.com%2F?w=1200",
    technologies: ["WordPress", "PHP", "WooCommerce", "jQuery"],
    featured: false,
  },
  {
    id: "proj-10",
    title: "Sailme",
    description:
      "SaaS team communication and project management platform. Architected real-time collaboration features with WebSockets, built the Stripe subscription billing system, and designed the onboarding funnel.",
    url: "https://sailme.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fsailme.com%2F?w=1200",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Stripe"],
    featured: false,
  },
  {
    id: "proj-11",
    title: "Bricks App",
    description:
      "Visual website builder with an AI-assisted layout engine. Built the drag-and-drop canvas renderer, custom component library, and the live-preview iframe bridge between the builder and output.",
    url: "https://www.bricksapp.io/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.bricksapp.io%2F?w=1200",
    technologies: ["React", "TypeScript", "Electron", "Node.js"],
    featured: false,
  },
  {
    id: "proj-12",
    title: "Magische Spiegelungen",
    description:
      "Digital exhibition site for a German fine-art photographer. Custom gallery engine with lazy-loading lightboxes, multilingual DE/EN content, and a print-shop integration for artwork sales.",
    url: "https://www.magische-spiegelungen.de/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.magische-spiegelungen.de%2F?w=1200",
    technologies: ["WordPress", "PHP", "GSAP", "WooCommerce"],
    featured: false,
  },
  {
    id: "proj-13",
    title: "Wells & Associates",
    description:
      "Corporate website for a structural engineering consultancy. Designed a service-area filtering system, project portfolio CMS, and a secure client document portal with role-based access.",
    url: "https://www.wellsandassociates.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.wellsandassociates.com%2F?w=1200",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful"],
    featured: false,
  },
  {
    id: "proj-14",
    title: "Holocene",
    description:
      "European sustainable lifestyle brand with a curated Shopify storefront. Implemented custom collection filtering, subscription product flows, and a carbon-offset badge integration.",
    url: "https://www.holocene.eu/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fwww.holocene.eu%2F?w=1200",
    technologies: ["Shopify", "Liquid", "Alpine.js", "Tailwind CSS"],
    featured: false,
  },
  {
    id: "proj-16",
    title: "Shajgoj Shop",
    description:
      "Leading beauty and skincare e-commerce platform in Bangladesh. Engineered product filtering, a custom review system, and a streamlined checkout flow with local payment gateway integrations.",
    url: "https://shop.shajgoj.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fshop.shajgoj.com%2F?w=1200",
    technologies: ["WooCommerce", "PHP", "React", "MySQL"],
    featured: false,
  },
  {
    id: "proj-15",
    title: "Vaha",
    description:
      "Smart fitness mirror platform delivering live and on-demand classes. Built the e-commerce storefront, a class scheduling system, and a React Native companion app synced to the device via BLE.",
    url: "https://uk.vaha.com/",
    image: "https://s.wordpress.com/mshots/v1/https%3A%2F%2Fuk.vaha.com%2F?w=1200",
    screenshotUrl: "https://image.thum.io/get/width/1200/https://uk.vaha.com/",
    technologies: ["Next.js", "React", "TypeScript", "Shopify", "React Native"],
    featured: false,
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];
