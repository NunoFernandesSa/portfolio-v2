/**
 * UI components
 */
import NavBar from "@/components/custom/NavBar";
import Section from "@/components/custom/Section";
import BaseTabs from "@/components/custom/BaseTabs";
import SectionBox from "@/components/custom/SectionBox";
import TabsContentAbout from "@/components/custom/CardAboutContent";
import TabsContentTechs from "@/components/custom/TabsContentTechs";
import { TabsTrigger } from "@/components/ui/shadcn/tabs";
import { ModeToggle } from "@/components/custom/theme_toggle/ThemeToggle";
import TitleSection from "@/components/custom/TitleSection";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between border-b-2">
        <NavBar />
        <ModeToggle />
      </header>
      <main>
        <Section className="flex gap-4">
          <SectionBox>
            <TitleSection title="Projects" />
          </SectionBox>

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
