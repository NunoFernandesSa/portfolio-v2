import React from "react";

/**
 * Shadcn components
 */
import { Badge } from "@/components/ui/shadcn/badge";

/**
 * Ui components
 */
import Section from "./Section";
import TitleSection from "./TitleSection";

/**
 * Constants
 */
import { PORTFOLIO_ITEMS } from "@/constants/portfolio";
import Image from "next/image";

export default function Projects() {
  return (
    <Section>
      <TitleSection title="Projects" />

      <div className="">
        {PORTFOLIO_ITEMS.map((project, index) => (
          <div className="mb-10 flex flex-wrap lg:justify-center" key={index}>
            <div className="w-full lg:w-1/4">
              <Image
                src={project.image}
                alt={project.title}
                width={250}
                height={250}
                className="mb-6 rounded"
              />
            </div>

            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-md sm:text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400 text-sm sm:text-lg">
                {project.description}
              </p>
              {project.technos.map((item, index) => (
                <span key={index} className="text-sm mr-2 rounded font-medium">
                  <Badge variant="default">{item}</Badge>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
