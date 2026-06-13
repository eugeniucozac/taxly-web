import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { getAllPosts } from "@/features/blog/lib/blog";
import { BlogPostCard } from "@/features/blog/components/blog-post-card";
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
    getAllPosts(locale),
  ]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {t("heading")}
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {t("subtext")}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogPostCard
            key={post.slug}
            post={post}
            locale={locale}
            readMore={t("readMore")}
          />
        ))}
      </div>
    </main>
  );
}
