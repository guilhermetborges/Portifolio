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
             href="https://wa.me/5564996474894"
             target="_blank"
             rel="noopener noreferrer"
             className="card-glass rounded-xl p-6 flex flex-col items-center gap-3 hover:shadow-glow transition-all duration-300 group"
         >
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/15 text-brand-primary">
                 <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-current">
                     <path d="M16 3.2c-7.07 0-12.8 5.73-12.8 12.8 0 2.5.72 4.9 2.08 6.96L3 29l6.23-2.24A12.77 12.77 0 0 0 16 28.8c7.07 0 12.8-5.73 12.8-12.8S23.07 3.2 16 3.2zm0 23.46c-2.1 0-4.16-.57-5.95-1.65l-.43-.26-3.7 1.33 1.35-3.61-.28-.46A10.55 10.55 0 0 1 5.4 16c0-5.85 4.76-10.6 10.6-10.6 2.84 0 5.5 1.1 7.5 3.1a10.5 10.5 0 0 1 3.1 7.5c0 5.84-4.76 10.6-10.6 10.6zm5.81-7.95c-.32-.16-1.9-.94-2.19-1.05-.29-.1-.5-.16-.7.16-.2.32-.8 1.05-.97 1.26-.18.22-.35.24-.67.08-.32-.16-1.34-.5-2.54-1.6-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.13-.64.14-.13.32-.35.48-.53.16-.19.22-.32.32-.53.11-.21.06-.4-.02-.56-.08-.16-.7-1.7-.96-2.34-.25-.6-.5-.52-.7-.53h-.6c-.21 0-.56.08-.86.4-.29.32-1.12 1.1-1.12 2.69 0 1.58 1.15 3.1 1.31 3.31.16.22 2.28 3.48 5.52 4.88.77.33 1.37.53 1.83.68.77.24 1.48.2 2.04.12.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.39.19-1.52-.08-.13-.3-.21-.62-.37z" />
                 </svg>
             </div>
             <span className="text-sm text-gray-300 group-hover:text-brand-primary transition-colors">WhatsApp</span>
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
