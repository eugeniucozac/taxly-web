import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { getAllPosts, getPostBySlug } from "@/features/blog/lib/blog";
import { WaitlistForm } from "@/components/shared/waitlist-form";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/utils";
import { BASE_URL, getAlternates } from "@/lib/metadata";
import { generateLocaleStaticParams } from "@/lib/metadata";
import type { LocaleSlugPageProps } from "@/types/page";

// Closed set: unknown or not-yet-live slugs must 404, not attempt a dynamic render.
export const dynamicParams = false;

export async function generateStaticParams() {
  const localeParams = generateLocaleStaticParams();
  const results: { locale: string; slug: string }[] = [];
  for (const { locale } of localeParams) {
    const posts = await getAllPosts(locale);
    for (const post of posts) {
      results.push({ locale, slug: post.slug });
    }
  }
  return results;
}

export async function generateMetadata({ params }: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  const post = await getPostBySlug(slug, locale);
  if (!post) return {};
  const OG_LOCALE: Record<string, string> = { en: "en_US", es: "es_US" };
  return {
    title: { absolute: post.title },
    description: post.excerpt,
    alternates: getAlternates(locale, `blog/${slug}`),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      siteName: "Taxly",
      type: "article",
      locale: OG_LOCALE[locale] ?? "en_US",
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const [t, post] = await Promise.all([
    getTranslations({ locale, namespace: "blog" }),
    getPostBySlug(slug, locale),
  ]);

  if (!post) notFound();

  const paragraphs = post.content.split("\n\n");

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/blog"
 className="mb-8 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline dark:text-sky-400"
      >
        ← {t("backToBlog")}
      </Link>

      <article>
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
 className="rounded-full bg-sky-50 dark:bg-sky-500/10 px-2.5 py-0.5 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl dark:text-white">
            {post.title}
          </h1>

          <p className="text-sm text-muted-foreground">
            {t("by")} {post.author} · {t("publishedOn")} {formatDate(post.date, locale)}
          </p>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary dark:prose-a:text-sky-400">
          {paragraphs.map((block, i) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={i} className="mb-3 mt-8 text-xl font-semibold text-foreground">
                  {trimmed.slice(3)}
                </h2>
              );
            }

            if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.slice(2, -2).includes("**")) {
              return (
                <p key={i} className="mb-4 font-semibold text-foreground">
                  {trimmed.slice(2, -2)}
                </p>
              );
            }

            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="mb-4 list-disc space-y-1 pl-6 text-muted-foreground">
                  {items.map((item, j) => (
                    <li key={j}>{renderInline(item.slice(2))}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                {renderInline(trimmed)}
              </p>
            );
          })}
        </div>
      </article>

      <footer className="mt-12 border-t pt-8">
        <Link
          href="/blog"
 className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline dark:text-sky-400"
        >
          ← {t("backToBlog")}
        </Link>

        {/* Waitlist (pre-launch conversion) */}
        <div id="waitlist" className="mt-10 scroll-mt-24 rounded-2xl bg-sky-50 p-8 text-center dark:bg-sky-900/20">
          <p className="mb-4 text-sm text-muted-foreground">
            {locale === "es"
              ? "Presenta tus impuestos de forma honesta y sencilla. Únete a la lista de espera."
              : "File your taxes the honest, simple way. Join the waitlist."}
          </p>
          <WaitlistForm
            placeholder="your@email.com"
            ctaLabel={locale === "es" ? "Unirme a la lista" : "Join the waitlist"}
            successMessage={locale === "es" ? "¡Estás en la lista! Revisa tu bandeja de entrada." : "You're on the list! Check your inbox."}
            errorMessage={locale === "es" ? "Algo salió mal. Inténtalo de nuevo." : "Something went wrong. Please try again."}
 className="mx-auto max-w-md justify-center"
          />
        </div>
      </footer>
    </main>
  );
}

function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
