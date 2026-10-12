import type { DomainConfig } from "./domain-config";

/** JSON-LD Place node for community-focused domains (no extra cities in areaServed). */
export function buildCommunityAreaServed(config: DomainConfig) {
  if (config.neighborhood === "Newbridge" && config.postalCode) {
    return {
      "@type": "Place",
      name: "Newbridge",
      postalCode: config.postalCode,
      containedInPlace: {
        "@type": "City",
        name: "Las Vegas",
        addressRegion: "NV",
      },
    };
  }

  return {
    "@type": "City",
    name: "Las Vegas",
    addressRegion: "NV",
  };
}
