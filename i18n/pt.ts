export default {
  navbar: {
    about: "Sobre",
    skills: "Habilidades",
    education: "Educação",
    experience: "Experiência",
    projects: "Projetos",
    contact: "Contato",
  },
  hero: {
    title: "Oi, eu sou",
    subtitle: "desenvolvedor de Software",
    summary: "desenvolvedor Full Stack e graduando em sistemas de informação",
  },
  skills: { title: "skills", subtitle: "Tecnologias que utilizo" },
  education: {
    title: "Educação",
    items: [
      {
        title: "Instituto Federal de Goiás",
        place: "Bacharelado em Sistemas de Informação",
        period: "2024 – 2028",
         //bullets: ["Ênfase em Inteligência Artificial", "Projeto final sobre NLP"],
      },
    ],
  },
  experience: {
    title: "Experiência",
    items: [
      {
        title: "Desenvolvedor Full Stack Junior",
        company: "Pangeia 96",
        period: "jun/2025 – o momento",
        bullets: [
          "Desenvolvimento de apps web e nativos e-commerce com next.js , react e typescript",
          "Desenvolvimento de plataforma de abertura de chamados interna com Python/Django e PostgreSQL",
          "desenvolvimento de robos de automação com Python e Selenium(webScraping)",
          "criação de banco de dados interno com PostgreSQL e integração com python",
          "experiencia com Apis REST e GraphQL (API da Meta, Facebook, Nuvemshop etc..), integracao com Supabase e PostgreSQL",
          "integração com ERPs (Linx Millenium e Tiny Olist)",
          "experiencia com Docker , Kubernetes e deploy com Vercel",
        ],
      },
      {
        title: "Estagio em analise de sistemas",
        company: "Centi",
        period: "jan/2025 – jun/2025",
        bullets: [
          "Levantamento e analise de requisitos",
          "Suporte tecnico para clientes",
        ],
      },
    ],
  },
  projects: {
    title: "Projetos",
    subtitle: "Meus trabalhos recentes",
    items: [
      {
        title: "NewZone",
        desc: "website para imigracao em Django com Django templates , tailwindcss e postgreSQL",
        github: "https://github.com/guilhermetborges/newZone",
        demo: "#",
      },
     
    ],
  },
  contact: { title: "Contato", subtitle: "Entre em contato comigo" },
};
