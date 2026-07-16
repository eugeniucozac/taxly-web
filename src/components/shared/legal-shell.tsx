import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { LegalDraftBanner } from "@/components/shared/legal-draft-banner";

export type LegalDocKey = "privacy" | "terms" | "cookies" | "subProcessors";

const DOC_PATHS: Record<LegalDocKey, string> = {
  privacy: "/privacy-policy",
  terms: "/terms",
  cookies: "/cookies",
  subProcessors: "/sub-processors",
};

/**
 * The shared frame for the four legal documents: draft banner, the form-chip
 * eyebrow (brand chrome), title + honest last-updated date, an optional
 * "on this page" contents card, the document body, and cross-links to the
 * other legal docs so the family reads as one set.
 */
export async function LegalShell({
  locale,
  doc,
  title,
  updated,
  intro,
  toc,
  children,
}: {
  locale: string;
  doc: LegalDocKey;
  title: string;
  updated: string;
  intro?: string;
  toc?: { id: string; label: string }[];
  children: React.ReactNode;
}) {
  const t = await getTranslations({ locale, namespace: "legal" });
  const related = (Object.keys(DOC_PATHS) as LegalDocKey[]).filter((k) => k !== doc);

  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <LegalDraftBanner locale={locale} />

        {/* form-chip eyebrow — the brand chrome, legal edition */}
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">{title}</span>
        </span>

        <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground">{title}</h1>
        <p className="mb-6 text-sm text-muted-foreground/80">{updated}</p>
        {intro ? <p className="mb-10 text-lg leading-relaxed text-muted-foreground">{intro}</p> : null}

        {toc && toc.length > 0 ? (
          <nav
            aria-label={t("onThisPage")}
            className="mb-12 rounded-xl border bg-card p-5 shadow-sm"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              {t("onThisPage")}
            </p>
            <ol className="grid gap-1.5 text-sm sm:grid-cols-2">
              {toc.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="inline-flex gap-2 text-muted-foreground transition hover:text-foreground"
                  >
                    <span className="font-mono text-xs leading-5 text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        {children}

        <div className="mt-16 border-t pt-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
            {t("related")}
          </p>
          <ul className="flex flex-wrap gap-2">
            {related.map((k) => (
              <li key={k}>
                <Link
                  href={`/${locale}${DOC_PATHS[k]}`}
                  className="inline-block rounded-lg border px-3.5 py-2 text-sm font-medium text-muted-foreground transition hover:border-ring hover:text-foreground"
                >
                  {t(`links.${k}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
