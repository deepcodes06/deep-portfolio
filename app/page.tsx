import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import SmoothScroll from "@/components/SmoothScroll";
import SectionTransition from "@/components/SectionTransition";

export default function Home() {
  return (
    <>
      <SmoothScroll />

      <main>
        <Hero />

        <SectionTransition />

        <Experience />

        <About />
      </main>
    </>
  );
}