import type { PortableTextBlock } from "@portabletext/types";

/** Plain text of a Portable Text block's spans. */
export function blockPlainText(block: PortableTextBlock): string {
  const children = (block as { children?: Array<{ text?: string }> }).children;
  return (children ?? []).map((c) => c.text ?? "").join("");
}

/** Slug/anchor id from a heading's text (matches TOC ↔ prose headings). */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[*~]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export type TocEntry = { id: string; label: string; level: 2 | 3 };

/** Build the table of contents from the body's h2/h3 headings. */
export function tocFromBody(body: PortableTextBlock[] | undefined): TocEntry[] {
  const out: TocEntry[] = [];
  for (const block of body ?? []) {
    const b = block as { _type?: string; style?: string };
    if (b._type !== "block") continue;
    if (b.style !== "h2" && b.style !== "h3") continue;
    const label = blockPlainText(block).replace(/[*~]/g, "").trim();
    if (!label) continue;
    out.push({ id: slugifyHeading(label), label, level: b.style === "h2" ? 2 : 3 });
  }
  return out;
}

/** Format an ISO date as e.g. "March 2026", localized. */
export function formatMonthYear(iso: string | undefined, locale: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(d);
}
