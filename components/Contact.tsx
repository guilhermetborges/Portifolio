"use client";

import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";
export default function Contact(){
 const {lang,t}=useLang();
 return(
 <section id="contact" className="py-10">
     <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle}/>
     <div className="section mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <a
            href="mailto:01borgesguilherme@gmail.com"
            className="card-glass rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-glow transition-all duration-300 group"
        >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/15 text-lg font-semibold text-brand-primary">@</div>
            <span className="text-sm text-gray-300 text-center group-hover:text-brand-primary transition-colors">01borgesguilherme@gmail.com</span>
        </a>
        <a
            href="https://www.linkedin.com/in/guilherme-gtb"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-glow transition-all duration-300 group"
        >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm text-gray-300 group-hover:text-brand-primary transition-colors">LinkedIn</span>
        </a>
        <a
            href="https://github.com/guilhermetborges"
            target="_blank"
            rel="noopener noreferrer"
            className="card-glass rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-glow transition-all duration-300 group"
        >
            <img src="/icons/github.svg" alt="GitHub" className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm text-gray-300 group-hover:text-brand-primary transition-colors">GitHub</span>
        </a>
        <a
            href="/icons/Curriculo_Guilherme_Teodoro.pdf"
            download="Curriculo_Guilherme_Teodoro.pdf"
            className="card-glass rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-glow transition-all duration-300 group"
        >
            <img src="/icons/cv.png" alt="CV" className="w-10 h-10 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-sm text-gray-300 group-hover:text-brand-primary transition-colors">{lang === "pt" ? "Baixar CV" : "Download CV"}</span>
        </a>
     </div>
    </section>);
}
