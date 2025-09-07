import React from "react";

// ----- Custom components -----
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";

export default function Contact() {
  return (
    <Section>
      <TitleSection title="Get in touch !" />
      <SubtitleSection text="Got a question or a project in mind? Let’s talk !" />

      <div className=""></div>
    </Section>
  );
}
