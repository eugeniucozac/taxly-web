import type { MetadataRoute } from "next";
import { env } from "@/lib/env";

const BASE_URL = env.NEXT_PUBLIC_SITE_URL;

export default function robots(): MetadataRoute.Robots {
  // Only the production deployment may be indexed — previews carry duplicate
  // content on vercel.app URLs.
  const isProduction = process.env.VERCEL_ENV === "production" || !process.env.VERCEL_ENV;

  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
