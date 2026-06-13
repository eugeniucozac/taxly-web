import type { BlogPost } from "../data/en";

export type { BlogPost };

export async function getAllPosts(locale: string): Promise<BlogPost[]> {
  const { posts } =
    locale === "es"
      ? await import("../data/es")
      : await import("../data/en");
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(
  slug: string,
  locale: string,
): Promise<BlogPost | undefined> {
  const posts = await getAllPosts(locale);
  return posts.find((p) => p.slug === slug);
}
