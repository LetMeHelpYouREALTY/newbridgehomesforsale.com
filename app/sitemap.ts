import type { MetadataRoute } from "next";
import { properties } from "@/lib/properties";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/team",
    "/contact",
    "/listings",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const listingPages: MetadataRoute.Sitemap = properties.map((property) => ({
    url: `${base}/listings/${property.id}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...listingPages];
}
