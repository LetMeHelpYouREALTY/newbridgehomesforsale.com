import type { DomainConfig } from "./domain-config";

/** Canonical homepage / GEO hub H1 for newbridgehomesforsale.com (Ship #1). */
export const NEWBRIDGE_PRIMARY_H1 = "Newbridge Homes for Sale in Las Vegas";

export function getNewbridgePrimaryH1(config: DomainConfig): string {
  if (config.neighborhood === "Newbridge") {
    return config.pageH1 ?? config.heroHeadline ?? NEWBRIDGE_PRIMARY_H1;
  }
  return config.heroHeadline;
}
