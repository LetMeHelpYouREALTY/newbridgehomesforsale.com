import RealScoutListings from "@/components/realscout/RealScoutListings";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Camera,
  Globe,
  DollarSign,
  CheckCircle,
  BarChart,
  Users,
  Home,
  Clock,
  Shield,
  ArrowRight,
  Award,
} from "lucide-react";
import type { Metadata } from "next";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { buildCommunityAreaServed } from "@/lib/area-served";
import { getRequestSiteUrl } from "@/lib/canonical-url";
import FaqAeo from "@/components/seo/FaqAeo";
import MarketSnapshotSource from "@/components/seo/MarketSnapshotSource";
import { faqItemsToAeo } from "@/lib/faq-to-aeo";
import {
  MARKET_MEDIAN_CALLOUT,
  MARKET_REPORT,
  MARKET_SNAPSHOT_HEADING,
  MARKET_SNAPSHOT_STATS,
} from "@/lib/market-snapshot";
import { sellerFaqsForSite } from "@/lib/newbridge-seller-faqs";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  const isNewbridge = config.neighborhood === "Newbridge";
  return {
    title: isNewbridge
      ? "Sell Your Newbridge Home | Dr. Jan Duffy, BHHS"
      : "Sell Your Las Vegas Home | Berkshire Hathaway HomeServices",
    description: isNewbridge
      ? "Sell your Newbridge home in Las Vegas 89139 with Dr. Jan Duffy, BHHS Nevada Properties. Free CMA and MLS marketing. Call (702) 222-1964."
      : "Sell your Las Vegas home for top dollar with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Free home valuation. World-class marketing. Call (702) 222-1964.",
    keywords: isNewbridge
      ? [
          "sell Newbridge home",
          "Newbridge listing agent",
          "89139 home seller",
          "Blue Diamond Road listing agent",
          "Dr. Jan Duffy seller",
        ]
      : [
          "sell home Las Vegas",
          "Las Vegas listing agent",
          "Berkshire Hathaway sell house",
          "what is my home worth Las Vegas",
          "Las Vegas real estate agent",
        ],
  };
}

const sellingBenefits = [
  {
    icon: Globe,
    title: "World-Class Marketing",
    description:
      "Your home gets exposure through the most recognized real estate brand in the world. Professional photography, virtual tours, drone video, and syndication to 100+ websites ensures maximum visibility to qualified buyers.",
  },
  {
    icon: Users,
    title: "Global Buyer Network",
    description:
      "Berkshire Hathaway's 50,000+ agents worldwide means your listing reaches qualified buyers from across the globe—especially important for Las Vegas's strong relocation and international buyer markets.",
  },
  {
    icon: BarChart,
    title: "Expert Pricing Strategy",
    description:
      "Dr. Jan has been serving Las Vegas since 2008, which means accurate pricing that attracts buyers without leaving money on the table. Overpriced homes sit and lose value; well-priced homes generate competition and sell for more.",
  },
  {
    icon: DollarSign,
    title: "Skilled Negotiation",
    description:
      "From offer review to closing negotiations, Dr. Jan protects your interests and maximizes your net proceeds. 500+ closed transactions since 2008 means she knows how to handle any situation and close deals successfully.",
  },
];

