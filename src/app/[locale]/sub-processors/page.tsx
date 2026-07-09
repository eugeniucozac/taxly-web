import { setRequestLocale, getTranslations } from "next-intl/server";
import { makeMetadata } from "@/lib/metadata";
import { LegalDraftBanner } from "@/components/shared/legal-draft-banner";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.subProcessors", "sub-processors");
}

interface ProcessorRow {
  name: string;
  purpose: string;
  data: string;
  location: string;
}

export default async function SubProcessorsPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "subProcessorsPage" });
  const rows = t.raw("rows") as ProcessorRow[];
  const planned = t.raw("plannedRows") as ProcessorRow[];

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <LegalDraftBanner locale={locale} />
        <p className="mb-2 text-sm text-muted-foreground/80">{t("lastUpdated")}</p>
        <h1 className="mb-6 text-4xl font-bold">{t("heading")}</h1>
        <p className="mb-10 text-muted-foreground">{t("intro")}</p>

        <h2 className="mb-4 text-xl font-semibold">{t("currentHeading")}</h2>
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
          <table className="w-full min-w-140 text-left text-sm">
            <thead>
              <tr className="border-b bg-secondary">
                <th className="px-4 py-3 font-semibold">{t("cols.name")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.purpose")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.data")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.location")}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className="border-b align-top last:border-b-0">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.data}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mb-4 mt-12 text-xl font-semibold">{t("plannedHeading")}</h2>
        <p className="mb-4 text-sm text-muted-foreground">{t("plannedIntro")}</p>
        <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
          <table className="w-full min-w-140 text-left text-sm">
            <thead>
              <tr className="border-b bg-secondary">
                <th className="px-4 py-3 font-semibold">{t("cols.name")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.purpose")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.data")}</th>
                <th className="px-4 py-3 font-semibold">{t("cols.location")}</th>
              </tr>
            </thead>
            <tbody>
              {planned.map((row) => (
                <tr key={row.name} className="border-b align-top last:border-b-0">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.purpose}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.data}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 rounded-xl border bg-secondary p-5 text-sm text-muted-foreground">
          {t("changeNotice")}
        </div>
      </div>
    </div>
  );
}
