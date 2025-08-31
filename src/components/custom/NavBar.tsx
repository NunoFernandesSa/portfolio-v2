/**
 * Node Modules / Next
 */
import React from "react";
import Link from "next/link";

/**
 * UI components
 */
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/shadcn/navigation-menu";
import { ModeToggle } from "../custom/theme_toggle/ThemeToggle";

/**
 * Lucide Icons
 */
import { Menu } from "lucide-react";

export default function NavBar({ className }: { className?: string }) {
  return (
    <>
      {/* ----- Desktop navbar links ----- */}
      <NavigationMenu
        className={`hidden md:flex h-14 border m-2 px-6 rounded-full ${className}`}
      >
        <NavigationMenuList className="flex gap-3">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="" className="text-[14px] font-semibold">
                Home
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="" className="text-[14px] font-semibold">
                Portfolio
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="" className="text-[14px] font-semibold">
                Services
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="" className="text-[14px] font-semibold">
                Contact
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <ModeToggle />
        </NavigationMenuList>
      </NavigationMenu>

      {/* mobile navbar links */}
      {/* ----- navbar links ----- */}
      <NavigationMenu className="flex md:hidden h-14">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Menu size={38} />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
