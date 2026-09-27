import { NEWBRIDGE_AMENITY_CONFIG } from "./newbridge";
import type { CommunityAmenityConfig } from "./types";

const CONFIGS: CommunityAmenityConfig[] = [NEWBRIDGE_AMENITY_CONFIG];

function normalizeHost(hostname: string): string {
  return hostname.replace(/^www\./, "").toLowerCase().split(":")[0];
}

function isVercelPreviewHost(hostname: string): boolean {
  const host = normalizeHost(hostname);
  return host.endsWith(".vercel.app") || host.includes("vercel.app");
}

export function getCommunityAmenityConfig(hostname: string): CommunityAmenityConfig | null {
  const host = normalizeHost(hostname);
  const match =
    CONFIGS.find((config) => config.siteDomains.some((d) => normalizeHost(d) === host)) ?? null;
  if (match) return match;

  if (process.env.VERCEL_ENV === "preview" && isVercelPreviewHost(hostname)) {
    return NEWBRIDGE_AMENITY_CONFIG;
  }

  return null;
}

export function getCommunityAmenityConfigBySlug(slug: string): CommunityAmenityConfig | null {
  return CONFIGS.find((c) => c.communitySlug === slug) ?? null;
}
