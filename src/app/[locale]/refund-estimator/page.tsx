import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { RefundEstimator } from "@/features/refund-estimator/components/refund-estimator";
import { ToolFaq } from "@/features/tools/components/tool-faq";
import { MoreTools } from "@/features/tools/components/more-tools";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { generateLocaleStaticParams, makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export const generateStaticParams = generateLocaleStaticParams;

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.refundEstimator", "refund-estimator");
}

export default async function RefundEstimatorPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "refundEstimator" });
  const tTools = await getTranslations({ locale, namespace: "tools" });

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {tTools("chipNote")}
          </span>
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          {t("heading")}
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          {t("subheading")}
        </p>
      </div>

      <RefundEstimator />

      <ToolFaq
        items={t.raw("faq") as { q: string; a: string }[]}
        heading={tTools("faqHeading")}
        path={`/${locale}/refund-estimator`}
      />
      <MoreTools locale={locale} current="refundEstimator" />

      {/* Waitlist (pre-launch conversion) */}
      <div id="waitlist" className="mx-auto mt-16 max-w-lg scroll-mt-24 text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          {locale === "es"
            ? "Cuando abramos, presenta tu declaración con confianza. Únete a la lista."
            : "File it for real when we launch. Join the waitlist."}
        </p>
        <WaitlistForm
          placeholder="your@email.com"
          ctaLabel={locale === "es" ? "Unirme a la lista" : "Join the waitlist"}
          successMessage={locale === "es" ? "¡Estás en la lista! Revisa tu bandeja de entrada." : "You're on the list! Check your inbox."}
          errorMessage={locale === "es" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again."}
 className="justify-center"
        />
      </div>
    </main>
  );
}
