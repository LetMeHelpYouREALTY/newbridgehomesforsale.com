"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-24 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Something went wrong</h1>
      <p className="mt-3 max-w-md text-slate-600">
        We could not load this page. Try again, or call Dr. Jan Duffy at{" "}
        <a href="tel:+17022221964" className="font-semibold text-blue-600">
          702-222-1964
        </a>
        .
      </p>
      {error.digest ? (
        <p className="mt-2 text-xs text-slate-400">Reference: {error.digest}</p>
      ) : null}
      <button
        type="button"
        onClick={reset}
        className="mt-6 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </main>
  );
}
