"use client";

import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";

export default function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="py-10 bg-neutral-900/30">
      <SectionTitle title={t.education.title} />

      <div className="section mt-10 space-y-8">
        {t.education.items.map((edu: any, idx: number) => (
          <div key={idx} className="relative pl-8 border-l-2 border-brand-primary/30 hover:border-brand-primary/60 transition-colors duration-300">
            <span className="absolute left-[-7px] top-2 w-3.5 h-3.5 bg-brand-primary rounded-full shadow-glow" />

            <h4 className="text-lg font-semibold text-white">
              {edu.title}
            </h4>
            <p className="text-brand-primary font-medium text-sm">{edu.place}</p>
            <p className="text-sm text-gray-500 mt-1">{edu.period}</p>

            {edu.bullets && (
              <ul className="mt-3 space-y-2">
                {edu.bullets.map((b: string, i: number) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-brand-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
