import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { SITE, formatAddress } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "New Bridge Homes For Sale | Las Vegas Real Estate",
    template: "%s | New Bridge Homes",
  },
  description:
    "Find homes for sale in Las Vegas with New Bridge Homes. Browse listings and connect with Dr. Jan Duffy.",
  openGraph: {
    siteName: SITE.name,
    type: "website",
    url: SITE.url,
  },
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE.agentName,
  telephone: SITE.phoneTel,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  openingHours: SITE.hours.schema,
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://www.realscout.com" />
      </head>
      <body>
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <header>
          <div className="container">
            <Link href="/" className="brand">
              {SITE.name}
            </Link>
            <nav aria-label="Main navigation">
              <ul>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer>
          <div className="container footer-grid">
            <div>
              <h3>{SITE.name}</h3>
              <p>{formatAddress()}</p>
            </div>
            <div>
              <p>
                Phone: <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </p>
              <p>
                Email: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
            </div>
            <div>
              <p>{SITE.hours.weekday}</p>
              <p>{SITE.hours.saturday}</p>
              <p>{SITE.hours.sunday}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
