/**
 * Targeted patch: rebuild every destination's `related.articles` from the
 * `article.relatedDestination` relationship. Touches ONLY `related.articles` —
 * no other field on the destination doc is modified.
 *
 * Why: `related.articles` moved from hand-authored objects to article
 * references. This replaces the stale old-object data with real references,
 * derived deterministically from each article's `relatedDestination` (its
 * `_ref` is the published destination id).
 *
 * Idempotent — skips destinations already correct (same reference set and no
 * leftover non-reference items).
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:sync-destination-related-articles -- --dry-run
 * Run:      npm run migrate:sync-destination-related-articles
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
  dest: string;
  publishedAt?: string;
};

type DestinationRow = {
  _id: string;
  language?: string;
  total: number;
  currentRefs: string[] | null;
};

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Syncing destination related.articles in ${dataset}/${projectId}…`,
  );

  // 1. Every article that points at a destination → group by (destination, locale).
  const articles = await client.fetch<ArticleRow[]>(
    `*[_type == "article" && defined(relatedDestination._ref)]{
      "id": _id, "lang": language, "dest": relatedDestination._ref, publishedAt
    }`,
  );

  const byDestLang = new Map<string, { id: string; publishedAt: string }[]>();
  for (const a of articles) {
    if (!a.lang || !a.dest) continue;
    const key = `${stripDraft(a.dest)}::${a.lang}`;
    const list = byDestLang.get(key) ?? [];
    list.push({ id: stripDraft(a.id), publishedAt: a.publishedAt ?? "" });
    byDestLang.set(key, list);
  }
  // Order newest-first, de-dupe (draft + published collapse to one published id).
  const desiredFor = (key: string): string[] => {
    const list = byDestLang.get(key);
    if (!list) return [];
    const seen = new Set<string>();
    return [...list]
      .sort((x, y) => (y.publishedAt > x.publishedAt ? 1 : -1))
      .map((x) => x.id)
      .filter((id) => (seen.has(id) ? false : (seen.add(id), true)));
  };

  // 2. Every destination doc (raw → includes drafts).
  const destinations = await client.fetch<DestinationRow[]>(
    `*[_type == "destination"]{
      _id, language,
      "total": count(related.articles),
      "currentRefs": related.articles[defined(_ref)]._ref
    }`,
  );

  const sameSet = (a: string[], b: string[]) => {
    if (a.length !== b.length) return false;
    const sa = new Set(a);
    return b.every((r) => sa.has(r));
  };

  const tx = client.transaction();
  let changed = 0;

  for (const doc of destinations) {
    const baseId = stripDraft(doc._id);
    const desired = desiredFor(`${baseId}::${doc.language ?? ""}`);
    const currentRefs = doc.currentRefs ?? [];
    const isStale = (doc.total ?? 0) > currentRefs.length; // non-reference items present
    if (!isStale && sameSet(currentRefs, desired)) continue; // already correct

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
    console.log("Nothing to change — all destinations already in sync.");
    return;
  }
  if (dryRun) {
    console.log(`[dry-run] ${changed} doc(s) would change. No changes written.`);
    return;
  }

  await tx.commit();
  console.log(`✓ Updated related.articles on ${changed} destination doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
