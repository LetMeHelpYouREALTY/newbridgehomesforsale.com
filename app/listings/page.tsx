import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Home,
  MapPin,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  Heart,
  Building2,
  Users,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { buildCommunityAreaServed } from "@/lib/area-served";
import { getRequestSiteUrl } from "@/lib/canonical-url";
import FaqAeo from "@/components/seo/FaqAeo";
import { faqItemsToAeo } from "@/lib/faq-to-aeo";
import { listingsFaqsForSite } from "@/lib/newbridge-listings-faqs";
import {
  listingAreasForSite,
  popularSearchesForSite,
  priceBandsForSite,
} from "@/lib/newbridge-listings-content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  const isNewbridge = config.neighborhood === "Newbridge";
  return {
    title: isNewbridge
      ? "Newbridge & 89139 Homes for Sale | MLS Search"
      : "Las Vegas Homes for Sale | MLS Property Search | Berkshire Hathaway HomeServices",
    description: isNewbridge
      ? "Live MLS search for Newbridge and ZIP 89139 resales near Blue Diamond Rd. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964."
      : "Browse all Las Vegas and Henderson homes for sale with live MLS listings. Search by neighborhood, price, and features. Dr. Jan Duffy, Berkshire Hathaway HomeServices. Call (702) 222-1964.",
    keywords: isNewbridge
      ? [
          "Newbridge homes for sale MLS",
          "89139 homes for sale",
          "Southwest Las Vegas listings",
          "Richmond American resale",
          "Blue Diamond Road homes",
        ]
      : [
          "Las Vegas homes for sale",
          "Henderson real estate",
          "MLS listings Las Vegas",
          "Summerlin homes",
          "houses for sale Las Vegas",
          "Berkshire Hathaway listings",
        ],
  };
}

