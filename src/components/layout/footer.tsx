"use client";

import { useTransition } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

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
    <div className="flex items-center gap-1 rounded-full border border-slate-200 p-1">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          disabled={isPending || locale === code}
          onClick={() => startTransition(() => router.replace(pathname, { locale: code }))}
          className={
            locale === code
              ? "rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white"
              : "rounded-full px-4 py-1 text-xs font-medium text-slate-500 transition hover:text-slate-900"
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
        { label: t("features"), href: `/${locale}/#features` },
        { label: t("howItWorks"), href: `/${locale}/how-it-works` },
        { label: t("pricing"), href: `/${locale}/pricing` },
        { label: t("changelog"), href: `/${locale}/changelog` },
      ],
    },
    {
      heading: t("company"),
      links: [
        { label: t("about"), href: `/${locale}/about` },
        { label: t("blog"), href: `/${locale}/blog` },
        { label: t("press"), href: `/${locale}/press` },
        { label: t("careers"), href: `/${locale}/careers` },
      ],
    },
    {
      heading: t("support"),
      links: [
        { label: t("help"), href: `/${locale}/help` },
        { label: t("contact"), href: `/${locale}/contact` },
        { label: t("status"), href: "/status" },
      ],
    },
    {
      heading: t("legal"),
      links: [
        { label: t("privacy"), href: `/${locale}/privacy-policy` },
        { label: t("terms"), href: `/${locale}/terms` },
        { label: t("cookies"), href: `/${locale}/cookies` },
      ],
    },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold" style={{ color: "#0ea5e9" }}>
              Taxly
            </span>
            <p className="mt-2 text-sm text-slate-500">{t("tagline")}</p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-slate-600 hover:text-slate-900"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center gap-3">
            <FooterLocaleSwitcher />
            <p className="text-center text-sm text-slate-400">
              {t("copyright", { year })}
            </p>
            <p className="text-center text-xs text-slate-300">{t("disclaimer")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
