/**
 * Custom components
 */
import Hero from "@/components/features/hero/Hero";
import Technologies from "@/components/features/techs/Technologies";
import Projects from "@/components/features/projects/Projects";
import Services from "@/components/features/services/Services";
import Contact from "@/components/features/contact/Contact";
import Footer from "@/components/features/footer/Footer";
import SmoothFollower from "@/components/custom/SmoothFollowerCursor";
import NavBarComponent from "@/components/features/navbar/NavBar";

export default function Home() {
  return (
    <>
      <SmoothFollower />
      <header>
        <NavBarComponent />
      </header>
      <span id="home"></span>
      <main className="container mx-auto px-4 sm:px-8 md:px-16">
        <Hero />

        <span id="services"></span>
        {/* <Services /> */}

        <span id="technologies"></span>
        {/* <Technologies /> */}

        <span id="portfolio"></span>
        {/* <Projects /> */}

        <span id="contact"></span>
        {/* <Contact /> */}
      </main>
      <footer className="container mx-auto px-4 sm:px-8 md:px-16">
        <Footer />
      </footer>
    </>
  );
}
