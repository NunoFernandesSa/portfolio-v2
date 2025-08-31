/**
 * Node Modules / Next
 */
import React from "react";

/**
 * Shadcn components
 */
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";

/**
 * Custom components
 */
import { ModeToggle } from "../custom/theme_toggle/ThemeToggle";

/**
 * React Icons
 */
import { RiHome2Line } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";
import { PiBriefcase } from "react-icons/pi";
import { LuMessageSquareCode } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";

export default function NavBar({ className }: { className?: string }) {
  return (
    <>
      {/* ----- Desktop navbar links ----- */}
      <NavigationMenu
        className={`flex h-14 border px-3 mt-3 rounded-xl ${className}`}
      >
        <NavigationMenuList className="flex gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <RiHome2Line />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <FaCode />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <PiBriefcase />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <MdOutlineDesignServices />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink className="cursor-pointer">
              <LuMessageSquareCode />
            </NavigationMenuLink>
          </NavigationMenuItem>

          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>

      {/* mobile navbar links */}
      {/* ----- navbar links ----- */}
      {/* <NavigationMenu className="md:hidden h-14 mt-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Menu size={56} className="border" />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </>
  );
}
