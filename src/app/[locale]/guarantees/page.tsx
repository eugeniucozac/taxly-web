import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.guarantees", "guarantees");
}

export default async function GuaranteesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <GuaranteesClient />;
}

function GuaranteesClient() {
  const t = useTranslations("guaranteesPage");
  const locale = useLocale();

  const guarantees = ["maxRefund", "accuracy", "audit"] as const;

  const badgeColors = [
    "bg-green-50 text-green-700 border-green-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/30",
    "bg-blue-50 text-blue-700 border-blue-200",
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:border-amber-500/30",
  ];

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-muted-foreground">{t("subheading")}</p>
      </div>

      {/* Guarantee cards */}
      <div className="mx-auto mt-20 max-w-4xl space-y-8 px-6">
        {guarantees.map((key, i) => (
          <div key={key} className="rounded-2xl border bg-card p-10 shadow-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                <Star size={22} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">{t(`${key}.title`)}</h2>
                <span className={`mt-1 inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${badgeColors[i] ?? badgeColors[0]}`}>
                  {t(`${key}.badge`)}
                </span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                  {t(`${key}.what`)}
                </p>
                <p className="text-muted-foreground">{t(`${key}.whatText`)}</p>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                  {t(`${key}.how`)}
                </p>
                <p className="text-muted-foreground">{t(`${key}.howText`)}</p>
              </div>
            </div>

            <p className="mt-6 rounded-xl bg-secondary px-5 py-3 text-sm text-muted-foreground/80">
              {t(`${key}.limits`)}
            </p>
          </div>
        ))}
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
