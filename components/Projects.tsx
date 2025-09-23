"use client";
import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";
import Image from "next/image";


export default function Projects() {
  const { t } = useLang();

  return (
    <section id="projects" className="py-10 bg-neutral-900/50">

      <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="section mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-9">
        {t.projects.items.map((p: any, idx: number) => (
          <div
            key={idx}
            className="rounded-xl bg-neutral-900 border border-white/10 p-3 hover:shadow-glow transition"
          >
            {/* Imagem */}
            {p.image && (
              <div className="relative w-full h-72 mb-4">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}

             {/* Título e descrição */}
            <h4 className="text-lg font-semibold">{p.title}</h4>
            <p className="text-gray-400 text-sm mt-2">{p.desc}</p>

            {/* Botões condicionais */}
            <div className="mt-4 flex gap-3">
              {p.github && (
                <a
                  className="btn btn-outline"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
              {p.demo && (
                <a
                  className="btn btn-primary"
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