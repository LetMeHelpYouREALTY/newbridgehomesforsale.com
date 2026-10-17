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
  { name: "New construction buyer guide", href: "/new-construction", count: "Richmond American" },
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
    description: "Confirm Richmond American lots separately from MLS marketing names.",
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
