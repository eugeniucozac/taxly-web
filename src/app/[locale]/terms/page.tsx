import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.terms", "terms");
}

export default async function TermsPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <TermsClient />;
}

function TermsClient() {
  const t = useTranslations("terms");

  const sectionKeys = ["service", "accuracy", "efile", "payment", "prohibited", "liability", "changes", "contact"] as const;

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <p className="mb-2 text-sm text-muted-foreground/80">{t("lastUpdated")}</p>
        <h1 className="mb-6 text-4xl font-bold text-foreground">{t("heading")}</h1>
        <p className="mb-12 text-muted-foreground">{t("intro")}</p>

        <div className="space-y-10">
          {sectionKeys.map((key) => (
            <section key={key}>
              <h2 className="mb-3 text-xl font-semibold text-foreground">{t(`sections.${key}.heading`)}</h2>
              <p className="text-muted-foreground">{t(`sections.${key}.text`)}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
