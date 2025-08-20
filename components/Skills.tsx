"use client";

import { useLang } from "@/components/LangProvider";
import { useState } from "react";
import SectionTitle from "./SectionTitle";

type Skill = {
  name: string;
  icon: string; // caminho para ícone (coloque em /public/icons/)
  category: "Backend" | "Frontend" | "DevOps" | "Software" | "Database" | "Data Science" | "Others";
};

const SKILLS: Skill[] = [
  { name: "Python", icon: "/icons/python.svg", category: "Backend" },
  { name: "Django", icon: "/icons/django.svg", category: "Backend" },
  { name: "DRF", icon: "/icons/DRF.svg", category: "Backend" },
  { name: "FastAPI", icon: "/icons/fastapi.svg", category: "Backend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "Backend" },
  { name: "Next.js", icon: "/icons/next.svg", category: "Backend" },

  { name: "React", icon: "/icons/react.svg", category: "Frontend" },
  { name: "HTML", icon: "/icons/html.svg", category: "Frontend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "Frontend" },
  { name: "Tailwind", icon: "/icons/tailwind.svg", category: "Frontend" },
  { name: "Next.js", icon: "/icons/next.svg", category: "Frontend" },

  { name: "Docker", icon: "/icons/docker.svg", category: "DevOps" },
  { name: "Kubernetes", icon: "/icons/kubernetes.svg", category: "DevOps" },

  { name: "Git", icon: "/icons/git.svg", category: "Software" },
  { name: "GitHub", icon: "/icons/github.svg", category: "Software" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "Software" },

  { name: "MySQL", icon: "/icons/mysql.svg", category: "Database" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "Database" },

  { name: "Insomnia", icon: "/icons/insomnia.svg", category: "Others" },
  { name: "Selenium", icon: "/icons/selenium.svg", category: "Others" },
  { name: "Pandas", icon: "/icons/pandas.svg", category: "Others" },
  { name: "Matplotlib", icon: "/icons/matplotlib.svg", category: "Others" },
  { name: "Ngrok", icon: "/icons/ngrok.svg", category: "Others" },
];

const CATEGORIES: Skill["category"][] = [
  "Backend",
  "Frontend",
  "DevOps",
  "Software",
  "Database",
  "Others",
];

export default function Skills() {
  const [tab, setTab] = useState<Skill["category"]>("Backend");
  const { t } = useLang();

  return (
    <section id="skills" className="py-20">
      <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />

      {/* Botões de categoria */}
      <div className="section mt-8 flex justify-center">
        <div className="flex flex-wrap justify-center gap-2 rounded-full border border-white/10 bg-neutral-900 p-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setTab(c)}
              aria-label={`Selecionar categoria ${c}`}
              className={`px-4 py-2 text-sm rounded-full transition ${
                tab === c
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de skills em hexágonos */}
      <div className="section mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8">
        {SKILLS.filter((s) => s.category === tab).map((s, i) => (
          <div key={i} className="flex flex-col items-center group">
            <div className="hex bg-neutral-900 border border-white/10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-md group-hover:shadow-glow transition">
              <img src={s.icon} alt={s.name} className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="mt-3 text-xs sm:text-sm">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
