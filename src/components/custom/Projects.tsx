/**
 * Node modules / Next
 */
import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * Shadcn components
 */
import { Badge } from "@/components/ui/shadcn/badge";

/**
 * Custom components
 */
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

/**
 * Constants
 */
import { PORTFOLIO_ITEMS } from "@/constants/portfolio";

import { RiEyeLine } from "react-icons/ri";
import { Button } from "../ui/shadcn/button";

export default function Projects() {
  return (
    <Section>
      <TitleSection title="Projects" />
      <SubtitleSection text="Explore my recent work. Transforming ideas into powerful technical solutions." />

      <div className="">
        {PORTFOLIO_ITEMS.map((project, index) => (
          <div className="mb-10 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4 mb-6">
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="my-6 rounded"
              />

              <Button size={"sm"} asChild>
                <Link
                  href={project.link}
                  className="mb-6 flex gap-3 items-center justify-center text-sm"
                  title="Go to the project"
                  target="_blank"
                >
                  See project
                  <RiEyeLine />
                </Link>
              </Button>
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
                  <span
                    key={index}
                    className="text-sm mr-2 rounded font-medium"
                  >
                    <Badge variant="default">{item}</Badge>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
