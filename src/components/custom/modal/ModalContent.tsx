import { useTranslations } from "next-intl";

export default function ModalContent() {
  const t = useTranslations("LegalNotices");

  return (
    <div className="space-y-4">
      {/* Content */}
      <section>
        <p className="italic text-gray-300">{t("myName")}</p>
        <p className="italic text-gray-300">{t("myAdress")}</p>
        <p className="italic text-gray-300">{t("myPhone")}</p>
        <p className="italic text-gray-300">{t("myEmail")}</p>
      </section>

      <section>
        <h3 className="text-lg text-[#7922f2]">{t("hostingProvider")} :</h3>
        <p className="italic text-gray-300">{t("hostingProviderName")}</p>
        <p className="italic text-gray-300">{t("hostingProviderWebSite")}</p>
      </section>

      <section>
        <h3 className="text- text-[#7922f2]">{t("intellectualProperty")} :</h3>
        <p className="italic text-gray-300">{t("intellectualPropertyDesc")}</p>
      </section>

      <section>
        <h3 className="text- text-[#7922f2]">{t("personalData")} :</h3>
        <p className="italic text-gray-300">{t("personalDataDesc")}</p>
      </section>

      <section>
        <h3 className="text- text-[#7922f2]">{t("cookies")}</h3>
        <p className="italic text-gray-300">{t("cookiesDesc")}</p>
      </section>

      <section>
        <h3 className="text- text-[#7922f2]">{t("liability")}</h3>
        <p className="italic text-gray-300">{t("liabilityDesc")}</p>
      </section>

      <section>
        <h3 className="text- text-[#7922f2]">{t("externalLinks")}</h3>
        <p className="italic text-gray-300">{t("externalLinksDesc")}</p>
      </section>

      <section>
        <h3 className="text- text-[#7922f2]">{t("governingLaw")}</h3>
        <p className="italic text-gray-300">{t("governingLawDesc")}</p>
      </section>
    </div>
  );
}
