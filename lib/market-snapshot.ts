export type MarketStat = { value: string; label: string };

/**
 * Las Vegas REALTORS® monthly statistics: the only source for market figures
 * on this site. They cover existing homes sold through the Southern Nevada MLS,
 * not Newbridge alone. Replace every string here together after each release;
 * public/llms.txt quotes the report URL and the three sentences verbatim.
 */
export const MARKET_REPORT = {
  name: "Las Vegas REALTORS® September 2026 report",
  period: "September 2026",
  releasedOn: "2026-10-06",
  url: "https://members.lasvegasrealtor.com/statistics/pdf/2026-09-GLVAR-Article.pdf",
} as const;

export const MARKET_SNAPSHOT_HEADING =
  "Southern Nevada Market Snapshot | September 2026";

export const MARKET_SNAPSHOT_CARD_TITLE =
  "Southern Nevada | September 2026 (Las Vegas REALTORS®)";

export const MARKET_SNAPSHOT_STATS: readonly MarketStat[] = [
  { value: "$470,000", label: "Median price, existing single-family homes" },
  { value: "Same", label: "Median vs. September 2025" },
  { value: "75.9%", label: "Existing homes sold within 60 days" },
  { value: "5 months", label: "Housing supply at September's sales pace" },
];

export const MARKET_SNAPSHOT_SOURCE_NOTE =
  "Source: Las Vegas REALTORS® September 2026 report. Southern Nevada MLS figures, not Newbridge-only.";

export const MARKET_REPORT_LINK_TEXT =
  "Read the Las Vegas REALTORS® September 2026 report →";

export const MARKET_MEDIAN_SUMMARY =
  "Las Vegas REALTORS® reported a $470,000 median price for existing single-family homes sold through its MLS in Southern Nevada in September 2026—the same as September 2025 and down from the all-time high of $490,000 set in May and June.";

export const MARKET_MEDIAN_CALLOUT = {
  value: "$470,000",
  label: "Median existing single-family price, Southern Nevada, September 2026",
  change: "Same as September 2025 (Las Vegas REALTORS®)",
} as const;

export const MARKET_SUPPLY_SENTENCE =
  "In September 2026, Las Vegas REALTORS® reported a five-month housing supply at September's sales pace, up from a roughly four-month supply one year earlier.";

export const MARKET_SOLD_WITHIN_60_DAYS_SENTENCE =
  "In September 2026, Las Vegas REALTORS® reported that 75.9% of all existing local homes sold within 60 days.";
