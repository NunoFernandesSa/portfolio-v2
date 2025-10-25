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

// ----- next-intl -----
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("HomePage");
  const ts = useTranslations("Services");

  return (
    <Section>
      <TitleSection title={t("servicesTitle")} />

      <SubtitleSection text={t("servicesSubtitle")} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center text-center gap-6">
        {SERVICES.map((service, index) => (
          <div key={index}>
            <Card
              className={`bg-transparent border-2 border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 min-h-[430px transition-all duration-300`}
            >
              <CardHeader className="p-2 sm:p-6 gap-6">
                <Image
                  src={service.icon}
                  alt={ts(`${service.translationKey}.title`)}
                  width={80}
                  height={80}
                  className="mx-auto"
                />

                <CardTitle>{ts(`${service.translationKey}.title`)}</CardTitle>
                <CardDescription>
                  {ts(`${service.translationKey}.description`)}
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
