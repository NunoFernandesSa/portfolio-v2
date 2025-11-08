import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

// ----- icons -----
import LocalSwitcherSelect from "./LocalSwitcherSelect";

export default function LocalSwitcher() {
  const locale = useLocale();

  return (
    <LocalSwitcherSelect defaultValue={locale} label="Select a locale">
      {routing.locales.map((locale) => (
        <option key={locale} value={locale}>
          {locale}
        </option>
      ))}
    </LocalSwitcherSelect>
  );
}
