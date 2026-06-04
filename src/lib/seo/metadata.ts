import type { Metadata } from "next";

import { type Locale } from "@/i18n/routing";
import { urlFor } from "@/sanity/lib/image";
import type { SeoFields } from "@/sanity/queries/seo";

import {
  buildHreflang,
  canonicalUrl,
  type Href,
  type LocalizedParams,
} from "./hreflang";
import { BRAND_NAME } from "./siteUrl";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  pt: "pt_PT",
  de: "de_DE",
  it: "it_IT",
};

type BuildMetadataArgs = {
  /** Editable per-page overrides from Sanity (may be empty). */
  seo?: SeoFields;
  /** Plain (accent-stripped) title used when `seo.title` is empty. */
  fallbackTitle: string;
  fallbackDescription?: string;
  brandName?: string;
  href: Href;
  locale: Locale;
  /** Resolved fallback OG image URL (e.g. page hero), used when `seo.ogImage` is empty. */
  ogImageUrl?: string;
  ogImageAlt?: string;
  /** When true, the title stands alone (no " · Brand" suffix) — used by the home page. */
  absoluteTitle?: boolean;
  /** Per-locale param overrides for routes with translated slugs (canonical + og:url + hreflang). */
  localizedParams?: LocalizedParams;
  /** Restricts hreflang to the locales the document actually exists in. */
  hreflangLocales?: readonly Locale[];
};

export function buildMetadata({
  seo,
  fallbackTitle,
  fallbackDescription,
  brandName = BRAND_NAME,
  href,
  locale,
  ogImageUrl,
  ogImageAlt,
  absoluteTitle = false,
  localizedParams,
  hreflangLocales,
}: BuildMetadataArgs): Metadata {
  const title = seo?.metaTitle?.trim()
    ? seo.metaTitle
    : absoluteTitle
      ? fallbackTitle
      : `${fallbackTitle} · ${brandName}`;

  const description =
    seo?.metaDescription?.trim() || fallbackDescription || undefined;

  const seoOgUrl = seo?.ogImage?.asset
    ? urlFor(seo.ogImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;
  const imageUrl = seoOgUrl ?? ogImageUrl;
  const imageAlt = seo?.ogImage?.alt ?? ogImageAlt ?? title;

  const canonical = canonicalUrl(href, locale, localizedParams);
  const ogTitle = seo?.ogTitle?.trim() || title;
  const ogDescription = seo?.ogDescription?.trim() || description;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages: buildHreflang(href, localizedParams, hreflangLocales),
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      type: "website",
      locale: OG_LOCALE[locale],
      images: imageUrl
        ? [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }]
        : undefined,
    },
    twitter: {
      card: seo?.twitterCard ?? "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: imageUrl ? [imageUrl] : undefined,
    },
    robots:
      seo?.noIndex || seo?.noFollow
        ? { index: !seo?.noIndex, follow: !seo?.noFollow }
        : undefined,
  };
}
