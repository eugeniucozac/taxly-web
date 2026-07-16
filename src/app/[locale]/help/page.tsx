import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { makeMetadata, BASE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.help", "help");
}

/** Section → question keys in messages (help.<section>.<q>.question/.answer).
 * The visible accordion AND the FAQPage JSON-LD both render from these, so
 * the schema always matches the page in every locale. */
const SECTIONS = [
  { key: "gettingStarted", questions: ["q1", "q2", "q3", "q4"] },
  { key: "pricing", questions: ["q1", "q2", "q3"] },
  { key: "security", questions: ["q1", "q2", "q3"] },
  { key: "filing", questions: ["q1", "q2", "q3", "q4"] },
] as const;

export default async function HelpPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "help" });

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
      <HelpClient />
    </>
  );
}

function HelpClient() {
  const t = useTranslations("help");
  const locale = useLocale();

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-muted-foreground">{t("subheading")}</p>
      </div>

      {/* Sections */}
      <div className="mx-auto mt-20 max-w-3xl space-y-16 px-6">
        {SECTIONS.map(({ key, questions }) => (
          <div key={key}>
            <h2 className="mb-6 text-xl font-bold text-foreground">{t(`sections.${key}`)}</h2>
            <div className="space-y-3">
              {questions.map((q) => (
                <details key={q} className="group rounded-xl border bg-card px-6 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-foreground">
                    {t(`${key}.${q}.question`)}
                    <ChevronDown size={18} className="shrink-0 text-muted-foreground/80 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(`${key}.${q}.answer`)}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact prompt */}
      <div className="mx-auto mt-20 max-w-xl px-6 text-center">
        <p className="text-muted-foreground">
          {t("contactPrompt")}{" "}
          <Link href={`/${locale}/contact`} className="font-semibold text-primary hover:underline">
            {t("contactLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
