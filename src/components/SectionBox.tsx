import React from "react";

/**
 * Shadcn components
 */
import { Card } from "./ui/shadcn/card";

export default function SectionProjectsBox({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <Card className="w-full p-6">{children}</Card>
    </>
  );
}
