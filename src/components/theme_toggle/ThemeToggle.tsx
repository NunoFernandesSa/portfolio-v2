import React from "react";
import { Toggle } from "../ui/shadcn/toggle";
import { MoonIcon, SunIcon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <Toggle aria-label="Toggle dark mode">
      {/* <MoonIcon size={22} /> */}
      <SunIcon size={22} />
    </Toggle>
  );
}
