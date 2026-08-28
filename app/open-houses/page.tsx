import type { Metadata } from "next";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import SeoHero from "@/components/seo/SeoHero";
import SeoSection from "@/components/seo/SeoSection";
import CtaBanner from "@/components/seo/CtaBanner";
import { images } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Las Vegas Open Houses This Weekend | Dr. Jan Duffy",
  description:
    "Tour Las Vegas and Henderson open houses with Dr. Jan Duffy, BHHS Nevada Properties. Prefer a private showing? Call (702) 222-1964.",
};

export default function OpenHousesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SeoHero
          h1="Las Vegas Open Houses | Tour Homes This Weekend"
          lede="Open houses are a first look, not a substitute for inspection. Dr. Jan Duffy will pull disclosures and HOA docs before you write. Private showings available outside weekend hours."
          image={images.openHouses.src}
          imageAlt={images.openHouses.alt}
          priority
        />
        <SeoSection
          h2="Should you attend an open house without an agent?"
          answer="You can walk in. If you are already working with Dr. Jan Duffy, tell the host her name so your representation is on the sign-in sheet. Unrepresented visits still need a buyer-broker conversation before an offer."
          image={images.buying.src}
          imageAlt={images.buying.alt}
        />
        <RealScoutListings />
        <CtaBanner
          h2="Want a private showing instead of the weekend crowd?"
          sub="Text or call 702-222-1964. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134."
        />
      </div>
    </main>
  );
}
