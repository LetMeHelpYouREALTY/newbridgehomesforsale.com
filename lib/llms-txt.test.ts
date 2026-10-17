import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  MARKET_MEDIAN_SUMMARY,
  MARKET_REPORT,
  MARKET_SOLD_WITHIN_60_DAYS_SENTENCE,
  MARKET_SUPPLY_SENTENCE,
} from "@/lib/market-snapshot";
import { NEWBRIDGE_CONTACT_FAQS } from "@/lib/newbridge-contact-faqs";
import { NEWBRIDGE_HOME_FAQS } from "@/lib/newbridge-seo";
import { INDEXABLE_PAGES } from "@/lib/seo-index-scope";

const llms = fs.readFileSync(
  path.join(process.cwd(), "public", "llms.txt"),
  "utf8",
);

function section(heading: string): string {
  const start = llms.indexOf(`\n## ${heading}`);
  expect(start).toBeGreaterThanOrEqual(0);
  const end = llms.indexOf("\n## ", start + 1);
  return llms.slice(start, end === -1 ? undefined : end);
}

describe("public/llms.txt", () => {
  it("lists only indexable pages as high-value", () => {
    const indexable = new Set(INDEXABLE_PAGES.map((page) => page.path));
    const listed = [...section("High-value pages").matchAll(/^- (\/\S*) /gm)];
    expect(listed.length).toBeGreaterThan(0);
    for (const [, pagePath] of listed) {
      expect(indexable.has(pagePath)).toBe(true);
    }
  });

  it("quotes the current market snapshot and links its report", () => {
    for (const text of [
      MARKET_REPORT.url,
      MARKET_MEDIAN_SUMMARY,
      MARKET_SOLD_WITHIN_60_DAYS_SENTENCE,
      MARKET_SUPPLY_SENTENCE,
    ]) {
      expect(llms).toContain(text);
    }
  });

  it("states builder status in the same dated words as the site FAQs", () => {
    const soldOut = NEWBRIDGE_HOME_FAQS.find((faq) =>
      faq.question.includes("sold out"),
    );
    const status = soldOut?.answer.slice(0, soldOut.answer.indexOf("."));
    expect(status).toMatch(/^As of [A-Z][a-z]+ \d{1,2}, \d{4}, /);
    expect(llms).toContain(`${status}.`);
    expect(
      NEWBRIDGE_CONTACT_FAQS.some((faq) => faq.a.includes(status ?? "")),
    ).toBe(true);
  });

  it("gives only the client CTA phone number", () => {
    expect(llms).toContain("(702) 222-1964");
    expect(llms).not.toMatch(/500-1942/);
  });
});
