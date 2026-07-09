import { setRequestLocale, getTranslations } from "next-intl/server";
import { QuarterlyCalculator } from "@/features/tools/components/quarterly-calculator";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.quarterlyTax", "tools/quarterly-tax");
}

export default async function QuarterlyTaxPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.quarterly" });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {t("eyebrow")}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mx-auto mb-12 max-w-xl text-lg text-muted-foreground">{t("intro")}</p>
      </div>
      <div className="px-6">
        <QuarterlyCalculator />
      </div>
    </div>
  );
}
