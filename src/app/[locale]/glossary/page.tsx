import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getGlossaryTerms } from "@/features/glossary/lib/glossary";
import { JsonLd } from "@/components/seo/json-ld";
import { BASE_URL, makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.glossary", "glossary");
}

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

  return (
    <div className="py-20">
      <JsonLd data={definedTermSet} />
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {t("eyebrow")}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight">{t("heading")}</h1>
        <p className="mb-12 max-w-2xl text-lg text-muted-foreground">{t("intro")}</p>

        <dl className="space-y-6">
          {terms.map((term) => (
            <div
              key={term.slug}
              id={term.slug}
              className="scroll-mt-24 rounded-2xl border bg-card p-6 shadow-sm"
            >
              <dt className="text-lg font-semibold">{term.term}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {term.definition}
                {term.link && (
                  <Link
                    href={term.link.href}
                    className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    {term.link.label}
                    <ArrowRight size={14} aria-hidden />
                  </Link>
                )}
              </dd>
            </div>
          ))}
        </dl>

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
