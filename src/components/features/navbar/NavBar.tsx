import React from "react";
// ----- navbar items -----
import { navItems } from "@/constants/navbar-items";
import LocalSwitcher from "@/components/custom/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function NavBarComponent() {
  const t = useTranslations("HomePage");

  return (
    <nav className="h-24 flex flex-row items-center justify-center text-primary-foreground border-b border-primary-foreground">
      <ul className="flex flex-row items-center justify-center">
        {navItems.map((item) => (
          <li key={item.href} className="px-4 py-2">
            {t("navbar" + item.label)}
          </li>
        ))}
        <LocalSwitcher />
      </ul>
    </nav>
  );
}
