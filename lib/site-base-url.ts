import { headers } from "next/headers";
import { siteConfig } from "./site-config";

/** Canonical site origin for the current request (multi-domain aware). */
export function getSiteBaseUrlFromHost(hostname: string): string {
  const clean = hostname.replace(/^www\./i, "").split(":")[0].toLowerCase();

  if (!clean || clean === "localhost" || clean.endsWith(".local")) {
    const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
    if (fromEnv) return fromEnv;
    return siteConfig.url;
  }

  return `https://${clean}`;
}

export function getSiteBaseUrl(): string {
  const headersList = headers();
  const hostname =
    headersList.get("x-domain") || headersList.get("host") || "";
  return getSiteBaseUrlFromHost(hostname);
}
