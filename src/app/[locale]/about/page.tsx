import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.about", "about");
}

export default async function AboutPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutClient />;
}

function AboutClient() {
  const t = useTranslations("about");

  return (
    <div className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">{t("heading")}</h1>
        <p className="mb-16 text-lg text-slate-500">{t("subheading")}</p>

        <div className="space-y-14">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">{t("mission.heading")}</h2>
            <div className="space-y-4 text-slate-600">
              {t("mission.text").split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">{t("team.heading")}</h2>
            <div className="space-y-4 text-slate-600">
              {t("team.text").split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <Link
              href="https://getfinovo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-semibold text-sky-600 hover:underline"
            >
              {t("finovoLink")}
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
