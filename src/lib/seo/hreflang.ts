import { getPathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

import { SITE_URL } from "./siteUrl";

/** The `href` shape accepted by next-intl's `getPathname` (string key or {pathname, params}). */
export type Href = Parameters<typeof getPathname>[0]["href"];

/**
 * Per-locale dynamic-param overrides, for routes whose params are translated
 * per locale (e.g. culture slugs: en `indian-weddings`, es `bodas-indias`).
 * A locale without an entry falls back to the href's own params.
 */
export type LocalizedParams = Partial<Record<Locale, Record<string, string>>>;

/** Merge a locale's param overrides (if any) into an object-form href. */
function localizeHref(
  href: Href,
  locale: Locale,
  localizedParams?: LocalizedParams,
): Href {
  const override = localizedParams?.[locale];
  if (!override || typeof href === "string" || !("params" in href)) {
    return href;
  }
  return {
    ...href,
    params: { ...href.params, ...override },
  } as Href;
}

/** Absolute canonical URL for a route in a given locale. */
export function canonicalUrl(
  href: Href,
  locale: Locale,
  localizedParams?: LocalizedParams,
): string {
  return `${SITE_URL}${getPathname({ href: localizeHref(href, locale, localizedParams), locale })}`;
}

/**
 * hreflang alternates + x-default (English), as expected by Next.js
 * `Metadata.alternates.languages`.
 *
 * @param localizedParams per-locale param overrides for translated slugs.
 * @param locales restricts the emitted set — pass the locales a translated
 *   document actually exists in, so missing translations are not advertised.
 *   `x-default` is included only when the default locale is present.
 */
export function buildHreflang(
  href: Href,
  localizedParams?: LocalizedParams,
  locales?: readonly Locale[],
): Record<string, string> {
  const emit = locales ?? routing.locales;
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    if (!emit.includes(locale)) continue;
    languages[locale] = canonicalUrl(href, locale, localizedParams);
  }
  if (languages[routing.defaultLocale]) {
    languages["x-default"] = languages[routing.defaultLocale];
  }
  return languages;
}
