import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Mail, Clock, LifeBuoy, ArrowRight } from "lucide-react";
import { makeMetadata, BASE_URL } from "@/lib/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/features/contact/components/contact-form";
import { env } from "@/lib/env";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.contact", "contact");
}

export default async function ContactPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${BASE_URL}/${locale}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "Taxly",
      url: BASE_URL,
      email: env.CONTACT_EMAIL,
    },
  };

  const quickLinks = [
    { label: t("info.linkHelp"), href: "/help" },
    { label: t("info.linkTools"), href: "/tools" },
    { label: t("info.linkGuides"), href: "/blog" },
  ];

  return (
    <>
      <JsonLd data={contactSchema} />
      <div className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          {/* Header */}
          <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
            <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
              {t("eyebrow")}
            </span>
            <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
              {t("chip")}
            </span>
          </span>
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">{t("heading")}</h1>
          <p className="mb-12 max-w-2xl text-lg text-muted-foreground">{t("subheading")}</p>

          <div className="grid gap-10 lg:grid-cols-[1fr_20rem]">
            {/* Form */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>

            {/* Info panel */}
            <aside className="space-y-6">
              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Mail size={18} className="text-primary" aria-hidden />
                </div>
                <h2 className="text-sm font-semibold text-foreground">{t("info.emailHeading")}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t("info.emailText")}
                </p>
                <a
                  href={`mailto:${env.CONTACT_EMAIL}`}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
                >
                  {env.CONTACT_EMAIL}
                </a>
              </div>

              <div className="rounded-2xl border bg-card p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 dark:bg-sky-500/10">
                  <Clock size={18} className="text-primary" aria-hidden />
                </div>
                <h2 className="text-sm font-semibold text-foreground">{t("info.expectHeading")}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t("info.expectText")}
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-6 dark:bg-sky-500/10">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-background">
                  <LifeBuoy size={18} className="text-primary" aria-hidden />
                </div>
                <h2 className="text-sm font-semibold text-foreground">{t("info.beforeHeading")}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {t("info.beforeText")}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm font-medium text-primary"
                      >
                        {link.label}
                        <ArrowRight
                          size={13}
                          className="transition group-hover:translate-x-0.5"
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
