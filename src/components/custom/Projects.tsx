"use client";

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
import { Button } from "../ui/shadcn/button";

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

/**
 * Icons
 */
import { RiEyeLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <Section>
      <TitleSection title="Projects" />
      <SubtitleSection text="Explore my recent work. Transforming ideas into powerful technical solutions." />

      {PORTFOLIO_ITEMS.map((project, index) => (
        <div className="mb-20 flex flex-wrap lg:justify-center" key={index}>
          <motion.div
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/4 mb-6"
          >
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
          </motion.div>

          <motion.div
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <div className="flex flex-wrap"></div>
            <motion.h3 className="mb-2 font-semibold text-md sm:text-2xl">
              {project.title}
            </motion.h3>
            <p className="mb-4 text-stone-400 text-sm sm:text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {project.technos.map((item, index) => (
                <span key={index} className="text-sm mr-2 rounded font-medium">
                  <Badge variant="default">{item}</Badge>
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </Section>
  );
}
