"use client";

import React, { ReactNode } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

import { LocalSwitcherSelectPropsType } from "@/types/localSwitcherSelectPropsType";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Locale } from "next-intl";
import { routing } from "@/i18n/routing";

export default function LocalSwitcherSelect({
  children,
  defaultValue,
  label,
}: LocalSwitcherSelectPropsType) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  };

  return (
    <Select defaultValue={defaultValue} onValueChange={onSelectChange}>
      <SelectTrigger
        className="text-[12px] font-thin text-gray-300"
        aria-label={label}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {routing.locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
