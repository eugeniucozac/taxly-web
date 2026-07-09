"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/layout/theme-toggle";

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

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t("features"), href: "/features" },
    { label: t("howItWorks"), href: "/how-it-works" },
    { label: t("pricing"), href: "/pricing" },
    { label: t("tools"), href: "/tools" },
    { label: t("blog"), href: "/blog" },
    { label: t("help"), href: "/help" },
  ];

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href={`/${locale}`} className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">Taxly</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={`/${locale}${l.href}`}
 className={cn(
                  "text-sm font-medium transition",
                  isActive(l.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
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
 className="p-1 text-foreground"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div
 className={cn(
          "overflow-hidden transition-all duration-200 lg:hidden",
          mobileOpen ? "max-h-112" : "max-h-0",
        )}
      >
        <ul className="flex flex-col gap-1 border-t px-6 pb-4 pt-3">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={`/${locale}${l.href}`}
                onClick={() => setMobileOpen(false)}
 className={cn(
                  "block py-2 text-sm font-medium",
                  isActive(l.href) ? "text-primary" : "text-foreground hover:text-primary",
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="mt-3 flex flex-col gap-2">
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
          </li>
        </ul>
      </div>
    </header>
  );
}
