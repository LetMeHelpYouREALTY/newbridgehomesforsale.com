import dynamic from "next/dynamic";

const CalendlyWidget = dynamic(() => import("./CalendlyWidget"), {
  loading: () => (
    <div
      className="w-full animate-pulse rounded-lg bg-slate-100"
      style={{ minHeight: 600 }}
      role="status"
      aria-label="Loading appointment scheduler"
    />
  ),
});

export default CalendlyWidget;
