import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  ArrowRight,
  AlarmClock,
  CalendarClock,
  Calculator,
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
import { getLivePosts, type BlogPost } from "@/features/blog/lib/blog";
import { formatDate } from "@/lib/utils";
import type { LocalePageProps } from "@/types/page";

// The SoftwareApplication entity lives in the locale layout's site graph;
// the home page contributes the FAQ (built from the same messages the
// visible accordion renders, so the two can't drift).
const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;

export default async function HomePage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [tFaq, livePosts] = await Promise.all([
    getTranslations({ locale, namespace: "faq" }),
    getLivePosts(locale),
  ]);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_KEYS.map((key) => ({
      "@type": "Question",
      name: tFaq(`${key}.question`),
      acceptedAnswer: { "@type": "Answer", text: tFaq(`${key}.answer`) },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <HomePageClient latestPosts={livePosts.slice(0, 3)} />
    </>
  );
}

function HomePageClient({ latestPosts }: { latestPosts: BlogPost[] }) {
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
      <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-cyan-50 dark:from-sky-950/40 dark:via-background dark:to-cyan-950/30 pb-24 pt-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-1.5 text-sm font-medium text-sky-700 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
            {t("hero.badge")}
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
            {t("hero.heading")}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            {t("hero.subheading")}
          </p>
          <div id="waitlist" className="scroll-mt-24">
            <WaitlistForm
              placeholder="your@email.com"
              ctaLabel={t("hero.cta")}
              successMessage={locale === "es" ? "¡Estás en la lista! Revisa tu bandeja de entrada." : "You're on the list! Check your inbox."}
              errorMessage={locale === "es" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again."}
 className="mx-auto max-w-lg justify-center"
            />
          </div>
          <p className="mt-3 text-sm text-muted-foreground/80">{t("hero.noCard")}</p>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <section className="border-y bg-background py-5">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6">
          {(["item1", "item2", "item3", "item4"] as const).map((key) => (
            <div key={key} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Shield size={16} className="text-primary" />
              {t(`trust.${key}`)}
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("howItWorks.heading")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("howItWorks.subheading")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {(["step1", "step2", "step3"] as const).map((step, i) => (
              <div key={step} className="relative rounded-2xl border bg-card p-8 shadow-sm">
                <div
 className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white"
                >
                  {i + 1}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`howItWorks.${step}.title`)}
                </h3>
                <p className="text-muted-foreground">{t(`howItWorks.${step}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Situations ── */}
      <section id="features" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("situations.heading")}
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              {t("situations.subheading")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {situationKeys.map((key, i) => {
              const Icon = situationIcons[i] ?? FileText;
              return (
                <div
                  key={key}
 className="rounded-2xl border bg-card p-7 shadow-sm transition hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {t(`situations.${key}.title`)}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t(`situations.${key}.description`)}</p>
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
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              {t("pricing.heading")}
            </h2>
            <p className="text-lg text-muted-foreground">{t("pricing.subheading")}</p>
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
                      ? "bg-sky-600 text-white shadow-2xl"
                      : "border bg-card shadow-sm"
                  }`}
                                  >
                  {isDeluxe && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-4 py-1 text-xs font-bold text-amber-900">
                      {t(`pricing.${plan}.badge`)}
                    </span>
                  )}
                  <p
 className={`mb-1 text-sm font-semibold uppercase tracking-wider ${
                      isDeluxe ? "text-sky-100" : "text-muted-foreground/80"
                    }`}
                  >
                    {t(`pricing.${plan}.name`)}
                  </p>
                  <div className="mb-1 flex items-end gap-1">
                    <span className="text-4xl font-bold">
                      {t(`pricing.${plan}.federalPrice`)}
                    </span>
                    <span className={`mb-1 text-sm ${isDeluxe ? "text-sky-100" : "text-muted-foreground/80"}`}>
                      {" "}federal
                    </span>
                  </div>
                  <p className={`mb-1 text-sm ${isDeluxe ? "text-sky-100" : "text-muted-foreground"}`}>
                    {t(`pricing.${plan}.statePrice`)} state
                  </p>
                  <p className={`mb-6 text-sm ${isDeluxe ? "text-sky-100" : "text-muted-foreground"}`}>
                    {t(`pricing.${plan}.description`)}
                  </p>
                  <ul className="mb-8 space-y-3">
                    {features.map((f: string) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2
                          size={16}
 className={`mt-0.5 shrink-0 ${isDeluxe ? "text-sky-200" : "text-green-500 dark:text-emerald-400"}`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#waitlist"
 className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${
                      isDeluxe
                        ? "bg-white text-sky-700 hover:bg-sky-50"
                        : "bg-sky-600 text-white hover:bg-sky-500"
                    }`}
                >
                    {t(`pricing.${plan}.cta`)}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Free tools ── */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-3 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t("homeExtras.toolsHeading")}
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            {t("homeExtras.toolsSub")}
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {(
              [
                { key: "refund", href: "/refund-estimator", Icon: Calculator },
                { key: "penalty", href: "/tools/penalty-estimator", Icon: AlarmClock },
                { key: "quarterly", href: "/tools/quarterly-tax", Icon: CalendarClock },
              ] as const
            ).map(({ key, href, Icon }) => (
              <Link
                key={key}
                href={`/${locale}${href}`}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={20} className="text-primary" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-foreground">
                  {t(`tools.hub.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`tools.hub.${key}.text`)}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  {t("tools.hub.open")}
                  <ArrowRight size={14} className="transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantees ── */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t("guarantees.heading")}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {(["maxRefund", "accuracy", "audit"] as const).map((key) => (
              <div key={key} className="rounded-2xl border bg-card p-8 shadow-sm text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-50 dark:bg-sky-500/10">
                  <Star size={22} className="text-primary" />
                </div>
                <h3 className="mb-3 text-base font-semibold text-foreground">
                  {t(`guarantees.${key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">{t(`guarantees.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            {t("faq.heading")}
          </h2>
          <div className="space-y-4">
            {faqKeys.map((key) => (
              <details
                key={key}
 className="group rounded-xl border bg-card px-6 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                  {t(`faq.${key}.question`)}
                  <ChevronDown
                    size={18}
 className="shrink-0 text-muted-foreground/80 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`faq.${key}.answer`)}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest guides (live posts only) ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                {t("homeExtras.guidesHeading")}
              </h2>
              <p className="mt-2 max-w-xl text-muted-foreground">{t("homeExtras.guidesSub")}</p>
            </div>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              {t("homeExtras.guidesAll")}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs text-muted-foreground/80">{formatDate(post.date, locale)}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-sky-600 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            {t("hero.heading")}
          </h2>
          <p className="mb-8 text-lg text-sky-100">{t("hero.noCard")}</p>
          <WaitlistForm
            placeholder="your@email.com"
            ctaLabel={t("hero.cta")}
            successMessage={locale === "es" ? "¡Estás en la lista! Revisa tu bandeja de entrada." : "You're on the list! Check your inbox."}
            errorMessage={locale === "es" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again."}
 className="mx-auto max-w-lg justify-center"
          />
        </div>
      </section>
    </>
  );
}
