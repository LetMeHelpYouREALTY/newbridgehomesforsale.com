import type { LucideIcon } from "lucide-react";
import { DollarSign, FileText, Home, Key, Search } from "lucide-react";

export type BuyerAreaCard = {
  name: string;
  price: string;
  description: string;
  href?: string;
};

export const LAS_VEGAS_BUYER_AREAS: BuyerAreaCard[] = [
  { name: "Summerlin", price: "$625K", description: "Master-planned community with Red Rock views" },
  { name: "Henderson", price: "$485K", description: "Lake Las Vegas, Green Valley, I-215 access" },
  { name: "Green Valley", price: "$520K", description: "Established with mature landscaping" },
  { name: "The Ridges", price: "$2.5M", description: "Ultra-luxury guard-gated estates" },
  { name: "North Las Vegas", price: "$385K", description: "Affordable new construction" },
  { name: "Southern Highlands", price: "$750K", description: "Golf course community" },
];

/** GEO-focused cards for newbridgehomesforsale.com (no city-wide median claims). */
export const NEWBRIDGE_BUYER_AREAS: BuyerAreaCard[] = [
  {
    name: "Newbridge (Richmond American)",
    price: "MLS varies",
    description: "Ranch plans in ZIP 89139 near Blue Diamond Road—verify live builder and resale inventory.",
    href: "/neighborhoods/newbridge",
  },
  {
    name: "89139 resale streets",
    price: "MLS varies",
    description: "Single-story and ranch inventory on Middleton Falls and nearby Southwest corridors.",
    href: "/listings",
  },
  {
    name: "Mountain's Edge",
    price: "MLS varies",
    description: "Adjacent master-planned area buyers often compare for commute and HOA.",
    href: "/neighborhoods/mountains-edge",
  },
  {
    name: "New construction guide",
    price: "Builder quotes",
    description: "Builder contracts, incentives, and registration rules with your own agent.",
    href: "/new-construction",
  },
  {
    name: "Southwest Las Vegas",
    price: "MLS varies",
    description: "Blue Diamond Road corridor—compare lot premiums and total monthly cost.",
    href: "/listings",
  },
  {
    name: "Free home valuation",
    price: "CMA",
    description: "MLS-backed comps for sellers and move-up buyers in 89139.",
    href: "/home-valuation",
  },
];

export type BuyerMarketStat = { label: string; value: string; hint: string };

export const LAS_VEGAS_BUYER_MARKET_STATS: BuyerMarketStat[] = [
  { label: "Median home price", value: "$450K", hint: "Valley-wide estimate (Jan 2026)" },
  { label: "Active listings", value: "4,850", hint: "Greater Las Vegas MLS" },
  { label: "Avg. days on market", value: "28 days", hint: "Valley-wide estimate" },
  { label: "Year-over-year", value: "+4.2%", hint: "Median price change" },
];

export const NEWBRIDGE_BUYER_MARKET_STATS: BuyerMarketStat[] = [
  { label: "GEO focus", value: "ZIP 89139", hint: "Newbridge & Southwest Las Vegas" },
  { label: "Inventory", value: "Weekly MLS", hint: "Resale + any standing builder lots" },
  { label: "Pricing", value: "Dated CMA", hint: "No blog averages—pull comps per address" },
  { label: "Next step", value: "702-779-3735", hint: "Buyer consult + registration before models" },
];

export type BuyingStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const genericBuyingSteps: BuyingStep[] = [
  {
    icon: DollarSign,
    title: "Get Pre-Approved for Financing",
    description:
      "Know your budget before you start looking. Dr. Jan connects you with trusted local lenders who offer competitive rates and programs for every situation—FHA, VA, conventional, and down payment assistance programs.",
  },
  {
    icon: Search,
    title: "Define Your Priorities & Search",
    description:
      "Dr. Jan provides access to all MLS listings, off-market opportunities, and new construction. She'll help you identify which Las Vegas neighborhoods match your lifestyle while setting up automated alerts so you never miss a new listing.",
  },
  {
    icon: FileText,
    title: "Tour Properties & Make an Offer",
    description:
      "Dr. Jan's market expertise ensures your offer is competitive yet protects your interests. She negotiates on your behalf to get the best price and terms possible, with contingencies that protect you.",
  },
  {
    icon: Home,
    title: "Due Diligence & Inspections",
    description:
      "Coordinate home inspections, review disclosures, and ensure you understand exactly what you're buying. Dr. Jan helps negotiate repairs or credits if issues arise during the inspection period.",
  },
  {
    icon: Key,
    title: "Close & Get Your Keys",
    description:
      "Dr. Jan coordinates with lenders, title, and escrow to ensure a smooth closing. The typical closing process takes 30-45 days from offer acceptance—then you get the keys to your new Las Vegas home!",
  },
];

const newbridgeBuyingSteps: BuyingStep[] = [
  {
    icon: DollarSign,
    title: "Get Pre-Approved for Financing",
    description:
      "Set your budget before touring Newbridge resales or any builder inventory. Dr. Jan Duffy connects you with lenders who quote FHA, VA, conventional, and Nevada assistance options for your file.",
  },
  {
    icon: Search,
    title: "Register Your Agent & Search MLS",
    description:
      "Register Dr. Jan Duffy before any builder model visit. She sets RealScout alerts for ZIP 89139, compares builder lots with resale ranch plans, and verifies subdivision names on each listing sheet.",
  },
  {
    icon: FileText,
    title: "Tour, Compare & Make an Offer",
    description:
      "Offers use dated comps for Southwest Las Vegas—not city-wide averages. Dr. Jan Duffy negotiates price, credits, and contingencies on MLS resales and reviews builder change orders on new construction.",
  },
  {
    icon: Home,
    title: "Due Diligence & Inspections",
    description:
      "Inspections, HOA documents, and builder walk-throughs are coordinated for you. Issues are negotiated before you remove contingencies.",
  },
  {
    icon: Key,
    title: "Close & Move In",
    description:
      "Lender, title, and builder timelines are tracked through closing—typically 30-45 days on resale and longer on dirt starts. Dr. Jan Duffy stays available through keys and warranty questions.",
  },
];

export function buyingStepsForSite(isNewbridge: boolean): BuyingStep[] {
  return isNewbridge ? newbridgeBuyingSteps : genericBuyingSteps;
}
