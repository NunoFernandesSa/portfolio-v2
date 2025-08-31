/**
 * UI components
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
      <header className="container mx-auto flex items-center justify-center">
        <NavBar />
      </header>
      <main className="container mx-auto px-4 sm:px-8">
        <Hero />
        <Technologies />
        <Projects />
        <Services />
        <Contact />
      </main>
      <footer className="container mx-auto px-4 sm:px-8">
        <Footer />
      </footer>
    </>
  );
}
