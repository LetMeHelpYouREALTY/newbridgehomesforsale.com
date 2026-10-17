import { MetadataRoute } from "next";
import { SITE_ORIGIN } from "@/lib/canonical-url";
import { INDEXABLE_PAGES } from "@/lib/seo-index-scope";

export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PAGES.map((page) => ({
    url: page.path === "/" ? SITE_ORIGIN : `${SITE_ORIGIN}${page.path}`,
    lastModified: page.lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
