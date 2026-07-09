import { getTranslations } from "next-intl/server";

/** Amber "draft — needs counsel review" banner shown on every legal page until reviewed. */
export async function LegalDraftBanner({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "legal" });
  return (
    <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
      {t("draftBanner")}
    </div>
  );
}
