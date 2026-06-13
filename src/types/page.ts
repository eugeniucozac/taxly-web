import type { routing } from "@/i18n/routing";

export type LocaleKey = (typeof routing.locales)[number];

export type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export type LocaleLayoutProps = LocalePageProps & {
  children: React.ReactNode;
};

export type LocaleSlugPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};
