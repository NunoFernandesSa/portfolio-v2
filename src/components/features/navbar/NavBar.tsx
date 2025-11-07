// ----- Node Modules / Next -----
import React from "react";

// ----- Shadcn components -----
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/shadcn/tooltip";

// ----- React Icons -----
import { RiHome2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { PiBriefcase } from "react-icons/pi";
import { LuMessageSquareCode } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";

// ----- next-intl -----
import { useTranslations } from "next-intl";
import LocalSwitcher from "@/components/custom/LocalSwitcher";

export default function NavBar({ className }: { className?: string }) {
  const t = useTranslations("HomePage");

  return (
    <>
      {/* ----- navbar links ----- */}
      <NavigationMenu
        className={`flex h-full border px-3 mt-6 rounded-xl bg-black ${className} z-90`}
      >
        <NavigationMenuList className="flex gap-1 sm:gap-2 md:gap-6 px-1 py-3 sm:px-3">
          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink className="cursor-pointer" href="#home">
                  <RiHome2Line className="md:hidden flex" />
                  <span className="hidden md:flex">{t("navbarHome")}</span>
                </NavigationMenuLink>
              </TooltipTrigger>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink className="cursor-pointer" href="#services">
                  <MdOutlineDesignServices className="md:hidden flex" />{" "}
                  <span className="hidden md:flex">{t("navbarServices")}</span>
                </NavigationMenuLink>
              </TooltipTrigger>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink
                  className="cursor-pointer"
                  href="#technologies"
                >
                  <FaCode className="md:hidden flex" />
                  <span className="hidden md:flex">
                    {t("navbarTechnologies")}
                  </span>
                </NavigationMenuLink>
              </TooltipTrigger>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink
                  className="cursor-pointer"
                  href="#portfolio"
                >
                  <PiBriefcase className="md:hidden flex" />
                  <span className="hidden md:flex">{t("navbarPortfolio")}</span>
                </NavigationMenuLink>
              </TooltipTrigger>
            </Tooltip>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Tooltip>
              <TooltipTrigger asChild>
                <NavigationMenuLink className="cursor-pointer" href="#contact">
                  <LuMessageSquareCode className="md:hidden flex" />
                  <span className="hidden md:flex">{t("navbarContact")}</span>
                </NavigationMenuLink>
              </TooltipTrigger>
            </Tooltip>
          </NavigationMenuItem>

          <LocalSwitcher />

          {/* ---- toggle ligth/dark mode ---- */}
          {/* <ModeToggle /> */}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
