import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/properties";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Bridge Homes For Sale | Las Vegas Real Estate",
  description:
    "Find homes for sale in Las Vegas with New Bridge Homes. Browse listings and connect with Dr. Jan Duffy.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Find Your Dream Home in Las Vegas</h1>
          <p>Luxury homes, family homes, and townhomes in New Bridge communities.</p>
          <p>
            <Link className="btn btn-primary" href="/listings">
              View Listings
            </Link>
          </p>
        </div>
      </section>

      <section className="page-section container">
        <h2>Search Live MLS Listings</h2>
        <p>
          Explore active listings with RealScout search tools built for Las Vegas buyers and
          sellers.
        </p>
        <div
          className="widget-wrapper"
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings agent-encoded-id="${SITE.realscoutAgentId}" sort-order="NEWEST" listing-status="For Sale" property-types=""></realscout-office-listings>`,
          }}
        />
        <p>
          <a
            className="btn btn-primary"
            href={SITE.fullHomeSearchUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open Full Home Search
          </a>
        </p>
      </section>

      <section className="page-section container">
        <h2>Featured Properties</h2>
        <div className="grid grid-3">
          {properties.map((property) => (
            <article className="card" key={property.id}>
              <Image
                src={property.image}
                alt={property.title}
                width={1000}
                height={700}
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="card-body">
                <h3>{property.title}</h3>
                <p>${property.price.toLocaleString()}</p>
                <p>{property.address}</p>
                <Link href={`/listings/${property.id}`} className="btn btn-secondary">
                  View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
