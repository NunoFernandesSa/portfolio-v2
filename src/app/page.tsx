/**
 * UI components
 */
import NavBar from "@/components/custom/NavBar";
import Section from "@/components/custom/Section";

import { TabsTrigger } from "@/components/ui/shadcn/tabs";
import { ModeToggle } from "@/components/custom/theme_toggle/ThemeToggle";

/**
 *
 */
import { portfolioItems } from "@/constants/portfolio";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center">
        <NavBar />
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}
