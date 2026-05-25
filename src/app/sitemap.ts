import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { buildHreflang, canonicalUrl, type Href } from "@/lib/seo/hreflang";
import { getDestinationSlugs } from "@/sanity/queries/destination";

type ChangeFrequency = MetadataRoute.Sitemap[number]["changeFrequency"];

/** One entry per locale for a route, each carrying the full hreflang alternates set. */
function entriesFor(
  href: Href,
  opts?: { changeFrequency?: ChangeFrequency; priority?: number },
): MetadataRoute.Sitemap {
  const languages = buildHreflang(href);
  return routing.locales.map((locale) => ({
    url: canonicalUrl(href, locale),
    changeFrequency: opts?.changeFrequency ?? "monthly",
    priority: opts?.priority ?? 0.7,
    alternates: { languages },
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getDestinationSlugs();

  return [
    ...entriesFor("/", { changeFrequency: "weekly", priority: 1 }),
    ...entriesFor("/destinations", { changeFrequency: "weekly", priority: 0.9 }),
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
  ];
}
