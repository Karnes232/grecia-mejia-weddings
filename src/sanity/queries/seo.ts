/**
 * Shared SEO projection + types for the `seo` object attached to localized
 * page documents (homePage, destinationsPage, aboutPage, destination).
 */

export type SeoImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SeoImage;
  twitterCard?: "summary" | "summary_large_image";
  structuredData?: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

/** Interpolate into a page's GROQ projection (single source of truth). */
export const SEO_PROJECTION = `seo{
    metaTitle,
    metaDescription,
    keywords,
    ogTitle,
    ogDescription,
    ogImage{ ..., alt },
    twitterCard,
    structuredData,
    noIndex,
    noFollow
  }`;
