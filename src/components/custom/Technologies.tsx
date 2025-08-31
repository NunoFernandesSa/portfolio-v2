import React from "react";
import TitleSection from "./TitleSection";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { SiElectron } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
import { Card, CardContent, CardHeader } from "../ui/shadcn/card";
import { TbBrandTypescript } from "react-icons/tb";
import { TbBrandDjango } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { TbBrandDocker } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { RiWordpressLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiAndroidstudio } from "react-icons/si";
import { SiSqlite } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import Section from "./Section";

export default function Technologies() {
  return (
    <Section>
      <TitleSection title="Technologies" />

      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* ----- frontend ----- -----*/}
        <Card>
          <CardHeader>Frontend</CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <RiReactjsLine className="text-7xl" />
            <TbBrandNextjs className="text-7xl" />
            <TbBrandTypescript className="text-7xl" />
            <RiTailwindCssFill className="text-7xl" />
          </CardContent>
        </Card>
        {/* ----- backend ----- -----*/}
        <Card>
          <CardHeader>Backend</CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <RiNodejsFill className="text-7xl" />
            <SiNestjs className="text-7xl" />
            <TbBrandPython className="text-7xl" />
            <TbBrandDjango className="text-7xl" />
          </CardContent>
        </Card>
        {/* ----- mobile ----- */}
        <Card>
          <CardHeader>Mobile</CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <SiDart className="text-7xl" />
            <RiFlutterFill className="text-7xl" />
          </CardContent>
        </Card>
        {/* ----- other skills ----- */}
        <Card>
          <CardHeader>Other skills</CardHeader>
          <CardContent className="flex flex-wrap items-center gap-3">
            <SiElectron className="text-7xl" />
            <FaFigma className="text-7xl" />
            <TbBrandDocker className="text-7xl" />
            <SiPostgresql className="text-7xl" />
            <TbBrandMysql className="text-7xl" />
            <SiSqlite className="text-7xl" />
            <SiPrisma className="text-7xl" />
            <VscVscode className="text-7xl" />
            <SiAndroidstudio className="text-7xl" />
            <RiWordpressLine className="text-7xl" />
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
