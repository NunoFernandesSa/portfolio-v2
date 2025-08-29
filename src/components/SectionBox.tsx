import React from "react";

/**
 * Shadcn components
 */
import { Card } from "./ui/shadcn/card";

/**
 * Ui components
 */
import TitleSection from "./ui/TitleSection";

export default function SectionProjectsBox({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Card className="w-full p-6">
        <TitleSection title="Projects" />
        {children}
      </Card>
    </>
  );
}
