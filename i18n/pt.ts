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
    subtitle: "desenvolvedor backend | engenheiro de dados",
    summary: "Atualmente atuo como desenvolvedor backend e crawler, com experiência forte em engenharia de dados e automação. Trabalho com crawlers de alta performance, engenharia reversa, integrações e pipelines escaláveis, sempre com foco em performance, confiabilidade e arquitetura limpa.",
  },
  skills: { title: "Skills", subtitle: "" },
  education: {
    title: "Educação",
    items: [
      {
        title: "Instituto Federal de Goiás",
        place: "Bacharelado em Sistemas de Informação",
        period: "2024 – 2027",
         bullets: ["Ênfase em algoritmos, estruturas de dados, POO, redes e Java.", "Participação ativa em hackathons, eventos e palestras.", "Participação em projeto de pesquisa de inteligência artificial para indústria pecuarista com modelagem de dados."],
      },
    ],
  },
  experience: {
    title: "Experiência",
    items: [
      {
        title: "Desenvolvedor Backend / Crawler",
        company: "Data Lawyer",
        period: "mar/2026 – o momento",
        bullets: [
          "Atuação com desenvolvimento backend usando Python, Airflow, C#, AWS e Golang",
          "Construção e manutenção de crawlers de alta performance com foco em escala, estabilidade e confiabilidade",
          "Trabalho com engenharia reversa para extração e interpretação de dados em diferentes fontes",
          "Desenvolvimento de robôs de automação de alta performance para coleta e processamento de dados",
        ],
      },
      {
        title: "Atuação em Engenharia de Dados e Desenvolvimento Full Stack",
        company: "Pangeia 96",
        period: "jul/2025 – mar/2026",
        roles: [
          {
            title: "Engenheiro de Dados",
            period: "nov/2025 – mar/2026",
            bullets: [
              "Criação de pipelines de processamento e transformação com Databricks, PySpark e Python, estruturando dados em camadas (Bronze → Silver → Gold)",
              "Desenvolvimento de pipeline ETL completo para integrar a API da Nuvemshop ao Data Warehouse, otimizando estrutura analítica em PostgreSQL",
              "Estruturação da arquitetura de dados com PostgreSQL e pipelines de atualização via webhooks",
              "Automatização de processos operacionais com robôs de webscraping usando Python e Selenium",
              "Integração do ecossistema de dados conectando ERPs (Linx Millennium, Tiny, Olist), e-commerce (Nuvemshop) e APIs externas (Mercado Pago, Meta, RD Station)",
            ],
          },
          {
            title: "Desenvolvedor Full Stack",
            period: "jul/2025 – nov/2025",
            bullets: [
              "Evolução da plataforma de vendas (E-commerce) com Next.js, React e TypeScript, melhorando a performance do site em 300% (Google PageSpeed)",
              "Desenvolvimento de aplicativos nativos para e-commerce (Nuvemshop e Shopify) com JavaScript e React, gerando economia recorrente superior a R$ 2.000,00 mensais",
              "Criação do zero de uma plataforma de gestão de chamados com Python e Django, com arquitetura modular e clean code",
              "Desenvolvimento de dashboards centralizados com gestão de acessos para segurança de dados internos",
              "Gerenciamento de infraestrutura e deploys com Docker, Kubernetes, Render, Vercel e GitHub Actions (CI/CD)",
            ],
          },
        ],
      },
      {
        title: "Analista de Sistemas - Estágio",
        company: "Centi",
        period: "jan/2025 – jun/2025",
        bullets: [
          "Vivência técnica em aplicação web de grande porte (mais de 20.000 usuários ativos) em ambiente .NET Core",
          "Levantamento detalhado e análise de requisitos, atuando como ponte entre as necessidades do negócio e a equipe de desenvolvimento",
          "Suporte técnico aos usuários finais, investigando causa raiz de incidentes e resolução ágil de problemas",
          "Participação ativa nas cerimônias ágeis (Scrum) – dailies, planning e reviews",
          "Contribuição na documentação de funcionalidades e validação de entregas",
        ],
      },
    ],
  },
  projects: {
    title: "Projetos",
    subtitle: "Meus trabalhos recentes",
    items: [
      {
        title: "Deboxe (Pagina de Conversao)",
        desc: "Landing page de conversao da Deboxe X Citrine com foco em performance, experiencia e CTA.",
        github: "https://github.com/guilhermetborges/deboxe_LP",
        demo: "https://deboxe-citrine-lp.vercel.app",
        image: "/Captura de tela de 2026-04-11 19-28-30.png",
      },
      {
        title: "NewZone",
        desc: "website para imigracao em Django com Django templates , tailwindcss e postgreSQL",
        github: "https://github.com/guilhermetborges/newZone",
        demo: "",
        image: "/icons/canada.png",
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
        github: "https://github.com/Pangeia96/dashSocial",
        demo: "",
        image: "/icons/dashsocial.png",
      }
     
    ],
  },
  contact: { title: "Contato", subtitle: "Entre em contato comigo" },
};
