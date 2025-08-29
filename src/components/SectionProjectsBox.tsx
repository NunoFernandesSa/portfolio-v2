import React from "react";
import { Card } from "./ui/shadcn/card";
import TitleSection from "./ui/TitleSection";

export default function SectionProjectsBox() {
  return (
    <>
      <Card className="w-full p-6">
        <TitleSection title="Projects" />
      </Card>
    </>
  );
}
