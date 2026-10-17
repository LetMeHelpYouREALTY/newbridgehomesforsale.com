import { describe, expect, it } from "vitest";
import { NEWBRIDGE_GUIDE_FAQS, NEWBRIDGE_HOME_FAQS } from "@/lib/newbridge-seo";

describe("Newbridge FAQ split", () => {
  it("never asks the same question on the homepage and the guide", () => {
    expect(NEWBRIDGE_HOME_FAQS.length).toBeGreaterThan(0);
    expect(NEWBRIDGE_GUIDE_FAQS.length).toBeGreaterThan(0);
    const guideQuestions = new Set(
      NEWBRIDGE_GUIDE_FAQS.map((faq) => faq.question.toLowerCase()),
    );
    for (const faq of NEWBRIDGE_HOME_FAQS) {
      expect(guideQuestions.has(faq.question.toLowerCase())).toBe(false);
    }
  });
});
