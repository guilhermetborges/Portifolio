"use client";

import { useLang } from "@/components/LangProvider";

export default function Hero(){
 const {t}=useLang();
 return(
 <section id="about" className="section py-20 text-center">
    <h1 className="text-4xl font-bold">{t.hero.title} 
        <span className="text-brand-primary"> Guilherme Teodoro</span>
    </h1>
  <h2 className="mt-2">{t.hero.subtitle}</h2>
    <p className="mt-4 text-gray-400">{t.hero.summary}</p>
 </section>);
}
