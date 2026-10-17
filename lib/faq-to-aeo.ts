import type { FaqItem } from "./newbridge-seller-faqs";

export function faqItemsToAeo(faqs: FaqItem[]) {
  return faqs.map((faq) => ({ question: faq.q, answer: faq.a }));
}
