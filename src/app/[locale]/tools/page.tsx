import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  AlarmClock,
  BookOpenCheck,
  CalendarClock,
  Calculator,
  MonitorSmartphone,
  Scale,
} from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.tools", "tools");
}

type ToolKey = "refund" | "penalty" | "quarterly";

const TOOL_HREF: Record<ToolKey, string> = {
  refund: "/refund-estimator",
  penalty: "/tools/penalty-estimator",
  quarterly: "/tools/quarterly-tax",
};

const tools = [
  { key: "refund", icon: Calculator },
  { key: "penalty", icon: AlarmClock },
  { key: "quarterly", icon: CalendarClock },
] as const;

interface WhichRow {
  situation: string;
  tool: ToolKey;
  answer: string;
}

interface ExampleItem {
  tool: ToolKey;
  title: string;
  persona: string;
  steps: string[];
  resultLabel: string;
  result: string;
  note: string;
}

interface HowItem {
  title: string;
  text: string;
}

const HOW_ICONS = [MonitorSmartphone, BookOpenCheck, Scale];

export default async function ToolsPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "tools.hub" });
  const whichRows = t.raw("which.rows") as WhichRow[];
  const examples = t.raw("examples.items") as ExampleItem[];
  const howItems = t.raw("how.items") as HowItem[];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {t("eyebrow")}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground">{t("intro")}</p>

        {/* ── The three tools ── */}
        <div className="grid gap-6 sm:grid-cols-3">
          {tools.map(({ key, icon: Icon }) => {
            const needs = t.raw(`${key}.needs`) as string[];
            return (
              <Link
                key={key}
                href={TOOL_HREF[key]}
                className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={20} className="text-primary" aria-hidden />
                </div>
                <h2 className="text-lg font-semibold">{t(`${key}.title`)}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t(`${key}.text`)}</p>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                  {t("needsLabel")}
                </p>
                <ul className="mt-1.5 space-y-1">
                  {needs.map((need) => (
                    <li key={need} className="flex gap-1.5 text-xs text-muted-foreground">
                      <span className="text-primary" aria-hidden>
                        —
                      </span>
                      {need}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary">
                  {t("open")}
                  <ArrowRight size={14} className="transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>

        {/* ── Which tool do I need? ── */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">{t("which.heading")}</h2>
          <div className="divide-y overflow-hidden rounded-2xl border bg-card shadow-sm">
            {whichRows.map((row) => (
              <Link
                key={row.situation}
                href={TOOL_HREF[row.tool]}
                className="group flex flex-col gap-1 px-5 py-4 transition hover:bg-secondary sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="text-sm text-muted-foreground">{row.situation}</span>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-primary">
                  {row.answer}
                  <ArrowRight size={14} className="transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Practice: worked examples ── */}
        <section className="mt-20">
          <span className="mb-4 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
            <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
              {t("examples.eyebrow")}
            </span>
            <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
              {t("examples.chip")}
            </span>
          </span>
          <h2 className="mb-3 text-2xl font-bold tracking-tight">{t("examples.heading")}</h2>
          <p className="mb-8 max-w-2xl text-muted-foreground">{t("examples.intro")}</p>

          <div className="space-y-6">
            {examples.map((example, i) => (
              <div
                key={example.tool}
                className="overflow-hidden rounded-xl border-[1.5px] border-foreground bg-card shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20"
              >
                <div className="flex items-stretch border-b-[1.5px] border-foreground text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center border-r-[1.5px] border-foreground px-3 py-2 font-mono text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex items-center px-3 py-2">{example.title}</span>
                </div>
                <div className="grid gap-6 p-6 md:grid-cols-[1fr_17rem]">
                  <div>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {example.persona}
                    </p>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
                      {t("examples.enterLabel")}
                    </p>
                    <ul className="space-y-1.5">
                      {example.steps.map((step, j) => (
                        <li key={step} className="flex gap-2 text-sm text-foreground">
                          <span className="font-mono text-xs leading-5 text-primary" aria-hidden>
                            {j + 1}.
                          </span>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col rounded-lg bg-sky-50 p-4 dark:bg-sky-500/10">
                    <p className="text-xs font-medium text-muted-foreground">{example.resultLabel}</p>
                    <p className="mt-1 text-3xl font-bold tracking-tight text-primary">
                      {example.result}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {example.note}
                    </p>
                    <Link
                      href={TOOL_HREF[example.tool]}
                      className="group mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary"
                    >
                      {t("examples.tryIt")}
                      <ArrowRight
                        size={14}
                        className="transition group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How the estimates work ── */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">{t("how.heading")}</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {howItems.map((item, i) => {
              const Icon = HOW_ICONS[i] ?? Scale;
              return (
                <div key={item.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                    <Icon size={18} className="text-primary" aria-hidden />
                  </div>
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-10 text-sm text-muted-foreground">{t("note")}</p>
        </section>
      </div>
    </div>
  );
}
