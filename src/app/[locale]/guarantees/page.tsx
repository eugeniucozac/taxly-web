import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { TrendingUp, ShieldCheck, LifeBuoy, ArrowRight } from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.guarantees", "guarantees");
}

const GUARANTEES = [
  {
    key: "maxRefund",
    Icon: TrendingUp,
    badgeClass:
      "bg-green-50 text-green-700 border-green-200 dark:bg-emerald-500/10 dark:text-emerald-200 dark:border-emerald-500/30",
  },
  {
    key: "accuracy",
    Icon: ShieldCheck,
    badgeClass:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-200 dark:border-sky-500/30",
  },
  {
    key: "audit",
    Icon: LifeBuoy,
    badgeClass:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-200 dark:border-amber-500/30",
  },
] as const;

export default async function GuaranteesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "guaranteesPage" });

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

      {/* Guarantee cards — certificate forms in the brand chrome */}
      <div className="mx-auto mt-16 max-w-4xl space-y-10 px-6">
        {GUARANTEES.map(({ key, Icon, badgeClass }, i) => (
          <div
            key={key}
            className="overflow-hidden rounded-xl border-[1.5px] border-foreground bg-card shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20"
          >
            <div className="flex items-stretch border-b-[1.5px] border-foreground text-xs font-bold uppercase tracking-wider">
              <span className="flex items-center border-r-[1.5px] border-foreground px-3 py-2 font-mono text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex items-center px-3 py-2">{t("cardLabel")}</span>
            </div>
            <div className="p-8 sm:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={22} className="text-primary" aria-hidden />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{t(`${key}.title`)}</h2>
                  <span
                    className={`mt-1 inline-block rounded-full border px-3 py-0.5 text-xs font-semibold ${badgeClass}`}
                  >
                    {t(`${key}.badge`)}
                  </span>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                    {t(`${key}.what`)}
                  </p>
                  <p className="leading-relaxed text-muted-foreground">{t(`${key}.whatText`)}</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground/80">
                    {t(`${key}.how`)}
                  </p>
                  <p className="leading-relaxed text-muted-foreground">{t(`${key}.howText`)}</p>
                </div>
              </div>

              <p className="mt-6 rounded-xl bg-secondary px-5 py-3 text-sm text-muted-foreground/80">
                {t(`${key}.limits`)}
              </p>
            </div>
          </div>
        ))}
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
      </div>
    </div>
  );
}
