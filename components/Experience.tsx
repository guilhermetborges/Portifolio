"use client";
import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="py-10">
      <SectionTitle title={t.experience.title} />
      <div className="section mt-10 space-y-8">
        {t.experience.items.map((exp: any, idx: number) => (
          <div key={idx} className="relative pl-6 border-l border-brand-primary/40">
            <span className="absolute left-[-6px] top-2 w-3 h-3 bg-brand-primary rounded-full" />
            <h4 className="text-lg font-semibold">
              {exp.title} - <span className="text-brand-primary">{exp.company}</span>
            </h4>
            <p className="text-sm text-gray-400">{exp.period}</p>
            {exp.bullets && (
              <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                {exp.bullets.map((b: string, i: number) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
