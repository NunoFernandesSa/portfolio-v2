import React from "react";

import { useTheme } from "next-themes";

export default function SetThemeBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return <>{children}</>;
}
