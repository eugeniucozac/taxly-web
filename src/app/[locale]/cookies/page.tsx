import { setRequestLocale, getTranslations } from "next-intl/server";
import { makeMetadata } from "@/lib/metadata";
import { LegalDraftBanner } from "@/components/shared/legal-draft-banner";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.cookies", "cookies");
}

interface CookieRow {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  category: string;
}

export default async function CookiesPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "cookiesPage" });
  const rows = t.raw("rows") as CookieRow[];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <LegalDraftBanner locale={locale} />
        <p className="mb-2 text-sm text-muted-foreground/80">{t("lastUpdated")}</p>
        <h1 className="mb-6 text-4xl font-bold">{t("heading")}</h1>
        <p className="mb-6 text-muted-foreground">{t("intro")}</p>
        <p className="mb-10 text-muted-foreground">{t("consentNote")}</p>

        <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
          <table className="w-full min-w-160 text-left text-sm">
            <thead>
              <tr className="border-b bg-secondary">
                <th className="px-4 py-3 font-semibold">{t("cols.name")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.provider")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.purpose")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.duration")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.category")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className="border-b align-top last:border-b-0">
                  <td className="px-4 py-3 font-mono text-xs">{row.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.provider}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.duration}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{t("managing")}</p>
      </div>
    </div>
  );
}