const sellingProcess = [
  {
    step: 1,
    title: "Free Home Valuation",
    description: "Dr. Jan analyzes comparable sales, market conditions, and your home's unique features to determine optimal pricing. You'll understand exactly what your home could sell for before making any decisions.",
  },
  {
    step: 2,
    title: "Preparation & Staging",
    description: "Receive a customized preparation checklist to maximize your home's appeal. Dr. Jan provides staging consultations and can recommend contractors for any needed repairs or updates.",
  },
  {
    step: 3,
    title: "Professional Marketing",
    description: "Your home is photographed professionally, with virtual tours and drone video. It's listed on the MLS and syndicated to 100+ websites, plus promoted through BHHS's global network and targeted digital advertising.",
  },
  {
    step: 4,
    title: "Showings & Open Houses",
    description: "Dr. Jan coordinates all showings and open houses, gathering feedback from every visit. You'll receive regular updates on activity and market response.",
  },
  {
    step: 5,
    title: "Offer Review & Negotiation",
    description: "When offers come in, Dr. Jan analyzes each one for price, terms, contingencies, and buyer qualification. She negotiates on your behalf to get the best possible outcome.",
  },
  {
    step: 6,
    title: "Contract to Close",
    description: "Dr. Jan manages every detail from accepted offer to closing—inspections, appraisals, repairs, and coordination with title, escrow, and the buyer's agent. You'll close with confidence.",
  },
];

const includedServices = [
  "Professional photography & virtual tour",
  "Drone video for properties with views or large lots",
  "Comprehensive market analysis & pricing strategy",
  "MLS listing syndicated to 100+ websites",
  "Berkshire Hathaway global network exposure",
  "Social media marketing campaign",
  "Targeted digital advertising",
  "Open house coordination",
  "Showing feedback & regular updates",
  "Expert negotiation on all offers",
  "Transaction coordination through closing",
  "Staging consultation with recommendations",
];

