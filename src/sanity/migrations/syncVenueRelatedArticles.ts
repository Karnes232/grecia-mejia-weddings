/**
 * Targeted patch: rebuild every venue's `related.articles` from the
 * `article.relatedVenue` relationship. Touches ONLY `related.articles` — no
 * other field on the venue doc is modified.
 *
 * Why: `related.articles` moved from hand-authored objects to article
 * references. This replaces the stale old-object data with real references,
 * derived deterministically from each article's `relatedVenue` (its `_ref` is
 * the published venue id).
 *
 * Idempotent — skips venues already correct.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:sync-venue-related-articles -- --dry-run
 * Run:      npm run migrate:sync-venue-related-articles
 */

import { createClient } from "@sanity/client";

import { apiVersion, dataset, projectId } from "../env";

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN env var.");
  process.exit(1);
}

const dryRun = process.argv.includes("--dry-run");

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "raw",
});

const stripDraft = (id: string) => id.replace(/^drafts\./, "");

type ArticleRow = {
  id: string;
  lang: string;
  venue: string;
  publishedAt?: string;
};

type VenueRow = {
  _id: string;
  language?: string;
  total: number;
  currentRefs: string[] | null;
};

const sameSet = (a: string[], b: string[]) => {
  if (a.length !== b.length) return false;
  const sa = new Set(a);
  return b.every((r) => sa.has(r));
};

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Syncing venue related.articles in ${dataset}/${projectId}…`,
  );

  const articles = await client.fetch<ArticleRow[]>(
    `*[_type == "article" && defined(relatedVenue._ref)]{
      "id": _id, "lang": language, "venue": relatedVenue._ref, publishedAt
    }`,
  );
  const byVenueLang = new Map<string, { id: string; publishedAt: string }[]>();
  for (const a of articles) {
    if (!a.lang || !a.venue) continue;
    const key = `${stripDraft(a.venue)}::${a.lang}`;
    const list = byVenueLang.get(key) ?? [];
    list.push({ id: stripDraft(a.id), publishedAt: a.publishedAt ?? "" });
    byVenueLang.set(key, list);
  }
  const desiredFor = (key: string): string[] => {
    const list = byVenueLang.get(key);
    if (!list) return [];
    const seen = new Set<string>();
    return [...list]
      .sort((x, y) => (y.publishedAt > x.publishedAt ? 1 : -1))
      .map((x) => x.id)
      .filter((id) => (seen.has(id) ? false : (seen.add(id), true)));
  };

  const venues = await client.fetch<VenueRow[]>(
    `*[_type == "venue"]{
      _id, language,
      "total": count(related.articles),
      "currentRefs": related.articles[defined(_ref)]._ref
    }`,
  );

  const tx = client.transaction();
  let changed = 0;

  for (const doc of venues) {
    const baseId = stripDraft(doc._id);
    const desired = desiredFor(`${baseId}::${doc.language ?? ""}`);
    const currentRefs = doc.currentRefs ?? [];
    const isStale = (doc.total ?? 0) > currentRefs.length;
    if (!isStale && sameSet(currentRefs, desired)) continue;

    changed += 1;
    console.log(
      `  ${doc._id} → ${desired.length} article(s)${isStale ? " (clearing stale objects)" : ""}`,
    );
    const refs = desired.map((id) => ({
      _key: id,
      _type: "reference",
      _ref: id,
      _weak: true,
    }));
    tx.patch(doc._id, (p) =>
      p.setIfMissing({ related: {} }).set({ "related.articles": refs }),
    );
  }

  if (changed === 0) {
    console.log("Nothing to change — all venues already in sync.");
    return;
  }
  if (dryRun) {
    console.log(`[dry-run] ${changed} doc(s) would change. No changes written.`);
    return;
  }
  await tx.commit();
  console.log(`✓ Updated related.articles on ${changed} venue doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
