// ----- Node modules / Next.js -----
import React from "react";
import Link from "next/link";
import Image from "next/image";

// ----- Shadcn components -----
import { Badge } from "@/components/ui/shadcn/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/shadcn/drawer";

// ----- Custom components -----
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

// ----- Constants -----
import { PORTFOLIO_ITEMS } from "@/constants/portfolio";
import { Tooltip, TooltipContent } from "../ui/shadcn/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Card } from "../ui/shadcn/card";
import { Button } from "../ui/shadcn/button";

export default function Projects() {
  return (
    <Section>
      <TitleSection title="Projects" />
      <SubtitleSection text="Explore my recent work. Transforming ideas into powerful technical solutions." />

      <div className="flex flex-wrap justify-center gap-10">
        {PORTFOLIO_ITEMS.map((project, index) => (
          <Drawer key={index}>
            <DrawerTrigger>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={300}
                    className="rounded hover:scale-101 cursor-pointer border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <span>{project.title}</span>
                </TooltipContent>
              </Tooltip>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="mx-auto">
                <DrawerTitle>{project.title}</DrawerTitle>
                <DrawerDescription className="max-w-2xl mx-auto">
                  {project.description}
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                <Button className="w-38 mx-auto cursor-pointer" asChild>
                  <Link href={project.link} target="_blank">
                    Go to live
                  </Link>
                </Button>
                <DrawerClose asChild>
                  <Button
                    variant="outline"
                    className="w-38 mx-auto cursor-pointer"
                  >
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        ))}
      </div>
    </Section>
  );
}

{
  /* <div className="w-1/3 items-center justify-start bg-transparent p-3">
  <Link href={project.link} target="_blank">
    <Tooltip>
      <TooltipTrigger asChild>
        <Image
          src={project.image}
          alt={project.title}
          width={300}
          height={300}
          className="rounded hover:scale-95 transition-all duration-300"
        />
      </TooltipTrigger>
      <TooltipContent>
        <span>Go to {project.title}</span>
      </TooltipContent>
    </Tooltip>
  </Link>

  <h3 className="font-semibold text-sm sm:text-xl">{project.title}</h3>

  <p className=" text-stone-400 text-sm md:text-md">{project.description}</p>
</div>; */
}
