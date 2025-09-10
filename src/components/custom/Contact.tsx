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
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <Section>
      <TitleSection title="Get in touch !" />
      <SubtitleSection text="Got a question or a project in mind? Let’s talk !" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
        <div className="flex flex-col items-center justify-center gap-16 w-full lg:w-2/3 mx-auto">
          <Card className="w-full flex flex-wrap flex-row items-center justify-center gap-4 bg-transparent border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300 ">
            <IoIosPhonePortrait size={30} />
            <span className="text-sm"> +33 7 71 80 29 21</span>
          </Card>
          <Card className="w-full flex flex-wrap flex-row items-center justify-center gap-4 bg-transparent border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300">
            <MdOutlineMarkEmailUnread size={30} />
            <span className="text-sm">n.fernandes.contact@gmail.com</span>
          </Card>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
