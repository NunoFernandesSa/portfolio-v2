import React from "react";

// ----- Shadcn components -----
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/shadcn/card";

// -----  Custom components -----
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

// ----- Constants -----
import { SERVICES } from "@/constants/services";
import Image from "next/image";

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
          <div key={index}>
            <Card
              className={`bg-transparent border-2 border-purple-500/10 min-h-[360px] shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-101 ${
                index === 0
                  ? "hover:rotate-1"
                  : index === 1
                  ? "hover:-rotate-1"
                  : index === 2
                  ? "hover:rotate-1"
                  : ""
              } transition-all duration-300`}
            >
              <CardHeader className="p-2 sm:p-6 gap-6">
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
          </div>
        ))}
      </div>
    </Section>
  );
}
