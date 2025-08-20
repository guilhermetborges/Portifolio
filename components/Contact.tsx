"use client";

import { useLang } from "@/components/LangProvider";
import SectionTitle from "./SectionTitle";
export default function Contact(){
 const {t}=useLang();
 return(
 <section id="contact" className="py-10">
    <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle}/>
    <div className="section mt-6 text-center">
        <p>Email: 01borgesguilherme@gmail.com</p>
    </div>
    <div className="flex items-center justify-center mt-4">
        <img src={"/icons/linkedin.svg"} alt={""} className="w-10 h-10 mr-3" />
        <a text-center href="https://www.linkedin.com/in/guilherme-gtb" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#0A66C2] text-white font-semibold rounded-md hover:bg-[#004182]">LinkedIn</a>
    </div>
    <div className="flex items-center justify-center mt-4">
        <img src={"/icons/github.svg"} alt={""} className="w-10 h-10 mr-3" />
        <a text-center href="https://github.com/guilhermetborges" 
            target="_blank" rel="noopener noreferrer" 
              className="px-4 py-2 bg-[#333] text-white font-semibold rounded-md hover:bg-[#24292e]">
                GitHub
        </a>

    </div>
    <div className="flex items-center justify-center mt-4">
        <img src={"/icons/cv.png"} alt="Currículo" className="w-10 h-10 mr-3" />
        <a
            href="/curriculo.pdf"
            download="Curriculo_Guilherme_Teodoro.pdf"
            className="px-4 py-2 bg-[#0A66C2] text-white font-semibold rounded-md hover:bg-[#004182]"
        >
            Cv Download
        </a>
    </div>
    </section>);
}
