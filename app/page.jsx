import Hero from "../components/Hero";
import About from "../components/About";
import HowWork from "../components/HowWork";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { Metadata } from "next";


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
