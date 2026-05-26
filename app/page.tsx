import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <ScrollReveal />
    </>
  );
}
