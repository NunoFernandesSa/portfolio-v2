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
import SmoothFollower from "@/components/custom/SmoothFollowerCursor";

export default function Home() {
  return (
    <>
      <SmoothFollower />
      <header className="fixed top-0 w-full flex items-center justify-center px-4 sm:px-8 md:px-16">
        <NavBar />
      </header>
      <span id="home"></span>
      <main className="container mx-auto px-4 sm:px-8 md:px-16">
        <Hero />

        <span id="services"></span>
        <Services />

        <span id="technologies"></span>
        <Technologies />

        <span id="portfolio"></span>
        <Projects />

        <span id="contact"></span>
        <Contact />
      </main>
      <footer className="container mx-auto px-4 sm:px-8 md:px-16">
        <Footer />
      </footer>
    </>
  );
}
