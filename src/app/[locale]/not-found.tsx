import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

/** Branded, translated 404 inside the locale layout (navbar + footer render).
 * Wears the same Form-404 staging as the root shell — stacked paper, rotated
 * DO-NOT-FILE stamp, ink borders, dotted fill-in lines, filing-status checks,
 * signature strip — plus the destinations grid the root 404 offers. */

const LINKS = [
  { key: "refund", href: "/refund-estimator", free: true },
  { key: "freeFiling", href: "/free-tax-filing" },
  { key: "turbotax", href: "/turbotax-alternative" },
  { key: "quarterly", href: "/tools/quarterly-tax", free: true },
  { key: "pricing", href: "/pricing" },
  { key: "blog", href: "/blog" },
] as const;

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center">
      <div className="relative w-full max-w-sm" aria-hidden>
        <div className="absolute inset-0 rotate-2 translate-x-1.5 translate-y-1 rounded-md border-[1.5px] border-foreground/25 bg-secondary" />
        <div className="absolute -right-4 -top-3.5 z-10 rotate-6 rounded-md border-2 border-dashed border-sky-600 bg-background/90 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-sky-600 dark:border-sky-400 dark:text-sky-400">
          {t("card.stamp")}
        </div>
        <div className="relative rounded-md border-[1.5px] border-foreground bg-background text-left shadow-[4px_4px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <div className="flex items-stretch border-b-[1.5px] border-foreground">
            <div className="border-r-[1.5px] border-foreground px-3.5 py-2.5 font-mono text-[11px] font-bold leading-tight">
              {t("card.formWord")}
              <b className="block text-[22px] tracking-tight">404</b>
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center px-3.5 py-2">
              <b className="text-[15px]">{t("card.title")}</b>
              <small className="text-[11px] text-muted-foreground">{t("card.dept")}</small>
            </div>
            <div className="flex flex-col items-center justify-center border-l-[1.5px] border-foreground px-3 py-2 text-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
              {t("card.yearWord")}
              <b className="font-mono text-[13px] normal-case tracking-normal text-foreground">
                {t("card.yearFill")}
              </b>
            </div>
          </div>
          <div className="p-3.5 text-[13px]">
            {(["1", "2", "3", "4"] as const).map((n) => (
              <div
                key={n}
                className="flex justify-between gap-3 border-b border-dotted border-muted-foreground/40 py-1.5"
              >
                <span>{t(`card.line${n}`)}</span>
                <span className="whitespace-nowrap font-bold text-primary">
                  {t(`card.fill${n}`)}
                </span>
              </div>
            ))}
            <div className="pt-2 text-[12px] text-muted-foreground">
              <b className="mr-1.5 text-foreground">{t("card.status")}</b>
              <span className="mr-2.5 whitespace-nowrap">{t("card.statusSingle")}</span>
              <span className="mr-2.5 whitespace-nowrap">{t("card.statusJoint")}</span>
              <span className="whitespace-nowrap">{t("card.statusLost")}</span>
            </div>
          </div>
          <div className="flex items-stretch border-t-[1.5px] border-foreground text-[12px]">
            <div className="flex min-w-0 flex-1 items-baseline gap-1.5 px-3.5 py-2">
              <span>{t("card.sign")}</span>
              <span className="font-extrabold text-primary">✗</span>
              <span className="min-w-8 flex-1 border-b border-dotted border-muted-foreground/60" />
              <small className="whitespace-nowrap text-muted-foreground">
                {t("card.signNote")}
              </small>
            </div>
            <div className="flex items-center gap-1 border-l-[1.5px] border-foreground px-3.5 py-2 text-muted-foreground">
              {t("card.date")} <b className="text-primary">{t("card.dateFill")}</b>
            </div>
          </div>
        </div>
      </div>
      <h1 className="mt-9 text-3xl font-bold tracking-tight">{t("heading")}</h1>
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
      <div className="mt-12 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-[11px]">
        <span className="border-r-[1.5px] border-foreground px-3 py-1.5 font-extrabold uppercase tracking-[0.12em]">
          {t("destinations")}
        </span>
        <span className="px-3 py-1.5 text-muted-foreground">{t("destinationsNote")}</span>
      </div>
      <div className="mt-5 grid w-full gap-3.5 text-left sm:grid-cols-2 lg:grid-cols-3">
        {LINKS.map(({ key, href, ...link }) => (
          <Link
            key={key}
            href={href}
            className="block rounded-lg border bg-background p-4 transition hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-sky-500 hover:shadow-[3px_3px_0_0] hover:shadow-sky-200 dark:hover:shadow-sky-500/25"
          >
            <span className="block text-[15px] font-semibold text-foreground">
              {t(`links.${key}.title`)}
              {"free" in link && link.free && (
                <span className="ml-1.5 inline-block rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400">
                  {t("freeBadge")}
                </span>
              )}
            </span>
            <span className="mt-1 block text-[13px] leading-relaxed text-muted-foreground">
              {t(`links.${key}.desc`)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
