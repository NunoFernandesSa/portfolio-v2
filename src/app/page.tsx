/**
 * UI components
 */
import NavBar from "@/components/custom/NavBar";
import Hero from "@/components/custom/Hero";

export default function Home() {
  return (
    <>
      <header className="container mx-auto px-8 flex items-center justify-center">
        <NavBar />
      </header>
      <main className="container mx-auto px-8">
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}
