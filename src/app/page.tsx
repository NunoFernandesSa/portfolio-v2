import NavBar from "@/components/ui/navbar/NavBar";
import Section from "@/components/Section";
import AboutTabs from "@/components/ui/about_tabs/AboutTabs";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between border-b-2">
        <NavBar />
      </header>
      <main>
        <Section>
          <AboutTabs />
        </Section>
      </main>
      <footer></footer>
    </>
  );
}
