import NavBar from "@/components/ui/navbar/NavBar";
import Section from "@/components/Section";
import AboutTabs from "@/components/ui/about_tabs/AboutTabs";
import SectionProjectsBox from "@/components/SectionProjectsBox";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between border-b-2">
        <NavBar />
      </header>
      <main>
        <Section className="flex gap-4">
          <AboutTabs />
          <SectionProjectsBox />
        </Section>
      </main>
      <footer></footer>
    </>
  );
}
