// ----- Node modules / Next.js -----
import React from "react";
import Link from "next/link";
import Image from "next/image";

// ----- Shadcn components -----
import { Badge } from "@/components/ui/shadcn/badge";

// ----- Custom components -----
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

// ----- Constants -----
import { PORTFOLIO_ITEMS } from "@/constants/portfolio";

export default function Projects() {
  return (
    <Section>
      <TitleSection title="Projects" />
      <SubtitleSection text="Explore my recent work. Transforming ideas into powerful technical solutions." />

      {PORTFOLIO_ITEMS.map((project, index) => (
        <div className="mb-20 flex flex-wrap lg:justify-center" key={index}>
          <div className="w-full lg:w-1/4 mb-6">
            <Link href={project.link} target="_blank" title="Visit Project">
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="my-6 rounded"
              />
            </Link>
          </div>

          <div className="w-full max-w-xl lg:w-3/4">
            <div className="flex flex-wrap"></div>
            <h3 className="mb-2 font-semibold text-md sm:text-2xl">
              {project.title}
            </h3>
            <p className="mb-4 text-stone-400 text-sm sm:text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {project.technos.map((item, index) => (
                <span key={index} className="text-sm mr-2 rounded font-medium">
                  <Badge variant="default" className="italic">
                    {item}
                  </Badge>
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Section>
  );
}
