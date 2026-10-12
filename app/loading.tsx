export default function Loading() {
  return (
    <div className="min-h-screen bg-white pt-24" role="status" aria-live="polite" aria-label="Loading page">
      <div className="container mx-auto px-4 py-16 space-y-8">
        <div className="mx-auto h-10 w-2/3 max-w-xl animate-pulse rounded-md bg-slate-200" />
        <div className="mx-auto h-6 w-1/2 max-w-md animate-pulse rounded-md bg-slate-100" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mt-12">
          <div className="h-48 animate-pulse rounded-lg bg-slate-100" />
          <div className="h-48 animate-pulse rounded-lg bg-slate-100" />
          <div className="h-48 animate-pulse rounded-lg bg-slate-100" />
        </div>
      </div>
    </div>
  );
}
