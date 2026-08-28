import { headers } from "next/headers";

/** This repo's production origin. Never infer from Vercel/preview Host headers. */
export const PROJECT_PRODUCTION_HOST = "newbridgehomesforsale.com";
export const SITE_ORIGIN = "https://www.newbridgehomesforsale.com";

export function normalizeHostname(raw: string | null | undefined): string {
  if (!raw) return "";
  return raw
    .split(",")[0]
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/\/.*$/, "")
    .replace(/:\d+$/, "");
}

function isUntrustedHost(host: string): boolean {
  const clean = host.replace(/^www\./, "");
  return (
    !clean ||
    clean === "localhost" ||
    clean.startsWith("127.") ||
    clean.startsWith("0.0.0.0") ||
    clean === "vercel.com" ||
    clean.endsWith(".vercel.com") ||
    clean.endsWith(".vercel.app") ||
    clean === "heyberkshire.com"
  );
}

export function getCanonicalSiteUrl(_hostname?: string): string {
  return SITE_ORIGIN;
}

export function getRequestHostname(): string {
  try {
    const headerList = headers();
    const host =
      normalizeHostname(headerList.get("x-domain")) ||
      normalizeHostname(headerList.get("host")) ||
      normalizeHostname(headerList.get("x-forwarded-host"));
    if (isUntrustedHost(host)) return PROJECT_PRODUCTION_HOST;
    return host || PROJECT_PRODUCTION_HOST;
  } catch {
    return PROJECT_PRODUCTION_HOST;
  }
}

export function getRequestSiteUrl(): string {
  return SITE_ORIGIN;
}
