import RealScoutListings from "@/components/realscout/RealScoutListings";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Shield,
  MapPin,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { buildCommunityAreaServed } from "@/lib/area-served";
import { getRequestSiteUrl } from "@/lib/canonical-url";
import FaqAeo from "@/components/seo/FaqAeo";
import { faqItemsToAeo } from "@/lib/faq-to-aeo";
import { buyerFaqsForSite } from "@/lib/newbridge-buyer-faqs";
import {
  LAS_VEGAS_BUYER_AREAS,
  LAS_VEGAS_BUYER_MARKET_STATS,
  NEWBRIDGE_BUYER_AREAS,
  NEWBRIDGE_BUYER_MARKET_STATS,
  buyingStepsForSite,
} from "@/lib/newbridge-buyer-content";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  const isNewbridge = config.neighborhood === "Newbridge";
  return {
    title: isNewbridge
      ? "Buy in Newbridge Las Vegas | Dr. Jan Duffy, BHHS"
      : "Home Buying Guide Las Vegas | Berkshire Hathaway HomeServices",
    description: isNewbridge
      ? "Buy Newbridge and 89139 homes with your own agent. New construction and resale near Blue Diamond Rd. Dr. Jan Duffy, BHHS. Call (702) 222-1964."
      : "Looking to buy a home in Las Vegas? Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties guides you through every step. Free buyer consultation. Call (702) 222-1964.",
    keywords: isNewbridge
      ? [
          "buy Newbridge home",
          "Newbridge buyer agent",
          "89139 home buyer",
          "Richmond American buyer representation",
          "Southwest Las Vegas buyer agent",
        ]
      : [
          "buy home Las Vegas",
          "Las Vegas home buyer",
          "Berkshire Hathaway buyer agent",
          "Henderson homes for sale",
          "first time home buyer Las Vegas",
          "California relocation Las Vegas",
        ],
  };
}

