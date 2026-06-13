import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { env } from "@/lib/env";

export const BASE_URL = env.NEXT_PUBLIC_SITE_URL;

export function generateLocaleStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export function getAlternates(locale: string, path: string = "") {
  const slug = path && !path.startsWith("/") ? `/${path}` : path;
  return {
    canonical: `${BASE_URL}/${locale}${slug}`,
    languages: {
      "en-US": `${BASE_URL}/en${slug}`,
      "es-US": `${BASE_URL}/es${slug}`,
      "x-default": `${BASE_URL}/en${slug}`,
    },
  };
}

const OG_LOCALE: Record<string, string> = { en: "en_US", es: "es_US" };

export function htmlLangFromLocale(locale: string): string {
  return locale === "es" ? "es-US" : "en-US";
}

export async function makeMetadata(
  locale: string,
  namespace: string,
  path: string = "",
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: namespace as never });
  const title = String(t("title" as never));
  const description = String(t("description" as never));

  return {
    title: { absolute: title },
    description,
    alternates: getAlternates(locale, path),
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}${path ? `/${path}` : ""}`,
      siteName: "Taxly",
      type: "website",
      locale: OG_LOCALE[locale] ?? "en_US",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
