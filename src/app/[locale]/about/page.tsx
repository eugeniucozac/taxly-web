import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  Lock,
  Scale,
  Calculator,
  ShieldCheck,
} from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.about", "about");
}

const PRINCIPLE_ICONS = [Lock, Scale, Calculator, ShieldCheck];

interface Principle {
  title: string;
  text: string;
}
interface NumberTile {
  value: string;
  label: string;
}
interface TimelineStep {
  tag: string;
  title: string;
  text: string;
}

export default async function AboutPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });

  const principles = t.raw("principles.items") as Principle[];
  const numbers = t.raw("numbers.items") as NumberTile[];
  const steps = t.raw("timeline.steps") as TimelineStep[];

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
      </div>

      {/* Mission */}
      <div className="mx-auto mt-16 max-w-3xl px-6">
        <h2 className="mb-4 text-2xl font-bold text-foreground">{t("mission.heading")}</h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {t("mission.text")
            .split("\n\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
      </div>

      {/* By the numbers — honest stats in brand chrome */}
      <div className="mx-auto mt-16 max-w-4xl px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {numbers.map((tile) => (
            <div
              key={tile.label}
              className="rounded-xl border-[1.5px] border-foreground bg-card p-5 text-center shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20"
            >
              <p className="text-3xl font-bold tracking-tight text-primary">{tile.value}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{tile.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Principles */}
      <div className="mx-auto mt-20 max-w-4xl px-6">
        <h2 className="mb-3 text-2xl font-bold text-foreground">{t("principles.heading")}</h2>
        <p className="mb-8 max-w-2xl text-muted-foreground">{t("principles.intro")}</p>
        <div className="grid gap-6 sm:grid-cols-2">
          {principles.map((principle, i) => {
            const Icon = PRINCIPLE_ICONS[i] ?? ShieldCheck;
            return (
              <div key={principle.title} className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={18} className="text-primary" aria-hidden />
                </div>
                <h3 className="text-sm font-semibold">{principle.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {principle.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team / story */}
      <div className="mx-auto mt-20 max-w-3xl px-6">
        <h2 className="mb-4 text-2xl font-bold text-foreground">{t("team.heading")}</h2>
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          {t("team.text")
            .split("\n\n")
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
        <a
          href="https://getfinovo.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block font-semibold text-primary hover:underline"
        >
          {t("finovoLink")}
        </a>
      </div>

      {/* Where we are today */}
      <div className="mx-auto mt-20 max-w-3xl px-6">
        <h2 className="mb-8 text-2xl font-bold text-foreground">{t("timeline.heading")}</h2>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-[1.5px] border-foreground bg-background font-mono text-sm font-bold text-primary shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {i < steps.length - 1 && <span className="my-2 w-0.5 flex-1 bg-muted" aria-hidden />}
              </div>
              <div className={i < steps.length - 1 ? "pb-8" : ""}>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                  {step.tag}
                </p>
                <h3 className="mt-0.5 font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-20 max-w-xl px-6 text-center">
        <p className="mb-5 text-muted-foreground">{t("cta.note")}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg transition hover:bg-sky-500"
          >
            {t("cta.button")} <ArrowRight size={18} aria-hidden />
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-xl border bg-card px-6 py-3.5 text-sm font-semibold transition hover:bg-secondary"
          >
            {t("cta.tools")}
          </Link>
        </div>
      </div>
    </div>
  );
}
