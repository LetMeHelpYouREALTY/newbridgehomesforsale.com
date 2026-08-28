import type { Metadata } from "next";
import SeoHero from "@/components/seo/SeoHero";
import { images, NAP } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Terms of Use | HeyBerkshire | Dr. Jan Duffy",
  description:
    "Website terms for heyberkshire.com. Listings, market stats, and third-party widgets are informational. Nevada real estate is provided by Dr. Jan Duffy, License S.0197614.LLC.",
};

export default function TermsPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <SeoHero
          h1="Terms of Use"
          lede="heyberkshire.com is an information site for Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. It is not a substitute for a signed brokerage agreement or legal advice."
          image={images.office.src}
          imageAlt={images.office.alt}
        />
        <h2 className="text-2xl font-bold mt-8">Are MLS listings guaranteed accurate?</h2>
        <p className="mt-3 text-slate-700">
          Third-party IDX/RealScout feeds can lag. Confirm status, square footage, and HOA with the
          listing broker and public records before you rely on a number.
        </p>
        <h2 className="text-2xl font-bold mt-8">Who provides brokerage services?</h2>
        <p className="mt-3 text-slate-700">
          Dr. Jan Duffy, License {NAP.license}, {NAP.fullAddress}. Call {NAP.phoneDisplay}.
        </p>
      </div>
    </main>
  );
}
