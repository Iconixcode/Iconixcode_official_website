import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import Process from "@/components/sections/Process";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink text-white">
      <Header />

      <main>
        <Hero />
        <About />
        <Solutions />
        <Process />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}