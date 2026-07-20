import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPropertyById, properties } from "@/lib/properties";

type Params = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return properties.map((property) => ({ id: property.id }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) {
    return { title: "Listing Not Found", robots: { index: false, follow: false } };
  }
  return {
    title: property.title,
    description: property.description,
    alternates: { canonical: `/listings/${property.id}` },
  };
}

export default async function ListingDetailPage({ params }: Params) {
  const { id } = await params;
  const property = getPropertyById(id);
  if (!property) {
    notFound();
  }

  return (
    <main className="page-section container">
      <h1>{property.title}</h1>
      <p>{property.address}</p>
      <p>${property.price.toLocaleString()}</p>
      <Image
        src={property.image}
        alt={property.title}
        width={1000}
        height={700}
        sizes="(max-width: 1024px) 100vw, 80vw"
        style={{ width: "100%", height: "auto" }}
        priority
      />
      <p>{property.description}</p>
      <p>
        {property.beds} beds | {property.baths} baths | {property.sqft.toLocaleString()} sqft
      </p>
      <h2>Features</h2>
      <ul>
        {property.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="mls-note">
        <p>
          <strong>MLS Disclaimer:</strong> Listing details are deemed reliable but not guaranteed
          and should be independently verified.
        </p>
        <p>
          <strong>Listing Attribution:</strong> Courtesy of Berkshire Hathaway HomeServices Nevada
          Properties.
        </p>
      </div>
    </main>
  );
}
