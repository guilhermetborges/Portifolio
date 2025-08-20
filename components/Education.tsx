"use client";

import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";

export default function Education() {
  const { t } = useLang();

  return (
    <section id="education" className="py-15 bg-neutral-900/50">
      <SectionTitle title={t.education.title} />

      <div className="section mt-6 space-y-8">
        {t.education.items.map((edu: any, idx: number) => (
          <div key={idx} className="relative pl-6 border-l border-brand-primary/40">
            {/* bolinha da linha do tempo */}
            <span className="absolute left-[-7px] top-1 w-3 h-4 bg-brand-primary rounded-full" />

            {/* título e instituição */}
            <h4 className="text-lg font-semibold">
              {edu.title} - <span className="text-brand-primary">{edu.place}</span>
            </h4>

            {/* período */}
            <p className="text-sm text-white">{edu.period}</p>

            {/* bullets (se existirem) */}
            {edu.bullets && (
              <ul className="list-disc list-inside mt-6 text-white space-y-1">
                {edu.bullets.map((b: string, i: number) => (
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
