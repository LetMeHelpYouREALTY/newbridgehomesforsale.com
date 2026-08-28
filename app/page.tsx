import RealScoutListings from "@/components/realscout/RealScoutListings";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Link from "next/link";
import { Home as HomeIcon, TrendingUp, Shield, Users } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import FaqAeo from "@/components/seo/FaqAeo";
import CtaBanner from "@/components/seo/CtaBanner";
import { images, NAP } from "@/lib/site-images";
import { getRequestSiteUrl } from "@/lib/canonical-url";

const homeFaqs = [
  {
    question: "Who represents buyers at Newbridge in Las Vegas?",
    answer:
      "Dr. Jan Duffy, REALTOR®, License S.0197614.LLC, with Berkshire Hathaway HomeServices Nevada Properties at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Call 702-222-1964. She is an independent buyer’s agent, not the builder sales desk.",
  },
  {
    question: "What areas of Las Vegas does Dr. Jan Duffy serve?",
    answer:
      "She represents buyers and sellers across Newbridge and Southwest Las Vegas, plus Henderson, Summerlin, Green Valley, North Las Vegas, Southern Highlands, Skye Canyon, Centennial Hills, Inspirada, Mountain's Edge, The Ridges, Lake Las Vegas, and Anthem.",
  },
  {
    question: "What was the Las Vegas median home price as of January 2026?",
    answer:
      "As of January 2026, the Las Vegas Valley median sale price on this site’s market snapshot was $450,000, with 28 average days on market and about 2.1 months of inventory. Ask Dr. Jan for a current CMA before you price or bid.",
  },
  {
    question: "Does a Berkshire Hathaway buyer’s agent cost extra?",
    answer:
      "Buyer representation is typically paid from the listing side of the commission. You still get a dedicated agent, full MLS access, and contract review. Confirm current compensation in writing before you tour.",
  },
];

export default async function Home() {
  const config = await getPageDomainConfig();
  const siteUrl = getRequestSiteUrl();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: NAP.name,
    url: siteUrl,
    telephone: "+17022221964",
    email: NAP.email,
    image: `${siteUrl}${images.office.src}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: NAP.street,
      addressLocality: NAP.city,
      addressRegion: NAP.state,
      postalCode: NAP.zip,
    },
    geo: { "@type": "GeoCoordinates", latitude: 36.1941, longitude: -115.2678 },
    areaServed: ["Newbridge Las Vegas NV", "Southwest Las Vegas NV", "Las Vegas NV", "Henderson NV", "Summerlin NV"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SeoHero
            h1={`${config.neighborhood} Homes for Sale | Dr. Jan Duffy, BHHS Nevada Properties`}
            lede={`${config.heroSubheadline} 500+ closed transactions, $127M+ in career volume, serving Southern Nevada since 2008. Call ${NAP.phoneDisplay}.`}
            image={images.heroHomes.src}
            imageAlt={images.heroHomes.alt}
            priority
          >
            <div className="flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                }}
              />
            </div>
          </SeoHero>

          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Why work with Dr. Jan Duffy in Las Vegas?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
              You get a BHHS Nevada Properties agent who answers her own phone, plus a 50,000-agent
              referral network—without a second layer of assistants between you and the deal.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "BHHS brand", desc: "Berkshire Hathaway HomeServices Nevada Properties at 9406 W Lake Mead Blvd." },
                { icon: Users, title: "50K+ network", desc: "Global referral coverage for moves into or out of Clark County." },
                { icon: TrendingUp, title: "$127M+ sold", desc: "Documented career volume across Las Vegas, Henderson, and Summerlin." },
                { icon: HomeIcon, title: "One advisor", desc: "Buy, sell, 55+, luxury, new construction, and investment in one file." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <SeoSection
            h2={`What is the ${config.neighborhood} housing market doing?`}
            answer={`As of January 2026 this site’s valley snapshot showed a $450K median price, 28 average days on market, 4,850 active listings, and 2.1 months of inventory. ${config.neighborhood} numbers move weekly—request a dated CMA before you write an offer or list.`}
            image={images.market.src}
            imageAlt={images.market.alt}
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { value: "$450K", label: "Median price" },
                { value: "28", label: "Days on market" },
                { value: "4,850", label: "Active listings" },
                { value: "2.1", label: "Months inventory" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-lg bg-slate-50 p-4">
                  <div className="text-2xl font-bold text-blue-600">{value}</div>
                  <div className="text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
            <Link href="/market-report" className="mt-4 inline-block font-semibold text-blue-600">
              Read the full Las Vegas market report →
            </Link>
          </SeoSection>

          <SeoSection
            h2="Which Las Vegas neighborhoods should you tour first?"
            answer="Start with commute, square footage, HOA rules, and price band—not adjectives. Summerlin, Henderson, Green Valley, The Ridges, Southern Highlands, North Las Vegas, Skye Canyon, Centennial Hills, Inspirada, and Mountain's Edge each have distinct inventory."
            image={images.neighborhoods.summerlin.src}
            imageAlt={images.neighborhoods.summerlin.alt}
            reverse
          >
            <div className="flex flex-wrap gap-2">
              {[
                ["Summerlin", "/neighborhoods/summerlin"],
                ["Henderson", "/neighborhoods/henderson"],
                ["The Ridges", "/neighborhoods/the-ridges"],
                ["Green Valley", "/neighborhoods/green-valley"],
                ["Lake Las Vegas", "/neighborhoods/lake-las-vegas"],
                ["Anthem", "/neighborhoods/anthem"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700"
                >
                  {label} homes
                </Link>
              ))}
            </div>
          </SeoSection>

          <RealScoutListings />

          <SeoSection
            h2="How do you buy or sell a home in Clark County?"
            answer="Buyers: pre-approval, MLS search, offer, inspection, close in about 30–45 days. Sellers: CMA, prep, professional media, MLS + BHHS syndication, negotiation, then escrow. Dr. Jan Duffy runs both sides from the Lake Mead Boulevard office."
            image={images.buying.src}
            imageAlt={images.buying.alt}
          >
            <div className="flex flex-wrap gap-3">
              <Link href="/buyers" className="font-semibold text-blue-600">
                Las Vegas buyer guide →
              </Link>
              <Link href="/sellers" className="font-semibold text-blue-600">
                Sell your Las Vegas home →
              </Link>
              <Link href="/home-valuation" className="font-semibold text-blue-600">
                Free home valuation →
              </Link>
            </div>
          </SeoSection>

          <ReviewsSection />
          <FaqAeo
            title="Las Vegas real estate questions, answered"
            faqs={homeFaqs}
          />
          <CtaBanner
            h2={config.ctaHeadline}
            sub={`${config.ctaSubheadline} ${NAP.fullAddress}. License ${NAP.license}.`}
          />
        </div>
      </main>
    </>
  );
}
