/**
 * Custom components
 */
import NavBar from "@/components/custom/NavBar";
import Hero from "@/components/custom/Hero";
import Technologies from "@/components/custom/Technologies";
import Projects from "@/components/custom/Projects";
import Services from "@/components/custom/Services";
import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
    <>
      <header className="container mx-auto flex items-center justify-center px-4 sm:px-8 md:px-16">
        <NavBar />
      </header>
      <main className="container mx-auto px-4 sm:px-8 md:px-16">
        <Hero />

        <div id="services"></div>
        <Services />

        <div id="technologies"></div>
        <Technologies />

        <div id="portfolio"></div>
        <Projects />

        <div id="contact"></div>
        <Contact />
      </main>
      <footer className="container mx-auto px-4 sm:px-8 md:px-16">
        <Footer />
      </footer>
    </>
  );
}
