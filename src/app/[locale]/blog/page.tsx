import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { getLivePosts } from "@/features/blog/lib/blog";
import { categoryThemes } from "@/features/blog/lib/category-theme";
import { BlogPostCard } from "@/features/blog/components/blog-post-card";
import { generateLocaleStaticParams, makeMetadata } from "@/lib/metadata";
import type { BlogCategory } from "@/features/blog/data/en";
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

  const categories = Object.keys(categoryThemes) as BlogCategory[];
  const counts = new Map<BlogCategory, number>();
  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">{t("heading")}</h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">{t("subtext")}</p>
      </div>

      {/* Category strip with live counts */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const theme = categoryThemes[category];
          const Icon = theme.icon;
          return (
            <span
              key={category}
              className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-medium ${theme.chip}`}
            >
              <Icon size={14} aria-hidden />
              {t(`categories.${category}`)}
              <span className="opacity-70">({counts.get(category) ?? 0})</span>
            </span>
          );
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            locale={locale}
            readMore={t("readMore")}
            categoryLabel={t(`categories.${post.category}`)}
            readTimeLabel={t("readTime", { minutes: post.readTime })}
          />
        ))}
      </div>
    </main>
  );
}
