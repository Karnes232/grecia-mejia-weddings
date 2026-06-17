import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import type { Locale } from "@/i18n/routing";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import { SEO_PROJECTION, type SeoFields } from "./seo";

/**
 * Venue detail page (`/venues/[region]/[venue]`).
 *
 * A two-segment translated-slug route — both `region` and `venue` segments are
 * localized. The query filters on locale + venue slug + parent region slug; the
 * `translations` projection carries BOTH slugs per locale (via the venue's
 * `translation.metadata` and each sibling's `region->slug`), for hreflang /
 * canonical and the language switcher. No English fallback — a localized URL
 * only exists when its localized doc does.
 */
export const venueQuery = groq`
  *[_type == "venue"
    && language == $locale
    && slug.current == $venue
    && region->slug.current == $region][0]{
    "id": _id,
    name,
    "slug": slug.current,
    "regionName": region->name,
    header{
      eyebrow, headline, location, deck,
      gallery{ label, href },
      cta{ label, href }
    },
    facts[]{ label, value, sub },
    overview{ sideLabel, sideNote, headline, lede, body, pull },
    capacity{
      eyebrow, headline,
      meter{
        title, sub, marks, fillLeft, fillWidth,
        recs[]{ label, value, body }
      },
      loves{ title, items },
      constraints{ title, items }
    },
    compatibility{
      eyebrow, headline, intro,
      items[]{ name, sub, rating, note }
    },
    logistics{
      eyebrow, headline,
      blocks[]{ title, rows[]{ label, value } }
    },
    photography{
      eyebrow, headline,
      items[]{ time, title, body, imageKey }
    },
    hotels{
      eyebrow, headline,
      items[]{ number, name, sub, distance, keys, href }
    },
    portfolio{
      eyebrow, headline, viewAllLabel, viewAllHref,
      items[]{ title, meta, imageKey }
    },
    related{
      eyebrow, headline,
      articles[]{ category, title, body, imageKey, href },
      sidebarVenues[]{ label, href },
      sidebarCultures[]{ label, href },
      sidebarDestinations[]{ label, href }
    },
    faq{
      eyebrow, headline,
      items[]{ question, answer }
    },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    "media": media->{
      cardImage{ ..., alt },
      mosaic[]{ key, image{ ..., alt } },
      photography[]{ key, image{ ..., alt } },
      portfolio[]{ key, image{ ..., alt } },
      relatedArticles[]{ key, image{ ..., alt } }
    },
    "translations": *[_type == "translation.metadata" && references(^._id)][0]
      .translations[].value->{
        language,
        "venue": slug.current,
        "region": region->slug.current
      },
    ${SEO_PROJECTION}
  }
`;

/** `{language, region, venue}` of every venue doc — generateStaticParams + sitemap. */
export const venueParamsQuery = groq`
  *[_type == "venue"
    && defined(slug.current)
    && defined(language)
    && defined(region->slug.current)]{
    language,
    "venue": slug.current,
    "region": region->slug.current
  }
`;

type LabelValue = { label?: string; value?: string };
type LabelHref = { label?: string; href?: string };
type KeyedImage = { key?: string; image?: SanityImage };

export type Venue = {
  id?: string;
  name?: string;
  slug?: string;
  regionName?: string;
  header?: {
    eyebrow?: string;
    headline?: string;
    location?: string;
    deck?: string;
    gallery?: { label?: string; href?: string };
    cta?: { label?: string; href?: string };
  };
  facts?: Array<{ label?: string; value?: string; sub?: string }>;
  overview?: {
    sideLabel?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    pull?: string;
  };
  capacity?: {
    eyebrow?: string;
    headline?: string;
    meter?: {
      title?: string;
      sub?: string;
      marks?: string[];
      fillLeft?: number;
      fillWidth?: number;
      recs?: Array<{ label?: string; value?: string; body?: string }>;
    };
    loves?: { title?: string; items?: string[] };
    constraints?: { title?: string; items?: string[] };
  };
  compatibility?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    items?: Array<{
      name?: string;
      sub?: string;
      rating?: number;
      note?: string;
    }>;
  };
  logistics?: {
    eyebrow?: string;
    headline?: string;
    blocks?: Array<{ title?: string; rows?: LabelValue[] }>;
  };
  photography?: {
    eyebrow?: string;
    headline?: string;
    items?: Array<{
      time?: string;
      title?: string;
      body?: string;
      imageKey?: string;
    }>;
  };
  hotels?: {
    eyebrow?: string;
    headline?: string;
    items?: Array<{
      number?: string;
      name?: string;
      sub?: string;
      distance?: string;
      keys?: string;
      href?: string;
    }>;
  };
  portfolio?: {
    eyebrow?: string;
    headline?: string;
    viewAllLabel?: string;
    viewAllHref?: string;
    items?: Array<{ title?: string; meta?: string; imageKey?: string }>;
  };
  related?: {
    eyebrow?: string;
    headline?: string;
    articles?: Array<{
      category?: string;
      title?: string;
      body?: string;
      imageKey?: string;
      href?: string;
    }>;
    sidebarVenues?: LabelHref[];
    sidebarCultures?: LabelHref[];
    sidebarDestinations?: LabelHref[];
  };
  faq?: {
    eyebrow?: string;
    headline?: string;
    items?: Array<{ question?: string; answer?: PortableTextBlock[] }>;
  };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  media?: VenueMedia | null;
  translations?: Array<{ language?: Locale; venue?: string; region?: string }>;
  seo?: SeoFields;
};

export type VenueMedia = {
  cardImage?: SanityImage;
  mosaic?: KeyedImage[];
  photography?: KeyedImage[];
  portfolio?: KeyedImage[];
  relatedArticles?: KeyedImage[];
};

export type VenueParams = {
  language: Locale;
  region: string;
  venue: string;
};

export function getVenue(locale: string, region: string, venue: string) {
  return client.fetch<Venue | null>(venueQuery, { locale, region, venue });
}

export function getVenueParams() {
  return client.fetch<VenueParams[]>(venueParamsQuery);
}
