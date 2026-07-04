import { groq } from "next-sanity";

import { client } from "../lib/client";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    brandName,
    logo{ ..., alt },
    footerLogo{ ..., alt },
    "signatureParagraph": coalesce(signatureParagraph[$locale], signatureParagraph.en),
    copyrightLine,
    contact,
    studios,
    defaultOgImage
  }
`;

export const navigationQuery = groq`
  *[_type == "navigation" && language == $locale][0]{
    mainLinks[]{ key, label, href },
    cta{ label, href }
  }
`;

export const footerQuery = groq`
  *[_type == "footer" && language == $locale][0]{
    contactHeading,
    columns[]{
      heading,
      links[]{ label, href }
    },
    legalLinks[]{ label, href }
  }
`;

export type SiteSettings = {
  brandName?: string;
  logo?: {
    asset?: { _ref: string; _type: "reference" };
    alt?: string;
    hotspot?: { x: number; y: number; height: number; width: number };
    crop?: { top: number; bottom: number; left: number; right: number };
  };
  footerLogo?: {
    asset?: { _ref: string; _type: "reference" };
    alt?: string;
    hotspot?: { x: number; y: number; height: number; width: number };
    crop?: { top: number; bottom: number; left: number; right: number };
  };
  signatureParagraph?: string;
  copyrightLine?: string;
  contact?: {
    phone?: string;
    email?: string;
    whatsappUrl?: string;
    instagramUrl?: string;
  };
  studios?: Array<{ label?: string; year?: string }>;
};

export type NavigationData = {
  mainLinks?: Array<{ key: string; label: string; href: string }>;
  cta?: { label?: string; href?: string };
};

export type FooterData = {
  contactHeading?: string;
  columns?: Array<{
    heading?: string;
    links?: Array<{ label?: string; href?: string }>;
  }>;
  legalLinks?: Array<{ label?: string; href?: string }>;
};

const FALLBACK_LOCALE = "en";

function isEmpty(value: unknown): boolean {
  if (value == null) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}

/**
 * Field-level fallback: prefers the requested locale, but for any top-level
 * field that's missing/empty (null, '', []) the English value fills in.
 * If the locale document doesn't exist at all, the English document is returned.
 */
export async function fetchWithFallback<T extends Record<string, unknown>>(
  query: string,
  locale: string,
  extraParams: Record<string, unknown> = {},
): Promise<T | null> {
  if (locale === FALLBACK_LOCALE) {
    return client.fetch<T | null>(query, { locale, ...extraParams });
  }

  const [localized, fallback] = await Promise.all([
    client.fetch<T | null>(query, { locale, ...extraParams }),
    client.fetch<T | null>(query, { locale: FALLBACK_LOCALE, ...extraParams }),
  ]);

  if (!localized) return fallback;
  if (!fallback) return localized;

  const merged: Record<string, unknown> = {};
  const keys = new Set([...Object.keys(localized), ...Object.keys(fallback)]);
  for (const key of keys) {
    const primary = (localized as Record<string, unknown>)[key];
    merged[key] = isEmpty(primary)
      ? (fallback as Record<string, unknown>)[key]
      : primary;
  }
  return merged as T;
}

export function getSiteSettings(locale: string) {
  return fetchWithFallback<SiteSettings>(siteSettingsQuery, locale);
}

export function getNavigation(locale: string) {
  return fetchWithFallback<NavigationData>(navigationQuery, locale);
}

export function getFooter(locale: string) {
  return fetchWithFallback<FooterData>(footerQuery, locale);
}
