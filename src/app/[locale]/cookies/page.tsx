import { setRequestLocale, getTranslations } from "next-intl/server";
import { makeMetadata } from "@/lib/metadata";
import { LegalShell } from "@/components/shared/legal-shell";
import { CookieChoice } from "@/components/shared/cookie-choice";
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
    <LegalShell
      locale={locale}
      doc="cookies"
      title={t("heading")}
      updated={t("lastUpdated")}
      intro={t("intro")}
    >
      <p className="mb-8 leading-relaxed text-muted-foreground">{t("consentNote")}</p>

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

      <CookieChoice />

      <p className="mt-8 text-sm leading-relaxed text-muted-foreground">{t("managing")}</p>
    </LegalShell>
  );
}
