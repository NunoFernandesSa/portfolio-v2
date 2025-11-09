import React from "react";
// ----- navbar items -----
import { navItems } from "@/constants/navbar-items";
import LocalSwitcher from "@/components/custom/LocalSwitcher";
import { useTranslations } from "next-intl";
import ThemeToggle from "../theme/theme-toggle-button";

export default function NavBar() {
  const t = useTranslations("HomePage");

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[800px] h-16 flex flex-row items-center justify-center text-primary-foreground bg-primary/90 backdrop-blur-md rounded-full">
      <ul className="flex flex-row items-center justify-center">
        {navItems.map((item) => (
          <li
            key={item.href}
            className="px-4 py-2 hover:underline ease-in-out duration-300 text-md"
          >
            <a href={`#${item.href}`}>
              <p className="text-md">{t("navbar" + item.label)}</p>
            </a>
          </li>
        ))}

        <div className=" flex items-center justify-center gap-4 ms-3">
          <LocalSwitcher />
          <ThemeToggle />
        </div>
      </ul>
    </nav>
  );
}
