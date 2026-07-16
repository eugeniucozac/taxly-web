import { setRequestLocale, getTranslations } from "next-intl/server";
import { makeMetadata } from "@/lib/metadata";
import { LegalShell } from "@/components/shared/legal-shell";
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

function ProcessorTable({
  rows,
  cols,
}: {
  rows: ProcessorRow[];
  cols: { name: string; purpose: string; data: string; location: string };
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border bg-card shadow-sm">
      <table className="w-full min-w-140 text-left text-sm">
        <thead>
          <tr className="border-b bg-secondary">
            <th className="px-4 py-3 font-semibold">{cols.name}</th>
            <th className="px-4 py-3 font-semibold">{cols.purpose}</th>
            <th className="px-4 py-3 font-semibold">{cols.data}</th>
            <th className="px-4 py-3 font-semibold">{cols.location}</th>
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
  );
}

export default async function SubProcessorsPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "subProcessorsPage" });
  const rows = t.raw("rows") as ProcessorRow[];
  const planned = t.raw("plannedRows") as ProcessorRow[];
  const cols = {
    name: t("cols.name"),
    purpose: t("cols.purpose"),
    data: t("cols.data"),
    location: t("cols.location"),
  };

  return (
    <LegalShell
      locale={locale}
      doc="subProcessors"
      title={t("heading")}
      updated={t("lastUpdated")}
      intro={t("intro")}
    >
      <h2 className="mb-4 text-xl font-semibold">{t("currentHeading")}</h2>
      <ProcessorTable rows={rows} cols={cols} />

      <h2 className="mb-4 mt-12 text-xl font-semibold">{t("plannedHeading")}</h2>
      <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{t("plannedIntro")}</p>
      <ProcessorTable rows={planned} cols={cols} />

      <div className="mt-8 rounded-xl border bg-secondary p-5 text-sm leading-relaxed text-muted-foreground">
        {t("changeNotice")}
      </div>
    </LegalShell>
  );
}
