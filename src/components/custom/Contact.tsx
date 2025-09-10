import React from "react";
// ----- icons -----
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

// ----- Custom components -----
import Section from "./Section";
import TitleSection from "./TitleSection";
import SubtitleSection from "./SubtitleSection";
// ----- Shadcn components -----
import { Card } from "../ui/shadcn/card";

export default function Contact() {
  return (
    <Section>
      <TitleSection title="Get in touch !" />
      <SubtitleSection text="Got a question or a project in mind? Let’s talk !" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
        <div className="">
          <Card className="w-[300px] flex flex-row items-center justify-center gap-4 bg-transparent hover:scale-101 cursor-pointer border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300">
            <IoIosPhonePortrait size={30} />
            <span> +33 7 71 80 29 21</span>
          </Card>
          <Card className="w-[300px] flex flex-row items-center justify-center gap-4 bg-transparent hover:scale-101 cursor-pointer border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300">
            <MdOutlineMarkEmailUnread size={30} />
            <span>n.fernandes.contact@gmail.com</span>
          </Card>
        </div>
        <div className=""></div>
      </div>
    </Section>
  );
}
