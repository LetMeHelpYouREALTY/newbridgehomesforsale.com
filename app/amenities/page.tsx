import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import NearbyAmenitiesSection from "@/components/amenities/NearbyAmenitiesSection";
import { getCommunityAmenityConfig } from "@/lib/amenities/get-community-amenity-config";
import { buildAmenitiesPageSchema } from "@/lib/amenities/schema";
import { siteUrlFromHost } from "@/lib/get-site-url";
import { AMENITY_CATEGORIES } from "@/lib/amenities/categories";
import { agentInfo } from "@/lib/site-config";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone } from "lucide-react";

function getHost(): string {
  return headers().get("x-domain") || headers().get("host") || "";
}

export async function generateMetadata(): Promise<Metadata> {
  const config = getCommunityAmenityConfig(getHost());
  if (!config) {
    return {
      title: "Nearby Amenities | Dr. Jan Duffy",
      robots: { index: false, follow: false },
    };
  }

  const siteUrl = siteUrlFromHost(getHost());
  const canonical = `${siteUrl}${config.pagePath}`;
  const title = `Nearby Amenities in ${config.communityName}, ${config.city} | Dr. Jan Duffy`;
  const description = `Interactive map and local guide to restaurants, grocery, parks, golf, healthcare, and schools near ${config.communityName} in ${config.city}, ${config.state}. Hyperlocal expertise from Dr. Jan Duffy, REALTOR®.`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
    },
  };
}

export default function AmenitiesPage() {
  const host = getHost();
  const config = getCommunityAmenityConfig(host);
  if (!config) {
    notFound();
  }

  const siteUrl = siteUrlFromHost(host);
  const schemas = buildAmenitiesPageSchema(config, siteUrl);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Navbar />
      <main>
        <section className="bg-slate-900 text-white py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Nearby Amenities in {config.communityName}, {config.city}
            </h1>
            <p className="text-lg text-slate-300">
              A hyperlocal guide for buyers exploring {config.communityName} — dining, errands,
              healthcare, outdoor recreation, schools, and regional access from the southwest Las
              Vegas valley.
            </p>
          </div>
        </section>

        <NearbyAmenitiesSection config={config} variant="page" />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Local guide by category
            </h2>
            <div className="space-y-10 not-prose">
              {config.writtenSections.map((section) => (
                <article key={section.id} id={section.id}>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-slate-700 mb-3 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </article>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">
              Approximate drive times
            </h2>
            <p className="text-sm text-slate-500 mb-4">
              Times vary with traffic and route; treat these as typical off-peak estimates.
            </p>
            <ul className="not-prose space-y-2 text-slate-700">
              {config.commuteNotes.map((item) => (
                <li key={item.destination}>
                  <strong className="text-slate-900">{item.destination}:</strong> {item.note}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 mt-16 mb-6">
              Featured nearby places
            </h2>
            <ul className="not-prose grid md:grid-cols-2 gap-4">
              {config.curatedPlaces.map((place) => (
                <li
                  key={`${place.name}-${place.address}`}
                  className="rounded-lg border border-slate-200 p-4"
                >
                  <p className="text-xs font-semibold uppercase text-blue-600 mb-1">
                    {AMENITY_CATEGORIES[place.category]?.label ?? place.category}
                  </p>
                  <p className="font-semibold text-slate-900">{place.name}</p>
                  <p className="text-sm text-slate-600 mt-1">{place.address}</p>
                  {place.note && <p className="text-sm text-slate-500 mt-1">{place.note}</p>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16 bg-slate-50" aria-labelledby="amenities-faq-heading">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 id="amenities-faq-heading" className="text-2xl font-bold text-slate-900 mb-8">
              Frequently asked questions about living near {config.communityName}
            </h2>
            <dl className="space-y-6">
              {config.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-semibold text-slate-900 mb-1">{faq.question}</dt>
                  <dd className="text-slate-700">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Your {config.communityName} real estate expert
            </h2>
            <p className="text-blue-100 mb-6">
              Dr. Jan Duffy helps buyers navigate new construction, resale comps, and southwest Las
              Vegas lifestyle questions — with no pressure, just data you can verify.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" aria-hidden />
                Call 702-222-1964
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-700 hover:bg-blue-800 px-8 py-3 rounded-md font-bold transition-colors"
              >
                Contact Dr. Jan
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              {agentInfo.name} | License {agentInfo.license} | {agentInfo.brokerage}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
