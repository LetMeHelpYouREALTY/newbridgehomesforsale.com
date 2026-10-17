import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { SITE_ORIGIN } from "@/lib/canonical-url";
import { robotsForPath } from "@/lib/seo-index-scope";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import AutoBreadcrumbSchema from "@/components/layouts/AutoBreadcrumbSchema";
import SiteEntitySchema from "@/components/seo/SiteEntitySchema";

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
};

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const domain = headersList.get("x-domain") || "";
  const config = getDomainConfig(domain);
  const defaultTitle =
    config.seoTitle ?? `${config.tagline} | Las Vegas`;

  return {
    metadataBase: new URL(SITE_ORIGIN),
    title: {
      default: defaultTitle,
      template: `%s | Newbridge Las Vegas`,
    },
    description: config.description,
    keywords: config.keywords,
    applicationName: "Berkshire Hathaway HomeServices Nevada Properties",
    authors: [{ name: "Dr. Jan Duffy" }],
    creator: "Dr. Jan Duffy",
    publisher: "Berkshire Hathaway HomeServices Nevada Properties",
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    // "./" resolves against each request's pathname (query string dropped), so
    // every page is self-canonical. og/twitter title and description are left
    // unset so Next fills them from each page's own title and description.
    alternates: {
      canonical: "./",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "./",
      siteName: "Berkshire Hathaway HomeServices Nevada Properties",
      images: [
        {
          url: `${SITE_ORIGIN}/og.jpg`,
          width: 1200,
          height: 630,
          alt: "Newbridge homes for sale in Southwest Las Vegas | Dr. Jan Duffy, BHHS Nevada Properties",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      images: [`${SITE_ORIGIN}/og.jpg`],
    },
    robots: robotsForPath(headersList.get("x-pathname")),
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <SiteEntitySchema />
        <AutoBreadcrumbSchema />
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />

        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          strategy="afterInteractive"
          type="module"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <Script id="widget-tracker" strategy="lazyOnload">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
        <Analytics />
      </body>
    </html>
  );
}
