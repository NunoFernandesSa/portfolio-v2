import React from "react";
// ----- navbar items -----
import { navItems } from "@/constants/navbar-items";
import LocalSwitcher from "@/components/custom/LocalSwitcher";
import { useTranslations } from "next-intl";
import ThemeToggle from "../theme/theme-toggle-button";

export default function NavBar() {
  const t = useTranslations("HomePage");

  return (
    <nav className="fixed top-0 left-0 right-0 h-24 flex flex-row items-center justify-center text-primary-foreground border-b border-primary-foreground bg-[#030712]">
      <ul className="flex flex-row items-center justify-center">
        {navItems.map((item) => (
          <li key={item.href} className="px-4 py-2">
            <a href={item.href}>{t("navbar" + item.label)}</a>
          </li>
        ))}

        <div className=" flex items-center justify-center gap-4">
          <LocalSwitcher />
          <ThemeToggle />
        </div>
      </ul>
    </nav>
  );
}
