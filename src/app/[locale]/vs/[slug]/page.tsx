import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Check, ChevronDown, Minus, X } from "lucide-react";
import { getComparisonBySlug, getComparisons } from "@/features/compare/lib/compare";
import { JsonLd } from "@/components/seo/json-ld";
import { BASE_URL, getAlternates, generateLocaleStaticParams } from "@/lib/metadata";
import type { LocaleSlugPageProps } from "@/types/page";

// Closed set: unknown slugs must 404, not attempt a dynamic render.
export const dynamicParams = false;

export async function generateStaticParams() {
  const results: { locale: string; slug: string }[] = [];
  for (const { locale } of generateLocaleStaticParams()) {
    const comparisons = await getComparisons(locale);
    for (const c of comparisons) results.push({ locale, slug: c.slug });
  }
  return results;
}

export async function generateMetadata({ params }: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  const c = await getComparisonBySlug(slug, locale);
  if (!c) return {};
  return {
    title: { absolute: c.title },
    description: c.description,
    alternates: getAlternates(locale, `vs/${slug}`),
    openGraph: { title: c.title, description: c.description },
  };
}

function WinnerMark({ winner, side }: { winner: string; side: "taxly" | "rival" }) {
  if (winner === "tie")
    return <Minus size={14} className="inline text-muted-foreground/60" aria-label="tie" />;
  return winner === side ? (
    <Check size={14} className="inline text-green-600 dark:text-emerald-400" aria-label="wins" />
  ) : (
    <X size={14} className="inline text-muted-foreground/40" aria-label="loses" />
  );
}

export default async function ComparisonPage({ params }: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const c = await getComparisonBySlug(slug, locale);
  if (!c) notFound();
  const t = await getTranslations({ locale, namespace: "vsHub" });
  const others = (await getComparisons(locale)).filter((o) => o.slug !== slug);

  // Honest scoreboard — counts every row, including the ones the rival wins.
  const score = { taxly: 0, rival: 0, tie: 0 };
  for (const row of c.rows) score[row.winner] += 1;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Taxly", item: `${BASE_URL}/${locale}` },
      { "@type": "ListItem", position: 2, name: t("heading"), item: `${BASE_URL}/${locale}/vs` },
      {
        "@type": "ListItem",
        position: 3,
        name: `Taxly vs ${c.rival}`,
        item: `${BASE_URL}/${locale}/vs/${c.slug}`,
      },
    ],
  };

  return (
    <div className="py-20">
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <div className="mx-auto max-w-4xl px-6">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {t("chip")}
          </span>
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Taxly vs {c.rival}</h1>
        <p className="mb-8 max-w-2xl text-lg text-muted-foreground">{c.description}</p>

        {/* The honest verdict, before anything else */}
        <div className="mb-6 rounded-2xl border border-amber-300 bg-amber-50 p-6 dark:border-amber-500/30 dark:bg-amber-500/10">
          <h2 className="text-lg font-bold text-amber-900 dark:text-amber-200">{c.verdictTitle}</h2>
          <p className="mt-2 text-sm leading-relaxed text-amber-900/90 dark:text-amber-100/90">
            {c.verdict}
          </p>
        </div>

        {/* Pre-launch honesty note */}
        <div className="mb-12 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
          {t("preLaunchNote")}
        </div>

        {/* Honest scoreboard — the rival's wins counted in public */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
            <Check size={13} aria-hidden />
            {t("scoreTaxly", { count: score.taxly })}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <Check size={13} aria-hidden />
            {t("scoreRival", { rival: c.rival, count: score.rival })}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-lg border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground/70">
            <Minus size={13} aria-hidden />
            {t("scoreTies", { count: score.tie })}
          </span>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
          <table className="w-full min-w-160 text-left text-sm">
            <thead>
              <tr className="border-b bg-secondary">
                <th className="px-5 py-3.5 font-semibold">{t("tableFeature")}</th>
                <th className="bg-sky-50 px-5 py-3.5 font-semibold text-primary dark:bg-sky-500/10">
                  Taxly
                </th>
                <th className="px-5 py-3.5 font-semibold">{c.rival}</th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row) => (
                <tr key={row.feature} className="border-b last:border-b-0">
                  <td className="px-5 py-3.5 font-medium">{row.feature}</td>
                  <td className="bg-sky-50/60 px-5 py-3.5 text-muted-foreground dark:bg-sky-500/5">
                    <WinnerMark winner={row.winner} side="taxly" /> {row.taxly}
                  </td>
                  <td className="px-5 py-3.5 text-muted-foreground">
                    <WinnerMark winner={row.winner} side="rival" /> {row.rival}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Where they win / stay with / Taxly fits */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">{t("theyWin", { rival: c.rival })}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.theyWin.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check size={15} className="mt-0.5 shrink-0 text-green-600 dark:text-emerald-400" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="font-semibold">{t("stayWith", { rival: c.rival })}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.stayWith.map((item) => (
                <li key={item} className="flex gap-2">
                  <ArrowRight size={15} className="mt-0.5 shrink-0 text-muted-foreground/60" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6 dark:border-sky-500/30 dark:bg-sky-500/10">
            <h3 className="font-semibold">{t("taxlyFits")}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.taxlyFits.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check size={15} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">{t("faqHeading")}</h2>
          <div className="space-y-3">
            {c.faqs.map((f) => (
              <details key={f.q} className="group rounded-xl border bg-card px-6 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold">
                  {f.q}
                  <ChevronDown
                    size={16}
                    className="shrink-0 text-muted-foreground/80 transition-transform group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* More comparisons — no dead ends */}
        <div className="mt-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {t("more")}
          </p>
          <div className="flex flex-wrap gap-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/vs/${o.slug}`}
                className="rounded-lg border px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-ring hover:text-foreground"
              >
                Taxly vs {o.rival}
              </Link>
            ))}
            <Link
              href="/vs"
              className="inline-flex items-center gap-1 rounded-lg border px-3.5 py-2 text-sm font-medium text-primary transition hover:border-ring"
            >
              {t("allLink")}
              <ArrowRight size={13} aria-hidden />
            </Link>
          </div>
        </div>

        {/* Keep going */}
        <div className="mt-10 rounded-2xl bg-sky-50 p-8 text-center dark:bg-sky-500/10">
          <h2 className="text-xl font-bold">{t("cta.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">{t("cta.text")}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/#waitlist"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              {t("cta.button")}
              <ArrowRight size={16} aria-hidden />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-semibold transition hover:bg-secondary"
            >
              {t("cta.pricing")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
