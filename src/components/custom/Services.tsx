"use client";

import React from "react";

/**
 * Shadcn components
 */
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/shadcn/card";

/**
 * Custom components
 */
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

/**
 * Constants
 */
import { SERVICES } from "@/constants/services";
import Image from "next/image";

/**
 * Framer-motion
 */
import { motion } from "framer-motion";

export default function Services() {
  return (
    <Section>
      <TitleSection title="What I Do" />

      <SubtitleSection
        text="I build and maintain high-performance websites & mobile apps—secure, scalable, and tailored to your goals.
From concept to long-term support, let's make your digital vision a reality."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center text-center gap-6">
        {SERVICES.map((service, index) => (
          <motion.div key={index}>
            <Card className="bg-transparent border min-h-[360px]">
              <CardHeader className="p-2 sm:p-6 gap-3">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
