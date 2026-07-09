import type { BlogPost } from "../data/en";

export type { BlogPost };

/**
 * Build-time publication gating. A post is live when it's `published`, or
 * `scheduled` with a date that has passed. Drafts never ship. Because the
 * check runs at build time, scheduled posts appear on the next (weekly)
 * rebuild after their date — see CONTENT-BACKLOG.md.
 */
export function isLive(post: BlogPost, now: Date = new Date()): boolean {
  if (post.status === "draft") return false;
  if (post.status === "scheduled") {
    // Compare calendar dates (y-m-d), not instants — timezone-safe.
    const today = now.toISOString().slice(0, 10);
    return post.date <= today;
  }
  return true; // "published"
}

async function loadPosts(locale: string): Promise<BlogPost[]> {
  const { posts } =
    locale === "es" ? await import("../data/es") : await import("../data/en");
  return posts;
}

/** Every post regardless of status — internal/tooling use only. */
export async function getAllPosts(locale: string): Promise<BlogPost[]> {
  const posts = await loadPosts(locale);
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** The public set: what pages, sitemap, and RSS are allowed to show. */
export async function getLivePosts(locale: string): Promise<BlogPost[]> {
  const posts = await getAllPosts(locale);
  return posts.filter((p) => isLive(p));
}

export async function getPostBySlug(
  slug: string,
  locale: string,
): Promise<BlogPost | undefined> {
  const posts = await getLivePosts(locale);
  return posts.find((p) => p.slug === slug);
}
