import React from "react";

// ----- Shadcn components -----
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/shadcn/card";

// -----  Custom components -----
import Section from "@/components/custom/Section";
import TitleSection from "@/components/custom/TitleSection";
import SubtitleSection from "@/components/custom/SubtitleSection";

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
              className={`bg-transparent border-2 border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 min-h-[320px] transition-all duration-300 flex flex-col items-start justify-center p-6 gap-4`}
            >
              <Image
                src={service.icon}
                alt={ts(`${service.translationKey}.title`)}
                width={36}
                height={36}
                sizes="36px"
              />

              <p className="text-xl">{ts(`${service.translationKey}.title`)}</p>

              <p className="text-start text-sm text-white/80">
                {ts(`${service.translationKey}.description`)}
              </p>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
