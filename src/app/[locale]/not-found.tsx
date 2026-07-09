import { getTranslations } from "next-intl/server";
import { SearchX } from "lucide-react";
import { Link } from "@/i18n/navigation";

/** Branded, translated 404 inside the locale layout (navbar + footer render). */
export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <section className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl bg-secondary">
        <SearchX size={28} className="text-muted-foreground" aria-hidden />
      </div>
      <h1 className="mt-6 text-3xl font-bold tracking-tight">{t("heading")}</h1>
      <p className="mt-3 max-w-md text-muted-foreground">{t("text")}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
 className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          {t("home")}
        </Link>
        <Link
          href="/tools"
 className="rounded-lg border px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-secondary"
        >
          {t("tools")}
        </Link>
      </div>
    </section>
  );
}
