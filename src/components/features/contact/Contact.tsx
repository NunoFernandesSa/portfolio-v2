import React from "react";
// ----- icons -----
import { IoIosPhonePortrait } from "react-icons/io";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

// ----- Custom components -----
import Section from "@/components/custom/Section";
import TitleSection from "@/components/custom/TitleSection";
import SubtitleSection from "@/components/custom/SubtitleSection";
// ----- Shadcn components -----
import { Card } from "@/components/ui/shadcn/card";
import ContactForm from "@/components/forms/ContactForm";

// ----- next-intl -----
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("HomePage");

  return (
    <Section>
      <TitleSection title={t("getIntouch")} />
      <SubtitleSection text={t("getIntouchSubtitle")} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
        {/* left side | contact form */}
        <ContactForm />
        {/* right side */}
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16 w-full lg:w-2/3 mx-auto">
          <Card className="w-full flex flex-col items-center justify-center gap-4 bg-transparent border-purple-500/10 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 transition-shadow duration-300">
            <h3 className="font-bold mx-3">{t("dontLikeFormsText")}</h3>
            <h3 className="font-bold mx-3">
              {t("dontLikeFormsTextForSendMail")}
            </h3>

            <div className="flex flex-row items-center gap-3 my-6">
              <MdOutlineMarkEmailUnread size={30} />
              <span className="text-sm">
                <a href="mailto:n.fernandes.contact@gmail.com">
                  n.fernandes.contact@gmail.com
                </a>
              </span>
            </div>

            <div className="flex flex-row items-center gap-3">
              <IoIosPhonePortrait size={30} />
              <span className="text-sm"> +33 7 71 80 29 21</span>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
