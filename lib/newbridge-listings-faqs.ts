import type { FaqItem } from "./newbridge-seller-faqs";

export const NEWBRIDGE_LISTINGS_FAQS: FaqItem[] = [
  {
    q: "Does this page show live MLS listings for Newbridge and 89139?",
    a: "Yes. The RealScout office feed refreshes frequently and includes active for-sale listings Dr. Jan Duffy can tour with you. Filter by price, beds, and property type, then call (702) 779-3735 to schedule showings.",
  },
  {
    q: "Can I search only Richmond American Newbridge homes here?",
    a: "Use filters and map tools, then confirm the subdivision and builder on each listing sheet. Builder standing inventory may not always match MLS marketing names—Dr. Jan Duffy verifies address, plan, and lot before you write an offer.",
  },
  {
    q: "How often do Southwest Las Vegas listings change?",
    a: "New listings, price changes, and pending status can update multiple times per day. For a dated snapshot of 89139 and Newbridge streets, request a buyer consult so comps are current when you offer.",
  },
  {
    q: "Do I need my own agent to tour homes from this search?",
    a: "You are not required to use an agent, but seller-paid buyer representation is standard on MLS resales. On new construction, register Dr. Jan Duffy before your first builder visit so representation stays on your side.",
  },
  {
    q: "What nearby areas should I compare with Newbridge?",
    a: "Many buyers compare Mountain's Edge, other 89139 streets, and Southwest Las Vegas ranch inventory near Blue Diamond Road. Compare HOA dues, lot size, and total monthly payment—not just list price.",
  },
  {
    q: "How do I get alerts for new Newbridge listings?",
    a: "Save searches in the MLS tools on this page or ask Dr. Jan Duffy to set RealScout alerts for ZIP 89139 and your price band. Alerts help when resale inventory is limited.",
  },
];

export const GENERIC_LISTINGS_FAQS: FaqItem[] = [
  {
    q: "How competitive is the Las Vegas housing market?",
    a: "Conditions vary by ZIP and price band. Request a dated MLS snapshot before you write an offer.",
  },
  {
    q: "What is the best time of year to buy in Las Vegas?",
    a: "Inventory often rises in spring while winter can bring less competition. Timing depends on your financing and move date.",
  },
  {
    q: "How much do I need for a down payment?",
    a: "Requirements depend on loan type. Dr. Jan Duffy can connect you with lenders who quote options for your file.",
  },
  {
    q: "Are HOA fees expensive in Las Vegas?",
    a: "HOA dues vary widely. Review governing documents for each address before you offer.",
  },
];

export function listingsFaqsForSite(isNewbridge: boolean): FaqItem[] {
  return isNewbridge ? NEWBRIDGE_LISTINGS_FAQS : GENERIC_LISTINGS_FAQS;
}
