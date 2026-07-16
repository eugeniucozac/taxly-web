import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  Upload,
  MessageSquare,
  Send,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.howItWorks", "how-it-works");
}

const steps = [
  { key: "step1", Icon: Upload },
  { key: "step2", Icon: MessageSquare },
  { key: "step3", Icon: Send },
] as const;

interface NeedGroup {
  title: string;
  items: string[];
}

export default async function HowItWorksPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "howItWorks" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const needGroups = t.raw("whatYouNeed.groups") as NeedGroup[];
  const sources = t.raw("imports.sources") as string[];

  const related = [
    { label: tNav("guarantees"), href: "/guarantees" },
    { label: tNav("security"), href: "/security" },
    { label: tNav("pricing"), href: "/pricing" },
  ];

  return (
    <div className="py-20">
      {/* ── Header ── */}
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
        <p className="mx-auto mt-6 max-w-xl rounded-xl border bg-secondary px-5 py-3 text-sm leading-relaxed text-muted-foreground">
          {t("statusNote")}
        </p>
      </div>

      {/* ── Steps ── */}
      <div className="mx-auto mt-16 max-w-4xl px-6">
        <div className="space-y-10">
          {steps.map(({ key, Icon }, i) => {
            const details = t.raw(`${key}.details`) as string[];
            return (
              <div key={key} className="flex gap-6 sm:gap-8">
                <div className="hidden flex-col items-center sm:flex">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && <div className="mt-2 h-full w-0.5 bg-muted" />}
                </div>
                <div className="flex-1 overflow-hidden rounded-xl border-[1.5px] border-foreground bg-card shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
                  <div className="flex items-stretch border-b-[1.5px] border-foreground text-xs font-bold uppercase tracking-wider">
                    <span className="flex items-center border-r-[1.5px] border-foreground px-3 py-2 font-mono text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-center px-3 py-2">{t(`${key}.title`)}</span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                      <Icon size={20} className="text-primary" aria-hidden />
                    </div>
                    <p className="text-muted-foreground">{t(`${key}.description`)}</p>
                    <ul className="mt-5 space-y-2">
                      {details.map((detail) => (
                        <li key={detail} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── What you'll need ── */}
      <div className="mx-auto mt-24 max-w-4xl px-6">
        <div className="rounded-2xl border bg-card p-8 shadow-sm sm:p-10">
          <h2 className="mb-2 text-2xl font-bold text-foreground">{t("whatYouNeed.heading")}</h2>
          <p className="mb-8 text-sm text-muted-foreground">{t("whatYouNeed.intro")}</p>
          <div className="grid gap-8 md:grid-cols-3">
            {needGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <FileText size={14} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t pt-5 text-xs leading-relaxed text-muted-foreground/80">
            {t("whatYouNeed.tip")}
          </p>
        </div>
      </div>

      {/* ── Imports ── */}
      <div className="mx-auto mt-12 max-w-4xl px-6">
        <div className="rounded-2xl bg-sky-50 p-8 dark:bg-sky-500/10 sm:p-10">
          <h2 className="mb-3 text-xl font-bold text-foreground">{t("imports.heading")}</h2>
          <p className="mb-6 text-muted-foreground">{t("imports.description")}</p>
          <ul className="flex flex-wrap gap-2">
            {sources.map((source) => (
              <li
                key={source}
                className="rounded-lg border border-sky-200 bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground dark:border-sky-500/30"
              >
                {source}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="mx-auto mt-24 max-w-xl px-6 text-center">
        <h2 className="mb-3 text-2xl font-bold text-foreground">{t("cta.heading")}</h2>
        <p className="mb-6 text-muted-foreground">{t("cta.note")}</p>
        <Link
          href="/#waitlist"
          className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-500"
        >
          {t("cta.button")} <ArrowRight size={18} aria-hidden />
        </Link>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {t("relatedHeading")}
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
