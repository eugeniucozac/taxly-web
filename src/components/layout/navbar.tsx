"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/navigation";

function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const other = locale === "en" ? "es" : "en";

  function switchLocale() {
    startTransition(() => {
      router.replace(pathname, { locale: other });
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      aria-label={`Switch to ${other.toUpperCase()}`}
      className={cn(
        "rounded-md border border-slate-200 px-2.5 py-1 text-xs font-semibold tracking-wide text-slate-500 transition hover:border-slate-400 hover:text-slate-700",
        isPending && "opacity-50",
      )}
    >
      {other.toUpperCase()}
    </button>
  );
}

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t("features"), href: `/${locale}/#features` },
    { label: t("howItWorks"), href: `/${locale}/how-it-works` },
    { label: t("pricing"), href: `/${locale}/pricing` },
    { label: t("estimator"), href: `/${locale}/refund-estimator` },
    { label: t("blog"), href: `/${locale}/blog` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-xl font-bold" style={{ color: "#0ea5e9" }}>
            Taxly
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <Link
            href={`/${locale}/login`}
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            {t("signIn")}
          </Link>
          <Link
            href={`/${locale}/signup`}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition"
            style={{ backgroundColor: "#0ea5e9" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0284c7")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0ea5e9")}
          >
            {t("startForFree")}
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden transition-all duration-200 md:hidden",
          mobileOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 border-t border-slate-100 px-6 pb-4 pt-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm font-medium text-slate-700 hover:text-sky-600"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Language</span>
              <LocaleSwitcher />
            </div>
            <Link
              href={`/${locale}/login`}
              className="rounded-lg border border-slate-200 py-2 text-center text-sm font-medium text-slate-700"
            >
              {t("signIn")}
            </Link>
            <Link
              href={`/${locale}/signup`}
              className="rounded-lg py-2 text-center text-sm font-semibold text-white"
              style={{ backgroundColor: "#0ea5e9" }}
            >
              {t("startForFree")}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
