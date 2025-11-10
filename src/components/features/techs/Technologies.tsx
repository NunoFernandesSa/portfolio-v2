// ----- React icons -----
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { SiElectron } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
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

// ----- Custom components -----
import TitleSection from "@/components/custom/TitleSection";
import SubtitleSection from "@/components/custom/SubtitleSection";
import Section from "@/components/custom/Section";
import TechIconAndTitle from "./TechIcon";

// css import
import "./styles/techs-style.css";

// ----- next-intl -----
import { useTranslations } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/shadcn/card";
import { techsFront } from "@/constants/techs-list";

export default function Technologies() {
  const t = useTranslations("HomePage");

  return (
    <Section>
      <TitleSection title={t("techsTitle")} />
      <SubtitleSection text={t("techsSubtitle")} />

      {/* Front */}
      <div className="flex flex-wrap justify-center gap-4">
        <Card
          className={`bg-transparent border-2 border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300`}
        >
          <CardHeader>
            <CardTitle className="text-3xl">Front-end</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap justify-center gap-2">
            {/* html*/}
            <TechIconAndTitle
              name="html"
              icon={<RiHtml5Fill className="text-5xl" />}
              style="card"
            />
            {/* css */}
            <TechIconAndTitle
              name="css"
              icon={<RiCss3Fill className="text-5xl" />}
              style="card"
            />

            {/* React JS */}
            <TechIconAndTitle
              name="React JS"
              icon={<RiReactjsLine className="text-5xl" />}
              style="card"
            />

            {/* React Native */}
            <TechIconAndTitle
              name="React Native"
              icon={<RiReactjsLine className="text-5xl" />}
              style="card"
            />

            {/* Next.js */}
            <TechIconAndTitle
              name="Next.js"
              icon={<TbBrandNextjs className="text-5xl" />}
              style="card"
            />

            {/* Tailwind Css */}
            <TechIconAndTitle
              name="Tailwind Css"
              icon={<RiTailwindCssFill className="text-5xl" />}
              style="card"
            />
          </CardContent>
        </Card>
      </div>

      <div id="techsCarrousel" className="overflow-x-auto scrollbar-hide flex">
        <div className="carrouselGroup flex items-center justify-center">
          <TechIconAndTitle
            name="Typescript"
            icon={<TbBrandTypescript className="text-5xl md:text-7xl" />}
            style="card"
          />
          <TechIconAndTitle
            name="Python"
            icon={<TbBrandPython className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Node.js"
            icon={<RiNodejsFill className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Nest.js"
            icon={<SiNestjs className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Django"
            icon={<TbBrandDjango className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="PostgreSQL"
            icon={<SiPostgresql className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Mysql"
            icon={<TbBrandMysql className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Sqlite"
            icon={<SiSqlite className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Electron.js"
            icon={<SiElectron className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Figma"
            icon={<FaFigma className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Docker"
            icon={<TbBrandDocker className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Prisma"
            icon={<SiPrisma className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Vscode"
            icon={<VscVscode className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Android studio"
            icon={<SiAndroidstudio className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="CMS Wordpress"
            icon={<RiWordpressLine className="text-5xl md:text-7xl" />}
            style="card"
          />
        </div>

        <div
          aria-hidden="true"
          className="carrouselGroup flex items-center justify-center"
        >
          <TechIconAndTitle
            name="Next.js"
            icon={<TbBrandNextjs className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Typescript"
            icon={<TbBrandTypescript className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Tailwind Css"
            icon={<RiTailwindCssFill className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Node.js"
            icon={<RiNodejsFill className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Nest.js"
            icon={<SiNestjs className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Python"
            icon={<TbBrandPython className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Django"
            icon={<TbBrandDjango className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="PostgreSQL"
            icon={<SiPostgresql className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Mysql"
            icon={<TbBrandMysql className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Sqlite"
            icon={<SiSqlite className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Electron.js"
            icon={<SiElectron className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Figma"
            icon={<FaFigma className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Docker"
            icon={<TbBrandDocker className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Prisma"
            icon={<SiPrisma className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Vscode"
            icon={<VscVscode className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="Android studio"
            icon={<SiAndroidstudio className="text-5xl md:text-7xl" />}
            style="card"
          />

          <TechIconAndTitle
            name="CMS Wordpress"
            icon={<RiWordpressLine className="text-5xl md:text-7xl" />}
            style="card"
          />
        </div>
      </div>
    </Section>
  );
}
