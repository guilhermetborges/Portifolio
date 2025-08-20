"use client";
import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-10 bg-neutral-900/50">
      <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="section mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projects.items.map((p: any, idx: number) => (
          <div
            key={idx}
            className="rounded-xl bg-neutral-900 border border-white/10 p-6 hover:shadow-glow transition"
          >
            <h4 className="text-lg font-semibold">{p.title}</h4>
            <p className="text-gray-400 text-sm mt-2">{p.desc}</p>
            <div className="mt-4 flex gap-3">
              <a className="btn btn-outline" href={p.github} target="_blank">
                GitHub
              </a>
              <a className="btn btn-primary" href={p.demo} target="_blank">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
