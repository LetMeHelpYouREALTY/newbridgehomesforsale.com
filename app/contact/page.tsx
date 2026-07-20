import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { SITE, formatAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact New Bridge Homes and Dr. Jan Duffy for Las Vegas real estate support.",
  alternates: { canonical: "/contact" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Las Vegas, Henderson, North Las Vegas, and Summerlin.",
      },
    },
    {
      "@type": "Question",
      name: "How can I schedule a showing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Call ${SITE.phoneDisplay} or use our contact form to request a showing.`,
      },
    },
  ],
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="page-header">
        <div className="container">
          <h1>Contact New Bridge Homes</h1>
          <p>Call, email, or message us to start your Las Vegas home search.</p>
        </div>
      </section>
      <section className="page-section container">
        <h2>Start With Live Listings</h2>
        <p>Browse active inventory first, then reach out for a private showing or seller strategy.</p>
        <p>
          <Link className="btn btn-primary" href="/listings">
            View Listings
          </Link>
        </p>
      </section>
      <section className="page-section container">
        <div className="grid grid-2">
          <ContactForm />
          <div className="card card-body">
            <h2>Contact Details</h2>
            <p>{SITE.name}</p>
            <p>{formatAddress()}</p>
            <p>
              Phone: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
            </p>
            <p>
              Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                Directions
              </a>
              {" · "}
              <a href={SITE.reviewsUrl} target="_blank" rel="noopener noreferrer">
                View Google Reviews
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
