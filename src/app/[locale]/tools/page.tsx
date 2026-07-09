import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight, AlarmClock, CalendarClock, Calculator } from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.tools", "tools");
}

const tools = [
  { key: "refund", href: "/refund-estimator", icon: Calculator },
  { key: "penalty", href: "/tools/penalty-estimator", icon: AlarmClock },
  { key: "quarterly", href: "/tools/quarterly-tax", icon: CalendarClock },
] as const;

export default async function ToolsPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.hub" });

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {t("eyebrow")}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground">{t("intro")}</p>

        <div className="grid gap-6 sm:grid-cols-3">
          {tools.map(({ key, href, icon: Icon }) => (
            <Link
              key={key}
              href={href}
              className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                <Icon size={20} className="text-primary" aria-hidden />
              </div>
              <h2 className="text-lg font-semibold">{t(`${key}.title`)}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{t(`${key}.text`)}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                {t("open")}
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">{t("note")}</p>
      </div>
    </div>
  );
}
