import type { Metadata } from "next";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import FaqAeo from "@/components/seo/FaqAeo";
import CtaBanner from "@/components/seo/CtaBanner";
import { images } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Recently Sold Homes in Las Vegas | Dr. Jan Duffy, BHHS Nevada",
  description:
    "How sold comps work in Las Vegas and Henderson. Dr. Jan Duffy uses closed sales, not list prices, to set strategy. Call (702) 222-1964.",
};

export default function SoldPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SeoHero
          h1="Recently Sold Homes in Las Vegas and Henderson"
          lede="List price is a wish. Sold price, concessions, and days on market are the comps that matter. Dr. Jan Duffy pulls GLVAR closed data before you list or offer."
          image={images.sold.src}
          imageAlt={images.sold.alt}
          priority
        />
        <SeoSection
          h2="Why do sold comps beat Zillow estimates in Clark County?"
          answer="Automated values miss HOA, view, solar, pool age, and seller credits. A CMA built from nearby closed sales in the last 90 days is what appraisers and listing agents actually use."
          image={images.valuation.src}
          imageAlt={images.valuation.alt}
        />
        <FaqAeo
          faqs={[
            {
              question: "How far back should Las Vegas sold comps go?",
              answer:
                "In a moving market, 90 days is the default. In slower luxury pockets such as The Ridges, six months may be required because fewer estates close.",
            },
          ]}
        />
        <CtaBanner
          h2="Need sold comps for your street?"
          sub="Call 702-222-1964 for a dated CMA. License S.0197614.LLC."
        />
      </div>
    </main>
  );
}
