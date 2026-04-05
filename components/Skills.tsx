"use client";

import { useLang } from "@/components/LangProvider";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

type Skill = {
  name: string;
  icon: string;
  category:
    | "Backend"
    | "Data Engineering"
    | "Frontend"
    | "DevOps & Software"
    | "Database"
    | "AI & Performance"
    | "Others";
};

const SKILLS: Skill[] = [
  { name: "Python", icon: "/icons/python.svg", category: "Backend" },
  { name: "Django", icon: "/icons/django.svg", category: "Backend" },
  { name: "DRF", icon: "/icons/DRF.svg", category: "Backend" },
  { name: "FastAPI", icon: "/icons/fastapi.svg", category: "Backend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "Backend" },
  { name: "Next.js", icon: "/icons/next.png", category: "Backend" },
  { name: "JavaScript", icon: "https://img.icons8.com/?size=48&id=108784&format=png", category: "Backend" },
  { name: "C#", icon: "/icons/cs.svg", category: "Backend" },
  { name: ".NET", icon: "/icons/NET.png", category: "Backend" },
  { name: "Golang", icon: "https://cdn.simpleicons.org/go/00ADD8", category: "Backend" },
  { name: "REST APIs", icon: "https://img.icons8.com/color/48/api-settings.png", category: "Backend" },

  { name: "Python", icon: "/icons/python.svg", category: "Data Engineering" },
  { name: "Databricks", icon: "/icons/databricks.svg", category: "Data Engineering" },
  { name: "PySpark", icon: "/icons/spark.svg", category: "Data Engineering" },
  { name: "Apache Spark", icon: "/icons/spark.svg", category: "Data Engineering" },
  { name: "Pandas", icon: "/icons/pandas.svg", category: "Data Engineering" },
  { name: "NumPy", icon: "https://cdn.simpleicons.org/numpy/013243", category: "Data Engineering" },
  { name: "ETL Pipelines", icon: "/icons/etl.png", category: "Data Engineering" },
  { name: "Airflow", icon: "https://cdn.simpleicons.org/apacheairflow/017CEE", category: "Data Engineering" },
  { name: "SQL", icon: "/icons/sql.svg", category: "Data Engineering" },
  { name: "Golang", icon: "https://cdn.simpleicons.org/go/00ADD8", category: "Data Engineering" },
  { name: "OpenAI API", icon: "https://img.icons8.com/color/48/chatgpt.png", category: "Data Engineering" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg", category: "Data Engineering" },
  { name: "Streamlit", icon: "/icons/steamlit.png", category: "Data Engineering" },
  { name: "Selenium", icon: "/icons/selenium.svg", category: "Data Engineering" },
  { name: "Webhooks", icon: "https://img.icons8.com/color/48/webhook.png", category: "Data Engineering" },

  { name: "React", icon: "/icons/react.svg", category: "Frontend" },
  { name: "Next.js", icon: "/icons/next.png", category: "Frontend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "Frontend" },
  { name: "HTML", icon: "/icons/html.svg", category: "Frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "Frontend" },

  { name: "Docker", icon: "/icons/docker.svg", category: "DevOps & Software" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg", category: "DevOps & Software" },
  { name: "GitHub Actions", icon: "/icons/githubact.png", category: "DevOps & Software" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "DevOps & Software" },
  { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7", category: "DevOps & Software" },
  { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png", category: "DevOps & Software" },
  { name: "Git", icon: "/icons/git.svg", category: "DevOps & Software" },
  { name: "GitHub", icon: "/icons/github.svg", category: "DevOps & Software" },
  { name: "Linux", icon: "/icons/linux.svg", category: "DevOps & Software" },

  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "Database" },
  { name: "Supabase", icon: "/icons/supabase.svg", category: "Database" },
  { name: "Prisma", icon: "/icons/prisma.svg", category: "Database" },

  { name: "Claude Code", icon: "https://cdn.simpleicons.org/anthropic/D4A373", category: "AI & Performance" },
  { name: "Codex", icon: "https://img.icons8.com/color/48/chatgpt.png", category: "AI & Performance" },
  { name: "AI Agents", icon: "https://img.icons8.com/color/48/bot.png", category: "AI & Performance" },
  { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/FFFFFF", category: "AI & Performance" },

  { name: "Insomnia", icon: "/icons/insomnia.svg", category: "Others" },
  { name: "Postman", icon: "/icons/postman.svg", category: "Others" },
  { name: "Ngrok", icon: "/icons/ngrok.svg", category: "Others" },
];

const CATEGORIES: Skill["category"][] = [
  "Backend",
  "Data Engineering",
  "Frontend",
  "DevOps & Software",
  "Database",
  "AI & Performance",
  "Others",
];

export default function Skills() {
  const [tab, setTab] = useState<Skill["category"]>("Backend");
  const { t } = useLang();

  return (
    <section id="skills" className="py-20">
      <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />

      <div className="section mt-8 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-neutral-900 p-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              className={`px-4 py-2 text-sm rounded-full transition ${
                tab === c
                  ? "bg-brand-primary/20 text-brand-primary border border-brand-primary/30"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="section mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
        {SKILLS.filter((s) => s.category === tab).map((s, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="hex bg-neutral-900 border border-white/10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-md group-hover:shadow-glow group-hover:border-brand-primary/50 transition-all duration-300">
              <img src={s.icon} alt={s.name} className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
            </div>
            <span className="mt-3 text-xs sm:text-sm text-gray-300 group-hover:text-brand-primary transition-colors">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
