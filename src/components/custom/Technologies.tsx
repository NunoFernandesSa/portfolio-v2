// ----- React icons -----
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { SiElectron } from "react-icons/si";
import { RiNodejsFill } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
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
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";
import Section from "./Section";
import TechIcon from "./TechIcon";

// ----- next-intl -----
import { useTranslations } from "next-intl";
import TechIconAndTitle from "./TechIcon";

export default function Technologies() {
  const t = useTranslations("HomePage");

  return (
    <Section>
      <TitleSection title={t("techsTitle")} />
      <SubtitleSection text={t("techsSubtitle")} />

      <div className="flex items-center justify-center flex-wrap gap-16">
        <TechIconAndTitle
          name="React Native"
          icon={<RiReactjsLine className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Next.js"
          icon={<TbBrandNextjs className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Typescript"
          icon={<TbBrandTypescript className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Tailwind Css"
          icon={<RiTailwindCssFill className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Node.js"
          icon={<RiNodejsFill className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Nest.js"
          icon={<SiNestjs className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Python"
          icon={<TbBrandPython className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Django"
          icon={<TbBrandDjango className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="PostgreSQL"
          icon={<SiPostgresql className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Mysql"
          icon={<TbBrandMysql className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Sqlite"
          icon={<SiSqlite className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Electron.js"
          icon={<SiElectron className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Figma"
          icon={<FaFigma className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Docker"
          icon={<TbBrandDocker className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Prisma"
          icon={<SiPrisma className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Vscode"
          icon={<VscVscode className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="Android studio"
          icon={<SiAndroidstudio className="text-5xl md:text-7xl" />}
        />

        <TechIconAndTitle
          name="CMS Wordpress"
          icon={<RiWordpressLine className="text-5xl md:text-7xl" />}
        />
      </div>
    </Section>
  );
}
