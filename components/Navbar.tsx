"use client";

import { useLang } from "@/components/LangProvider";
export default function Navbar(){
 const {lang,setLang,t}=useLang();
 const items=[
  {href:"#about",label:t.navbar.about},
  {href:"#skills",label:t.navbar.skills},
  {href:"#education",label:t.navbar.education},
  {href:"#experience",label:t.navbar.experience},
  {href:"#projects",label:t.navbar.projects},
  {href:"#contact",label:t.navbar.contact}
 ];
 return(
 <header className="sticky top-0 bg-neutral-900/80 backdrop-blur border-b border-white/10">
  <div className="section flex justify-between items-center h-16">
   <span className="font-bold"></span>
    <nav className="hidden md:flex gap-6">{items.map(it=>
        <a key={it.href} href={it.href} className="hover:text-brand-primary">{it.label}</a>)}
    </nav>
      <button 
        onClick={() => setLang("pt")} 
        className={`px-2 py-1 ml-auto rounded   ${lang === "pt" ? "bg-blue-600 text-white" : "bg-white text-black"}`}
    >
        Português
    </button>
    <button 
        onClick={() => setLang("en")} 
        className={`px-2 py-1 mx-4 rounded  ${lang === "en" ? "bg-blue-600 text-white" : "bg-white text-black"}`}
    >
        English
    </button>
 
  </div>
 </header>);
}
