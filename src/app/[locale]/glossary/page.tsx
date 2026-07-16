import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getGlossaryTerms, type GlossaryTerm } from "@/features/glossary/lib/glossary";
import { JsonLd } from "@/components/seo/json-ld";
import { BASE_URL, makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.glossary", "glossary");
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default async function GlossaryPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "glossary" });
  const terms = await getGlossaryTerms(locale);

  const definedTermSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${BASE_URL}/${locale}/glossary`,
    name: t("heading"),
    hasDefinedTerm: terms.map((term) => ({
      "@type": "DefinedTerm",
      "@id": `${BASE_URL}/${locale}/glossary#${term.slug}`,
      name: term.term,
      description: term.definition,
    })),
  };

  // Group alphabetically per locale (term names differ between en and es).
  const sorted = [...terms].sort((a, b) => a.term.localeCompare(b.term, locale));
  const groups = new Map<string, GlossaryTerm[]>();
  for (const term of sorted) {
    const letter = term.term.charAt(0).toUpperCase();
    const group = groups.get(letter);
    if (group) {
      group.push(term);
    } else {
      groups.set(letter, [term]);
    }
  }
  const letters = [...groups.keys()];

  return (
    <div className="py-20">
      <JsonLd data={definedTermSet} />
      <div className="mx-auto max-w-4xl px-6">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {t("termCount", { count: terms.length })}
          </span>
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mb-10 max-w-2xl text-lg text-muted-foreground">{t("intro")}</p>

        {/* A–Z jump index */}
        <nav aria-label={t("indexLabel")} className="mb-14 rounded-2xl border bg-card p-4 shadow-sm">
          <ul className="flex flex-wrap gap-1">
            {ALPHABET.map((letter) =>
              groups.has(letter) ? (
                <li key={letter}>
                  <a
                    href={`#letter-${letter}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold text-primary transition hover:bg-sky-50 dark:hover:bg-sky-500/10"
                  >
                    {letter}
                  </a>
                </li>
              ) : (
                <li key={letter} aria-hidden>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-muted-foreground/40">
                    {letter}
                  </span>
                </li>
              ),
            )}
          </ul>
        </nav>

        {/* Letter groups */}
        <div className="space-y-14">
          {letters.map((letter) => {
            const group = groups.get(letter) ?? [];
            return (
              <section key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md border-[1.5px] border-foreground bg-background font-mono text-lg font-bold text-primary shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
                    {letter}
                  </span>
                  <span className="h-px flex-1 bg-border" aria-hidden />
                  <a
                    href="#top"
                    className="text-xs font-medium text-muted-foreground/60 transition hover:text-foreground"
                  >
                    {t("backToTop")}
                  </a>
                </div>
                <dl className="grid gap-5 sm:grid-cols-2">
                  {group.map((term) => (
                    <div
                      key={term.slug}
                      id={term.slug}
                      className="flex scroll-mt-24 flex-col rounded-2xl border bg-card p-6 shadow-sm"
                    >
                      <dt className="font-semibold">
                        <a href={`#${term.slug}`} className="hover:text-primary">
                          {term.term}
                        </a>
                      </dt>
                      <dd className="mt-2 flex flex-1 flex-col text-sm leading-relaxed text-muted-foreground">
                        {term.definition}
                        {term.link && (
                          <Link
                            href={term.link.href}
                            className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary hover:underline"
                          >
                            {term.link.label}
                            <ArrowRight size={14} aria-hidden />
                          </Link>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl bg-sky-50 p-8 text-center dark:bg-sky-500/10">
          <h2 className="text-xl font-bold">{t("cta.heading")}</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">{t("cta.text")}</p>
          <Link
            href="/tools"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            {t("cta.button")}
            <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </div>
  );
}
