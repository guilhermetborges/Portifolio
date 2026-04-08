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
    subtitle: "software engineer | data engineer",
    summary: "I currently work as a backend developer and crawler engineer, with a strong background in data engineering and automation. I build high-performance crawlers, reverse engineering solutions, integrations, and scalable pipelines focused on performance, reliability, and clean architecture.",
  },
  skills: { title: "Skills", subtitle: "" },
  education: {
    title: "Education",
    items: [
      {
        title: "Federal Institute of Goias",
        place: "Bachelor in Information Systems",
        period: "2024 – 2027",
        bullets: ["Focus on algorithms, data structures, OOP, networking, and Java.", "Active participation in hackathons, events, and lectures.", "Participation in an AI research project for the cattle industry with data modeling."],
      },
    ],
  },
  experience: {
    title: "Experience",
    items: [
      {
        title: "Backend Developer / Crawler Engineer",
        company: "Data Lawyer",
        period: "March 2026 - Present",
        bullets: [
          "Backend development using Python, Airflow, C#, AWS, and Golang",
          "Built and maintained high-performance crawlers focused on scale, stability, and reliability",
          "Worked with reverse engineering to extract and interpret data from different sources",
          "Developed high-performance automation robots for data collection and processing",
        ],
      },
      {
        title: "Data Engineering and Full Stack Development",
        company: "Pangeia 96",
        period: "July 2025 - March 2026",
        roles: [
          {
            title: "Data Engineer",
            period: "November 2025 - March 2026",
            bullets: [
              "Built data processing and transformation pipelines with Databricks, PySpark, and Python, structuring data in layers (Bronze → Silver → Gold)",
              "Developed a complete ETL pipeline to integrate Nuvemshop API into the Data Warehouse, optimizing analytical structure in PostgreSQL",
              "Structured the company's data architecture with PostgreSQL and webhook-based update pipelines",
              "Automated operational processes with web scraping bots using Python and Selenium",
              "Integrated the data ecosystem connecting ERPs (Linx Millennium, Tiny, Olist), e-commerce (Nuvemshop), and external APIs (Mercado Pago, Meta, RD Station)",
            ],
          },
          {
            title: "Full Stack Developer",
            period: "July 2025 - November 2025",
            bullets: [
              "Evolved the e-commerce sales platform with Next.js, React, and TypeScript, improving site performance by 300% (Google PageSpeed)",
              "Developed native e-commerce apps for Nuvemshop and Shopify with JavaScript and React, generating recurring savings of over R$ 2,000.00 monthly",
              "Built from scratch a ticket management platform with Python and Django, using modular architecture and clean code",
              "Developed centralized dashboards with access management for internal data security",
              "Managed infrastructure and deployments with Docker, Kubernetes, Render, Vercel, and GitHub Actions (CI/CD)",
            ],
          },
        ],
      },
      {
        title: "Intern in Systems Analysis",
        company: "Centi",
        period: "January 2025 - June 2025",
        bullets: [
          "Technical experience in a large-scale web application (over 20,000 active users) in a .NET Core environment",
          "Detailed requirements gathering and analysis, acting as a bridge between business needs and the development team",
          "Technical support for end users, investigating root causes of incidents and agile problem resolution",
          "Active participation in agile ceremonies (Scrum) – dailies, planning, and reviews",
          "Contribution to feature documentation and delivery validation",
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
        desc: "Immigration website built with Django, Django templates, TailwindCSS, and PostgreSQL",
        github: "https://github.com/guilhermetborges/newZone",
        demo: "",
        image: "/icons/canada.png",
      },
      {
        title: "PNG Order Tracking",
        desc: "Order delivery tracking system with API integration for status consultation and delivery tracking",
        github: "",
        demo: "https://rastreio.pangeia96.com.br/",
        image: "/icons/rastreamento.png",
      },
      {
        title: "Pangeia 96 System",
        desc: "Internal platform built with Python/Django and PostgreSQL/Supabase for ticket management and centralized dashboards",
        github: "",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7378435890475409409/",
        image: "/icons/pangeia.png",
      },
      {
        title: "Brand Performance Monitoring",
        desc: "Project focused on monitoring influencer performance and brand visibility on social media. Built the entire data engineering pipeline with ETL automation via Databricks, sentiment analysis, and a Streamlit dashboard with Python and Pandas.",
        github: "https://github.com/Pangeia96/dashSocial",
        demo: "",
        image: "/icons/dashsocial.png",
      }
    ],
  },
  contact: { title: "Contact", subtitle: "Get in touch with me" },
};
