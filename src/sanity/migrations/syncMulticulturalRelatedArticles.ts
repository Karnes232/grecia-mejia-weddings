/**
 * Targeted patch: rebuild `culture.related.articles` from the
 * `article.relatedCulture` relationship, and CLEAR `multiculturalPage.related.articles`
 * (the hub has no article relationship — it is linked by hand). Touches ONLY
 * the `related.articles` field on each doc; no other field is modified.
 *
 * Why: both fields moved from hand-authored objects to article references. This
 * replaces the stale old-object data with real references (cultures) or removes
 * it (hub), so nothing renders broken data.
 *
 * Idempotent — skips docs already correct.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:sync-multicultural-related-articles -- --dry-run
 * Run:      npm run migrate:sync-multicultural-related-articles
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
  culture: string;
  publishedAt?: string;
};

type DocRow = {
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

const refItem = (id: string) => ({
  _key: id,
  _type: "reference",
  _ref: id,
  _weak: true,
});

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Syncing culture + hub related.articles in ${dataset}/${projectId}…`,
  );

  // article.relatedCulture → articles, grouped by (culture, locale).
  const articles = await client.fetch<ArticleRow[]>(
    `*[_type == "article" && defined(relatedCulture._ref)]{
      "id": _id, "lang": language, "culture": relatedCulture._ref, publishedAt
    }`,
  );
  const byCultureLang = new Map<string, { id: string; publishedAt: string }[]>();
  for (const a of articles) {
    if (!a.lang || !a.culture) continue;
    const key = `${stripDraft(a.culture)}::${a.lang}`;
    const list = byCultureLang.get(key) ?? [];
    list.push({ id: stripDraft(a.id), publishedAt: a.publishedAt ?? "" });
    byCultureLang.set(key, list);
  }
  const desiredFor = (key: string): string[] => {
    const list = byCultureLang.get(key);
    if (!list) return [];
    const seen = new Set<string>();
    return [...list]
      .sort((x, y) => (y.publishedAt > x.publishedAt ? 1 : -1))
      .map((x) => x.id)
      .filter((id) => (seen.has(id) ? false : (seen.add(id), true)));
  };

  const tx = client.transaction();
  let changed = 0;

  const plan = (doc: DocRow, desired: string[]) => {
    const currentRefs = doc.currentRefs ?? [];
    const isStale = (doc.total ?? 0) > currentRefs.length;
    if (!isStale && sameSet(currentRefs, desired)) return;
    changed += 1;
    console.log(
      `  ${doc._id} → ${desired.length} article(s)${isStale ? " (clearing stale objects)" : ""}`,
    );
    tx.patch(doc._id, (p) =>
      p
        .setIfMissing({ related: {} })
        .set({ "related.articles": desired.map(refItem) }),
    );
  };

  // Cultures — derive from relatedCulture.
  const cultures = await client.fetch<DocRow[]>(
    `*[_type == "culture"]{
      _id, language,
      "total": count(related.articles),
      "currentRefs": related.articles[defined(_ref)]._ref
    }`,
  );
  for (const doc of cultures) {
    const baseId = stripDraft(doc._id);
    plan(doc, desiredFor(`${baseId}::${doc.language ?? ""}`));
  }

  // Multicultural hub — clear (linked by hand).
  const hubs = await client.fetch<DocRow[]>(
    `*[_type == "multiculturalPage"]{
      _id, language,
      "total": count(related.articles),
      "currentRefs": related.articles[defined(_ref)]._ref
    }`,
  );
  for (const doc of hubs) plan(doc, []);

  if (changed === 0) {
    console.log("Nothing to change — already in sync.");
    return;
  }
  if (dryRun) {
    console.log(`[dry-run] ${changed} doc(s) would change. No changes written.`);
    return;
  }
  await tx.commit();
  console.log(`✓ Updated related.articles on ${changed} doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
