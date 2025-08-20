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
    subtitle: "Software developer",
    summary: "Full Stack developer and graduating in system information",
  },
  skills: { title: "Skills", subtitle: "Technologies I use" },
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
        company: "Company Y",
        period: "2023 – 2024",
        bullets: [
          "Developed REST APIs in Node.js",
          "Integrated microservices with Docker",
        ],
      },
      {
        title: "Intern",
        company: "Company Z",
        period: "2022 – 2023",
        bullets: [
          "Assisted in migration from legacy systems",
          "Implemented automated tests with Jest",
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
        desc: "website for imigration in Django with Django templates and tailwindcss and postgreSQL",
        github: "https://github.com/guilhermetborges/newZone",
        demo: "#",
      },
      {
        title: "from-tiktok ",
        desc: "web App for ecommerce in next.js with react and supabase",
        github: "#",
        demo: "https://from-tiktok.pangeia96.com.br/",
      },
    ],
  },
  contact: { title: "Contact", subtitle: "Get in touch with me" },
};
