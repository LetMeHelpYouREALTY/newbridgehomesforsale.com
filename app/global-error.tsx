"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900">Something went wrong</h1>
        <p className="mt-3 max-w-md text-slate-600">
          The site hit an unexpected error. Try again, or call Dr. Jan Duffy at 702-222-1964.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
