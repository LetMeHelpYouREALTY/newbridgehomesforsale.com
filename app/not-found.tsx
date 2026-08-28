import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">404</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        That URL is not on heyberkshire.com. Browse homes, neighborhoods, or contact Dr. Jan Duffy.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Back to home
        </Link>
        <Link
          href="/contact"
          className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
        >
          Contact Dr. Jan
        </Link>
        <a
          href="tel:+17022221964"
          className="rounded-md border border-slate-300 px-6 py-3 font-semibold text-slate-800 hover:bg-slate-50"
        >
          Call 702-222-1964
        </a>
      </div>
    </main>
  );
}
