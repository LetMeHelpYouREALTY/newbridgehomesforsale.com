import RealScoutListings from "@/components/realscout/RealScoutListings";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, Star, Users, Shield } from "lucide-react";
import CalendlyWidget from "@/components/calendly/CalendlyEmbed";
import Link from "next/link";
import type { Metadata } from "next";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { getRequestSiteUrl } from "@/lib/canonical-url";
import { NAP } from "@/lib/site-images";
import FaqAeo from "@/components/seo/FaqAeo";
import { faqItemsToAeo } from "@/lib/faq-to-aeo";
import { contactFaqsForSite } from "@/lib/newbridge-contact-faqs";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  const isNewbridge = config.neighborhood === "Newbridge";
  return {
    title: {
      absolute: isNewbridge
        ? "Contact Dr. Jan Duffy | Newbridge Buyer Agent"
        : "Contact Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
    },
    description: isNewbridge
      ? "Contact Dr. Jan Duffy for Newbridge and 89139 real estate. Schedule a consult or call (702) 222-1964. BHHS Nevada Properties."
      : "Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Schedule an appointment, get directions, or call (702) 222-1964.",
    keywords: isNewbridge
      ? [
          "contact Newbridge real estate agent",
          "Dr. Jan Duffy Newbridge",
          "89139 realtor contact",
          "Richmond American buyer agent phone",
        ]
      : [
          "contact real estate agent Las Vegas",
          "Berkshire Hathaway contact",
          "Dr. Jan Duffy phone",
          "Las Vegas realtor contact",
          "schedule real estate appointment",
        ],
  };
}

export default async function ContactPage() {
  const config = await getPageDomainConfig();
  const siteUrl = getRequestSiteUrl();
  const isNewbridge = config.neighborhood === "Newbridge";
  const contactFaqs = contactFaqsForSite(isNewbridge);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${siteUrl}/contact`,
    mainEntity: {
      "@type": "RealEstateAgent",
      "@id": `${siteUrl}#dr-jan-duffy`,
      name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
      telephone: "+17022221964",
      email: NAP.email,
      areaServed: isNewbridge
        ? {
            "@type": "Place",
            name: "Newbridge",
            postalCode: "89139",
            containedInPlace: { "@type": "City", name: "Las Vegas", addressRegion: "NV" },
          }
        : { "@type": "City", name: "Las Vegas", addressRegion: "NV" },
      address: {
        "@type": "PostalAddress",
        streetAddress: NAP.street,
        addressLocality: NAP.city,
        addressRegion: NAP.state,
        postalCode: NAP.zip,
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="relative mb-10 h-56 overflow-hidden rounded-2xl md:h-80 max-w-6xl mx-auto">
            <Image
              src="/images/sections/las-vegas-office.jpg"
              alt="Real estate office on W Lake Mead Boulevard in Las Vegas"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              {isNewbridge
                ? "Contact Dr. Jan Duffy | Newbridge & 89139 Real Estate"
                : "Contact Dr. Jan Duffy | Las Vegas Real Estate Agent"}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {isNewbridge
                ? "Questions about Richmond American Newbridge, 89139 resale, or registering your buyer agent? Schedule a consult or call (702) 222-1964."
                : "Questions about Las Vegas real estate? Your Berkshire Hathaway HomeServices expert is here to help. Schedule an appointment or reach out directly."}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How do you reach Dr. Jan Duffy in Las Vegas?</h2>
              <p className="text-slate-700 mb-8">
                Whether you're buying your first home, selling a luxury property, or exploring
                investment opportunities, I'm here to provide expert guidance backed by the trusted{" "}
                <strong>Berkshire Hathaway HomeServices</strong> brand. Serving Las Vegas since 2008 
                with 500+ closed transactions since 2008.
              </p>

              {/* NAP Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone (Call or Text)</h3>
                    <a
                      href="tel:+17022221964"
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      (702) 222-1964
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Available 7 days a week, 9am-6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:homes@heyberkshire.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Homes@HeyBerkshire.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Typically respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                    <address className="not-italic text-slate-700">
                      Berkshire Hathaway HomeServices<br />
                      Nevada Properties<br />
                      9406 W Lake Mead Blvd, Suite 100<br />
                      Las Vegas, NV 89134
                    </address>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-700">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 4:00 PM
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      Available by appointment outside these hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <iframe
                  src="https://maps.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Berkshire Hathaway HomeServices Nevada Properties - Office Location"
                  className="w-full"
                />
              </div>
              
              {/* Map Action Buttons */}
              <div className="flex gap-3 mb-8">
                <a
                  href="https://www.google.com/maps/dir//9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
                <a
                  href="https://maps.google.com/?q=Berkshire+Hathaway+HomeServices+Nevada+Properties+9406+W+Lake+Mead+Blvd+Las+Vegas+NV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-lg font-medium transition-colors"
                >
                  View on Google Maps
                </a>
              </div>

              {/* Credentials */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>Dr. Jan Duffy, REALTOR®</strong><br />
                  License S.0197614.LLC<br />
                  Berkshire Hathaway HomeServices Nevada Properties
                </p>
              </div>
            </div>

            {/* Schedule Appointment - Calendly Widget */}
            <div>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto mb-3" />
                  <h2 className="text-2xl font-bold mb-2">Schedule an Appointment</h2>
                  <p className="text-blue-100">
                    Book a time that works for you—phone consultation, property showing, 
                    or in-person meeting at our office.
                  </p>
                </div>
                <CalendlyWidget height="600px" />
              </div>

              {/* Why Contact BHHS */}
              <div className="mt-6 bg-slate-900 text-white rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Why Contact Berkshire Hathaway HomeServices?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Trusted Brand:</strong> The only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Star className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Proven Results:</strong> 500+ closed transactions since 2008 serving Las Vegas since 2008.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-300 text-sm">
                      <strong className="text-white">Global Network:</strong> Berkshire Hathaway HomeServices agents worldwide for seamless relocations and referrals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <section className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Areas We Serve
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Dr. Jan Duffy provides expert real estate services throughout the Las Vegas Valley. 
              Whether you're buying, selling, or investing in any of these communities, contact us 
              for personalized guidance backed by Berkshire Hathaway HomeServices.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Las Vegas",
                "Henderson",
                "Summerlin",
                "Green Valley",
                "North Las Vegas",
                "Southern Highlands",
                "Skye Canyon",
                "Centennial Hills",
                "The Ridges",
                "Inspirada",
                "Mountains Edge",
                "Spring Valley",
              ].map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                  <span className="text-slate-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Contact Options */}
          <section className="max-w-4xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Prefer to Reach Out Directly?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="tel:+17022221964"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-xl transition-colors"
              >
                <Phone className="h-8 w-8 mr-4" />
                <div className="text-left">
                  <div className="font-bold text-lg">Call Now</div>
                  <div className="text-blue-100">(702) 222-1964</div>
                </div>
              </a>
              <a
                href="mailto:homes@heyberkshire.com"
                className="flex items-center justify-center bg-slate-700 hover:bg-slate-800 text-white p-6 rounded-xl transition-colors"
              >
                <Mail className="h-8 w-8 mr-4" />
                <div className="text-left">
                  <div className="font-bold text-lg">Send Email</div>
                  <div className="text-slate-300">Homes@HeyBerkshire.com</div>
                </div>
              </a>
            </div>
          </section>

          <FaqAeo
            title={
              isNewbridge
                ? "Frequently asked questions about contacting Dr. Jan Duffy"
                : "Frequently asked questions"
            }
            faqs={faqItemsToAeo(contactFaqs)}
          />
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: October 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
