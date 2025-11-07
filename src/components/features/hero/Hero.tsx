// ----- Node modules / Next -----
import React from "react";
import Image from "next/image";

// ----- Custom components -----
import Section from "@/components/custom/Section";

// ----- i18n -----
import { useTranslations } from "next-intl";
import HeroContentLeftSide from "./HeroContentLeftSide";

export default function Hero() {
  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-center">
        {/* hero content right side */}
        <HeroContentLeftSide />

        {/* hero content left side */}
        <div className="w-full flex justify-center items-center lg:items-start">
          <Image
            src="/images/illustration-stylisé.png"
            alt="My profile picture"
            className="shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 rounded-3xl transform-gpu -z-10"
            width={400}
            height={400}
          />
          {/* <Image
            src="/images/illustration-stylisé.png"
            alt="My profile picture"
            width={400}
            height={400}
          /> */}
        </div>
      </div>
    </Section>
  );
}
