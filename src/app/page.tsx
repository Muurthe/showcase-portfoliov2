// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <main className="pt-20">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}

