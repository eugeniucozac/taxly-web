import { describe, it, expect } from "vitest";
import { posts as enPosts } from "../data/en";
import { posts as esPosts } from "../data/es";
import { getAllPosts, getPostBySlug } from "./blog";

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
