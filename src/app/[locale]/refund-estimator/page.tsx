import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { RefundEstimator } from "@/features/refund-estimator/components/refund-estimator";
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

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/30 dark:text-sky-400">
          {t("badge")}
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("heading")}
        </h1>
        <p className="mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-400">
          {t("subheading")}
        </p>
      </div>

      <RefundEstimator />

      {/* Waitlist (pre-launch conversion) */}
      <div id="waitlist" className="mx-auto mt-16 max-w-lg scroll-mt-24 text-center">
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
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
