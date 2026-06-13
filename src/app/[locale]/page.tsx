import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp,
  Home,
  Users,
  PiggyBank,
  FileText,
  Shield,
  Star,
  ChevronDown,
} from "lucide-react";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { JsonLd } from "@/components/seo/json-ld";
import { BASE_URL } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Taxly",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  url: BASE_URL,
  description:
    "File your US federal and state taxes in minutes — guided, plain-English, maximum refund.",
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      description: "Simple W-2 returns — federal free, one state free.",
    },
    {
      "@type": "Offer",
      name: "Deluxe",
      price: "29",
      priceCurrency: "USD",
      description: "Deductions, homeowners, HSA — $14 per state.",
    },
    {
      "@type": "Offer",
      name: "Premium",
      price: "59",
      priceCurrency: "USD",
      description: "Investments, crypto, rental, self-employed — $14 per state.",
    },
  ],
};

export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={softwareAppSchema} />
      <HomePageClient />
    </>
  );
}

function HomePageClient() {
  const t = useTranslations();
  const locale = useLocale();

  const situationIcons = [FileText, Zap, TrendingUp, Home, Users, PiggyBank] as const;
  const situationKeys = [
    "employee",
    "freelancer",
    "investor",
    "homeowner",
    "family",
    "retirement",
  ] as const;

  const plans = ["free", "deluxe", "premium"] as const;
  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50 pb-24 pt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700">
            {t("hero.badge")}
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
            {t("hero.heading")}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
            {t("hero.subheading")}
          </p>
          <WaitlistForm
            placeholder="your@email.com"
            ctaLabel={t("hero.cta")}
            successMessage={locale === "es" ? "¡Estás en la lista! Revisa tu bandeja de entrada." : "You're on the list! Check your inbox."}
            errorMessage={locale === "es" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again."}
            className="mx-auto max-w-lg justify-center"
          />
          <p className="mt-3 text-sm text-slate-400">{t("hero.noCard")}</p>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y border-slate-100 bg-white py-5">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6">
          {(["item1", "item2", "item3", "item4"] as const).map((key) => (
            <div key={key} className="flex items-center gap-2 text-sm font-medium text-slate-500">
              <Shield size={16} className="text-sky-500" />
              {t(`trust.${key}`)}
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {t("howItWorks.heading")}
            </h2>
            <p className="text-lg text-slate-500">{t("howItWorks.subheading")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {(["step1", "step2", "step3"] as const).map((step, i) => (
              <div key={step} className="relative rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-white"
                  style={{ backgroundColor: "#0ea5e9" }}
                >
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {t(`howItWorks.${step}.title`)}
                </h3>
                <p className="text-slate-500">{t(`howItWorks.${step}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Situations ── */}
      <section id="features" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {t("situations.heading")}
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-500">
              {t("situations.subheading")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {situationKeys.map((key, i) => {
              const Icon = situationIcons[i] ?? FileText;
              return (
                <div
                  key={key}
                  className="rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
                    <Icon size={20} className="text-sky-500" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-slate-900">
                    {t(`situations.${key}.title`)}
                  </h3>
                  <p className="text-sm text-slate-500">{t(`situations.${key}.description`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              {t("pricing.heading")}
            </h2>
            <p className="text-lg text-slate-500">{t("pricing.subheading")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => {
              const isDeluxe = plan === "deluxe";
              const features: string[] = t.raw(`pricing.${plan}.features`) as string[];
              return (
                <div
                  key={plan}
                  className={`relative rounded-2xl p-8 ${
                    isDeluxe
                      ? "text-white shadow-2xl"
                      : "border border-slate-200 bg-white shadow-sm"
                  }`}
                  style={isDeluxe ? { backgroundColor: "#0ea5e9" } : undefined}
                >
                  {isDeluxe && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900">
                      {t(`pricing.${plan}.badge`)}
                    </span>
                  )}
                  <p
                    className={`mb-1 text-sm font-semibold uppercase tracking-wider ${
                      isDeluxe ? "text-sky-100" : "text-slate-400"
                    }`}
                  >
                    {t(`pricing.${plan}.name`)}
                  </p>
                  <div className="mb-1 flex items-end gap-1">
                    <span className="text-4xl font-bold">
                      {t(`pricing.${plan}.federalPrice`)}
                    </span>
                    <span className={`mb-1 text-sm ${isDeluxe ? "text-sky-100" : "text-slate-400"}`}>
                      {" "}federal
                    </span>
                  </div>
                  <p className={`mb-1 text-sm ${isDeluxe ? "text-sky-100" : "text-slate-500"}`}>
                    {t(`pricing.${plan}.statePrice`)} state
                  </p>
                  <p className={`mb-6 text-sm ${isDeluxe ? "text-sky-100" : "text-slate-500"}`}>
                    {t(`pricing.${plan}.description`)}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {features.map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          size={16}
                          className={`mt-0.5 shrink-0 ${isDeluxe ? "text-sky-200" : "text-green-500"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/${locale}/signup`}
                    className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${
                      isDeluxe
                        ? "bg-white text-sky-600 hover:bg-sky-50"
                        : "text-white"
                    }`}
                    style={!isDeluxe ? { backgroundColor: "#0ea5e9" } : undefined}
                  >
                    {t(`pricing.${plan}.cta`)}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Guarantees ── */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            {t("guarantees.heading")}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {(["maxRefund", "accuracy", "audit"] as const).map((key) => (
              <div key={key} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-50">
                  <Star size={22} className="text-sky-500" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-slate-900">
                  {t(`guarantees.${key}.title`)}
                </h3>
                <p className="text-sm text-slate-500">{t(`guarantees.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 md:text-4xl">
            {t("faq.heading")}
          </h2>
          <div className="space-y-4">
            {faqKeys.map((key) => (
              <details
                key={key}
                className="group rounded-xl border border-slate-200 bg-white px-6 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                  {t(`faq.${key}.question`)}
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {t(`faq.${key}.answer`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20" style={{ backgroundColor: "#0ea5e9" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t("hero.heading")}
          </h2>
          <p className="mb-8 text-lg text-sky-100">{t("hero.noCard")}</p>
          <Link
            href={`/${locale}/signup`}
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-sky-600 shadow-lg transition hover:bg-sky-50"
          >
            {t("hero.cta")}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
