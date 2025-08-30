import NavBar from "@/components/ui/NavBar";
import Section from "@/components/Section";
import BaseTabs from "@/components/ui/BaseTabs";
import SectionBox from "@/components/SectionBox";
import { TabsTrigger } from "@/components/ui/shadcn/tabs";
import TabsContentAbout from "@/components/ui/CardAboutContent";
import TabsContentTechs from "@/components/ui/TabsContentTechs";

/**
 * Fonts
 */
import { Dancing_Script } from "next/font/google";
import Hero from "@/components/ui/Hero";
import { ModeToggle } from "@/components/ui/theme_toggle/ThemeToggle";

/**
 * Fonts configuration constants
 */
const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between border-b-2">
        <NavBar />
        <ModeToggle />
      </header>
      <main>
        {/* <Section className="bg-red-300">
          <Hero />
        </Section> */}
        <Section className="flex gap-4">
          <SectionBox></SectionBox>
          <BaseTabs
            tabsTrigger={[
              <TabsTrigger value="me" key="me">
                Me
              </TabsTrigger>,
              <TabsTrigger value="techs" key="techs">
                Techs
              </TabsTrigger>,
              <TabsTrigger value="contact" key="contact">
                Contact
              </TabsTrigger>,
            ]}
            tabsContent={[
              <TabsContentAbout value="me" key={"me"} />,
              <TabsContentTechs key={"techs"} value="techs" />,
            ]}
            value="me"
          />
        </Section>
      </main>
      <footer></footer>
    </>
  );
}
