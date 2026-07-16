import { setRequestLocale, getTranslations } from "next-intl/server";
import { QuarterlyCalculator } from "@/features/tools/components/quarterly-calculator";
import { ToolFaq } from "@/features/tools/components/tool-faq";
import { MoreTools } from "@/features/tools/components/more-tools";
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
  const tTools = await getTranslations({ locale, namespace: "tools" });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {tTools("chipNote")}
          </span>
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mx-auto mb-12 max-w-xl text-lg text-muted-foreground">{t("intro")}</p>
      </div>
      <div className="px-6">
        <QuarterlyCalculator />
      </div>
      <ToolFaq
        items={t.raw("faq") as { q: string; a: string }[]}
        heading={tTools("faqHeading")}
        path={`/${locale}/tools/quarterly-tax`}
      />
      <MoreTools locale={locale} current="quarterlyTax" />
    </div>
  );
}
