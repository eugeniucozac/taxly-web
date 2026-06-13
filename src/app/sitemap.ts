import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { routing } from "@/i18n/routing";
import { posts } from "@/features/blog/data/en";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL;
const locales = routing.locales;

const staticRoutes = [
  "",
  "/pricing",
  "/how-it-works",
  "/features",
  "/security",
  "/guarantees",
  "/help",
  "/refund-estimator",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : ("monthly" as const),
      priority: route === "" ? 1.0 : route === "/pricing" ? 0.9 : 0.8,
    })),
  );

  const blogEntries: MetadataRoute.Sitemap = posts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  );

  return [...staticEntries, ...blogEntries];
}
