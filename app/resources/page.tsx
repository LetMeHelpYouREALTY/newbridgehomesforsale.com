import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SeoHero from "@/components/seo/SeoHero";
import CtaBanner from "@/components/seo/CtaBanner";
import { images } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Las Vegas Real Estate Guides | Resources | Dr. Jan Duffy",
  description:
    "Buyer, seller, relocation, 55+, luxury, and neighborhood guides for Las Vegas and Henderson from Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
};

const guides = [
  { href: "/buyers", title: "How to buy a home in Las Vegas", image: images.buying },
  { href: "/sellers", title: "How to sell a Las Vegas home", image: images.selling },
  { href: "/home-valuation", title: "What is my Las Vegas home worth?", image: images.valuation },
  { href: "/relocation", title: "Relocating to Las Vegas from California", image: images.relocation },
  { href: "/buyers/first-time-buyers", title: "First-time buyer steps in Clark County", image: images.firstTime },
  { href: "/luxury-homes", title: "Luxury homes in Summerlin and Henderson", image: images.luxury },
  { href: "/55-plus-communities", title: "55+ communities in Las Vegas", image: images.fiftyFivePlus },
  { href: "/new-construction", title: "New construction buyer representation", image: images.newConstruction },
  { href: "/investment-properties", title: "Las Vegas investment properties", image: images.investment },
  { href: "/condos", title: "Las Vegas condos and high-rises", image: images.condos },
  { href: "/market-report", title: "Las Vegas market report", image: images.market },
  { href: "/faq", title: "Las Vegas real estate FAQ", image: images.office },
];

export default function ResourcesPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SeoHero
          h1="Las Vegas Real Estate Guides and Resources"
          lede="Answer-first guides for buying, selling, relocating, and touring neighborhoods in Las Vegas, Henderson, and Summerlin—written around Dr. Jan Duffy’s 2008–present local practice."
          image={images.market.src}
          imageAlt={images.market.alt}
          priority
        />
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
          Which guide matches your next step?
        </h2>
        <div className="mx-auto mb-16 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white hover:shadow-lg"
            >
              <div className="relative h-40">
                <Image
                  src={g.image.src}
                  alt={g.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600">{g.title}</h3>
              </div>
            </Link>
          ))}
        </div>
        <CtaBanner
          h2="Need the short version on a call?"
          sub="Dr. Jan Duffy answers 702-222-1964. BHHS Nevada Properties, 9406 W Lake Mead Blvd, Suite 100."
        />
      </div>
    </main>
  );
}
