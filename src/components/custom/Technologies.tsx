"use client";

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

/**
 * Custom components
 */
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";
import Section from "./Section";
import TechIcon from "./TechIcon";

/**
 * Framer-motion
 */
import { motion } from "framer-motion";

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

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-10">
        {/* ----- frontend ----- -----*/}
        <motion.div>
          <Card>
            <CardHeader>Frontend</CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center mx-auto gap-6">
              <TechIcon
                name="React"
                icon={<RiReactjsLine className="text-7xl" />}
              />

              <TechIcon
                name="Next.js"
                icon={<TbBrandNextjs className="text-7xl" />}
              />

              <TechIcon
                name="Typescript"
                icon={<TbBrandTypescript className="text-7xl" />}
              />

              <TechIcon
                name="TailwindCss"
                icon={<RiTailwindCssFill className="text-7xl" />}
              />
            </CardContent>
          </Card>
        </motion.div>
        {/* ----- backend ----- -----*/}
        <motion.div>
          <Card>
            <CardHeader>Backend</CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center mx-auto gap-6">
              <TechIcon
                name="Nodejs"
                icon={<RiNodejsFill className="text-7xl" />}
              />
              <TechIcon
                name="Nestjs"
                icon={<SiNestjs className="text-7xl" />}
              />
              <TechIcon
                name="Python"
                icon={<TbBrandPython className="text-7xl" />}
              />
              <TechIcon
                name="Django"
                icon={<TbBrandDjango className="text-7xl" />}
              />
            </CardContent>
          </Card>
        </motion.div>
        {/* ----- mobile ----- */}
        <motion.div>
          <Card>
            <CardHeader>Mobile</CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center mx-auto gap-6">
              <TechIcon name="Dart" icon={<SiDart className="text-7xl" />} />
              <TechIcon
                name="Flutter"
                icon={<RiFlutterFill className="text-7xl" />}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* ----- Database -----*/}
        <motion.div>
          <Card>
            <CardHeader>Database</CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center mx-auto gap-6">
              <TechIcon
                name="Postgresql"
                icon={<SiPostgresql className="text-7xl" />}
              />
              <TechIcon
                name="Mysql"
                icon={<TbBrandMysql className="text-7xl" />}
              />
              <TechIcon
                name="Sqlite"
                icon={<SiSqlite className="text-7xl" />}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* ----- other skills ----- */}
        <motion.div>
          <Card>
            <CardHeader>Other skills</CardHeader>
            <CardContent className="flex flex-wrap items-center justify-center mx-auto gap-6">
              <TechIcon
                name="Electron.js"
                icon={<SiElectron className="text-7xl" />}
              />

              <TechIcon name="Figma" icon={<FaFigma className="text-7xl" />} />

              <TechIcon
                name="Docker"
                icon={<TbBrandDocker className="text-7xl" />}
              />
              <TechIcon
                name="Prisma"
                icon={<SiPrisma className="text-7xl" />}
              />

              <TechIcon
                name="Vscode"
                icon={<VscVscode className="text-7xl" />}
              />

              <TechIcon
                name="Android studio"
                icon={<SiAndroidstudio className="text-7xl" />}
              />

              <TechIcon
                name="Wordpress"
                icon={<RiWordpressLine className="text-7xl" />}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
