"use client";
// ----- Node modules / Next.js -----
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

// ----- next-intl -----
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Projects() {
  const t = useTranslations("HomePage");
  const tp = useTranslations("Projects");
  const [openDrawerIndex, setOpenDrawerIndex] = useState<number | null>(null);

  return (
    <Section>
      <TitleSection title={t("projectsTitle")} />
      <SubtitleSection text={t("projectsSubtitle")} />

      <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-20">
        {PORTFOLIO_ITEMS.map((project, index) => (
          <div className="flex flex-col">
            <Drawer
              key={index}
              open={openDrawerIndex === index}
              onOpenChange={(open) => setOpenDrawerIndex(open ? index : null)}
            >
              <DrawerTrigger>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Image
                      src={project.image}
                      alt={tp(`${project.translationKey}.title`)}
                      width={500}
                      height={500}
                      className="rounded hover:scale-101 cursor-pointer border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300"
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <span>{tp(`${project.translationKey}.title`)}</span>
                  </TooltipContent>
                </Tooltip>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader className="mx-auto">
                  <DrawerTitle>
                    {tp(`${project.translationKey}.title`)}
                  </DrawerTitle>
                  <DrawerDescription className="max-w-2xl mx-auto">
                    {tp(`${project.translationKey}.desc`)}
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
                      {t("seeProjectBtn")} <FaRegEye />
                    </Link>
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline" className="w-38 cursor-pointer">
                      {t("closeBtn")} <VscClose />
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <span className="mt-3 font-bold">
              {tp(`${project.translationKey}.title`)}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
