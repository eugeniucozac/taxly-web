import { setRequestLocale, getTranslations } from "next-intl/server";
import { makeMetadata } from "@/lib/metadata";
import { LegalShell } from "@/components/shared/legal-shell";
import { LegalSections, type LegalSection } from "@/components/shared/legal-sections";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.privacy", "privacy-policy");
}

export default async function PrivacyPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "privacy" });
  const sections = t.raw("sections") as LegalSection[];

  return (
    <LegalShell
      locale={locale}
      doc="privacy"
      title={t("heading")}
      updated={t("lastUpdated")}
      intro={t("intro")}
      toc={sections.map((s) => ({ id: s.id, label: s.heading }))}
    >
      <LegalSections sections={sections} />
    </LegalShell>
  );
}
