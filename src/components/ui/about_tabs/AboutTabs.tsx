import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/shadcn/tabs";

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

export default function TabsDemo() {
  return (
    <div className={`flex w-full max-w-sm flex-col gap-6`}>
      <Tabs defaultValue="me">
        <TabsList>
          <TabsTrigger value="me">Me</TabsTrigger>
          <TabsTrigger value="techs">Techs</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        {/* me */}
        <TabsContent value="me">
          <Card>
            <CardHeader>
              <CardTitle className={`${dancingScript.className} text-lg`}>
                Nuno Fernandes
              </CardTitle>
              <CardDescription>Full Stack Developer</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              As a freelance developer, I design and build tailored web and
              mobile applications. Whether working directly with clients or
              collaborating with tech and design professionals, I deliver
              high-quality, customized solutions to meet your needs.
            </CardContent>
            <CardContent className="grid">
              <span className="italic">Do you have an idea?</span>
              <span className="italic">I can turn it into a product.</span>
            </CardContent>
            <CardFooter>
              <Button className="cursor-pointer">Let's talk</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Techs */}
        <TabsContent value="techs">
          <Card>
            <CardHeader>
              <CardTitle>Techs</CardTitle>
              <CardDescription>
                Change your techs here. After saving, you&apos;ll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6"></CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Contact */}
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>
                Change your contact information here. After saving, you&apos;ll
                be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6"></CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
