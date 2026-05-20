/**
 * Returns the 12 short month labels for the given locale, January → December.
 * Uses Intl.DateTimeFormat so the labels follow each locale's conventions
 * (e.g. "Jan, Feb, …" in en; "janv., févr., …" in fr).
 */
export function getMonthLabels(locale: string): string[] {
  const formatter = new Intl.DateTimeFormat(locale, { month: "short" });
  return Array.from({ length: 12 }, (_, i) =>
    formatter.format(new Date(2026, i, 1)),
  );
}
