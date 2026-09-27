import type { BreadcrumbItem } from "./schema";

const SEGMENT_LABELS: Record<string, string> = {
  "55-plus-communities": "55+ Communities",
  about: "About",
  buyers: "Buyers",
  sellers: "Sellers",
  neighborhoods: "Neighborhoods",
  listings: "Listings",
  contact: "Contact",
  faq: "FAQ",
  services: "Services",
  "luxury-homes": "Luxury Homes",
  "new-construction": "New Construction",
  "investment-properties": "Investment Properties",
  relocation: "Relocation",
  "home-valuation": "Home Valuation",
  "market-report": "Market Report",
  "market-update": "Market Update",
  "market-insights": "Market Insights",
  "google-business": "Google Business",
  "why-berkshire-hathaway": "Why Berkshire Hathaway",
  "security-policy": "Security Policy",
  "first-time-buyers": "First-Time Buyers",
  "california-relocator": "California Relocator",
  "luxury-homes-las-vegas": "Luxury Homes Las Vegas",
  "move-up": "Move-Up Sellers",
  downsizing: "Downsizing",
  "divorce-probate": "Divorce & Probate",
  summerlin: "Summerlin",
  henderson: "Henderson",
  "green-valley": "Green Valley",
  "the-ridges": "The Ridges",
  "southern-highlands": "Southern Highlands",
  "north-las-vegas": "North Las Vegas",
  "skye-canyon": "Skye Canyon",
  "centennial-hills": "Centennial Hills",
  inspirada: "Inspirada",
  "mountains-edge": "Mountain's Edge",
  "sun-city-summerlin": "Sun City Summerlin",
  "sun-city-anthem": "Sun City Anthem",
  "sun-city-aliante": "Sun City Aliante",
  "solera-anthem": "Solera at Anthem",
  "heritage-stonebridge": "Heritage at Stonebridge",
  "del-webb-lake-las-vegas": "Del Webb Lake Las Vegas",
  "trilogy-summerlin": "Trilogy Summerlin",
  newbridge: "Newbridge",
};

function formatSegmentLabel(segment: string, parentSegment?: string): string {
  if (parentSegment === "listings" && segment !== "listings") {
    return "Listing Details";
  }

  const mapped = SEGMENT_LABELS[segment];
  if (mapped) return mapped;

  return segment
    .split("-")
    .map((word) => {
      if (word === "55") return "55";
      if (word === "plus") return "+";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ")
    .replace(/55 \+/g, "55+");
}

/**
 * Build breadcrumb trail items from a URL pathname (e.g. /buyers/first-time-buyers).
 */
export function buildBreadcrumbTrail(pathname: string): BreadcrumbItem[] {
  const normalized = pathname.split("?")[0].replace(/\/$/, "") || "/";
  if (normalized === "/" || normalized === "") {
    return [];
  }

  const segments = normalized.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [{ name: "Home", url: "/" }];

  let path = "";
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    path += `/${segment}`;
    const parent = i > 0 ? segments[i - 1] : undefined;
    items.push({
      name: formatSegmentLabel(segment, parent),
      url: path,
    });
  }

  return items;
}
