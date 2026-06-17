import type { MetadataRoute } from "next";

import { routing, type Locale } from "@/i18n/routing";
import {
  buildHreflang,
  canonicalUrl,
  type Href,
  type LocalizedParams,
} from "@/lib/seo/hreflang";
import { type CultureParams, getCultureParams } from "@/sanity/queries/culture";
import { getDestinationSlugs } from "@/sanity/queries/destination";
import {
  type SitemapParams,
  getArticleSitemapParams,
  getCategoryParams,
} from "@/sanity/queries/journal";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

type EntryOpts = {
  changeFrequency?: ChangeFrequency;
  priority?: number;
  /** Per-locale param overrides for routes with translated slugs. */
  localizedParams?: LocalizedParams;
  /** Restricts emitted locales (documents that only exist in some languages). */
  locales?: readonly Locale[];
};

/** One entry per locale for a route, each carrying the full hreflang alternates set. */
function entriesFor(href: Href, opts?: EntryOpts): MetadataRoute.Sitemap {
  const locales = opts?.locales ?? routing.locales;
  const languages = buildHreflang(href, opts?.localizedParams, locales);
  return locales.map((locale) => ({
    url: canonicalUrl(href, locale, opts?.localizedParams),
    changeFrequency: opts?.changeFrequency ?? "monthly",
    priority: opts?.priority ?? 0.7,
    alternates: { languages },
  }));
}

/**
 * Culture slugs are translated per locale, so group the per-locale rows into
 * one hreflang cluster per culture (siblings share a translation.metadata doc)
 * and emit each locale's URL with its own slug.
 */
function cultureClusters(rows: CultureParams[]): MetadataRoute.Sitemap {
  const groups = new Map<string, CultureParams[]>();
  for (const row of rows) {
    // Ungrouped docs (no metadata) cluster alone, keyed by their own slug.
    const key = row.metadataId ?? `solo:${row.language}:${row.slug}`;
    const group = groups.get(key) ?? [];
    group.push(row);
    groups.set(key, group);
  }

  return [...groups.values()].flatMap((group) => {
    const localizedParams: LocalizedParams = {};
    for (const row of group) {
      localizedParams[row.language] = { culture: row.slug };
    }
    const locales = group.map((row) => row.language);
    const canonicalSlug =
      localizedParams[routing.defaultLocale]?.culture ?? group[0].slug;

    return entriesFor(
      {
        pathname: "/multicultural-weddings/[culture]",
        params: { culture: canonicalSlug },
      },
      { priority: 0.8, localizedParams, locales },
    );
  });
}

/** Group translated-slug rows into one hreflang cluster per document. */
function slugClusters(
  rows: SitemapParams[],
  build: (slug: string, localizedParams: LocalizedParams, locales: Locale[]) => MetadataRoute.Sitemap,
): MetadataRoute.Sitemap {
  const groups = new Map<string, SitemapParams[]>();
  for (const row of rows) {
    const key = row.metadataId ?? `solo:${row.language}:${row.slug}`;
    const group = groups.get(key) ?? [];
    group.push(row);
    groups.set(key, group);
  }
  return [...groups.values()].flatMap((group) => {
    const localizedParams: LocalizedParams = {};
    for (const row of group) localizedParams[row.language] = { slug: row.slug };
    const locales = group.map((row) => row.language);
    const canonicalSlug =
      localizedParams[routing.defaultLocale]?.slug ?? group[0].slug;
    return build(canonicalSlug, localizedParams, locales);
  });
}

function articleClusters(rows: SitemapParams[]): MetadataRoute.Sitemap {
  return slugClusters(rows, (slug, localizedParams, locales) =>
    entriesFor(
      { pathname: "/journal/[slug]", params: { slug } },
      { priority: 0.7, changeFrequency: "monthly", localizedParams, locales },
    ),
  );
}

function categoryClusters(rows: SitemapParams[]): MetadataRoute.Sitemap {
  // The category param uses a different name; remap from the generic `slug`.
  const groups = new Map<string, SitemapParams[]>();
  for (const row of rows) {
    const key = row.metadataId ?? `solo:${row.language}:${row.slug}`;
    const group = groups.get(key) ?? [];
    group.push(row);
    groups.set(key, group);
  }
  return [...groups.values()].flatMap((group) => {
    const localizedParams: LocalizedParams = {};
    for (const row of group) localizedParams[row.language] = { category: row.slug };
    const locales = group.map((row) => row.language);
    const canonicalSlug =
      localizedParams[routing.defaultLocale]?.category ?? group[0].slug;
    return entriesFor(
      { pathname: "/journal/category/[category]", params: { category: canonicalSlug } },
      { priority: 0.5, localizedParams, locales },
    );
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [slugs, cultureRows, articleRows, categoryRows] = await Promise.all([
    getDestinationSlugs(),
    getCultureParams(),
    getArticleSitemapParams(),
    getCategoryParams(),
  ]);

  return [
    ...entriesFor("/", { changeFrequency: "weekly", priority: 1 }),
    ...entriesFor("/destinations", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),
    ...entriesFor("/multicultural-weddings", {
      changeFrequency: "weekly",
      priority: 0.9,
    }),
    ...entriesFor("/about", { priority: 0.6 }),
    ...slugs.flatMap((slug) =>
      entriesFor(
        {
          pathname: "/destinations/[destination]",
          params: { destination: slug },
        },
        { priority: 0.8 },
      ),
    ),
    ...cultureClusters(cultureRows),
    ...entriesFor("/journal", { changeFrequency: "weekly", priority: 0.8 }),
    ...articleClusters(articleRows),
    ...categoryClusters(categoryRows),
  ];
}
