import { MetadataRoute } from "next";
import { getCanonicalSiteUrl, PROJECT_PRODUCTION_HOST } from "@/lib/canonical-url";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getCanonicalSiteUrl(
    process.env.VERCEL_PROJECT_PRODUCTION_URL || PROJECT_PRODUCTION_HOST
  );

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
