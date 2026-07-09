import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { CheckCircle2, X, ChevronDown } from "lucide-react";
import { makeMetadata, BASE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { TrackView } from "@/components/analytics/track-view";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.pricing", "pricing");
}

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Taxly — US Tax Filing Software",
  url: `${BASE_URL}/pricing`,
  description:
    "File your US federal and state taxes online. Honest flat pricing — no upsells at checkout.",
  brand: { "@type": "Brand", name: "Taxly" },
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/pricing`,
      description: "Federal return free. One state return free. W-2 income, standard deduction.",
    },
    {
      "@type": "Offer",
      name: "Deluxe",
      price: "39",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/pricing`,
      description:
        "Federal $39, state $29 each. Itemized deductions, mortgage interest, HSA, homeowners.",
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "69",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${BASE_URL}/pricing`,
      description:
        "Federal $69, state $29 each. Investments, crypto, rental income, self-employed (Schedule C).",
    },
  ],
};

export default async function PricingPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={pricingSchema} />
      <TrackView event="view_pricing" />
      <PricingClient />
    </>
  );
}

type RowValue = string | boolean;

interface ComparisonRow {
  label: string;
  free: RowValue;
  deluxe: RowValue;
  premium: RowValue;
}

function Cell({ value, included, notIncluded }: { value: RowValue; included: string; notIncluded: string }) {
  if (typeof value === "boolean") {
    return value
      ? <CheckCircle2 size={18} className="mx-auto text-green-500 dark:text-emerald-400" aria-label={included} />
      : <X size={18} className="mx-auto text-muted-foreground/60" aria-label={notIncluded} />;
  }
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

function PricingClient() {
  const t = useTranslations("pricing");
  const locale = useLocale();

  const plans = ["free", "deluxe", "premium"] as const;
  const faqKeys = ["q1", "q2", "q3", "q4", "q5"] as const;

  const rowKeys = [
    "federalReturn", "stateReturn", "eFile", "importPdf",
    "w2", "interest", "selfEmployed", "investments", "rental",
    "standardDed", "itemized", "hsa", "mortgage", "childCredit", "eitc",
    "emailSupport", "prioritySupport", "auditSupport",
  ] as const;

  const included = t("included");
  const notIncluded = t("notIncluded");

  const rows: ComparisonRow[] = rowKeys.map((key) => ({
    label: t(`comparison.rows.${key}.label`),
    free: t.raw(`comparison.rows.${key}.free`) as RowValue,
    deluxe: t.raw(`comparison.rows.${key}.deluxe`) as RowValue,
    premium: t.raw(`comparison.rows.${key}.premium`) as RowValue,
  }));

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-muted-foreground">{t("subheading")}</p>
      </div>

      {/* Plan cards */}
      <div className="mx-auto mt-16 max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const isDeluxe = plan === "deluxe";
            const features = t.raw(`${plan}.features`) as string[];
            return (
              <div
                key={plan}
 className={`relative rounded-2xl p-8 ${isDeluxe ? "bg-sky-600 text-white shadow-2xl" : "border bg-card shadow-sm"}`}
                              >
                {isDeluxe && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900">
                    {t(`${plan}.badge`)}
                  </span>
                )}
                <p className={`mb-1 text-sm font-semibold uppercase tracking-wider ${isDeluxe ? "text-sky-100" : "text-muted-foreground/80"}`}>
                  {t(`${plan}.name`)}
                </p>
                <div className="mb-1 flex items-end gap-1">
                  <span className="text-4xl font-bold">{t(`${plan}.federalPrice`)}</span>
                  <span className={`mb-1 text-sm ${isDeluxe ? "text-sky-100" : "text-muted-foreground/80"}`}> federal</span>
                </div>
                <p className={`mb-1 text-sm ${isDeluxe ? "text-sky-100" : "text-muted-foreground"}`}>{t(`${plan}.statePrice`)} state</p>
                <p className={`mb-6 text-sm ${isDeluxe ? "text-sky-100" : "text-muted-foreground"}`}>{t(`${plan}.description`)}</p>
                <ul className="mb-8 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${isDeluxe ? "text-sky-200" : "text-green-500 dark:text-emerald-400"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#waitlist"
 className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${isDeluxe ? "bg-white text-sky-700 hover:bg-sky-50" : "bg-sky-600 text-white hover:bg-sky-500"}`}
                >
                  {t(`${plan}.cta`)}
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Comparison table */}
      <div className="mx-auto mt-24 max-w-6xl px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t("comparison.heading")}</h2>
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left font-medium text-muted-foreground/80">Feature</th>
                {plans.map((plan) => (
                  <th key={plan} className={`px-6 py-4 text-center font-semibold ${plan === "deluxe" ? "text-primary" : "text-muted-foreground"}`}>
                    {t(`${plan}.name`)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                  <td className="px-6 py-3.5 text-muted-foreground">{row.label}</td>
                  <td className="px-6 py-3.5 text-center"><Cell value={row.free} included={included} notIncluded={notIncluded} /></td>
                  <td className="px-6 py-3.5 text-center"><Cell value={row.deluxe} included={included} notIncluded={notIncluded} /></td>
                  <td className="px-6 py-3.5 text-center"><Cell value={row.premium} included={included} notIncluded={notIncluded} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* The honest maths — three ways to file, including not paying us */}
      <div className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="mb-3 text-center text-2xl font-bold text-foreground">
          {t("honestMaths.heading")}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground">
          {t("honestMaths.intro")}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {(["directFile", "freetaxusa", "taxly"] as const).map((key) => (
            <div
              key={key}
              className={
                key === "taxly"
                  ? "rounded-2xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-500/30 dark:bg-sky-500/10"
                  : "rounded-2xl border bg-card p-6 shadow-sm"
              }
            >
              <h3 className="font-semibold">{t(`honestMaths.${key}.title`)}</h3>
              <p className="mt-1 text-2xl font-bold text-primary">
                {t(`honestMaths.${key}.price`)}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t(`honestMaths.${key}.text`)}
              </p>
              <Link
                href={`/${locale}${t(`honestMaths.${key}.href`)}`}
                className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
              >
                {t(`honestMaths.${key}.linkLabel`)}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing FAQ */}
      <div className="mx-auto mt-24 max-w-3xl px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-foreground">{t("faq.heading")}</h2>
        <div className="space-y-4">
          {faqKeys.map((key) => (
            <details key={key} className="group rounded-xl border bg-card px-6 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                {t(`faq.${key}.question`)}
                <ChevronDown size={18} className="shrink-0 text-muted-foreground/80 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`faq.${key}.answer`)}</p>
            </details>
          ))}
        </div>
      </div>

      {/* CTA — waitlist (pre-launch) */}
      <div id="waitlist" className="mx-auto mt-20 max-w-xl scroll-mt-24 px-6 text-center">
        <WaitlistForm
          placeholder="your@email.com"
          ctaLabel={locale === "es" ? "Unirme a la lista" : "Join the waitlist"}
          successMessage={locale === "es" ? "¡Estás en la lista! Revisa tu bandeja de entrada." : "You're on the list! Check your inbox."}
          errorMessage={locale === "es" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again."}
 className="justify-center"
        />
      </div>
    </div>
  );
}