export default async function SellersPage() {
  const config = await getPageDomainConfig();
  const siteUrl = getRequestSiteUrl();
  const isNewbridge = config.neighborhood === "Newbridge";
  const sellerFaqs = sellerFaqsForSite(isNewbridge);

  const sellerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isNewbridge
      ? "Home Selling Services — Newbridge Las Vegas"
      : "Home Selling Services Las Vegas",
    provider: {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}#dr-jan-duffy`,
      name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
      telephone: "+17022221964",
    },
    areaServed: buildCommunityAreaServed(config),
    serviceType: "Seller Representation",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sellerSchema) }}
      />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="relative mb-10 h-56 overflow-hidden rounded-2xl md:h-80 max-w-6xl mx-auto">
            <Image
              src="/images/sections/selling-a-home.jpg"
              alt="Staged Las Vegas home exterior prepared for listing"
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
                ? "Sell Your Newbridge Home in Las Vegas"
                : "Sell Your Las Vegas Home | Listing Agent Dr. Jan Duffy"}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              When you list with <strong>Berkshire Hathaway HomeServices</strong>, you get
              world-class marketing, expert pricing, and a name that buyers trust. Dr. Jan Duffy
              has served Las Vegas since 2008
              {isNewbridge
                ? "—including resale and new-build listings near Newbridge and ZIP 89139 along Blue Diamond Road."
                : "—helping sellers achieve strong results with proven marketing strategies and skilled negotiation."}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Free Home Valuation</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> World-Class Marketing</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Expert Negotiation</span>
            </div>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">{MARKET_SNAPSHOT_HEADING}</h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              {isNewbridge
                ? `Las Vegas REALTORS® figures for existing homes sold through its MLS across Southern Nevada in ${MARKET_REPORT.period}—not Newbridge-only. The MLS does not account for all newly constructed homes sold by local builders. For a Newbridge or ZIP 89139 price, Dr. Jan Duffy prepares a dated CMA from recent comparable sales.`
                : `Las Vegas REALTORS® figures for existing homes sold through its MLS across Southern Nevada in ${MARKET_REPORT.period}. The MLS does not account for all newly constructed homes sold by local builders. For a price on your street, Dr. Jan Duffy prepares a dated CMA from recent comparable sales.`}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {MARKET_SNAPSHOT_STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-bold mb-1">{value}</div>
                  <div className="text-slate-300 text-sm">{label}</div>
                </div>
              ))}
            </div>
            <MarketSnapshotSource tone="dark" className="mt-8 text-center" />
          </section>

          {/* Benefits */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Berkshire Hathaway HomeServices Selling Advantage
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Not all real estate agents can deliver the same results. When you choose a 
              Berkshire Hathaway HomeServices agent, you're choosing world-class marketing, 
              a global network of buyers, and the most trusted name in real estate.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {sellingBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={benefit.title}
                    className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Selling Process */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              The Home Selling Process
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Selling a home involves many steps, but you don't have to navigate them alone. 
              Dr. Jan Duffy manages every detail from initial valuation to closing day, keeping 
              you informed and in control throughout the process.
            </p>
            <div className="space-y-6">
              {sellingProcess.map((item) => (
                <div
                  key={item.step}
                  className="flex gap-6 items-start bg-white rounded-lg p-6 border border-slate-200"
                >
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Seller Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Specialized Services for Every Seller
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Every seller's situation is unique. Whether you're upgrading, downsizing, dealing 
              with a life change, or relocating for work, Dr. Jan provides customized strategies 
              that address your specific needs and timeline.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/sellers/move-up"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🏡</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Move-Up Sellers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Leverage your equity into your dream home. Coordinated buy & sell strategies.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/sellers/downsizing"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🌴</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Downsizing
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Extract equity, simplify life. 55+ communities and low-maintenance options.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/sellers/divorce-probate"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">⚖️</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Divorce & Probate
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Sensitive situations handled with discretion and professionalism.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/sellers/relocation"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">✈️</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Relocation
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Moving for work? BHHS nationwide network coordinates both ends.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
            </div>
          </section>

          {/* Expert Quote */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Expert Selling Advice
            </h2>
            <div className="bg-slate-50 rounded-lg p-8">
              <blockquote className="text-lg text-slate-700 italic mb-4">
                "Pricing your home correctly from day one is the single most important factor in
                getting top dollar. Overpriced homes sit on the market, and every day on market costs 
                you money—both in carrying costs and buyer perception. That's why I use comprehensive 
                market analysis and my experience serving Las Vegas since 2008 to price homes right 
                the first time. The result? My listings typically sell within 2% of asking price."
              </blockquote>
              <cite className="text-slate-900 font-semibold">
                — Dr. Jan Duffy, BHHS Nevada Properties | Serving Las Vegas Since 2008
              </cite>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              What's Included When You List with BHHS
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              When you list with Dr. Jan Duffy at Berkshire Hathaway HomeServices, you receive 
              comprehensive marketing and support services designed to maximize your home's 
              exposure and sale price.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedServices.map((item) => (
                <div key={item} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Home Valuation CTA */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">What's Your Home Worth?</h2>
                <p className="text-blue-100 mb-6">
                  Get a free, no-obligation home valuation from Dr. Jan Duffy. Using current MLS
                  data and expertise serving Las Vegas since 2008, you'll know exactly what your 
                  home could sell for in today's market. No algorithms—just real analysis from 
                  a local expert.
                </p>
                <Link
                  href="/home-valuation"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
                >
                  Get Free Valuation
                </Link>
              </div>
              <div className="text-center">
                <BarChart className="h-24 w-24 text-blue-200 mx-auto mb-4" />
                <p className="text-2xl font-bold">{MARKET_MEDIAN_CALLOUT.value}</p>
                <p className="text-blue-200">{MARKET_MEDIAN_CALLOUT.label}</p>
                <p className="text-blue-100 text-sm mt-2">{MARKET_MEDIAN_CALLOUT.change}</p>
              </div>
            </div>
          </section>

          <FaqAeo
            title={
              isNewbridge
                ? "Frequently asked questions about selling in Newbridge"
                : "Frequently asked questions about selling in Las Vegas"
            }
            faqs={faqItemsToAeo(sellerFaqs)}
          />

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Sell Your Las Vegas Home?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free listing consultation with Dr. Jan Duffy and discover what your home
              could sell for with Berkshire Hathaway HomeServices. No obligation, no pressure—just 
              honest advice and expert analysis.
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
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: October 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
