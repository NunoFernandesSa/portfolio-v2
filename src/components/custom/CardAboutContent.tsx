import React from "react";

/**
 * Shadcn components
 */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { Button } from "@/components/ui/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/shadcn/avatar";
import { TabsContent } from "@/components/ui/shadcn/tabs";

export default function TabsContentAboutMe({
  fontStyle,
  value,
  className,
}: {
  fontStyle?: string;
  value: string;
  className?: string;
}) {
  return (
    <TabsContent value={value} className={className}>
      <Card>
        <CardHeader>
          <Avatar className="h-36 w-36 border">
            <AvatarImage
              src="/images/profile_picture/profile_photo.png"
              alt="Profile picture"
            />
            <AvatarFallback>Profile picture</AvatarFallback>
          </Avatar>
          <CardTitle className={`${fontStyle} text-lg`}>
            Nuno Fernandes
          </CardTitle>
          <CardDescription>Full Stack Developer</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          As a freelance developer, I design and build tailored web and mobile
          applications. Whether working directly with clients or collaborating
          with tech and design professionals, I deliver high-quality, customized
          solutions to meet your needs.
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
  );
}
