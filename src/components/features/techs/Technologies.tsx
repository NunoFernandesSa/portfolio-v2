// ----- React icons -----
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
import { Card } from "@/components/ui/shadcn/card";

export default function Technologies() {
  const t = useTranslations("HomePage");

  return (
    <Section>
      <TitleSection title={t("techsTitle")} />
      <SubtitleSection text={t("techsSubtitle")} />

      {/* Front */}
      <div className="">
        <Card>
          
        </Card>
      </div>

      <div id="techsCarrousel" className="overflow-x-auto scrollbar-hide flex">
        <div className="carrouselGroup flex items-center justify-center">
          <TechIconAndTitle
            name="React Native"
            icon={<RiReactjsLine className="text-5xl md:text-7xl" />}
            style="card"
          />

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

        <div
          aria-hidden="true"
          className="carrouselGroup flex items-center justify-center"
        >
          <TechIconAndTitle
            name="React Native"
            icon={<RiReactjsLine className="text-5xl md:text-7xl -z-90" />}
            style="card"
          />

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
