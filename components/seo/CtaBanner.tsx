import Link from "next/link";
import { Phone } from "lucide-react";
import { NAP } from "@/lib/site-images";

export default function CtaBanner({
  h2,
  sub,
}: {
  h2: string;
  sub: string;
}) {
  return (
    <section className="mb-8 rounded-2xl bg-blue-600 px-6 py-12 text-center text-white md:px-12">
      <h2 className="text-3xl font-bold md:text-4xl">{h2}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{sub}</p>
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <a
          href={NAP.phoneTel}
          className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-bold text-blue-600 hover:bg-blue-50"
        >
          <Phone className="mr-2 h-5 w-5" />
          Call {NAP.phoneDisplay}
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md bg-blue-700 px-8 py-4 text-lg font-bold text-white hover:bg-blue-800"
        >
          Send a message
        </Link>
      </div>
      <p className="mt-6 text-sm text-blue-200">
        {NAP.name} · License {NAP.license} · {NAP.fullAddress}
      </p>
    </section>
  );
}
