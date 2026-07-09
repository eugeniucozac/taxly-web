import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Upload, MessageSquare, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.howItWorks", "how-it-works");
}

export default async function HowItWorksPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HowItWorksClient />;
}

function HowItWorksClient() {
  const t = useTranslations("howItWorks");
  const locale = useLocale();

  const steps = [
    { key: "step1", Icon: Upload },
    { key: "step2", Icon: MessageSquare },
    { key: "step3", Icon: Send },
  ] as const;

  const items: string[] = t.raw("whatYouNeed.items") as string[];
  const imports = t.raw("imports") as { heading: string; description: string };

  return (
    <div className="py-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">{t("heading")}</h1>
        <p className="text-lg text-slate-500">{t("subheading")}</p>
      </div>

      {/* Steps */}
      <div className="mx-auto mt-20 max-w-4xl px-6">
        <div className="space-y-12">
          {steps.map(({ key, Icon }, i) => (
            <div key={key} className="flex gap-8">
              <div className="flex flex-col items-center">
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold text-white"
                  style={{ backgroundColor: "#0ea5e9" }}
                >
                  {i + 1}
                </div>
                {i < steps.length - 1 && <div className="mt-2 h-full w-0.5 bg-slate-100" />}
              </div>
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm flex-1">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50">
                  <Icon size={20} className="text-sky-500" />
                </div>
                <h2 className="mb-3 text-xl font-semibold text-slate-900">{t(`${key}.title`)}</h2>
                <p className="text-slate-500">{t(`${key}.description`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What you'll need */}
      <div className="mx-auto mt-24 max-w-4xl px-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
          <h2 className="mb-8 text-2xl font-bold text-slate-900">{t("whatYouNeed.heading")}</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Imports */}
      <div className="mx-auto mt-12 max-w-4xl px-6">
        <div className="rounded-2xl bg-sky-50 p-10">
          <h2 className="mb-3 text-xl font-bold text-slate-900">{imports.heading}</h2>
          <p className="text-slate-600">{imports.description}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto mt-20 max-w-xl px-6 text-center">
        <Link
          href={`/${locale}#waitlist`}
          className="inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-semibold text-white shadow-lg transition"
          style={{ backgroundColor: "#0ea5e9" }}
        >
          Start for free <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
