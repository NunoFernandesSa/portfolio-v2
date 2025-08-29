/**
 * Node modules / next
 */
import React from "react";
import Image from "next/image";

/**
 * Shadcn Components
 */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./shadcn/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";
import { TabsContent } from "./shadcn/tabs";

/**
 * Skills icons
 */
import { skills } from "@/lib/skills-list";

export default function TabsContentTechs({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <TabsContent value={value} className={className}>
      <Card>
        <CardHeader>
          <CardTitle>Technologies I Use</CardTitle>
          <CardDescription>
            I expertly wield cutting-edge technologies to build high-performance
            solutions across the full development lifecycle. By continuously
            adopting the latest industry innovations, I create scalable systems
            ready for future challenges.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-6">
          {skills.map((skill) => (
            <Tooltip key={skill.label}>
              <TooltipTrigger className="p-1 bg-white rounded-md shadow-md">
                <Image
                  src={skill.icon}
                  alt={skill.label}
                  width={36}
                  height={36}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{skill.label}</p>
                {/* <p>{skill.description}</p> */}
              </TooltipContent>
            </Tooltip>
          ))}
        </CardContent>
      </Card>
    </TabsContent>
  );
}
