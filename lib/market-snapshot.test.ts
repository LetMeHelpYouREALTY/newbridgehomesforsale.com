import { describe, expect, it } from "vitest";
import {
  MARKET_MEDIAN_CALLOUT,
  MARKET_MEDIAN_SUMMARY,
  MARKET_REPORT,
  MARKET_REPORT_LINK_TEXT,
  MARKET_SNAPSHOT_CARD_TITLE,
  MARKET_SNAPSHOT_HEADING,
  MARKET_SNAPSHOT_SOURCE_NOTE,
  MARKET_SNAPSHOT_STATS,
  MARKET_SOLD_WITHIN_60_DAYS_SENTENCE,
  MARKET_SUPPLY_SENTENCE,
} from "@/lib/market-snapshot";
import {
  GENERIC_SELLER_FAQS,
  NEWBRIDGE_SELLER_FAQS,
} from "@/lib/newbridge-seller-faqs";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function periodParts() {
  const [monthName, year] = MARKET_REPORT.period.split(" ");
  const month = MONTHS.indexOf(monthName) + 1;
  return { year: Number(year), month };
}

describe("market snapshot", () => {
  it("links the Las Vegas REALTORS® PDF for the reported month", () => {
    const { year, month } = periodParts();
    expect(month).toBeGreaterThan(0);
    const yyyyMm = `${year}-${String(month).padStart(2, "0")}`;
    expect(MARKET_REPORT.url).toBe(
      `https://members.lasvegasrealtor.com/statistics/pdf/${yyyyMm}-GLVAR-Article.pdf`,
    );
  });

  it("was released after the reported month and not in the future", () => {
    const { year, month } = periodParts();
    expect(MARKET_REPORT.releasedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    const released = new Date(`${MARKET_REPORT.releasedOn}T00:00:00Z`);
    expect(released.getTime()).toBeGreaterThanOrEqual(Date.UTC(year, month, 1));
    expect(released.getTime()).toBeLessThanOrEqual(Date.now());
  });

  it("names the same reporting period in every displayed string", () => {
    for (const text of [
      MARKET_REPORT.name,
      MARKET_SNAPSHOT_HEADING,
      MARKET_SNAPSHOT_CARD_TITLE,
      MARKET_SNAPSHOT_SOURCE_NOTE,
      MARKET_REPORT_LINK_TEXT,
      MARKET_MEDIAN_SUMMARY,
      MARKET_MEDIAN_CALLOUT.label,
      MARKET_SUPPLY_SENTENCE,
      MARKET_SOLD_WITHIN_60_DAYS_SENTENCE,
    ]) {
      expect(text).toContain(MARKET_REPORT.period);
    }
  });

  it("shows four stats and never labels unsold inventory as active listings", () => {
    expect(MARKET_SNAPSHOT_STATS).toHaveLength(4);
    for (const stat of MARKET_SNAPSHOT_STATS) {
      expect(stat.label.toLowerCase()).not.toContain("active listings");
    }
  });
});

describe("seller FAQ timing answers", () => {
  it.each([
    ["Newbridge", NEWBRIDGE_SELLER_FAQS],
    ["generic", GENERIC_SELLER_FAQS],
  ])("%s FAQs cite the snapshot, not unsourced day counts", (_, faqs) => {
    const timing = faqs.find((faq) => faq.q.startsWith("How long"));
    expect(timing?.a.startsWith(MARKET_SOLD_WITHIN_60_DAYS_SENTENCE)).toBe(
      true,
    );
    for (const faq of faqs) {
      expect(faq.a).not.toMatch(
        /28 days|45\+ days|most sellers do better|appreciation has been gradual/i,
      );
    }
  });
});