export default async function BuyersPage() {
  const config = await getPageDomainConfig();
  const siteUrl = getRequestSiteUrl();
  const isNewbridge = config.neighborhood === "Newbridge";
  const buyerFaqs = buyerFaqsForSite(isNewbridge);
  const buyingSteps = buyingStepsForSite(isNewbridge);
  const buyerAreas = isNewbridge ? NEWBRIDGE_BUYER_AREAS : LAS_VEGAS_BUYER_AREAS;
  const marketStats = isNewbridge ? NEWBRIDGE_BUYER_MARKET_STATS : LAS_VEGAS_BUYER_MARKET_STATS;

  const buyerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isNewbridge
      ? "Home Buying Services — Newbridge Las Vegas"
      : "Home Buying Services Las Vegas",
    provider: {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}#dr-jan-duffy`,
      name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
      telephone: "+17022221964",
    },
    areaServed: buildCommunityAreaServed(config),
    serviceType: "Buyer Representation",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerSchema) }}
      />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="relative mb-10 h-56 overflow-hidden rounded-2xl md:h-80 max-w-6xl mx-auto">
            <Image
              src="/images/sections/buying-a-home.jpg"
              alt="Interior of a Las Vegas home for sale with mountain views"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {isNewbridge
                ? "Buy a Home in Newbridge Las Vegas | Buyer Agent Dr. Jan Duffy"
                : "Buy a Home in Las Vegas | Buyer Agent Dr. Jan Duffy"}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {isNewbridge
                ? "Tour Richmond American Newbridge and 89139 resales with your own Berkshire Hathaway HomeServices buyer's agent. Seller-paid representation costs you nothing extra on MLS resales; register Dr. Jan Duffy before any builder model visit."
                : "When you work with a Berkshire Hathaway HomeServices buyer's agent, you're backed by the most trusted name in real estate—and it costs you nothing. The seller pays the commission, but the representation is yours."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Free Buyer Representation</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Full MLS Access</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Expert Negotiation</span>
            </div>
          </div>

          {/* Value Prop */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Why You Need a Buyer's Agent</h2>
                <p className="text-slate-300 mb-6">
                  Here's what many buyers don't know: having your own agent costs you nothing. The
                  seller pays the commission, but the representation is yours.{" "}
                  <strong>Berkshire Hathaway HomeServices</strong> agents protect your interests,
                  not the seller's.                   {isNewbridge
                    ? "In Southwest Las Vegas, registering your agent before new construction and using dated 89139 comps on resale can mean the difference between a protected contract and costly surprises."
                    : "In a competitive market like Las Vegas, having expert representation can mean the difference between winning your dream home and losing out."}
                </p>
                <ul className="space-y-2">
                  {[
                    "Full MLS access + off-market opportunities",
                    "Expert negotiation on your behalf",
                    "Contract and disclosure review",
                    "Inspection coordination and repair negotiation",
                    "Lender and service provider referrals",
                    "Local market expertise since 2008",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-2xl font-bold mb-2">Your Agent, Your Advocate</p>
                <p className="text-slate-400 mb-4">
                  Dr. Jan Duffy works exclusively for your interests throughout the entire
                  transaction—from the first showing to the closing table and beyond.
                </p>
                <div className="text-sm text-slate-500">
                  Serving Las Vegas since 2008 | 500+ closed transactions since 2008
                </div>
              </div>
            </div>
          </section>

          {/* Buying Process */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              {isNewbridge
                ? "The Home Buying Process in Newbridge & 89139"
                : "The Home Buying Process in Las Vegas"}
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              {isNewbridge
                ? "Whether you are buying Richmond American new construction or a resale on Middleton Falls and nearby Southwest streets, the same milestones apply—financing, registration, tours, due diligence, and closing. Dr. Jan Duffy guides each step for ZIP 89139."
                : "Buying a home is one of the most significant financial decisions you'll make. Understanding the process helps reduce stress and ensures you're prepared at each step with Dr. Jan Duffy and Berkshire Hathaway HomeServices."}
            </p>
            <div className="space-y-6">
              {buyingSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="flex gap-6 items-start bg-white border border-slate-200 rounded-lg p-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-slate-900">{step.title}</h3>
                      </div>
                      <p className="text-slate-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Neighborhood Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              {isNewbridge
                ? "Newbridge & Southwest Las Vegas Buying Map"
                : "Las Vegas Neighborhoods for Home Buyers"}
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              {isNewbridge
                ? "Compare Newbridge ranch plans, nearby 89139 resale, and adjacent communities using live MLS data—not static median guesses. Dr. Jan Duffy pulls dated comps for each address you consider."
                : "Las Vegas offers diverse neighborhoods for every lifestyle and budget. Dr. Jan helps you compare areas using current MLS snapshots."}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {buyerAreas.map((neighborhood) => {
                const card = (
                  <div className="bg-white rounded-lg p-4 border border-slate-200 h-full">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-slate-900">{neighborhood.name}</h3>
                      <span className="text-blue-600 font-semibold text-sm">{neighborhood.price}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{neighborhood.description}</p>
                  </div>
                );
                return neighborhood.href ? (
                  <Link key={neighborhood.name} href={neighborhood.href} className="hover:opacity-95">
                    {card}
                  </Link>
                ) : (
                  <div key={neighborhood.name}>{card}</div>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <Link
                href={isNewbridge ? "/neighborhoods/newbridge" : "/neighborhoods"}
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                {isNewbridge ? "Newbridge GEO hub" : "Explore all neighborhoods"}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Buyer Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Specialized Guidance for Every Buyer
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Different buyers have different needs. A first-time buyer needs education and 
              hand-holding through the process. A California relocator needs tax guidance and 
              neighborhood matching. A luxury buyer needs discretion and access. Dr. Jan Duffy 
              tailors her approach to match your specific situation and goals.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {isNewbridge ? (
                <>
                  <Link
                    href="/new-construction"
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="text-3xl mb-4">🏗️</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                      Richmond American Newbridge
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Builder contracts, incentives, and registration rules—with Dr. Jan Duffy on your
                      side of the desk, not the builder&apos;s.
                    </p>
                    <span className="text-blue-600 font-semibold text-sm">New construction guide →</span>
                  </Link>
                  <Link
                    href="/listings"
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="text-3xl mb-4">🔍</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                      89139 MLS search
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Live resale feed for Newbridge streets and Southwest Las Vegas ranch inventory.
                    </p>
                    <span className="text-blue-600 font-semibold text-sm">Browse listings →</span>
                  </Link>
                  <Link
                    href="/buyers/first-time-buyers"
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="text-3xl mb-4">🔑</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                      First-time buyers
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      FHA, VA, down-payment assistance, and builder credits explained for your file.
                    </p>
                    <span className="text-blue-600 font-semibold text-sm">Learn more →</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/buyers/california-relocator"
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="text-3xl mb-4">🌴</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                      California Relocators
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      0% state income tax, 40-60% lower home prices. See what your CA equity buys in
                      Las Vegas.
                    </p>
                    <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
                  </Link>
                  <Link
                    href="/buyers/first-time-buyers"
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="text-3xl mb-4">🔑</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                      First-Time Buyers
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      Down payment assistance programs, FHA/VA loans, and builder incentives explained.
                    </p>
                    <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
                  </Link>
                  <Link
                    href="/buyers/luxury-homes-las-vegas"
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="text-3xl mb-4">💎</div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                      Luxury Home Buyers
                    </h3>
                    <p className="text-slate-600 text-sm mb-3">
                      $1M+ properties with discrete service and off-market opportunities.
                    </p>
                    <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
                  </Link>
                </>
              )}
            </div>
          </section>

          {/* Why BHHS */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Why Buy with Berkshire Hathaway HomeServices
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Not all real estate agents are created equal. When you choose a Berkshire Hathaway 
              HomeServices agent, you're choosing the only real estate brand backed by Warren 
              Buffett's Berkshire Hathaway Inc.—a name synonymous with trust, ethical standards, 
              and financial strength.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Trusted Brand</h3>
                <p className="text-slate-600 text-sm">
                  The only real estate brand backed by Berkshire Hathaway Inc.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Global Network</h3>
                <p className="text-slate-600 text-sm">
                  50,000+ agents worldwide for seamless relocations and referrals
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Local Expertise</h3>
                <p className="text-slate-600 text-sm">
                  Dr. Jan has served Las Vegas since 2008 with 500+ closed transactions since 2008
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Expert Negotiation</h3>
                <p className="text-slate-600 text-sm">
                  500+ successful transactions mean proven negotiation skills
                </p>
              </div>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "My job isn't just to show you houses—it's to make sure you don't overpay, that you
                understand what you're buying, and that you're protected through every step of the
                transaction. That's what Berkshire Hathaway HomeServices representation means. I treat 
                every client like family and won't stop until we find the right home for your needs."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties | Serving Las Vegas Since 2008
              </cite>
            </div>
          </section>

          {/* Market Stats */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              {isNewbridge
                ? "Southwest Las Vegas / 89139 Buyer Snapshot"
                : "Las Vegas Buyer Market Statistics | January 2026"}
            </h2>
            <p className="text-blue-100 text-center max-w-3xl mx-auto mb-8">
              {isNewbridge
                ? "Newbridge resales and builder lots change week to week. Use a dated MLS pull—not blog averages—before you write an offer."
                : "Understanding the current market helps you make informed decisions about timing, pricing, and negotiation strategies."}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {marketStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                  <div className="text-blue-300 text-xs mt-1">{stat.hint}</div>
                </div>
              ))}
            </div>
          </section>

          <FaqAeo
            title={
              isNewbridge
                ? "Frequently asked questions about buying in Newbridge"
                : "Frequently asked questions about buying in Las Vegas"
            }
            faqs={faqItemsToAeo(buyerFaqs)}
          />

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {isNewbridge ? "Ready to tour Newbridge & 89139?" : "Ready to Find Your Las Vegas Home?"}
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              {isNewbridge
                ? "Call or text Dr. Jan Duffy for a free buyer consult. Register before your first Richmond American visit and search live MLS resales on ZIP 89139."
                : "Questions about buying in Las Vegas? Call or text Dr. Jan Duffy for a free buyer consultation—the seller pays the commission on MLS resales."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call (702) 222-1964
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
            <p className="mt-4 text-slate-400 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
