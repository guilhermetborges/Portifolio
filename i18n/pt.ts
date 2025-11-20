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
  skills: { title: "skills", subtitle: "" },
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
        title: "Desenvolvedor Full Stack ",
        company: "Pangeia 96",
        period: "jun/2025 – o momento",
        bullets: [
          "Desenvolvimento de apps web e nativos e-commerce com next.js , react e typescript",
          "Desenvolvimento de plataforma de abertura de chamados interna com Python/Django e PostgreSQL/Supabase",
          "desenvolvimento de robos de automação com Python e Selenium(webScraping)",
          "criação de banco de dados interno com automação via webhooks",
          "experiencia com Apis REST e GraphQL ",
          "experiencia com uso de APIs externas (como Mercado Pago, Mercado Livre,  Meta, Facebook, Nuvemshop, RD Station etc..)",
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
          "Suporte tecnico",
          "participação em rotinas ageis",
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
        demo: "",
        image: "/icons/canada.png",
      },
      {
        title: "From-TikTok",
        desc: "web App para ecommerce com next.js , react e supabase, com foco em usabilidade e performance para o usuario Mobile First",
        github: "",
        demo: "https://from-tiktok.pangeia96.com.br/",
        image: "/icons/embaixadoras.png",
      },
        {
        title: "Rastreamento PNG",
        desc: "Rastreamento de pedidos de entrega com integração com APIs para consulta de status e rastreamento de entregas",
        github: "",
        demo: "https://rastreio.pangeia96.com.br/",
        image: "/icons/rastreamento.png",
      },
      {
        title: "Sistema Pangeia 96",
        desc: "Plataforma interna com Python/Django e PostgreSQL/Supabase \nPost linkedin",
        github: "",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7378435890475409409/",
        image: "/icons/pangeia.png",
      },
     
    ],
  },
  contact: { title: "Contato", subtitle: "Entre em contato comigo" },
};
