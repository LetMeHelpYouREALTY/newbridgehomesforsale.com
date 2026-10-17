import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Home as HomeIcon, TrendingUp, Shield, Users } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import FaqAeo from "@/components/seo/FaqAeo";
import CtaBanner from "@/components/seo/CtaBanner";
import MarketSnapshotSource from "@/components/seo/MarketSnapshotSource";
import { images, NAP } from "@/lib/site-images";
import { MARKET_MEDIAN_SUMMARY, MARKET_SNAPSHOT_STATS } from "@/lib/market-snapshot";
import { NEWBRIDGE_HOME_FAQS } from "@/lib/newbridge-seo";
import { getNewbridgePrimaryH1 } from "@/lib/newbridge-h1";

const homeFaqs = NEWBRIDGE_HOME_FAQS;

export default async function Home() {
  const config = await getPageDomainConfig();
  const pageH1 = getNewbridgePrimaryH1(config);

  return (
    <>
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <SeoHero
            h1={pageH1}
            lede={`${config.heroSubheadline} Dr. Jan Duffy has served Las Vegas since 2008 with 500+ closed transactions. Call ${NAP.phoneDisplay}.`}
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
              Why work with Dr. Jan Duffy at Newbridge?
            </h2>
            <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-slate-600">
              You get a BHHS Nevada Properties agent who answers her own phone, plus the Berkshire
              Hathaway HomeServices global referral network—without a second layer of assistants
              between you and the deal.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "BHHS brand", desc: "Berkshire Hathaway HomeServices Nevada Properties at 9406 W Lake Mead Blvd." },
                { icon: Users, title: "BHHS network", desc: "Global referral coverage for moves into or out of Clark County." },
                { icon: TrendingUp, title: "500+ closings", desc: "Documented transactions serving Las Vegas since 2008." },
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
            h2={`What do Southern Nevada market numbers mean for ${config.neighborhood}?`}
            answer={`${MARKET_MEDIAN_SUMMARY} These are Southern Nevada figures, not ${config.neighborhood}-only, and the MLS does not account for all newly constructed homes sold by local builders. ${config.neighborhood} numbers move weekly—request a dated CMA before you write an offer or list.`}
            image={images.market.src}
            imageAlt={images.market.alt}
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              {MARKET_SNAPSHOT_STATS.map(({ value, label }) => (
                <div key={label} className="rounded-lg bg-slate-50 p-4">
                  <div className="text-2xl font-bold text-blue-600">{value}</div>
                  <div className="text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
            <MarketSnapshotSource className="mt-4" />
          </SeoSection>

          <SeoSection
            h2="Which Las Vegas neighborhoods should you tour after Newbridge?"
            answer="After Newbridge (89139), compare Mountain's Edge, Summerlin, Henderson, Green Valley, The Ridges, Southern Highlands, North Las Vegas, Skye Canyon, Centennial Hills, Inspirada, Lake Las Vegas, and Anthem by commute, square footage, HOA, and price band."
            image={images.neighborhoods.newbridge.src}
            imageAlt={images.neighborhoods.newbridge.alt}
            reverse
          >
            <div className="flex flex-wrap gap-2">
              {[
                ["Newbridge", "/neighborhoods/newbridge"],
                ["Mountain's Edge", "/neighborhoods/mountains-edge"],
                ["Summerlin", "/neighborhoods/summerlin"],
                ["Henderson", "/neighborhoods/henderson"],
                ["The Ridges", "/neighborhoods/the-ridges"],
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
            answer="Buyers: pre-approval, MLS search, offer, inspection, then closing. Sellers: CMA, prep, professional media, MLS + BHHS syndication, negotiation, then escrow. Dr. Jan Duffy runs both sides from the Lake Mead Boulevard office."
            image={images.buying.src}
            imageAlt={images.buying.alt}
          >
            <div className="flex flex-wrap gap-3">
              <Link href="/buyers" className="font-semibold text-blue-600">
                {`Buying in ${config.neighborhood} →`}
              </Link>
              <Link href="/sellers" className="font-semibold text-blue-600">
                {`Sell your ${config.neighborhood} home →`}
              </Link>
              <Link href="/home-valuation" className="font-semibold text-blue-600">
                {`Free ${config.neighborhood} home valuation →`}
              </Link>
            </div>
          </SeoSection>

          <FaqAeo
            title="Buying a Newbridge home: questions answered"
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
