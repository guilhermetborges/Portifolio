export default {
  navbar: {
    about: "About",
    skills: "Skills",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    title: "Hi, I'm",
    subtitle: "Software Engineer | Data Engineer",
    summary: "Backend and Data engineer and graduating in system information",
  },
  skills: { title: "Skills", subtitle: "" },
  education: {
    title: "Education",
    items: [
      {
        title: "Federal Institute of Goias",
        place: "Bachelor in Information Systems",
        period: "2024 – 2028",
        bullets: ["", ""],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        title: "Software Engineer",
        company: "Pangeia(",
        period: "July 2025 - now",
        bullets: [          
          "Development of web and native e-commerce apps with Next.js, React, and TypeScript",
          "Development of an internal ticketing platform with Python/Django and PostgreSQL/Supabase",
          "Development of automation bots with Python and Selenium (web scraping)",
          "Creation of an internal database with automation via webhooks",
          "Experience with REST and GraphQL APIs",
          "Experience with external APIs (such as Mercado Pago, Mercado Libre, Meta, Facebook, Nuvemshop, RD Station, etc.)",
          "Integration with ERPs (Linx Millenium and Tiny Olist)",
          "Experience with Docker, Kubernetes, and deployment with Vercel",

        ],
      },
      {
        title: "Intern in Systems Analysis",
        company: "Centi",
        period: "january 2025 - June 2025",
        bullets: [
          "Requirements gathering and analysis",
          "Technical support",
          "Participation in agile routines",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    subtitle: "My recent work",
    items: [
      {
        title: "NewZone",
        desc: "website for imigration in Django with Django templates , tailwindcss and postgreSQL",
        github: "https://github.com/guilhermetborges/newZone",
        demo: "",
      },
      {
        title: "from-tiktok ",
        desc: "web App for ecommerce in next.js with react and supabase * Mobile first",
        github: "",
        demo: "https://from-tiktok.pangeia96.com.br/",
      },
    ],
  },
  contact: { title: "Contact", subtitle: "Get in touch with me" },
};
