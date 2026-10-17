import type { FaqItem } from "./newbridge-seller-faqs";

export const NEWBRIDGE_BUYER_FAQS: FaqItem[] = [
  {
    q: "How much do I need for a down payment on a Newbridge home?",
    a: "Down payment depends on loan type: FHA often starts at 3.5%, conventional loans commonly 3-20%, and VA loans may be 0% for eligible buyers. Nevada down-payment assistance programs change—Dr. Jan Duffy connects you with lenders who quote options for your file.",
  },
  {
    q: "Should I get pre-approved before touring Newbridge or 89139 resales?",
    a: "Yes. Pre-approval sets your budget and strengthens offers. In Southwest Las Vegas, well-priced ranch plans and resales can move quickly when MLS days-on-market are low. Pre-approval typically takes 1-3 days with complete documents.",
  },
  {
    q: "Does Dr. Jan Duffy represent buyers on Richmond American Newbridge contracts?",
    a: "Yes. Dr. Jan Duffy provides buyer representation on new construction—including Richmond American at Newbridge—and on MLS resales in ZIP 89139. Register her before your first builder visit so contract review and incentive negotiation stay on your side.",
  },
  {
    q: "Can I buy a Newbridge home if I am relocating from another state?",
    a: "Yes. Dr. Jan Duffy coordinates virtual tours, video walk-throughs, and Berkshire Hathaway HomeServices referral coverage when you are out of state. You still need to register her before any builder model visit.",
  },
  {
    q: "How competitive is the Southwest Las Vegas housing market?",
    a: "Inventory and days-on-market shift weekly. Use a current MLS snapshot—not a blog average—before you write an offer. Dr. Jan Duffy pulls dated comps for Newbridge and nearby 89139 streets as part of buyer consults.",
  },
  {
    q: "How do Newbridge new builds compare to resale in ZIP 89139?",
    a: "New construction offers plan selection and builder warranties; resale may offer faster move-in and established landscaping. Dr. Jan Duffy compares HOA fees, lot premiums, and total monthly cost so you choose based on numbers for each address.",
  },
];

export const GENERIC_BUYER_FAQS: FaqItem[] = [
  {
    q: "How much do I need for a down payment in Las Vegas?",
    a: "Down payments vary by loan type. Dr. Jan Duffy can connect you with lenders who specialize in low down payment programs.",
  },
  {
    q: "Should I get pre-approved before looking at homes?",
    a: "Yes. Pre-approval shows sellers you are serious and clarifies your budget.",
  },
  {
    q: "Does BHHS help with new construction purchases?",
    a: "Yes. Dr. Jan Duffy provides buyer representation on new construction and reviews builder contracts.",
  },
  {
    q: "What if I am relocating from another state?",
    a: "Dr. Jan Duffy coordinates virtual tours and BHHS referral coverage for out-of-state buyers.",
  },
  {
    q: "How competitive is the Las Vegas housing market?",
    a: "Conditions vary by ZIP and price band. Request a dated MLS snapshot before you offer.",
  },
  {
    q: "How do I choose between new construction and resale?",
    a: "Compare total monthly cost, timeline, warranties, and HOA for each specific property—not city averages.",
  },
];

export function buyerFaqsForSite(isNewbridge: boolean): FaqItem[] {
  return isNewbridge ? NEWBRIDGE_BUYER_FAQS : GENERIC_BUYER_FAQS;
}
