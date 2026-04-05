"use client";
import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";
import Image from "next/image";


export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-10 bg-neutral-900/30">

      <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="section mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {t.projects.items.map((p: any, idx: number) => (
          <div
            key={idx}
            className="rounded-xl bg-neutral-900/50 border border-white/5 p-3 hover:shadow-glow hover:border-brand-primary/30 transition-all duration-300 group"
          >
            {p.image && (
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

             <h4 className="text-lg font-semibold text-white">{p.title}</h4>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">{p.desc}</p>

            <div className="mt-4 flex gap-3">
              {p.github && (
                <a
                  className="px-4 py-2 text-sm rounded-lg border border-white/10 text-gray-300 hover:border-brand-primary/50 hover:text-brand-primary transition-all duration-200"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {p.demo && (
                <a
                  className="px-4 py-2 text-sm rounded-lg bg-brand-primary text-black font-medium hover:bg-green-400 transition-colors duration-200"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
