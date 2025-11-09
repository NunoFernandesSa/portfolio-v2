"use client";

import { Button } from "@/components/ui/shadcn/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      variant={"outline"}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-2 py-1 rounded-full btn btn-primary border"
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </Button>
  );
}
