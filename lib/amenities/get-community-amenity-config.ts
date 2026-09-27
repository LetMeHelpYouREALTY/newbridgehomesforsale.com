import { NEWBRIDGE_AMENITY_CONFIG } from "./newbridge";
import type { CommunityAmenityConfig } from "./types";

const CONFIGS: CommunityAmenityConfig[] = [NEWBRIDGE_AMENITY_CONFIG];

function normalizeHost(hostname: string): string {
  return hostname.replace(/^www\./, "").toLowerCase();
}

export function getCommunityAmenityConfig(hostname: string): CommunityAmenityConfig | null {
  const host = normalizeHost(hostname);
  return CONFIGS.find((config) => config.siteDomains.some((d) => normalizeHost(d) === host)) ?? null;
}

export function getCommunityAmenityConfigBySlug(slug: string): CommunityAmenityConfig | null {
  return CONFIGS.find((c) => c.communitySlug === slug) ?? null;
}
