type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

/** Stagger lastmod by change frequency so sitemap entries are not identical timestamps. */
export function lastModifiedForChangeFrequency(
  changeFrequency: ChangeFrequency,
  now = new Date()
): Date {
  const d = new Date(now);
  d.setHours(12, 0, 0, 0);

  switch (changeFrequency) {
    case "daily":
      return d;
    case "weekly": {
      const day = d.getDay();
      d.setDate(d.getDate() - day);
      return d;
    }
    case "yearly":
      return new Date(d.getFullYear(), 0, 1, 12, 0, 0, 0);
    case "monthly":
    default:
      return new Date(d.getFullYear(), d.getMonth(), 1, 12, 0, 0, 0);
  }
}
