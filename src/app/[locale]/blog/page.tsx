import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { getLivePosts } from "@/features/blog/lib/blog";
import { categoryThemes } from "@/features/blog/lib/category-theme";
import { BlogFilterGrid, type BlogGridItem } from "@/features/blog/components/blog-filter-grid";
import { formatDate } from "@/lib/utils";
import { generateLocaleStaticParams, makeMetadata } from "@/lib/metadata";
import type { LocalePageProps } from "@/types/page";

export const generateStaticParams = generateLocaleStaticParams;

export async function generateMetadata({ params }: LocalePageProps) {
  const { locale } = await params;
  return makeMetadata(locale, "metadata.blog", "blog");
}

export default async function BlogPage({ params }: LocalePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [t, posts] = await Promise.all([
    getTranslations({ locale, namespace: "blog" }),
    getLivePosts(locale),
  ]);

  const [featured, ...rest] = posts;
  const items: BlogGridItem[] = rest.map((post) => ({
    post,
    categoryLabel: t(`categories.${post.category}`),
    readTimeLabel: t("readTime", { minutes: post.readTime }),
  }));

  const featuredTheme = featured ? categoryThemes[featured.category] : null;
  const FeaturedIcon = featuredTheme?.icon;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <span className="mb-6 inline-flex items-stretch overflow-hidden rounded-md border-[1.5px] border-foreground bg-background text-xs font-medium shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <span className="flex items-center border-r-[1.5px] border-foreground px-2.5 py-1.5 font-bold uppercase tracking-wider">
            {t("eyebrow")}
          </span>
          <span className="flex items-center px-2.5 py-1.5 text-muted-foreground">
            {t("countChip", { count: posts.length })}
          </span>
        </span>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{t("heading")}</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t("subtext")}</p>
      </div>

      {/* Featured: the latest guide, full width */}
      {featured && featuredTheme && FeaturedIcon && (
        <article className="mb-12 overflow-hidden rounded-xl border-[1.5px] border-foreground bg-card shadow-[3px_3px_0_0] shadow-sky-200 dark:shadow-sky-500/20">
          <div className={`h-1.5 bg-gradient-to-r ${featuredTheme.gradient}`} aria-hidden />
          <div className="p-8 sm:p-10">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                {t("featuredLabel")}
              </span>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${featuredTheme.chip}`}
              >
                <FeaturedIcon size={12} aria-hidden />
                {t(`categories.${featured.category}`)}
              </span>
              <span className="text-xs text-muted-foreground/80">
                {t("readTime", { minutes: featured.readTime })}
              </span>
            </div>
            <h2 className="mb-3 max-w-3xl text-2xl font-bold leading-snug text-foreground sm:text-3xl">
              <Link href={`/blog/${featured.slug}`} className="hover:text-primary">
                {featured.title}
              </Link>
            </h2>
            <p className="mb-5 max-w-3xl leading-relaxed text-muted-foreground">
              {featured.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="text-muted-foreground/80">{formatDate(featured.date, locale)}</span>
              <Link
                href={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
              >
                {t("readMore")}
                <ArrowRight size={14} aria-hidden />
              </Link>
            </div>
          </div>
        </article>
      )}

      <BlogFilterGrid
        items={items}
        locale={locale}
        readMore={t("readMore")}
        allLabel={t("filterAll")}
      />
    </main>
  );
}
