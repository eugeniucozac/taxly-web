"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";

type NavItem = { label: string; desc: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

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
        "rounded-md border px-2.5 py-1 text-xs font-semibold tracking-wide text-muted-foreground transition hover:border-ring hover:text-foreground",
        isPending && "opacity-50",
      )}
    >
      {other.toUpperCase()}
    </button>
  );
}

function NavDropdown({
  group,
  locale,
  active,
}: {
  group: NavGroup;
  locale: string;
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on navigation — state adjusted during render (lint-endorsed pattern).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex items-center gap-1 py-2 text-sm font-medium transition",
          active || open ? "text-foreground" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {group.label}
        <ChevronDown
          size={14}
          aria-hidden
          className={cn("transition-transform duration-200", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-2 transition duration-150",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
        )}
      >
        <ul className="rounded-xl border bg-background p-2 shadow-lg shadow-foreground/5">
          {group.items.map((it) => (
            <li key={it.href}>
              <Link
                href={`/${locale}${it.href}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 transition hover:bg-secondary"
              >
                <span className="block text-sm font-medium text-foreground">{it.label}</span>
                <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                  {it.desc}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close on navigation — state adjusted during render (lint-endorsed pattern).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setMobileOpen(false);
  }

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const productGroup: NavGroup = {
    label: t("product"),
      items: [
        { label: t("features"), desc: t("featuresDesc"), href: "/features" },
        { label: t("howItWorks"), desc: t("howItWorksDesc"), href: "/how-it-works" },
        { label: t("guarantees"), desc: t("guaranteesDesc"), href: "/guarantees" },
        { label: t("security"), desc: t("securityDesc"), href: "/security" },
        { label: t("compare"), desc: t("compareDesc"), href: "/vs" },
    ],
  };

  const toolsGroup: NavGroup = {
    label: t("tools"),
    items: [
        { label: t("refundEstimator"), desc: t("refundEstimatorDesc"), href: "/refund-estimator" },
        { label: t("penaltyEstimator"), desc: t("penaltyEstimatorDesc"), href: "/tools/penalty-estimator" },
        { label: t("quarterlyTax"), desc: t("quarterlyTaxDesc"), href: "/tools/quarterly-tax" },
        { label: t("toolsHub"), desc: t("toolsHubDesc"), href: "/tools" },
    ],
  };

  const resourcesGroup: NavGroup = {
    label: t("resources"),
    items: [
        { label: t("blog"), desc: t("blogDesc"), href: "/blog" },
        { label: t("help"), desc: t("helpDesc"), href: "/help" },
        { label: t("glossary"), desc: t("glossaryDesc"), href: "/glossary" },
        { label: t("about"), desc: t("aboutDesc"), href: "/about" },
    ],
  };

  const groups = [productGroup, toolsGroup, resourcesGroup];
  const groupActive = (g: NavGroup) => g.items.some((it) => isActive(it.href));

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} aria-label="Taxly — home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          <NavDropdown group={productGroup} locale={locale} active={groupActive(productGroup)} />
          <li>
            <Link
              href={`/${locale}/pricing`}
              className={cn(
                "py-2 text-sm font-medium transition",
                isActive("/pricing")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {t("pricing")}
            </Link>
          </li>
          <NavDropdown group={toolsGroup} locale={locale} active={groupActive(toolsGroup)} />
          <NavDropdown group={resourcesGroup} locale={locale} active={groupActive(resourcesGroup)} />
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <LocaleSwitcher />
          {/* Pre-launch: no accounts yet — "Sign in" returns when the app is live. */}
          <Link
            href={`/${locale}#waitlist`}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            {t("startForFree")}
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="p-1 text-foreground"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-y-auto transition-all duration-200 lg:hidden",
          mobileOpen ? "max-h-[calc(100dvh-4.25rem)]" : "max-h-0",
        )}
      >
        <div className="border-t px-6 pb-6 pt-3">
          <Link
            href={`/${locale}/pricing`}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "block py-2 text-sm font-semibold",
              isActive("/pricing") ? "text-primary" : "text-foreground",
            )}
          >
            {t("pricing")}
          </Link>
          {groups.map((g) => (
            <div key={g.label} className="mt-3">
              <span className="block pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {g.label}
              </span>
              <ul>
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={`/${locale}${it.href}`}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block py-1.5 text-sm font-medium",
                        isActive(it.href) ? "text-primary" : "text-foreground hover:text-primary",
                      )}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t pt-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Language</span>
              <LocaleSwitcher />
            </div>
            <Link
              href={`/${locale}#waitlist`}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg bg-primary py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              {t("startForFree")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
