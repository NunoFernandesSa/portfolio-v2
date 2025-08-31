/**
 * React icons
 */
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

/**
 * Shadcn components
 */
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/shadcn/tooltip";

/**
 * Custom components
 */
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

export default function Technologies() {
  return (
    <Section>
      <TitleSection title="Technologies" />
      <SubtitleSection
        text=" I expertly wield cutting-edge technologies to build high-performance
        solutions across the full development lifecycle. By continuously
        adopting the latest industry innovations, I create scalable systems
        ready for future challenges."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-10">
        {/* ----- frontend ----- -----*/}
        <Card>
          <CardHeader>Frontend</CardHeader>
          <CardContent className="flex flex-wrap items-center mx-auto gap-3">
            {/* React */}
            <Tooltip>
              <TooltipTrigger asChild>
                <RiReactjsLine className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>React</span>
              </TooltipContent>
            </Tooltip>

            {/* Nextjs */}
            <Tooltip>
              <TooltipTrigger asChild>
                <TbBrandNextjs className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Next.js</span>
              </TooltipContent>
            </Tooltip>

            {/* Typescript */}
            <Tooltip>
              <TooltipTrigger asChild>
                <TbBrandTypescript className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Typescript</span>
              </TooltipContent>
            </Tooltip>

            {/* TailwindCss */}
            <Tooltip>
              <TooltipTrigger asChild>
                <RiTailwindCssFill className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>TailwindCss</span>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
        {/* ----- backend ----- -----*/}
        <Card>
          <CardHeader>Backend</CardHeader>
          <CardContent className="flex flex-wrap items-center mx-auto gap-3">
            {/* Nodejs */}
            <Tooltip>
              <TooltipTrigger asChild>
                <RiNodejsFill className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Nodejs</span>
              </TooltipContent>
            </Tooltip>

            {/* Nestjs */}
            <Tooltip>
              <TooltipTrigger asChild>
                <SiNestjs className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Nest.js</span>
              </TooltipContent>
            </Tooltip>

            {/* Python */}
            <Tooltip>
              <TooltipTrigger asChild>
                <TbBrandPython className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Python</span>
              </TooltipContent>
            </Tooltip>

            {/* Django */}
            <Tooltip>
              <TooltipTrigger asChild>
                <TbBrandDjango className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Django</span>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
        {/* ----- mobile ----- */}
        <Card>
          <CardHeader>Mobile</CardHeader>
          <CardContent className="flex flex-wrap items-center mx-auto gap-3">
            {/* Dart */}
            <Tooltip>
              <TooltipTrigger asChild>
                <SiDart className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Dart</span>
              </TooltipContent>
            </Tooltip>

            {/* Flutter */}
            <Tooltip>
              <TooltipTrigger asChild>
                <RiFlutterFill className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Flutter</span>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        {/* ----- Database -----*/}
        <Card>
          <CardHeader>Database</CardHeader>
          <CardContent className="flex flex-wrap items-center mx-auto gap-3">
            {/* Postgresql */}
            <Tooltip>
              <TooltipTrigger asChild>
                <SiPostgresql className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Postgresql</span>
              </TooltipContent>
            </Tooltip>

            {/* Mysql */}
            <Tooltip>
              <TooltipTrigger asChild>
                <TbBrandMysql className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Mysql</span>
              </TooltipContent>
            </Tooltip>

            {/* Sqlite */}
            <Tooltip>
              <TooltipTrigger asChild>
                <SiSqlite className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Sqlite</span>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>

        {/* ----- other skills ----- */}
        <Card>
          <CardHeader>Other skills</CardHeader>
          <CardContent className="flex flex-wrap items-center mx-auto gap-3">
            {/* electron.js */}
            <Tooltip>
              <TooltipTrigger asChild>
                <SiElectron className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Electron.js</span>
              </TooltipContent>
            </Tooltip>
            {/* Figma */}
            <Tooltip>
              <TooltipTrigger asChild>
                <FaFigma className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Figma</span>
              </TooltipContent>
            </Tooltip>

            {/* Docker */}
            <Tooltip>
              <TooltipTrigger asChild>
                <TbBrandDocker className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Docker</span>
              </TooltipContent>
            </Tooltip>

            {/* Prisma */}
            <Tooltip>
              <TooltipTrigger asChild>
                <SiPrisma className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Prisma</span>
              </TooltipContent>
            </Tooltip>

            {/* Vscode */}
            <Tooltip>
              <TooltipTrigger asChild>
                <VscVscode className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Vscode</span>
              </TooltipContent>
            </Tooltip>

            {/* Android studio */}
            <Tooltip>
              <TooltipTrigger asChild>
                <SiAndroidstudio className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Android studio</span>
              </TooltipContent>
            </Tooltip>

            {/* Wordpress */}
            <Tooltip>
              <TooltipTrigger asChild>
                <RiWordpressLine className="text-7xl" />
              </TooltipTrigger>
              <TooltipContent>
                <span>Wordpress</span>
              </TooltipContent>
            </Tooltip>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
