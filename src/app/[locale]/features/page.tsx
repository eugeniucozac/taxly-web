import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  FileText,
  Zap,
  TrendingUp,
  Home,
  Users,
  PiggyBank,
  CheckCircle2,
} from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.features", "features");
}

const SITUATIONS = [
  { key: "employee", Icon: FileText },
  { key: "freelancer", Icon: Zap },
  { key: "investor", Icon: TrendingUp },
  { key: "homeowner", Icon: Home },
  { key: "family", Icon: Users },
  { key: "retirement", Icon: PiggyBank },
] as const;

export default async function FeaturesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "featuresPage" });
  const tSituations = await getTranslations({ locale, namespace: "situations" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const imports = t.raw("imports") as string[];
  const allForms = t.raw("allForms") as string[];

  const related = [
    { label: tNav("howItWorks"), href: "/how-it-works" },
    { label: tNav("pricing"), href: "/pricing" },
    { label: tNav("guarantees"), href: "/guarantees" },
  ];

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {t("chip")}
          </span>
        </span>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-muted-foreground">{t("subheading")}</p>
        <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-sky-200 bg-sky-50 p-4 text-left text-sm text-sky-900 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
          {t("preLaunchNote")}
        </p>
      </div>

      {/* Situation cards */}
      <div className="mx-auto mt-16 max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SITUATIONS.map(({ key, Icon }) => {
            const forms = tSituations.raw(`${key}.forms`) as string[];
            return (
              <div key={key} className="flex flex-col rounded-2xl border bg-card p-8 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={22} className="text-primary" aria-hidden />
                </div>
                <h2 className="mb-2 text-lg font-semibold text-foreground">
                  {tSituations(`${key}.title`)}
                </h2>
                <p className="mb-5 text-sm text-muted-foreground">
                  {tSituations(`${key}.description`)}
                </p>
                <p className="mb-2 mt-auto text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {t("coversLabel")}
                </p>
                <ul className="space-y-1.5">
                  {forms.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2
                        size={13}
                        className="shrink-0 text-green-500 dark:text-emerald-400"
                        aria-hidden
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Supported forms */}
      <div className="mx-auto mt-24 max-w-5xl px-6">
        <h2 className="mb-2 text-2xl font-bold text-foreground">{t("formsHeading")}</h2>
        <p className="mb-8 text-sm text-muted-foreground">
          {t("formsCount", { count: allForms.length })}
        </p>
        <div className="flex flex-wrap gap-2">
          {allForms.map((form) => (
            <span
              key={form}
              className="rounded-lg border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground shadow-sm"
            >
              {form}
            </span>
          ))}
        </div>
      </div>

      {/* Import sources */}
      <div className="mx-auto mt-16 max-w-5xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-foreground">{t("importsHeading")}</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {imports.map((imp) => (
            <div key={imp} className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <CheckCircle2 size={16} className="shrink-0 text-primary" aria-hidden />
              <span className="text-sm text-muted-foreground">{imp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-20 max-w-xl px-6 text-center">
        <p className="mb-5 text-muted-foreground">{t("cta.note")}</p>
        <Link
          href="/#waitlist"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-500"
        >
          {t("cta.button")} <ArrowRight size={18} aria-hidden />
        </Link>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {t("relatedLabel")}
          </span>
          {related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-ring hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
