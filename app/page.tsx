
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionTransition from "@/components/SectionTransition";
import Experience from "@/components/Experience";
import About from "@/components/About";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />

      <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">
        <Hero />

        <Projects />

        <SectionTransition />

        <Experience />

        <About />
      </main>
    </>
  );
}
