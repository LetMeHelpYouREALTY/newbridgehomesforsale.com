import type { CommunityAmenityConfig } from "./types";

/** Production canonical origin (www preferred). */
export function getProductionSiteUrl(config: CommunityAmenityConfig): string {
  const host =
    config.siteDomains.find((d) => d.toLowerCase().startsWith("www.")) ??
    `www.${config.siteDomains[0]}`;
  const normalized = host.replace(/^https?:\/\//, "").toLowerCase();
  return `https://${normalized}`;
}
