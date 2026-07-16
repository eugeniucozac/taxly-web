import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Scale } from "lucide-react";
import { getComparisons } from "@/features/compare/lib/compare";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.vs", "vs");
}

export default async function VsHubPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "vsHub" });
  const comparisons = await getComparisons(locale);

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {t("chip")}
          </span>
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mb-6 max-w-2xl text-lg text-muted-foreground">{t("intro")}</p>

        {/* Honest-status note: we are pre-launch; comparisons reflect planned launch pricing */}
        <div className="mb-12 rounded-xl border border-sky-200 bg-sky-50 p-4 text-sm text-sky-900 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
          {t("preLaunchNote")}
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {comparisons.map((c) => (
            <Link
              key={c.slug}
              href={`/vs/${c.slug}`}
              className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                <Scale size={20} className="text-primary" aria-hidden />
              </div>
              <h2 className="text-lg font-semibold">Taxly vs {c.rival}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {t("readComparison")}
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
