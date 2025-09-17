// ----- Node Modules / Next -----
import React from "react";

// ----- Shadcn components -----
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/shadcn/tooltip";

// ----- React Icons -----
import { RiHome2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { PiBriefcase } from "react-icons/pi";
import { LuMessageSquareCode } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";

// ----- next-intl -----
import { useTranslations } from "next-intl";

export default function NavBar({ className }: { className?: string }) {
  const t = useTranslations("HomePage");

  return (
    <>
      {/* ----- navbar links ----- */}
      <NavigationMenu
        className={`flex h-full border px-3 mt-6 rounded-xl bg-black ${className} z-10`}
      >
        <NavigationMenuList className="flex gap-2 p-3">
          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink className="cursor-pointer" href="/">
                  <RiHome2Line />
                </NavigationMenuLink>
              </TooltipTrigger>
              <TooltipContent>
                <span>{t("navbarHome")}</span>
              </TooltipContent>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink className="cursor-pointer" href="#services">
                  <MdOutlineDesignServices />
                </NavigationMenuLink>
              </TooltipTrigger>
              <TooltipContent>
                <span>{t("navbarServices")}</span>
              </TooltipContent>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink
                  className="cursor-pointer"
                  href="#technologies"
                >
                  <FaCode />
                </NavigationMenuLink>
              </TooltipTrigger>
              <TooltipContent>
                <span>{t("navbarTechnologies")}</span>
              </TooltipContent>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink
                  className="cursor-pointer"
                  href="#portfolio"
                >
                  <PiBriefcase />
                </NavigationMenuLink>
              </TooltipTrigger>
              <TooltipContent>
                <span>{t("navbarPortfolio")}</span>
              </TooltipContent>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink className="cursor-pointer" href="#contact">
                  <LuMessageSquareCode />
                </NavigationMenuLink>
              </TooltipTrigger>
              <TooltipContent>
                <span>{t("navbarContact")}</span>
              </TooltipContent>
            </Tooltip>
          </NavigationMenuItem>

          {/* ---- toggle ligth/dark mode ---- */}
          {/* <ModeToggle /> */}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