export default async function ListingsPage() {
  const config = await getPageDomainConfig();
  const siteUrl = getRequestSiteUrl();
  const isNewbridge = config.neighborhood === "Newbridge";
  const popularSearches = popularSearchesForSite(isNewbridge);
  const neighborhoods = listingAreasForSite(isNewbridge);
  const listingsFaqs = listingsFaqsForSite(isNewbridge);
  const priceRanges = priceBandsForSite(isNewbridge);

  const listingsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: isNewbridge
      ? "Newbridge & 89139 MLS Property Listings"
      : "Las Vegas MLS Property Listings",
    description: isNewbridge
      ? "Live MLS property listings for Newbridge and ZIP 89139 Southwest Las Vegas"
      : "Live MLS property listings for Las Vegas, Henderson, and Summerlin homes for sale",
    url: `${siteUrl}/listings`,
    about: buildCommunityAreaServed(config),
    publisher: {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}#dr-jan-duffy`,
      name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
      telephone: "+17022221964",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingsSchema) }}
      />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="relative mb-10 h-56 overflow-hidden rounded-2xl md:h-80 max-w-6xl mx-auto">
            <Image
              src="/images/sections/featured-las-vegas-homes.jpg"
              alt="Featured Las Vegas home for sale"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {isNewbridge
                ? "Newbridge & 89139 Homes for Sale | Live MLS Search"
                : "Las Vegas Homes for Sale | Live MLS Search"}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {isNewbridge
                ? "Search live MLS resales for Newbridge, Middleton Falls, and Southwest Las Vegas near Blue Diamond Road. Dr. Jan Duffy tours with you and registers as your agent before Richmond American model visits."
                : "Search thousands of Las Vegas, Henderson, and Summerlin properties with live MLS listings updated frequently. Find your dream home with Dr. Jan Duffy at Berkshire Hathaway HomeServices."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Live MLS Data</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Updated Every 15 Min</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> 5,000+ Active Listings</span>
            </div>
          </div>

          {/* RealScout Widget - Live MLS Listings */}
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-office-listings 
                    agent-encoded-id="QWdlbnQtMjI1MDUw" 
                    sort-order="NEWEST" 
                    listing-status="For Sale" 
                    property-types=",SFR,MF,TC"
                  ></realscout-office-listings>`,
                }}
              />
            </div>
          </section>

          {/* Popular Searches Section */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              {isNewbridge
                ? "Popular searches for Newbridge & 89139"
                : "Popular Property Searches in Las Vegas"}
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              {isNewbridge
                ? "Start with the Newbridge GEO hub, new construction guide, or live MLS filters below. Inventory changes weekly—confirm status on each listing before you tour."
                : "Browse popular Las Vegas searches below or use filters to customize your home search."}
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {popularSearches.map((search) => (
                <Link
                  key={search.name}
                  href={search.href}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all group flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                      {search.name}
                    </h3>
                    <span className="text-sm text-slate-500">{search.count} listings</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </section>

          {/* Price Range Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              {isNewbridge
                ? "Newbridge & 89139 price bands (verify on MLS)"
                : "Las Vegas Home Price Guide"}
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              {isNewbridge
                ? "Use live list prices and dated comps—not blog medians—for each address. Builder quotes and MLS resales can differ for the same square footage in ZIP 89139."
                : "The Las Vegas real estate market offers value compared to many western metros. Here's what buyers often see at different price points—confirm on each listing."}
            </p>
            <div className="space-y-4">
              {priceRanges.map((price, index) => (
                <div
                  key={price.range}
                  className="bg-white rounded-lg p-4 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between"
                >
                  <div className="flex items-center mb-2 md:mb-0">
                    <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-bold text-slate-900">{price.range}</h3>
                      <p className="text-sm text-slate-600">{price.description}</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-semibold">{price.count} homes</span>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhood Overview */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              {isNewbridge
                ? "Newbridge & nearby Southwest communities"
                : "Las Vegas Neighborhoods & Communities"}
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              {isNewbridge
                ? "Compare Newbridge ranch plans with adjacent 89139 resale and Mountain's Edge using facts from each listing—HOA, lot size, and total monthly cost."
                : "Each Las Vegas neighborhood offers a unique lifestyle. Dr. Jan Duffy provides guidance on which areas match your priorities."}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2">{neighborhood.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Median: <strong className="text-slate-900">{neighborhood.medianPrice}</strong></span>
                    <span className="text-slate-500">
                      DOM: <strong className="text-slate-900">{neighborhood.daysOnMarket}</strong>
                      {!isNewbridge ? " days" : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={isNewbridge ? "/neighborhoods/newbridge" : "/neighborhoods"}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                {isNewbridge ? "Newbridge GEO hub" : "Explore All Neighborhoods"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Why Use an Agent Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Why Work With a Berkshire Hathaway HomeServices Agent
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              In today's competitive Las Vegas market, having expert representation can mean the 
              difference between winning your dream home and losing out. Dr. Jan Duffy brings 
              the resources of Berkshire Hathaway HomeServices—the most trusted name in real estate—
              combined with deep local market knowledge from serving Las Vegas since 2008.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Off-Market Access</h3>
                <p className="text-slate-400 text-sm">
                  See listings before they hit the MLS through our network of 50,000+ agents
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Expert Negotiation</h3>
                <p className="text-slate-400 text-sm">
                  500+ closed transactions since 2008 means proven negotiation skills on your behalf
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Local Expertise</h3>
                <p className="text-slate-400 text-sm">
                  Insider knowledge of neighborhoods, schools, and upcoming developments
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Free for Buyers</h3>
                <p className="text-slate-400 text-sm">
                  The seller pays the commission—you get full representation at no cost
                </p>
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Las Vegas Real Estate Market Statistics
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              The Las Vegas housing market remains strong heading into 2026, with steady appreciation 
              and healthy inventory levels. Understanding current market conditions helps buyers 
              make informed decisions about timing, pricing, and negotiation strategies. Here's a 
              snapshot of the current market as of January 2026.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">$450K</div>
                <div className="text-sm text-slate-600">Median Home Price</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">28</div>
                <div className="text-sm text-slate-600">Avg Days on Market</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4,850</div>
                <div className="text-sm text-slate-600">Active Listings</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">+4.2%</div>
                <div className="text-sm text-slate-600">Year-Over-Year</div>
              </div>
            </div>
          </section>

          {/* Home Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Home Buying Process in Las Vegas
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Buying a home is one of the most significant financial decisions you'll make. 
              Understanding the process helps reduce stress and ensures you're prepared at each 
              step. Here's what to expect when purchasing a home in Las Vegas with Dr. Jan Duffy 
              and Berkshire Hathaway HomeServices.
            </p>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Get Pre-Approved for Financing</h3>
                  <p className="text-slate-600 text-sm">
                    A pre-approval letter shows sellers you're serious and gives you a clear budget. 
                    Dr. Jan can connect you with trusted local lenders offering competitive rates. 
                    This typically takes 1-3 days with proper documentation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Define Your Priorities & Search</h3>
                  <p className="text-slate-600 text-sm">
                    Location, size, features, and budget all factor into your search. Dr. Jan helps 
                    you identify which Las Vegas neighborhoods match your lifestyle while setting 
                    up automated MLS alerts so you never miss a new listing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Tour Properties & Make an Offer</h3>
                  <p className="text-slate-600 text-sm">
                    Visit homes that meet your criteria, either in person or virtually. When you 
                    find "the one," Dr. Jan helps you craft a competitive offer with the right 
                    price, contingencies, and terms to win in today's market.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Due Diligence & Inspections</h3>
                  <p className="text-slate-600 text-sm">
                    Once under contract, you'll have time for home inspections, appraisals, and 
                    final financing approval. Dr. Jan coordinates with all parties and helps you 
                    negotiate repairs or credits if issues arise.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Close & Get Your Keys</h3>
                  <p className="text-slate-600 text-sm">
                    The closing process typically takes 30-45 days from offer acceptance. You'll 
                    sign final documents, transfer funds, and receive the keys to your new Las Vegas 
                    home. Dr. Jan remains available for any questions even after closing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <FaqAeo
            title={
              isNewbridge
                ? "Frequently asked questions about Newbridge MLS search"
                : "Frequently asked questions about Las Vegas real estate"
            }
            faqs={faqItemsToAeo(listingsFaqs)}
          />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isNewbridge ? "Ready to tour Newbridge & 89139 listings?" : "Ready to Find Your Las Vegas Home?"}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {isNewbridge
                ? "Call Dr. Jan Duffy for MLS tours and builder registration before Richmond American model visits. Free buyer consults—seller-paid on resales."
                : "Contact Dr. Jan Duffy for personalized guidance and expert representation backed by Berkshire Hathaway HomeServices."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 222-1964
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-500 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-400 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-4 text-blue-200 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
    </>
  );
}
