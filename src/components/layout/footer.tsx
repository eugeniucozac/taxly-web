"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";

function FooterLocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ] as const;

  return (
    <div className="flex items-center gap-1 rounded-full border p-1">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          disabled={isPending || locale === code}
          onClick={() => startTransition(() => router.replace(pathname, { locale: code }))}
 className={
            locale === code
              ? "rounded-full bg-foreground px-4 py-1 text-xs font-semibold text-background"
              : "rounded-full px-4 py-1 text-xs font-medium text-muted-foreground transition hover:text-foreground"
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  const columns = [
    {
      heading: t("product"),
      links: [
        { label: t("features"), href: `/${locale}/features` },
        { label: t("howItWorks"), href: `/${locale}/how-it-works` },
        { label: t("pricing"), href: `/${locale}/pricing` },
        { label: t("guarantees"), href: `/${locale}/guarantees` },
        { label: t("security"), href: `/${locale}/security` },
      ],
    },
    {
      heading: t("tools"),
      links: [
        { label: t("refundEstimator"), href: `/${locale}/refund-estimator` },
        { label: t("penaltyEstimator"), href: `/${locale}/tools/penalty-estimator` },
        { label: t("quarterlyTax"), href: `/${locale}/tools/quarterly-tax` },
        { label: t("allTools"), href: `/${locale}/tools` },
      ],
    },
    {
      heading: t("compare"),
      links: [
        { label: t("vsTurbotax"), href: `/${locale}/vs/turbotax` },
        { label: t("vsFreetaxusa"), href: `/${locale}/vs/freetaxusa` },
        { label: t("vsDirectFile"), href: `/${locale}/vs/irs-direct-file` },
        { label: t("turbotaxAlternative"), href: `/${locale}/turbotax-alternative` },
        { label: t("freeTaxFiling"), href: `/${locale}/free-tax-filing` },
        { label: t("glossary"), href: `/${locale}/glossary` },
      ],
    },
    {
      heading: t("resources"),
      links: [
        { label: t("blog"), href: `/${locale}/blog` },
        { label: t("help"), href: `/${locale}/help` },
        { label: t("about"), href: `/${locale}/about` },
        { label: t("contact"), href: `/${locale}/contact` },
      ],
    },
    {
      heading: t("legal"),
      links: [
        { label: t("privacy"), href: `/${locale}/privacy-policy` },
        { label: t("terms"), href: `/${locale}/terms` },
        { label: t("cookies"), href: `/${locale}/cookies` },
        { label: t("subProcessors"), href: `/${locale}/sub-processors` },
      ],
    },
  ];

  return (
    <footer className="border-t bg-secondary">
      {/* CTA strip — styled as the brand's form card: ink border, offset shadow, dotted fill-in rule */}
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 rounded-md border-[1.5px] border-foreground bg-background p-8 shadow-[4px_4px_0_0] shadow-sky-200 dark:shadow-sky-500/15 sm:flex-row sm:items-center">
            <div className="min-w-0">
              <h2 className="text-2xl font-bold tracking-tight">{t("ctaHeadline")}</h2>
              <p className="mt-2 border-b border-dotted border-muted-foreground/40 pb-1 text-sm text-muted-foreground">
                {t("ctaNote")}
              </p>
            </div>
            <Link
              href={`/${locale}#waitlist`}
 className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              {t("ctaButton")}
              <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-7">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">{t("tagline")}</p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <BadgeCheck size={14} className="text-primary" aria-hidden />
              {t("badge")}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
 className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      <ArrowRight
                        size={12}
                        aria-hidden
 className="-ml-4 opacity-0 transition-all group-hover:-ml-0.5 group-hover:opacity-100"
                      />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center gap-3">
            <FooterLocaleSwitcher />
            <p className="text-center text-sm text-muted-foreground/80">
              {t("copyright", { year })}
            </p>
            <p className="max-w-2xl text-center text-xs text-muted-foreground/60">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
