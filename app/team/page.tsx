import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet Dr. Jan Duffy, licensed REALTOR at Berkshire Hathaway HomeServices Nevada Properties.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>Meet {SITE.agentName}</h1>
        </div>
      </section>
      <section className="page-section container">
        <div className="grid" style={{ gridTemplateColumns: "minmax(280px, 360px) 1fr" }}>
          <Image
            src="/images/team/jan-duffy.jpg"
            alt={`${SITE.agentName}, Las Vegas REALTOR`}
            width={720}
            height={900}
            sizes="(max-width: 768px) 100vw, 360px"
            style={{ width: "100%", height: "auto" }}
            priority
          />
          <div>
            <h2>Licensed REALTOR</h2>
            <p>License {SITE.license}</p>
            <p>{SITE.brokerage}</p>
            <p>
              Specialties include luxury homes, 55+ communities, relocation support, and investment
              properties throughout Las Vegas.
            </p>
            <p>
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> |{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
