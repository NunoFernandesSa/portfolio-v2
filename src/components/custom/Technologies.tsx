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

      <div className="flex items-center justify-center flex-wrap gap-16">
        {/* ----- frontend ----- -----*/}
        <TechIcon
          name="React Native"
          icon={<RiReactjsLine className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Next.js"
          icon={<TbBrandNextjs className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Typescript"
          icon={<TbBrandTypescript className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="TailwindCss"
          icon={<RiTailwindCssFill className="text-5xl md:text-7xl" />}
        />

        {/* ----- backend ----- ----- */}
        <TechIcon
          name="Nodejs"
          icon={<RiNodejsFill className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Nestjs"
          icon={<SiNestjs className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Python"
          icon={<TbBrandPython className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Django"
          icon={<TbBrandDjango className="text-5xl md:text-7xl" />}
        />

        {/* ----- mobile ----- */}
        <TechIcon
          name="Flutter"
          icon={<RiFlutterFill className="text-5xl md:text-7xl" />}
        />

        {/* ----- Database -----*/}
        <TechIcon
          name="Postgresql"
          icon={<SiPostgresql className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Mysql"
          icon={<TbBrandMysql className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Sqlite"
          icon={<SiSqlite className="text-5xl md:text-7xl" />}
        />

        {/* ----- other skills ----- */}
        <TechIcon
          name="Electron.js"
          icon={<SiElectron className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Figma"
          icon={<FaFigma className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Docker"
          icon={<TbBrandDocker className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Prisma"
          icon={<SiPrisma className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Vscode"
          icon={<VscVscode className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Android studio"
          icon={<SiAndroidstudio className="text-5xl md:text-7xl" />}
        />
        <TechIcon
          name="Wordpress"
          icon={<RiWordpressLine className="text-5xl md:text-7xl" />}
        />
      </div>
    </Section>
  );
}
