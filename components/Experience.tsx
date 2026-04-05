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
          <div key={idx} className="relative pl-8 border-l-2 border-brand-primary/30 hover:border-brand-primary/60 transition-colors duration-300">
            <span className="absolute left-[-7px] top-2 w-3.5 h-3.5 bg-brand-primary rounded-full shadow-glow" />
            <h4 className="text-lg font-semibold text-white">{exp.company}</h4>
            <p className="text-brand-primary font-medium text-sm">{exp.title}</p>
            <p className="text-sm text-gray-500 mt-1">{exp.period}</p>

            {exp.roles && (
              <div className="mt-4 space-y-5">
                {exp.roles.map((role: any, roleIndex: number) => (
                  <div key={roleIndex} className="rounded-xl border border-white/8 bg-white/[0.02] p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-medium text-white">{role.title}</p>
                      <p className="text-xs text-gray-500">{role.period}</p>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {role.bullets.map((b: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-brand-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {exp.bullets && !exp.roles && (
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b: string, i: number) => (
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
