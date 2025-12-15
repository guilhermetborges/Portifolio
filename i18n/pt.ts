import { title } from "process";

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
    subtitle: "Software Engineer | Data Engineer",
    summary: "desenvolvedor backend/Engenheiro de dados e graduando em sistemas de informação",
  },
  skills: { title: "skills", subtitle: "" },
  education: {
    title: "Educação",
    items: [
      {
        title: "Instituto Federal de Goiás",
        place: "Bacharelado em Sistemas de Informação",
        period: "2024 – 2028",
         bullets: ["Ênfase em algoritmos, estruturas de dados, POO, redes e Java.", "Participação ativa em hackathons, eventos e palestras.",],
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
        title: "Analista de Sistemas - Estagio",
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
        desc: "Plataforma interna com Python/Django e PostgreSQL/Supabase ",
        github: "",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:7378435890475409409/",
        image: "/icons/pangeia.png",
      },
      {
        title:"Monitoramento de desempenho de marca",
        desc: "Projeto com foco em monitorar desempenho de influencers e visibilidade da marca nas redes sociais, fiz desde a parte de engenharia de dados criação e automação de ETL via databricks e analise de sentimentos e criação do dashboard via streamlit com Python e pandas.",
        github: "",
        demo: "https://pangeia96.streamlit.app/",
        image: "/icons/dashsocial.png",
      }
     
    ],
  },
  contact: { title: "Contato", subtitle: "Entre em contato comigo" },
};
