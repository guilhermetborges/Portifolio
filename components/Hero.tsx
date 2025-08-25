"use client";

import { useLang } from "@/components/LangProvider";

export default function Hero(){
 const {t}=useLang();
 return(
 <section id="about" className="section py-1 text-center">
    <h1 className="text-4xl font-bold">{t.hero.title} 
        <span className="text-brand-primary"> Guilherme Teodoro</span>
    </h1>
  <h2 className="mt-2">{t.hero.subtitle}</h2>
    <p className="mt-4 text-gray-400">{t.hero.summary}</p>


    <div className="flex justify-center mt-6">
        <img
          src="/icons/eu.png"
          alt="Guilherme Teodoro"
          className="rounded-full w-32 h-32 object-cover"
        />
    </div>

 </section>);
}
