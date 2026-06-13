import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Lock, Wifi, Shield, EyeOff, Archive, Users } from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.security", "security");
}

export default async function SecurityPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SecurityClient />;
}

function SecurityClient() {
  const t = useTranslations("security");

  const items = [
    { key: "encryption", Icon: Lock },
    { key: "transit", Icon: Wifi },
    { key: "mfa", Icon: Shield },
    { key: "noSell", Icon: EyeOff },
    { key: "retention", Icon: Archive },
    { key: "access", Icon: Users },
  ] as const;

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50">
          <Lock size={28} className="text-sky-500" />
        </div>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-slate-500">{t("subheading")}</p>
      </div>

      {/* Security items */}
      <div className="mx-auto mt-20 max-w-5xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          {items.map(({ key, Icon }) => (
            <div key={key} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50">
                <Icon size={22} className="text-sky-500" />
              </div>
              <h2 className="mb-3 text-lg font-semibold text-slate-900">{t(`${key}.title`)}</h2>
              <p className="text-slate-500">{t(`${key}.description`)}</p>
            </div>
          ))}
        </div>

        {/* Cert note */}
        <div className="mt-12 rounded-2xl border border-sky-100 bg-sky-50 p-8 text-center">
          <p className="mb-1 text-sm font-semibold text-sky-700">{t("certBadge")}</p>
          <p className="text-sm text-slate-500">{t("certNote")}</p>
        </div>
      </div>
    </div>
  );
}
