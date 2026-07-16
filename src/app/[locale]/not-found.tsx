import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

/** Branded, translated 404 inside the locale layout (navbar + footer render).
 * Wears the same Form-404 card as the root shell — ink border, form-number
 * cell, dotted fill-in lines, flat offset shadow. */
export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
      <div
        className="w-full max-w-sm rounded-md border-[1.5px] border-foreground bg-background text-left shadow-[4px_4px_0_0] shadow-sky-200 dark:shadow-sky-500/20"
        aria-hidden
      >
        <div className="flex items-stretch border-b-[1.5px] border-foreground">
          <div className="border-r-[1.5px] border-foreground px-3.5 py-2.5 text-[11px] font-bold leading-tight">
            {t("card.formWord")}
            <b className="block text-[22px] tracking-tight">404</b>
          </div>
          <div className="flex flex-col justify-center px-3.5 py-2">
            <b className="text-[15px]">{t("card.title")}</b>
            <small className="text-[11px] text-muted-foreground">{t("card.dept")}</small>
          </div>
        </div>
        <div className="p-3.5 text-[13px]">
          {(["1", "2", "3"] as const).map((n) => (
            <div
              key={n}
              className="flex justify-between gap-3 border-b border-dotted border-muted-foreground/40 py-1.5 last:border-b-0"
            >
              <span>{t(`card.line${n}`)}</span>
              <span className="font-bold text-primary">{t(`card.fill${n}`)}</span>
            </div>
          ))}
        </div>
      </div>
      <h1 className="mt-8 text-3xl font-bold tracking-tight">{t("heading")}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t("text")}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          {t("home")}
        </Link>
        <Link
          href="/tools"
          className="rounded-lg border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
        >
          {t("tools")}
        </Link>
      </div>
    </section>
  );
}
