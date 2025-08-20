import { LangProvider } from "@/components/LangProvider";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </LangProvider>
  );
}
