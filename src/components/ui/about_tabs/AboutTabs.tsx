/**
 * Shadcn Components
 */
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/shadcn/tabs";

/**
 * Components
 */
import TabsContentAboutMe from "./TabsContentAboutMe";
import TabsContentTechs from "./TabsContentTechs";

/**
 * Fonts
 */
import { Dancing_Script } from "next/font/google";

/**
 * Fonts configuration constants
 */
const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export default function AboutTabs() {
  return (
    <div className={`flex w-full max-w-sm flex-col gap-6`}>
      <Tabs defaultValue="me">
        <TabsList>
          <TabsTrigger value="me">Me</TabsTrigger>
          <TabsTrigger value="techs">Techs</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* me */}
        <TabsContentAboutMe fontStyle={dancingScript.className} />

        {/* Techs */}
        <TabsContentTechs />
      </Tabs>
    </div>
  );
}
