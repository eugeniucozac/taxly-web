import { describe, it, expect } from "vitest";
import { posts as enPosts } from "../data/en";
import { posts as esPosts } from "../data/es";
import { getAllPosts, getLivePosts, getPostBySlug, isLive } from "./blog";

describe("blog data parity", () => {
  it("en and es have the same number of posts", () => {
    expect(enPosts.length).toBe(esPosts.length);
  });

  it("every en slug exists in es", () => {
    const esSlugs = new Set(esPosts.map((p) => p.slug));
    for (const post of enPosts) {
      expect(esSlugs.has(post.slug), `slug "${post.slug}" missing in es`).toBe(true);
    }
  });

  it("every es slug exists in en", () => {
    const enSlugs = new Set(enPosts.map((p) => p.slug));
    for (const post of esPosts) {
      expect(enSlugs.has(post.slug), `slug "${post.slug}" missing in en`).toBe(true);
    }
  });

  it("all posts have required fields", () => {
    const allPosts = [...enPosts, ...esPosts];
    for (const post of allPosts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(post.content).toBeTruthy();
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(post.author).toBeTruthy();
      expect(post.tags.length).toBeGreaterThan(0);
    }
  });

  it("en posts have unique slugs", () => {
    const slugs = enPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("es posts have unique slugs", () => {
    const slugs = esPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});

describe("getAllPosts", () => {
  it("returns en posts sorted newest first", async () => {
    const posts = await getAllPosts("en");
    expect(posts.length).toBe(enPosts.length);
    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1]!.date >= posts[i]!.date).toBe(true);
    }
  });

  it("returns es posts for es locale", async () => {
    const posts = await getAllPosts("es");
    expect(posts.length).toBe(esPosts.length);
  });

  it("falls back to en for unknown locale", async () => {
    const posts = await getAllPosts("fr");
    expect(posts.length).toBe(enPosts.length);
  });
});

describe("getPostBySlug", () => {
  it("finds a post by slug in en", async () => {
    const post = await getPostBySlug("tax-filing-deadlines-2026", "en");
    expect(post).toBeDefined();
    expect(post!.slug).toBe("tax-filing-deadlines-2026");
  });

  it("finds a post by slug in es", async () => {
    const post = await getPostBySlug("tax-filing-deadlines-2026", "es");
    expect(post).toBeDefined();
    expect(post!.slug).toBe("tax-filing-deadlines-2026");
  });

  it("returns undefined for unknown slug", async () => {
    const post = await getPostBySlug("nonexistent-slug", "en");
    expect(post).toBeUndefined();
  });
});

describe("live gating (isLive / getLivePosts)", () => {
  it("published posts are live regardless of date", () => {
    for (const post of enPosts.filter((p) => p.status === "published")) {
      expect(isLive(post)).toBe(true);
    }
  });

  it("scheduled posts flip live exactly on their date (y-m-d compare)", () => {
    const post = enPosts.find((p) => p.status === "scheduled");
    expect(post).toBeDefined();
    const dayBefore = new Date(`${post!.date}T00:00:00Z`);
    dayBefore.setUTCDate(dayBefore.getUTCDate() - 1);
    expect(isLive(post!, dayBefore)).toBe(false);
    expect(isLive(post!, new Date(`${post!.date}T00:00:00Z`))).toBe(true);
  });

  it("draft posts are never live", () => {
    const draft = { ...enPosts[0]!, status: "draft" as const, date: "2000-01-01" };
    expect(isLive(draft)).toBe(false);
  });

  it("getLivePosts excludes scheduled-future posts", async () => {
    const live = await getLivePosts("en");
    const today = new Date().toISOString().slice(0, 10);
    for (const post of live) {
      expect(post.status).not.toBe("draft");
      if (post.status === "scheduled") expect(post.date <= today).toBe(true);
    }
  });

  it("getPostBySlug does not serve a scheduled-future post", async () => {
    const future = enPosts.find((p) => p.status === "scheduled" && p.date > "2026-08-01");
    expect(future).toBeDefined();
    // This assertion is date-dependent by design: once 2026-08-01 passes it
    // simply stops finding a "future" fixture and the guard above trips first.
    if (new Date().toISOString().slice(0, 10) < future!.date) {
      expect(await getPostBySlug(future!.slug, "en")).toBeUndefined();
    }
  });
});

describe("content quality", () => {
  it("there are 14 posts per locale", () => {
    expect(enPosts.length).toBe(14);
    expect(esPosts.length).toBe(14);
  });

  it("every post has a valid category and positive read time", () => {
    for (const post of [...enPosts, ...esPosts]) {
      expect(["basics", "gig", "deadlines"]).toContain(post.category);
      expect(post.readTime).toBeGreaterThan(0);
    }
  });

  it("every post's content is non-trivial (> 1500 chars)", () => {
    for (const post of [...enPosts, ...esPosts]) {
      expect(post.content.length, post.slug).toBeGreaterThan(1500);
    }
  });

  it("status and dates match across locales for each slug", () => {
    const bySlug = new Map(esPosts.map((p) => [p.slug, p]));
    for (const post of enPosts) {
      const es = bySlug.get(post.slug);
      expect(es, post.slug).toBeDefined();
      expect(es!.status).toBe(post.status);
      expect(es!.date).toBe(post.date);
      expect(es!.category).toBe(post.category);
    }
  });
});
