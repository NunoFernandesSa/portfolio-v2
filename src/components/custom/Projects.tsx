// ----- Node modules / Next.js -----
import React from "react";
import Link from "next/link";
import Image from "next/image";

// ----- Shadcn components -----
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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/shadcn/tooltip";
import { Button } from "../ui/shadcn/button";

// ----- Custom components -----
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

// ----- Constants -----
import { PORTFOLIO_ITEMS } from "@/constants/portfolio";

// ----- Icons -----
import { VscClose } from "react-icons/vsc";
import { FaRegEye } from "react-icons/fa";

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
                <div className="flex items-center justify-center gap-2">
                  {project.technos.map((item, index) => (
                    <span
                      key={index}
                      className="text-[10px]  bg-[#7420e8] px-2 py-[0.5px] rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </DrawerHeader>
              <DrawerFooter className="flex flex-row justify-center flex-wrap">
                <Button className="w-38 cursor-pointer" asChild>
                  <Link href={project.link} target="_blank">
                    Go to live
                    <FaRegEye />
                  </Link>
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-38 cursor-pointer">
                    Close <VscClose />
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
