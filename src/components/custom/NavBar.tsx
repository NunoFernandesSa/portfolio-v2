// ----- Node Modules / Next -----
import React from "react";

// ----- Shadcn components -----
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";

// ----- Custom components -----
import { ModeToggle } from "../custom/theme_toggle/ThemeToggle";

// ----- React Icons -----
import { RiHome2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { PiBriefcase } from "react-icons/pi";
import { LuMessageSquareCode } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/shadcn/tooltip";

export default function NavBar({ className }: { className?: string }) {
  return (
    <>
      {/* ----- Desktop navbar links ----- */}
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
                <span>Home</span>
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
                <span>Services</span>
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
                <span>Technologies</span>
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
                <span>Portfolio</span>
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
                <span>Contact</span>
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
