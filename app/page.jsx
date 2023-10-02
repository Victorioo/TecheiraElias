import Hero from "@/components/Hero";
import About from "@/components/About";
import HowWork from "@/components/HowWork";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata = {
  title: "Elias Techeira",
  description: "Portfolio de Elias Techeira, Maestro mayor de obras, estudiante de arquitectura y modelador 3D",
};

export default function page() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Experience />
        <HowWork />
        <Contact></Contact>
      </main>
    </>
  );
}
