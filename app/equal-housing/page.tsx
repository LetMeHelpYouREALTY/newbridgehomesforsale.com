import type { Metadata } from "next";
import SeoHero from "@/components/seo/SeoHero";
import { images, NAP } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Equal Housing Opportunity | Dr. Jan Duffy | BHHS Nevada Properties",
  description:
    "Dr. Jan Duffy and Berkshire Hathaway HomeServices Nevada Properties support Equal Housing Opportunity. We do not discriminate on protected classes under federal or Nevada law.",
};

export default function EqualHousingPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <SeoHero
          h1="Equal Housing Opportunity"
          lede="Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, provides housing services without discrimination based on race, color, religion, sex, disability, familial status, national origin, or other classes protected by federal or Nevada law."
          image={images.office.src}
          imageAlt={images.office.alt}
        />
        <h2 className="text-2xl font-bold mt-8">How do we describe neighborhoods?</h2>
        <p className="mt-3 text-slate-700">
          Pages on this site use square footage, amenities, school names, commute times, HOA facts,
          and prices. We do not use coded language about who “belongs” in a community.
        </p>
        <h2 className="text-2xl font-bold mt-8">Questions?</h2>
        <p className="mt-3 text-slate-700">
          {NAP.fullAddress}. {NAP.phoneDisplay}. {NAP.email}. License {NAP.license}.
        </p>
      </div>
    </main>
  );
}
