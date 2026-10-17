export type PopularSearch = { name: string; href: string; count: string };

export const LAS_VEGAS_POPULAR_SEARCHES: PopularSearch[] = [
  { name: "Summerlin Homes", href: "/neighborhoods/summerlin", count: "1,200+" },
  { name: "Henderson Properties", href: "/neighborhoods/henderson", count: "980+" },
  { name: "Green Valley", href: "/neighborhoods/green-valley", count: "450+" },
  { name: "The Ridges Luxury", href: "/neighborhoods/the-ridges", count: "85+" },
  { name: "55+ Communities", href: "/55-plus-communities", count: "320+" },
  { name: "New Construction", href: "/new-construction", count: "600+" },
];

export const NEWBRIDGE_POPULAR_SEARCHES: PopularSearch[] = [
  { name: "Newbridge GEO hub", href: "/neighborhoods/newbridge", count: "Guide" },
  { name: "89139 MLS search", href: "/listings", count: "Live feed" },
  { name: "New construction buyer guide", href: "/new-construction", count: "Builder guide" },
  { name: "Buyer representation", href: "/buyers", count: "Free to you" },
  { name: "Home valuation (89139)", href: "/home-valuation", count: "Free CMA" },
  { name: "Mountain's Edge", href: "/neighborhoods/mountains-edge", count: "Compare" },
];

export type ListingAreaCard = {
  name: string;
  description: string;
  medianPrice: string;
  daysOnMarket: string;
};

export const LAS_VEGAS_LISTING_AREAS: ListingAreaCard[] = [
  {
    name: "Summerlin",
    description: "Master-planned community with Red Rock views, top schools, and 150+ parks",
    medianPrice: "$625,000",
    daysOnMarket: "22",
  },
  {
    name: "Henderson",
    description: "Nevada's second-largest city with residential communities and published municipal services",
    medianPrice: "$485,000",
    daysOnMarket: "24",
  },
  {
    name: "Green Valley",
    description: "Established Henderson community with mature landscaping and golf courses",
    medianPrice: "$520,000",
    daysOnMarket: "26",
  },
  {
    name: "Southern Highlands",
    description: "Guard-gated luxury community with championship golf and mountain views",
    medianPrice: "$750,000",
    daysOnMarket: "32",
  },
  {
    name: "North Las Vegas",
    description: "Affordable new construction and growing infrastructure",
    medianPrice: "$385,000",
    daysOnMarket: "18",
  },
  {
    name: "Skye Canyon",
    description: "Newer master-planned community with modern amenities and mountain access",
    medianPrice: "$550,000",
    daysOnMarket: "20",
  },
];

export const NEWBRIDGE_LISTING_AREAS: ListingAreaCard[] = [
  {
    name: "Newbridge",
    description: "Richmond American ranch community in ZIP 89139 near Blue Diamond Road.",
    medianPrice: "Verify MLS",
    daysOnMarket: "Weekly",
  },
  {
    name: "89139 resale corridor",
    description: "Single-story inventory on Middleton Falls and nearby Southwest streets.",
    medianPrice: "Verify MLS",
    daysOnMarket: "Weekly",
  },
  {
    name: "Mountain's Edge",
    description: "Adjacent master-planned area buyers compare for amenities and commute.",
    medianPrice: "Verify MLS",
    daysOnMarket: "Weekly",
  },
  {
    name: "Southwest Las Vegas",
    description: "Blue Diamond Road corridor—ranch plans and newer subdivisions.",
    medianPrice: "Verify MLS",
    daysOnMarket: "Weekly",
  },
  {
    name: "Builder standing inventory",
    description: "Confirm any remaining builder lots separately from MLS marketing names.",
    medianPrice: "Builder quote",
    daysOnMarket: "Varies",
  },
  {
    name: "Move-up / sell + buy",
    description: "Coordinate listing and purchase timelines in the same ZIP.",
    medianPrice: "CMA",
    daysOnMarket: "Plan ahead",
  },
];

export function popularSearchesForSite(isNewbridge: boolean): PopularSearch[] {
  return isNewbridge ? NEWBRIDGE_POPULAR_SEARCHES : LAS_VEGAS_POPULAR_SEARCHES;
}

export function listingAreasForSite(isNewbridge: boolean): ListingAreaCard[] {
  return isNewbridge ? NEWBRIDGE_LISTING_AREAS : LAS_VEGAS_LISTING_AREAS;
}

export type PriceBand = { range: string; description: string; count: string };

export const LAS_VEGAS_PRICE_BANDS: PriceBand[] = [
  { range: "Under $400K", description: "Starter homes, condos, townhomes", count: "1,500+" },
  { range: "$400K - $600K", description: "Family homes, established neighborhoods", count: "2,100+" },
  { range: "$600K - $1M", description: "Premium locations, larger homes", count: "1,200+" },
  { range: "$1M - $2M", description: "Luxury homes, guard-gated communities", count: "450+" },
  { range: "$2M+", description: "Ultra-luxury estates, custom builds", count: "180+" },
];

export const NEWBRIDGE_PRICE_BANDS: PriceBand[] = [
  {
    range: "Newbridge ranch plans",
    description: "Single-story resales and any remaining builder lots—verify builder quote vs MLS resale.",
    count: "Builder + MLS",
  },
  {
    range: "89139 resale",
    description: "Middleton Falls and nearby Southwest streets—filter MLS by ZIP 89139.",
    count: "Live feed",
  },
  {
    range: "Southwest Las Vegas resale",
    description: "Request a dated ZIP 89139 MLS price range before you tour.",
    count: "MLS varies",
  },
  {
    range: "HOA & lot premiums",
    description: "Compare monthly payment with HOA, lot premium, and Mello-Roos if disclosed.",
    count: "Per address",
  },
  {
    range: "Move-up / sell + buy",
    description: "Coordinate listing and purchase timelines in the same ZIP.",
    count: "CMA consult",
  },
];

export function priceBandsForSite(isNewbridge: boolean): PriceBand[] {
  return isNewbridge ? NEWBRIDGE_PRICE_BANDS : LAS_VEGAS_PRICE_BANDS;
}
