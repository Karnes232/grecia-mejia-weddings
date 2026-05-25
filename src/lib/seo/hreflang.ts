import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

import { SITE_URL } from "./siteUrl";

/** The `href` shape accepted by next-intl's `getPathname` (string key or {pathname, params}). */
export type Href = Parameters<typeof getPathname>[0]["href"];

/** Absolute canonical URL for a route in a given locale. */
export function canonicalUrl(href: Href, locale: Locale): string {
  return `${SITE_URL}${getPathname({ href, locale })}`;
}

/**
 * hreflang alternates for all locales + x-default (English), as expected by
 * Next.js `Metadata.alternates.languages`.
 */
export function buildHreflang(href: Href): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[locale] = canonicalUrl(href, locale);
  }
  languages["x-default"] = languages[routing.defaultLocale];
  return languages;
}
