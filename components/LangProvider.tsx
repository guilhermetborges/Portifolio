"use client";

import { createContext,useContext,useState,ReactNode } from "react";
import pt from "@/i18n/pt";
import en from "@/i18n/en";
type Lang="pt"|"en";
const LangContext=createContext<any>(null);
export function LangProvider({children}:{children:ReactNode}){
 const [lang,setLang]=useState<Lang>("pt");
 const t=lang==="pt"?pt:en;
 return(<LangContext.Provider value={{lang,setLang,t}}>{children}</LangContext.Provider>);
}
export function useLang(){return useContext(LangContext);}
