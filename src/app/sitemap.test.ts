import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";
import { posts } from "@/features/blog/data/en";
import { isLive } from "@/features/blog/lib/blog";

describe("sitemap", () => {
  async function urls(): Promise<string[]> {
    const entries = await sitemap();
    return entries.map((e) => e.url);
  }

  it("contains the key pages in both locales", async () => {
    const list = await urls();
    for (const path of ["", "/pricing", "/glossary", "/vs", "/tools", "/blog"]) {
      for (const locale of ["en", "es"]) {
        expect(
          list.some((u) => u.endsWith(`/${locale}${path}`)),
          `missing /${locale}${path}`,
        ).toBe(true);
      }
    }
  });

  it("contains the programmatic /vs entries", async () => {
    const list = await urls();
    for (const slug of ["turbotax", "freetaxusa", "irs-direct-file"]) {
      expect(list.some((u) => u.endsWith(`/en/vs/${slug}`))).toBe(true);
      expect(list.some((u) => u.endsWith(`/es/vs/${slug}`))).toBe(true);
    }
  });

  it("has no duplicate URLs", async () => {
    const list = await urls();
    expect(new Set(list).size).toBe(list.length);
  });

  it("includes live posts and excludes scheduled-future posts (computed from data)", async () => {
    const list = await urls();
    for (const post of posts) {
      const present = list.some((u) => u.endsWith(`/en/blog/${post.slug}`));
      expect(present, `${post.slug} (status ${post.status}, ${post.date})`).toBe(isLive(post));
    }
  });
});
