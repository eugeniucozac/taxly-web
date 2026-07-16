import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ChevronDown,
  Hourglass,
  PlayCircle,
  Receipt,
  ShieldCheck,
  Send,
  ArrowRight,
  Calculator,
  AlarmClock,
  CalendarClock,
} from "lucide-react";
import { makeMetadata, BASE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.help", "help");
}

/** Section → question keys in messages (help.<section>.<q>.question/.answer).
 * The topic cards, the visible accordion, AND the FAQPage JSON-LD all render
 * from this one list, so the schema always matches the page in every locale. */
const SECTIONS = [
  { key: "beforeLaunch", Icon: Hourglass, questions: ["q1", "q2", "q3"] },
  { key: "gettingStarted", Icon: PlayCircle, questions: ["q1", "q2", "q3", "q4"] },
  { key: "pricing", Icon: Receipt, questions: ["q1", "q2", "q3"] },
  { key: "security", Icon: ShieldCheck, questions: ["q1", "q2", "q3"] },
  { key: "filing", Icon: Send, questions: ["q1", "q2", "q3", "q4"] },
] as const;

const TOOL_LINKS = [
  { key: "refundEstimator", href: "/refund-estimator", Icon: Calculator },
  { key: "penaltyEstimator", href: "/tools/penalty-estimator", Icon: AlarmClock },
  { key: "quarterlyTax", href: "/tools/quarterly-tax", Icon: CalendarClock },
] as const;

export default async function HelpPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "help" });
  const tNav = await getTranslations({ locale, namespace: "nav" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${BASE_URL}/${locale}/help`,
    mainEntity: SECTIONS.flatMap(({ key, questions }) =>
      questions.map((q) => ({
        "@type": "Question",
        name: t(`${key}.${q}.question`),
        acceptedAnswer: { "@type": "Answer", text: t(`${key}.${q}.answer`) },
      })),
    ),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
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
          {/* Same honesty register as the guarantees page: these answers describe the product being built */}
          <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
            {t("preLaunchNote")}
          </p>
        </div>

        {/* Browse by topic */}
        <div className="mx-auto mt-16 max-w-4xl px-6">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
            {t("browse")}
          </p>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {SECTIONS.map(({ key, Icon, questions }) => (
              <a
                key={key}
                href={`#${key}`}
                className="group rounded-2xl border bg-card p-5 text-center shadow-sm transition hover:shadow-md"
              >
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={18} className="text-primary" aria-hidden />
                </span>
                <span className="block text-sm font-semibold text-foreground">
                  {t(`sections.${key}`)}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {t("answerCount", { count: questions.length })}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div className="mx-auto mt-20 max-w-3xl space-y-16 px-6">
          {SECTIONS.map(({ key, Icon, questions }) => (
            <section key={key} id={key} className="scroll-mt-24">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={17} className="text-primary" aria-hidden />
                </span>
                <h2 className="text-xl font-bold text-foreground">{t(`sections.${key}`)}</h2>
              </div>
              <div className="space-y-3">
                {questions.map((q) => (
                  <details key={q} className="group rounded-xl border bg-card px-6 py-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-foreground">
                      {t(`${key}.${q}.question`)}
                      <ChevronDown
                        size={18}
                        className="shrink-0 text-muted-foreground/80 transition-transform group-open:rotate-180"
                        aria-hidden
                      />
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {t(`${key}.${q}.answer`)}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Free tools band — the answers that work today */}
        <div className="mx-auto mt-20 max-w-3xl px-6">
          <div className="rounded-2xl bg-sky-50 p-8 dark:bg-sky-500/10">
            <h2 className="mb-2 text-xl font-bold text-foreground">{t("toolsBand.heading")}</h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              {t("toolsBand.text")}
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {TOOL_LINKS.map(({ key, href, Icon }) => (
                <Link
                  key={key}
                  href={href}
                  className="group flex items-center gap-2.5 rounded-xl border border-sky-200 bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:border-ring dark:border-sky-500/30"
                >
                  <Icon size={16} className="shrink-0 text-primary" aria-hidden />
                  {tNav(key)}
                  <ArrowRight
                    size={14}
                    className="ml-auto shrink-0 text-muted-foreground/60 transition group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact card */}
        <div className="mx-auto mt-12 max-w-3xl px-6">
          <div className="rounded-2xl border bg-card p-8 text-center shadow-sm">
            <h2 className="mb-2 text-xl font-bold text-foreground">{t("contact.heading")}</h2>
            <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              {t("contact.text")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
            >
              {t("contact.button")} <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
