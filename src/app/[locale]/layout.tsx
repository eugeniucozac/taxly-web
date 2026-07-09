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
import { ThemeProvider } from "@/components/layout/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { BASE_URL } from "@/lib/metadata";
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

// Site graph: Organization + WebSite + SoftwareApplication (pre-launch: no
// ratings, no invented review counts — AggregateRating only behind real data).
const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#org`,
      name: "Taxly",
      url: BASE_URL,
      logo: `${BASE_URL}/icon`,
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      name: "Taxly",
      url: BASE_URL,
      publisher: { "@id": `${BASE_URL}/#org` },
      inLanguage: ["en-US", "es-US"],
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${BASE_URL}/#app`,
      name: "Taxly",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description:
        "Guided, plain-English US tax filing with flat, price-locked tiers. Pre-launch: opens for TY2026 returns in January 2027.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free tier for simple W-2 returns; Deluxe $39, Premium $69, states $29.",
      },
      publisher: { "@id": `${BASE_URL}/#org` },
    },
  ],
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

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
    <html lang={locale} className={`${geist.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <JsonLd data={siteGraph} />
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ConsentProvider />
          </NextIntlClientProvider>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
