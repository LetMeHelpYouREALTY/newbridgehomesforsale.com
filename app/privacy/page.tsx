import type { Metadata } from "next";
import SeoHero from "@/components/seo/SeoHero";
import { images, NAP } from "@/lib/site-images";

export const metadata: Metadata = {
  title: "Privacy Policy | Newbridge Homes | Dr. Jan Duffy",
  description:
    "Privacy practices for newbridgehomesforsale.com, the Newbridge Las Vegas website of Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
};

export default function PrivacyPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <SeoHero
          h1="Privacy Policy for newbridgehomesforsale.com"
          lede={`${NAP.name} collects contact details you submit so we can respond to real estate inquiries. We do not sell your information.`}
          image={images.office.src}
          imageAlt={images.office.alt}
        />
        <h2 className="text-2xl font-bold mt-8">What information do we collect?</h2>
        <p className="mt-3 text-slate-700">
          Name, email, phone, and message content from forms, plus standard server logs and analytics
          cookies. Scheduling data may pass through Calendly. Search widgets may pass through RealScout.
        </p>
        <h2 className="text-2xl font-bold mt-8">How is it used?</h2>
        <p className="mt-3 text-slate-700">
          To return your call, email, or showing request and to operate the website. CRM storage may
          use Follow Up Boss. You can request deletion by emailing {NAP.email}.
        </p>
        <h2 className="text-2xl font-bold mt-8">Contact</h2>
        <p className="mt-3 text-slate-700">
          {NAP.fullAddress}. {NAP.phoneDisplay}. {NAP.email}.
        </p>
      </div>
    </main>
  );
}
