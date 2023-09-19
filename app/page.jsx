// || x.x ||
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowWork from "@/components/HowWork";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
// || x.x ||
export default function page() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <HowWork />
        <Experience />
        <Contact></Contact>
      </main>
    </>
  );
}
