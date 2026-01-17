// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="pt-20">
      <section id="hero">
        <Hero />
      </section>
      <div className="h-5 bg-linear-to-b from-[rgb(var(--bg))] to-[rgb(var(--text))]"></div>
      <section id="about" className="bg-[rgb(var(--text))]">
        <About />
      </section>
      <div className="h-5 bg-linear-to-b from-[rgb(var(--text))] to-[rgb(var(--bg))]"></div>
      <section id="work" className="bg-[rgb(var(--bg))]">
        <Work />
      </section>
      <div className="h-5 bg-linear-to-b from-[rgb(var(--bg))] to-[rgb(var(--textdark))]"></div>
      <section id="contact" className="bg-[rgb(var(--textdark))]">
        <Contact />
      </section>
      <div className="h-5 bg-linear-to-b from-[rgb(var(--textdark))] to-[rgb(var(--surface))]"></div>
    </main>
  );
}

