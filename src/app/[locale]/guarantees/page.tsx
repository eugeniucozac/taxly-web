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
    "bg-green-50 text-green-700 border-green-200",
    "bg-blue-50 text-blue-700 border-blue-200",
    "bg-amber-50 text-amber-700 border-amber-200",
  ];

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-slate-500">{t("subheading")}</p>
      </div>

      {/* Guarantee cards */}
      <div className="mx-auto mt-20 max-w-4xl space-y-8 px-6">
        {guarantees.map((key, i) => (
          <div key={key} className="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                <Star size={22} className="text-sky-500" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{t(`${key}.title`)}</h2>
                <span className={`mt-1 inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${badgeColors[i] ?? badgeColors[0]}`}>
                  {t(`${key}.badge`)}
                </span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {t(`${key}.what`)}
                </p>
                <p className="text-slate-600">{t(`${key}.whatText`)}</p>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
                  {t(`${key}.how`)}
                </p>
                <p className="text-slate-600">{t(`${key}.howText`)}</p>
              </div>
            </div>

            <p className="mt-6 rounded-xl bg-slate-50 px-5 py-3 text-sm text-slate-400">
              {t(`${key}.limits`)}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mx-auto mt-20 max-w-xl px-6 text-center">
        <Link
          href={`/${locale}#waitlist`}
          className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-lg transition"
          style={{ backgroundColor: "#0ea5e9" }}
        >
          Start for free <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
