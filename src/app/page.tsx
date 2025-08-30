/**
 * UI components
 */
import NavBar from "@/components/custom/NavBar";
import Section from "@/components/custom/Section";
import BaseTabs from "@/components/custom/BaseTabs";
import TabsContentAbout from "@/components/custom/CardAboutContent";
import TabsContentTechs from "@/components/custom/TabsContentTechs";
import { TabsTrigger } from "@/components/ui/shadcn/tabs";
import { ModeToggle } from "@/components/custom/theme_toggle/ThemeToggle";
import TitleSection from "@/components/custom/TitleSection";
import PortfolioBox from "@/components/custom/PortfolioBox";
import PortfolioCard from "@/components/custom/PortfolioCard";

/**
 *
 */
import { portfolioItems } from "@/constants/portfolio";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between border-b-2">
        <NavBar />
        <ModeToggle />
      </header>
      <main>
        <Section className="flex gap-4">
          <PortfolioBox>
            <TitleSection title="Projects" />
            <p>
              Explore my recent work. Transforming ideas into powerful technical
              solutions.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {portfolioItems.map((item) => (
                <PortfolioCard
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              ))}
            </div>
          </PortfolioBox>

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
