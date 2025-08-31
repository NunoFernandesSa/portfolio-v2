/**
 * UI components
 */
import NavBar from "@/components/custom/NavBar";
import Hero from "@/components/custom/Hero";
import Technologies from "@/components/custom/Technologies";
import Projects from "@/components/custom/Projects";

export default function Home() {
  return (
    <>
      <header className="container mx-auto px-8 flex items-center justify-center">
        <NavBar />
      </header>
      <main className="container mx-auto px-8">
        <Hero />
        <Technologies />
        <Projects />
      </main>
      <footer></footer>
    </>
  );
}
