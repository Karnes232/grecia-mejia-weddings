/**
 * One-shot migration: move the footer's Contact column to settings-driven.
 *
 * Why: each locale's footer doc carried a hand-typed Contact column
 * (phone/email/WhatsApp/Instagram links) inside `columns[]`, duplicating
 * `siteSettings.contact`. The footer now renders that column automatically
 * from Site Settings; only the heading stays editorial, in the new
 * `contactHeading` field. This moves each doc's contact-column heading to
 * `contactHeading` and removes the column from `columns[]`.
 *
 * A contact column is recognised by its links: an href starting with
 * `mailto:` or a label of WhatsApp/Instagram — the same predicate the Footer
 * component uses to exclude legacy columns until this migration runs.
 *
 * Idempotent — re-running is a no-op once no column matches.
 *
 * Requires a write-scoped token in the env: `SANITY_API_WRITE_TOKEN`.
 * Preview:  npm run migrate:footer-contact-column -- --dry-run
 * Run:      npm run migrate:footer-contact-column
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

type FooterLink = { label?: string | null; href?: string | null };
type FooterColumn = {
  _key: string;
  heading?: string | null;
  links?: FooterLink[] | null;
};
type FooterDoc = {
  _id: string;
  contactHeading?: string | null;
  columns?: FooterColumn[] | null;
};

function isContactColumn(col: FooterColumn): boolean {
  return Boolean(
    col.links?.some(
      (link) =>
        link.href?.startsWith("mailto:") ||
        ["whatsapp", "instagram"].includes(
          link.label?.toLowerCase().trim() ?? "",
        ),
    ),
  );
}

async function run() {
  console.log(
    `${dryRun ? "[dry-run] " : ""}Moving footer contact columns to contactHeading in ${dataset}/${projectId}…`,
  );

  const docs: FooterDoc[] = await client.fetch(
    `*[_type == "footer"]{ _id, contactHeading, columns[]{ _key, heading, links[]{ label, href } } }`,
  );

  const tx = client.transaction();
  let changed = 0;

  for (const doc of docs) {
    const col = doc.columns?.find(isContactColumn);
    if (!col) continue;

    const setHeading = doc.contactHeading == null && col.heading != null;
    console.log(
      `  ${doc._id} → remove column "${col.heading ?? col._key}"` +
        (setHeading ? ` → contactHeading "${col.heading}"` : ""),
    );
    changed += 1;
    tx.patch(doc._id, (p) => {
      let patch = p.unset([`columns[_key=="${col._key}"]`]);
      if (setHeading) patch = patch.setIfMissing({ contactHeading: col.heading });
      return patch;
    });
  }

  if (changed === 0) {
    console.log("Nothing to migrate — no footer doc has a contact column.");
    return;
  }

  if (dryRun) {
    console.log(`[dry-run] Would update ${changed} doc(s). No changes written.`);
    return;
  }

  await tx.commit();
  console.log(`✓ Updated ${changed} doc(s).`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
