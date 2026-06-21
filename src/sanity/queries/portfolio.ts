import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import type { Locale } from "@/i18n/routing";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import {
  ARTICLE_CARD_PROJECTION,
  type JournalArticleCard,
} from "./journal";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

// Shared card projection — used by the hub grid, the "next" block and the
// "more case studies" aside.
const CASE_CARD_PROJECTION = `
  "id": _id,
  name,
  "slug": slug.current,
  tile,
  cardMeta,
  cardBlurb,
  filterTags,
  "image": media->cardImage{ ..., alt }
`;

const GALLERY_PROJECTION = `{ "image": image{ ..., alt }, span }`;

/**
 * Case-study detail page (`/portfolio/[slug]`).
 *
 * Slugs are translated per locale, so media joins by reference and the query
 * returns a `translations` slug map for hreflang + the language switcher. No
 * English fallback — a localized URL only exists when its localized doc does.
 * Mirrors `culture.ts`.
 */
export const portfolioQuery = groq`
  *[_type == "portfolio" && language == $locale && slug.current == $slug][0]{
    "id": _id,
    name,
    "slug": slug.current,
    tile,
    hero,
    "credits": {
      "destination": destination->{
        name,
        "slug": slug.current,
        "image": *[_type == "destinationMedia" && slug == ^.slug.current][0].cardImage{ ..., alt }
      },
      "venue": venue->{
        name,
        "slug": slug.current,
        "region": region->slug.current,
        "image": media->cardImage{ ..., alt }
      },
      "culture": culture->{
        name,
        "slug": slug.current,
        "image": media->cardImage{ ..., alt }
      },
      guests, duration, season
    },
    story{ sideEyebrow, sideNote, headline, lede, body },
    quote{ quote, cite },
    design{ eyebrow, headline, body, palette[]{ hex, name } },
    logistics{
      eyebrow, headline, deck,
      blocks[]{ title, body, rows[]{ label, value } }
    },
    services{
      eyebrow, headline, deck,
      items[]{ number, title, body }
    },
    related{
      eyebrow, headline,
      "articles": articles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} }
    },
    "nextCaseStudy": nextCaseStudy->{ ${CASE_CARD_PROJECTION} },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    "media": media->{
      heroImage{ ..., alt },
      designImage{ ..., alt },
      quoteImage{ ..., alt },
      galleryTop[]${GALLERY_PROJECTION},
      galleryBottom[]${GALLERY_PROJECTION}
    },
    "translations": *[_type == "translation.metadata" && references(^._id)][0]
      .translations[].value->{ language, "slug": slug.current },
    ${SEO_PROJECTION}
  }
`;

/** Other case studies (same locale, excluding the current one) for the aside. */
export const morePortfolioQuery = groq`
  *[_type == "portfolio" && language == $locale && _id != $excludeId]
    | order(_createdAt desc)[0...$limit]{ ${CASE_CARD_PROJECTION} }
`;

/** `{language, slug, metadataId}` of every case study — static params + sitemap. */
export const portfolioParamsQuery = groq`
  *[_type == "portfolio" && defined(slug.current) && defined(language)]{
    language,
    "slug": slug.current,
    "metadataId": *[_type == "translation.metadata" && references(^._id)][0]._id
  }
`;

// ── Hub ──────────────────────────────────────────────────────────────────────
export const portfolioPageQuery = groq`
  *[_type == "portfolioPage" && language == $locale][0]{
    hero{
      eyebrow, scriptOverline, headline, deck,
      captionLeft, captionCenter, captionRight
    },
    intro{ sideEyebrow, sideNote, headline, lede, body },
    grid{
      eyebrow, headline, filterLabel,
      "caseStudies": caseStudies[defined(@->_id)]->{ ${CASE_CARD_PROJECTION} }
    },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    ${SEO_PROJECTION}
  }
`;

export const portfolioPageMediaQuery = groq`
  *[_id == "portfolioPageMedia"][0]{
    hero{ image{ ..., alt } }
  }
`;

// ── Types ────────────────────────────────────────────────────────────────────
export type PortfolioCard = {
  id?: string;
  name?: string;
  slug?: string;
  tile?: "featured" | "twothird" | "half" | "third";
  cardMeta?: string;
  cardBlurb?: string;
  filterTags?: string[];
  image?: SanityImage;
};

type CreditRef = {
  name?: string;
  slug?: string;
  region?: string;
  image?: SanityImage;
};

type GalleryItem = {
  image?: SanityImage;
  span?: "wide" | "tall" | "square";
};

export type Portfolio = {
  id?: string;
  name?: string;
  slug?: string;
  tile?: PortfolioCard["tile"];
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    sub?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  credits?: {
    destination?: CreditRef | null;
    venue?: CreditRef | null;
    culture?: CreditRef | null;
    guests?: string;
    duration?: string;
    season?: string;
  };
  story?: {
    sideEyebrow?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
  };
  quote?: { quote?: string; cite?: string };
  design?: {
    eyebrow?: string;
    headline?: string;
    body?: PortableTextBlock[];
    palette?: Array<{ hex?: string; name?: string }>;
  };
  logistics?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    blocks?: Array<{
      title?: string;
      body?: string;
      rows?: Array<{ label?: string; value?: string }>;
    }>;
  };
  services?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    items?: Array<{ number?: string; title?: string; body?: string }>;
  };
  related?: {
    eyebrow?: string;
    headline?: string;
    articles?: JournalArticleCard[];
  };
  nextCaseStudy?: PortfolioCard | null;
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  media?: {
    heroImage?: SanityImage;
    designImage?: SanityImage;
    quoteImage?: SanityImage;
    galleryTop?: GalleryItem[];
    galleryBottom?: GalleryItem[];
  } | null;
  translations?: Array<{ language?: Locale; slug?: string }>;
  seo?: SeoFields;
};

export type PortfolioPage = {
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  intro?: {
    sideEyebrow?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
  };
  grid?: {
    eyebrow?: string;
    headline?: string;
    filterLabel?: string;
    caseStudies?: PortfolioCard[];
  };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  seo?: SeoFields;
};

export type PortfolioPageMedia = {
  hero?: { image?: SanityImage };
};

export type PortfolioParams = {
  language: Locale;
  slug: string;
  metadataId?: string | null;
};

// ── Fetchers ─────────────────────────────────────────────────────────────────
export function getPortfolio(locale: string, slug: string) {
  // No English fallback on purpose — see the query doc comment.
  return client.fetch<Portfolio | null>(portfolioQuery, { locale, slug });
}

export function getMorePortfolio(locale: string, excludeId: string, limit = 3) {
  return client.fetch<PortfolioCard[]>(morePortfolioQuery, {
    locale,
    excludeId,
    limit,
  });
}

export function getPortfolioParams() {
  return client.fetch<PortfolioParams[]>(portfolioParamsQuery);
}

export function getPortfolioPage(locale: string) {
  return fetchWithFallback<PortfolioPage>(portfolioPageQuery, locale);
}

export function getPortfolioPageMedia() {
  return client.fetch<PortfolioPageMedia | null>(portfolioPageMediaQuery);
}
