import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { makeMetadata, BASE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.help", "help");
}

const faqItems = [
  { q: "Do I need to create an account to start?", a: "Yes, a free account is required to save your progress and file your return. It takes under a minute to sign up — just an email and password." },
  { q: "Which tax year can I file with Taxly?", a: "You can file the current tax year return (due April 15) and amend returns from the prior two years." },
  { q: "Can I import my return from another software?", a: "Yes. Upload a PDF of your prior-year TurboTax, H&R Block, or Taxly return and we'll pre-fill your basic info and prior-year figures." },
  { q: "Can I use Taxly on mobile?", a: "Yes. Taxly is fully responsive and works on any smartphone or tablet browser. A dedicated mobile app is planned." },
  { q: "When do I pay?", a: "You only pay when you e-file your return. You can prepare your return and see your refund estimate completely free before deciding." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards (Visa, Mastercard, Amex, Discover) and Apple Pay / Google Pay." },
  { q: "Can I get a refund?", a: "If you've paid but not yet e-filed, contact us within 30 days for a full refund. After e-filing, the fee is non-refundable." },
  { q: "Is my Social Security number safe?", a: "Yes. Your SSN is encrypted with AES-256 before storage and is never transmitted in plain text. It's only sent to the IRS during e-filing, over an encrypted connection." },
  { q: "Does Taxly sell my data?", a: "Never. We use your data solely to prepare and file your taxes. We do not sell it, share it with advertisers, or use it to build advertising profiles." },
  { q: "How do I enable two-factor authentication?", a: "Go to Account Settings → Security → Enable 2FA. We support authenticator apps (Google Authenticator, Authy) and SMS." },
  { q: "How long does IRS processing take?", a: "The IRS typically accepts e-filed returns within 24–48 hours and issues refunds within 21 days of acceptance. You can check status at IRS.gov/refunds." },
  { q: "What if I make a mistake after filing?", a: "You can amend your return using Form 1040-X. Taxly will guide you through the amendment process. There's no additional filing fee for amendments." },
  { q: "How do I file an extension?", a: "File Form 4868 by April 15 to get a 6-month extension to October 15. Taxly handles this automatically. Note: an extension to file is not an extension to pay — any tax owed is still due April 15." },
  { q: "Can I file jointly with my spouse?", a: "Yes. Choose 'Married Filing Jointly' when you start. Taxly will ask for your spouse's information and compare MFJ vs MFS to find the better outcome." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${BASE_URL}/help`,
  mainEntity: faqItems.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default async function HelpPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={faqSchema} />
      <HelpClient />
    </>
  );
}

function HelpClient() {
  const t = useTranslations("help");
  const locale = useLocale();

  const sections = [
    {
      key: "gettingStarted",
      questions: ["q1", "q2", "q3", "q4"],
    },
    {
      key: "pricing",
      questions: ["q1", "q2", "q3"],
    },
    {
      key: "security",
      questions: ["q1", "q2", "q3"],
    },
    {
      key: "filing",
      questions: ["q1", "q2", "q3", "q4"],
    },
  ] as const;

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-slate-500">{t("subheading")}</p>
      </div>

      {/* Sections */}
      <div className="mx-auto mt-20 max-w-3xl space-y-16 px-6">
        {sections.map(({ key, questions }) => (
          <div key={key}>
            <h2 className="mb-6 text-xl font-bold text-slate-900">{t(`sections.${key}`)}</h2>
            <div className="space-y-3">
              {questions.map((q) => (
                <details key={q} className="group rounded-xl border border-slate-200 bg-white px-6 py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-slate-900">
                    {t(`${key}.${q}.question`)}
                    <ChevronDown size={18} className="shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{t(`${key}.${q}.answer`)}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact prompt */}
      <div className="mx-auto mt-20 max-w-xl px-6 text-center">
        <p className="text-slate-500">
          {t("contactPrompt")}{" "}
          <Link href={`/${locale}/contact`} className="font-semibold text-sky-600 hover:underline">
            {t("contactLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
