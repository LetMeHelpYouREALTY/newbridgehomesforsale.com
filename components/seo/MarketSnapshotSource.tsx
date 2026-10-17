import {
  MARKET_REPORT,
  MARKET_REPORT_LINK_TEXT,
  MARKET_SNAPSHOT_SOURCE_NOTE,
} from "@/lib/market-snapshot";

type MarketSnapshotSourceProps = {
  tone?: "light" | "dark";
  className?: string;
};

export default function MarketSnapshotSource({
  tone = "light",
  className = "",
}: MarketSnapshotSourceProps) {
  const noteClass = tone === "dark" ? "text-slate-400" : "text-slate-600";
  const linkClass =
    tone === "dark"
      ? "text-blue-300 hover:text-blue-200"
      : "text-blue-600 hover:text-blue-700";

  return (
    <div className={className}>
      <p className={`text-xs ${noteClass}`}>{MARKET_SNAPSHOT_SOURCE_NOTE}</p>
      <a
        href={MARKET_REPORT.url}
        className={`mt-2 inline-block text-sm font-semibold ${linkClass}`}
      >
        {MARKET_REPORT_LINK_TEXT}
      </a>
    </div>
  );
}
