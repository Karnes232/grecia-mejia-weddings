/**
 * Canonical production origin, used for metadataBase, canonical/hreflang URLs,
 * JSON-LD, sitemap and robots. Override per environment with NEXT_PUBLIC_SITE_URL.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://greciamejiaweddings.com";

/** Canonical brand / Organization name (the entity, distinct from the editable siteSettings.brandName). */
export const BRAND_NAME = "Grecia Mejía Weddings";
