import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight, EyeOff } from "lucide-react";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { JsonLd } from "@/components/seo/json-ld";
import { makeMetadata, BASE_URL, generateLocaleStaticParams } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export { generateLocaleStaticParams as generateStaticParams };

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.freeTaxFiling", "free-tax-filing");
}

type Option = { name: string; tag: string; body: string; linkLabel: string; href: string };
type Faq = { q: string; a: string };

/** The honesty lander: "actually free tax filing". Every genuinely free
 * option named first, our own fine print stated plainly. */
export default async function FreeTaxFilingPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "freeTaxFiling" });

  const options = t.raw("options") as Option[];
  const hidesItems = t.raw("hidesItems") as string[];
  const faqs = t.raw("faq") as Faq[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: `${BASE_URL}/${locale}/free-tax-filing`,
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <main className="py-20">
      <JsonLd data={faqSchema} />

      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {t("eyebrow")}
        </p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">{t("heading")}</h1>
        <p className="mx-auto mb-14 max-w-2xl text-lg text-muted-foreground">{t("intro")}</p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-6 px-6 sm:grid-cols-2">
        {options.map((o) => (
          <div key={o.name} className="flex flex-col rounded-md border-[1.5px] border-foreground bg-background p-6 shadow-[4px_4px_0_0] shadow-sky-200 dark:shadow-sky-500/15">
            <span className="mb-3 self-start rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-500/15 dark:text-emerald-300">
              {o.tag}
            </span>
            <h2 className="mb-2 text-lg font-bold">{o.name}</h2>
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
            {o.href && (
              <Link
                href={`/${locale}${o.href}`}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {o.linkLabel}
                <ArrowRight size={14} aria-hidden />
              </Link>
            )}
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl px-6">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">{t("hidesHeading")}</h2>
        <ul className="space-y-3">
          {hidesItems.map((item) => (
            <li key={item} className="flex items-start gap-2 text-muted-foreground">
              <EyeOff size={18} className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-md border-[1.5px] border-foreground bg-background p-8 shadow-[4px_4px_0_0] shadow-sky-200 dark:shadow-sky-500/15">
          <h2 className="mb-3 text-2xl font-bold tracking-tight">{t("honestyHeading")}</h2>
          <p className="text-muted-foreground">{t("honestyBody")}</p>
        </div>

        <h2 className="mb-6 mt-14 text-center text-2xl font-bold tracking-tight">FAQ</h2>
        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group rounded-xl border bg-card px-5 py-4 open:shadow-sm">
              <summary className="cursor-pointer list-none text-sm font-semibold">{q}</summary>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>

        <div id="waitlist" className="mt-16 scroll-mt-24 rounded-2xl bg-sky-50 p-8 text-center dark:bg-sky-900/20">
          <h2 className="mb-2 text-xl font-bold tracking-tight">{t("ctaHeading")}</h2>
          <p className="mb-5 text-sm text-muted-foreground">{t("ctaBody")}</p>
          <WaitlistForm
            placeholder="your@email.com"
            ctaLabel={locale === "es" ? "Unirme a la lista" : "Join the waitlist"}
            successMessage={locale === "es" ? "¡Estás en la lista! Revisa tu bandeja de entrada." : "You're on the list! Check your inbox."}
            errorMessage={locale === "es" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again."}
            className="mx-auto max-w-md justify-center"
          />
        </div>
      </div>
    </main>
  );
}
