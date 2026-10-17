import { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/canonical-url";
import { AI_CRAWLER_USER_AGENTS } from "@/lib/ai-crawler-user-agents";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      ...AI_CRAWLER_USER_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
      })),
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
  };
}
