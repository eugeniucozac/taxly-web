import { setRequestLocale, getTranslations } from "next-intl/server";
import { PenaltyEstimator } from "@/features/tools/components/penalty-estimator";
import { ToolFaq } from "@/features/tools/components/tool-faq";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.penaltyEstimator", "tools/penalty-estimator");
}

export default async function PenaltyEstimatorPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.penalty" });
  const tTools = await getTranslations({ locale, namespace: "tools" });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {t("eyebrow")}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mx-auto mb-4 max-w-xl text-lg text-muted-foreground">{t("intro")}</p>
        <p className="mx-auto mb-12 max-w-xl rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
          {t("fileFirstNote")}
        </p>
      </div>
      <div className="px-6">
        <PenaltyEstimator />
      </div>
      <ToolFaq
        items={t.raw("faq") as { q: string; a: string }[]}
        heading={tTools("faqHeading")}
        path={`/${locale}/tools/penalty-estimator`}
      />
    </div>
  );
}
