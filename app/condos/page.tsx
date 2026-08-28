import type { Metadata } from "next";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import FaqAeo from "@/components/seo/FaqAeo";
import CtaBanner from "@/components/seo/CtaBanner";
import { images } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Las Vegas Condos for Sale | High-Rise Living | Dr. Jan Duffy",
  description:
    "Search Las Vegas condos and high-rise residences with Dr. Jan Duffy, BHHS Nevada Properties. HOA dues, views, and parking vary by tower. Call (702) 222-1964.",
};

export default function CondosPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SeoHero
          h1="Las Vegas Condos for Sale | High-Rise and Mid-Rise Residences"
          lede="Condos trade on HOA reserves, parking, views, and rental rules—not just list price. Dr. Jan Duffy reviews those documents before you waive contingencies."
          image={images.condos.src}
          imageAlt={images.condos.alt}
          priority
        />
        <SeoSection
          h2="What should you verify before buying a Las Vegas condo?"
          answer="Pull the HOA budget, reserve study, special-assessment history, rental cap, pet rules, and parking deed. High-rises near the Strip can carry higher dues than a similarly priced single-family home in Henderson."
          image={images.condos.src}
          imageAlt={images.condos.alt}
        />
        <RealScoutListings />
        <FaqAeo
          faqs={[
            {
              question: "Are Las Vegas condo HOA dues included in the mortgage payment?",
              answer:
                "No. Dues are separate from principal, interest, taxes, and insurance. Lenders still count them in debt-to-income. Ask for the current coupon before you write the offer.",
            },
            {
              question: "Can you use a VA or FHA loan on a Las Vegas high-rise?",
              answer:
                "Only if the building is approved for that loan type. Dr. Jan Duffy checks project eligibility with your lender before you spend inspection money.",
            },
          ]}
        />
        <CtaBanner
          h2="Want a condo shortlist by dues and commute?"
          sub="Call 702-222-1964. BHHS Nevada Properties, 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
        />
      </div>
    </main>
  );
}
