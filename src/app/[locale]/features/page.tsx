import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, FileText, Zap, TrendingUp, Home, Users, PiggyBank, CheckCircle2 } from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.features", "features");
}

export default async function FeaturesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <FeaturesClient />;
}

function FeaturesClient() {
  const t = useTranslations();
  const locale = useLocale();

  const situationIcons = [FileText, Zap, TrendingUp, Home, Users, PiggyBank] as const;
  const situationKeys = ["employee", "freelancer", "investor", "homeowner", "family", "retirement"] as const;

  const imports: string[] = t.raw("featuresPage.imports") as string[];
  const allForms: string[] = t.raw("featuresPage.allForms") as string[];

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("featuresPage.heading")}</h1>
        <p className="text-lg text-muted-foreground">{t("featuresPage.subheading")}</p>
      </div>

      {/* Situation cards */}
      <div className="mx-auto mt-20 max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {situationKeys.map((key, i) => {
            const Icon = situationIcons[i] ?? FileText;
            const forms: string[] = t.raw(`situations.${key}.forms`) as string[];
            return (
              <div key={key} className="rounded-2xl border bg-card p-8 shadow-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={22} className="text-primary" />
                </div>
                <h2 className="mb-2 text-lg font-semibold text-foreground">{t(`situations.${key}.title`)}</h2>
                <p className="mb-5 text-sm text-muted-foreground">{t(`situations.${key}.description`)}</p>
                <ul className="space-y-1.5">
                  {forms.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 size={13} className="shrink-0 text-green-400 dark:text-emerald-400" />
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
        <h2 className="mb-10 text-2xl font-bold text-foreground">{t("featuresPage.formsHeading")}</h2>
        <div className="flex flex-wrap gap-2">
          {allForms.map((form) => (
            <span key={form} className="rounded-lg border bg-card px-3 py-1.5 text-sm text-muted-foreground shadow-sm">
              {form}
            </span>
          ))}
        </div>
      </div>

      {/* Import sources */}
      <div className="mx-auto mt-16 max-w-5xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-foreground">{t("featuresPage.importsHeading")}</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {imports.map((imp) => (
            <div key={imp} className="flex items-center gap-3 rounded-xl border bg-card p-4 shadow-sm">
              <CheckCircle2 size={16} className="shrink-0 text-primary" />
              <span className="text-sm text-muted-foreground">{imp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-20 max-w-xl px-6 text-center">
        <Link
          href={`/${locale}#waitlist`}
 className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-lg transition bg-sky-600 hover:bg-sky-500"
        >
          Start for free <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
