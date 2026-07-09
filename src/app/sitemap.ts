import type { MetadataRoute } from "next";
import { env } from "@/lib/env";
import { routing } from "@/i18n/routing";
import { getLivePosts } from "@/features/blog/lib/blog";
import { comparisons } from "@/features/compare/data/en";

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
  "/about",
  "/contact",
  "/blog",
  "/glossary",
  "/vs",
  "/tools",
  "/refund-estimator",
  "/tools/penalty-estimator",
  "/tools/quarterly-tax",
  "/privacy-policy",
  "/terms",
  "/cookies",
  "/sub-processors",
];

function priorityFor(route: string): number {
  if (route === "") return 1.0;
  if (route === "/pricing") return 0.9;
  if (route.startsWith("/tools") || route === "/refund-estimator" || route.startsWith("/vs"))
    return 0.8;
  if (["/privacy-policy", "/terms", "/cookies", "/sub-processors"].includes(route)) return 0.3;
  return 0.7;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
      priority: priorityFor(route),
    })),
  );

  const vsEntries: MetadataRoute.Sitemap = comparisons.flatMap((c) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/vs/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  // Live posts only — scheduled-future posts must not be advertised.
  const livePosts = await getLivePosts("en");
  const blogEntries: MetadataRoute.Sitemap = livePosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${BASE_URL}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  );

  return [...staticEntries, ...vsEntries, ...blogEntries];
}
