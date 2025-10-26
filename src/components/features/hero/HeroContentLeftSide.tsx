import React from "react";

// ----- Next modules -----
import Link from "next/link";
import Image from "next/image";

// ----- assets -----
import linkedin from "./../../../../public/images/social/linkedin.png";
import malt from "./../../../../public/images/social/malt.png";

// ----- Shadcn components -----
import { Button } from "@/components/ui/shadcn/button";

// ----- i18n -----
import { useTranslations } from "next-intl";

export default function HeroContentLeftSide() {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full flex flex-col items-center justify-start lg:items-start mt-20 lg:mt-10">
      <div className="w-full">
        <h2 className="text-xl md:text-2xl font-semibold ml-2 py-3">
          Nuno Fernandes
        </h2>

        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight ml-2 py-3">
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
        className="w-full max-w-lg rounded-full py-6 mb-3 text-sm xl:text-lg cursor-pointer hover:scale-101 transition-all duration-300 border"
        variant={"outline"}
        title={t("ctlBtnText")}
        asChild
      >
        <Link href={"#contact"}>{t("ctlBtnText")}</Link>
      </Button>

      <div className="w-full max-w-lg grid grid-cols-2 gap-3">
        {/* linkedin button */}
        <Button
          size={"sm"}
          variant={"outline"}
          className="w-full rounded-full py-6 mb-10 text-sm xl:text-lg cursor-pointer hover:scale-101 transition-all duration-300 border"
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

        {/* malt button */}
        <Button
          size={"sm"}
          variant={"outline"}
          className="w-full rounded-full py-6 mb-10 text-sm xl:text-lg cursor-pointer hover:scale-101 transition-all duration-300 border"
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
  );
}
