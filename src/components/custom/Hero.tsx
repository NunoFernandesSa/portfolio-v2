// ----- Node modules / Next -----
import React from "react";
import Link from "next/link";
import Image from "next/image";

// ----- assets -----
import linkedin from "../../../public/images/social/linkedin.png";
import malt from "../../../public/images/social/malt.png";

// ----- Shadcn components -----
import { Button } from "../ui/shadcn/button";

// ----- Custom components -----
import Section from "./Section";

// ----- i18n -----
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <Section>
      <div className="flex flex-wrap justify-between flex-row md:flex-row-reverse">
        <div className="w-full flex flex-col items-center lg:items-start mt-10 lg:w-1/3 order-2 lg:order-1">
          <Image
            src="/images/profile_photo.png"
            alt="My profile picture"
            className="shadow-lg shadow-purple-500/30 hover:rotate-1 hover:shadow-xl hover:shadow-purple-500/50 transition-all duration-300 rounded-3xl transform-gpu w-1/2 lg:w-full"
            width={500}
            height={500}
          />
          <div className="w-full flex items-center justify-center gap-6 mt-9">
            <Button
              size={"lg"}
              variant={"outline"}
              className="rounded-full min-w-22 bg-transparent hover:bg-transparent hover:scale-105 transition-all duration-300"
              title={`${t("linkedinBtnTitleText")}`}
              asChild
            >
              <Link
                href={"https://www.linkedin.com/in/nunofernandesdesa"}
                target="_blank"
              >
                <Image src={linkedin} alt="LinkedIn" className="w-20" />
              </Link>
            </Button>
            <Button
              size={"lg"}
              variant={"outline"}
              className="rounded-full min-w-30 bg-transparent hover:bg-transparent hover:scale-105 transition-all duration-300"
              title={`${t("maltBtnTitleText")}`}
              asChild
            >
              <Link
                href={"https://www.malt.fr/profile/nunofernandes"}
                target="_blank"
              >
                <Image src={malt} alt="Malt" className="w-20" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-start lg:items-start mt-20 lg:mt-10 lg:w-1/2 order-1 lg:order-2">
          <div className="w-full bg-gradient-to-r from-purple-500/10 via-purple-400/5 to-purple/20">
            <h2 className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-xl md:text-2xl tracking-tight text-transparent ml-2 py-3">
              Nuno Fernandes
            </h2>

            <h1 className="bg-gradient-to-r from-stone-300 to-stone-700 bg-clip-text font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-transparent ml-2 py-3">
              {t("title")}
            </h1>
          </div>

          <p className="my-2 py-6 max-w-xl text-md md:text-xl leading-relaxed tracking-tighter">
            {t("subtitle")}
          </p>

          <p className="mt-4 max-w-xl text-md md:text-xl leading-relaxed tracking-tighter">
            {t("ctlText")}
          </p>
          <p className="mb-6 max-w-xl text-md md:text-xl leading-relaxed tracking-tighter">
            {t("ctlText2")}
          </p>

          <Button
            className="w-full max-w-lg rounded-full py-6 mb-10 text-sm xl:text-lg cursor-pointer hover:scale-101 transition-all duration-300 border border-purple-500"
            variant={"outline"}
            title={t("ctlBtnText")}
            asChild
          >
            <Link href={"#contact"}>{t("ctlBtnText")}</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
