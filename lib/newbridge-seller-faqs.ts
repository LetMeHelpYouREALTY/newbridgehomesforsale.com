export type FaqItem = { q: string; a: string };

export const NEWBRIDGE_SELLER_FAQS: FaqItem[] = [
  {
    q: "How long will it take to sell my Newbridge home?",
    a: "Well-priced homes in Southwest Las Vegas—including ZIP 89139—often sell in about 28 days when MLS data supports the list price. Luxury or highly customized builds can take longer. Dr. Jan Duffy prices from current comps on Middleton Falls, nearby 89139 streets, and builder resales so you are not sitting over market.",
  },
  {
    q: "What should I do to prepare a Newbridge home for sale?",
    a: "Dr. Jan Duffy provides a preparation checklist for every listing. Decluttering, minor repairs, fresh paint, and professional media usually deliver the strongest return. Ranch plans in Newbridge often benefit from highlighting garage capacity, patio coverage, and any builder upgrades in the MLS remarks.",
  },
  {
    q: "How does Berkshire Hathaway HomeServices market my Newbridge listing?",
    a: "Your home receives professional photography, virtual tours, drone video when appropriate, MLS syndication to 100+ sites, BHHS global network exposure, social promotion, and targeted digital ads. Dr. Jan Duffy lists through Berkshire Hathaway HomeServices Nevada Properties.",
  },
  {
    q: "What are Dr. Jan Duffy's commission rates for a Newbridge sale?",
    a: "Commission is negotiable and competitive with other full-service brokerages. Dr. Jan Duffy reviews all costs during a listing consultation. License S.0197614.LLC.",
  },
  {
    q: "Should I wait to list my 89139 home for higher prices?",
    a: "Southwest Las Vegas appreciation has been gradual—verify the latest MLS trend before you delay. Most sellers do better listing when they are ready with accurate pricing than trying to time a peak. Dr. Jan Duffy can run a dated CMA before you decide.",
  },
  {
    q: "Do I need to move out before listing in Newbridge?",
    a: "Occupied homes sell regularly. Vacant homes are easier to stage and show. Dr. Jan Duffy builds a showing plan around your timeline and guest-suite or work-from-home needs.",
  },
];

export const GENERIC_SELLER_FAQS: FaqItem[] = [
  {
    q: "How long will it take to sell my Las Vegas home?",
    a: "Well-priced Las Vegas homes are selling in an average of 28 days. Luxury homes ($1M+) may take 45+ days. The key is pricing correctly from day one—overpriced homes can sit for months, losing both time and money.",
  },
  {
    q: "What do I need to do to prepare my home for sale?",
    a: "Dr. Jan Duffy provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional staging consultation yield the highest ROI.",
  },
  {
    q: "How does Berkshire Hathaway market my home?",
    a: "Your home gets professional photography, virtual tours, drone video (when appropriate), MLS syndication to 100+ websites, BHHS global network exposure, social media promotion, and targeted digital advertising.",
  },
  {
    q: "What are your commission rates?",
    a: "Commission structures are negotiable and competitive with other full-service brokerages. Dr. Jan Duffy offers transparent pricing during your listing consultation.",
  },
  {
    q: "Should I wait for prices to go higher?",
    a: "Timing the market is difficult—most sellers do better by listing when ready with accurate pricing. Dr. Jan Duffy can provide a personalized market analysis to help you decide.",
  },
  {
    q: "Do I need to be moved out before listing?",
    a: "Not necessarily. Many homes sell while occupied. Dr. Jan Duffy will help you develop a strategy based on your specific situation and timeline.",
  },
];

export function sellerFaqsForSite(isNewbridge: boolean): FaqItem[] {
  return isNewbridge ? NEWBRIDGE_SELLER_FAQS : GENERIC_SELLER_FAQS;
}
