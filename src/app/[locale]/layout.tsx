import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConsentProvider } from "@/components/layout/consent-provider";
import type { LocaleKey, LocaleLayoutProps } from "@/types/page";
import "../globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return {
    title: { default: t("title"), template: "%s — Taxly" },
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;
  if (!routing.locales.includes(rawLocale as LocaleKey)) notFound();
  const locale = rawLocale as LocaleKey;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${geist.variable} scroll-smooth`}>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-white text-slate-900 antialiased"
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ConsentProvider />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
