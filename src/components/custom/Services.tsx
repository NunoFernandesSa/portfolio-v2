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

export default function Services() {
  return (
    <Section>
      <TitleSection title="What I Do" />

      <SubtitleSection
        text="I build and maintain high-performance websites & mobile apps—secure, scalable, and tailored to your goals.
From concept to long-term support, let's make your digital vision a reality."
      />

      <Card>
        <CardHeader>
          <CardTitle>Web Development</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </Section>
  );
}
