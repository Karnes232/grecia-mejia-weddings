/**
 * Shared helpers for the Journal seed copy files (author, categories, articles,
 * hub page). Mirrors `seed/cultureCopy/shared.ts`.
 *
 * Document ids are keyed by the canonical English slug so re-seeding replaces in
 * place. Slugs are TRANSLATED per locale (ASCII-safe). References across
 * collections follow the established conventions:
 *   destination →  destination-<slug>-<locale>
 *   culture     →  culture-<slug>-<locale>
 *   venue       →  venue-<slug>-<locale>
 */

import { randomUUID } from "node:crypto";

import { type Locale } from "../../../i18n/routing";

export type { Locale };

// ── Deterministic ids (canonical EN slug, dot-free) ─────────────────────────
export const articleDocId = (canonicalSlug: string, locale: Locale) =>
  `article-${canonicalSlug}-${locale}`;
export const articleMetadataId = (canonicalSlug: string) =>
  `article-${canonicalSlug}-metadata`;

export const categoryDocId = (canonicalSlug: string) =>
  `articleCategory-${canonicalSlug}`;

export const AUTHOR_ID = "author-grecia";

// ── Builders (copied from cultureCopy/shared.ts) ────────────────────────────
export const k = <T extends object>(obj: T) => ({ _key: randomUUID(), ...obj });

const ptBlock = (text: string) => ({
  _type: "block",
  _key: randomUUID(),
  style: "normal",
  markDefs: [],
  children: [{ _type: "span", _key: randomUUID(), text, marks: [] }],
});

export const ptBlocks = (paragraphs: string[]) => paragraphs.map(ptBlock);
