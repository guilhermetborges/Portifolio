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
 <header className="sticky top-0 bg-neutral-950/80 backdrop-blur-md border-b border-white/5 z-50">
  <div className="section flex justify-between items-center h-16">
   <span className="font-bold text-brand-primary text-lg">GT</span>
    <nav className="hidden md:flex gap-6">{items.map(it=>
        <a key={it.href} href={it.href} className="text-sm text-gray-300 hover:text-brand-primary transition-colors duration-200">{it.label}</a>)}
    </nav>
    <div className="flex items-center gap-1 bg-neutral-900 rounded-full p-1 border border-white/10">
      <button 
        onClick={() => setLang("pt")} 
        className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${lang === "pt" ? "bg-brand-primary text-black font-medium" : "text-gray-400 hover:text-white"}`}
    >
        PT
    </button>
    <button 
        onClick={() => setLang("en")} 
        className={`px-3 py-1 text-xs rounded-full transition-all duration-200 ${lang === "en" ? "bg-brand-primary text-black font-medium" : "text-gray-400 hover:text-white"}`}
    >
        EN
    </button>
    </div>
 
  </div>
 </header>);
}
