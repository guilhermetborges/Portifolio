"use client";

import { useLang } from "@/components/LangProvider";

export default function Hero(){
 const {t}=useLang();
 return(
 <section id="about" className="section py-16 text-center">
     <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-xl"></div>
          <img
            src="/icons/eu.png"
            alt="Guilherme Teodoro"
            className="relative rounded-full w-36 h-36 object-cover border-2 border-brand-primary/30"
          />
        </div>
     </div>
     <h1 className="text-5xl font-bold">
       {t.hero.title} 
       <span className="text-brand-primary text-glow"> Guilherme Teodoro</span>
     </h1>
   <h2 className="mt-4 text-xl text-gray-300 font-medium">{t.hero.subtitle}</h2>
     <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-relaxed">{t.hero.summary}</p>
 </section>);
}
