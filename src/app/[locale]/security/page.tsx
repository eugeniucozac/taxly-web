import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Lock, Wifi, Shield, EyeOff, Archive, Users, Globe } from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.security", "security");
}

const ITEMS = [
  { key: "encryption", Icon: Lock },
  { key: "transit", Icon: Wifi },
  { key: "mfa", Icon: Shield },
  { key: "noSell", Icon: EyeOff },
  { key: "retention", Icon: Archive },
  { key: "access", Icon: Users },
] as const;

export default async function SecurityPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "security" });
  const tLegal = await getTranslations({ locale, namespace: "legal" });

  const legalLinks = [
    { label: tLegal("links.privacy"), href: "/privacy-policy" },
    { label: tLegal("links.subProcessors"), href: "/sub-processors" },
    { label: tLegal("links.terms"), href: "/terms" },
  ];

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {t("chip")}
          </span>
        </span>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 dark:bg-sky-500/10">
          <Lock size={28} className="text-primary" aria-hidden />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-muted-foreground">{t("subheading")}</p>
        <p className="mx-auto mt-6 max-w-2xl rounded-xl border border-sky-200 bg-sky-50 p-4 text-left text-sm text-sky-900 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200">
          {t("preLaunchNote")}
        </p>
      </div>

      {/* Security items */}
      <div className="mx-auto mt-16 max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {ITEMS.map(({ key, Icon }, i) => (
            <div key={key} className="rounded-2xl border bg-card p-8 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Icon size={22} className="text-primary" aria-hidden />
                </div>
                <span className="font-mono text-xs font-bold text-muted-foreground/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mb-3 text-lg font-semibold text-foreground">{t(`${key}.title`)}</h2>
              <p className="leading-relaxed text-muted-foreground">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>

        {/* Today, before launch */}
        <div className="mt-12 rounded-2xl border bg-card p-8 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
              <Globe size={18} className="text-primary" aria-hidden />
            </div>
            <h2 className="text-lg font-semibold text-foreground">{t("today.heading")}</h2>
          </div>
          <p className="leading-relaxed text-muted-foreground">{t("today.text")}</p>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              {t("today.linksLabel")}
            </span>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-ring hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Cert note */}
        <div className="mt-12 rounded-2xl border border-sky-200 bg-sky-50 p-8 text-center dark:border-sky-500/30 dark:bg-sky-500/10">
          <p className="mb-1 text-sm font-semibold text-sky-700 dark:text-sky-300">{t("certBadge")}</p>
          <p className="text-sm text-muted-foreground">{t("certNote")}</p>
        </div>
      </div>
    </div>
  );
}
