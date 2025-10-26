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
      <div className="flex flex-wrap justify-between flex-row md:flex-row-reverse">
        <div className="w-full flex flex-col items-center lg:items-start mt-10 lg:w-1/3 order-2 lg:order-1">
          <Image
            src="/images/profile_photo.png"
            alt="My profile picture"
            className="shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 rounded-3xl transform-gpu w-1/2 lg:w-full"
            width={500}
            height={500}
          />
        </div>

        {/* hero content left side */}
        <HeroContentLeftSide />
      </div>
    </Section>
  );
}
