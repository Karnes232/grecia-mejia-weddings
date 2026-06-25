import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import type { Locale } from "@/i18n/routing";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import {
  ARTICLE_CARD_PROJECTION,
  type JournalArticleCard,
} from "./journal";
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
      "items": items[defined(@->_id)]->{
        "title": name, "meta": cardMeta, "slug": slug.current,
        "image": media->cardImage{ ..., alt }
      }
    },
    related{
      eyebrow, headline,
      "articles": articles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} },
      "sidebarVenues": sidebarVenues[defined(@->_id)]->{
        "label": name, "slug": slug.current, "regionSlug": region->slug.current
      },
      "sidebarCultures": sidebarCultures[defined(@->_id)]->{
        "label": name, "slug": slug.current
      },
      "sidebarDestinations": sidebarDestinations[defined(@->_id)]->{
        "label": name, "slug": slug.current
      }
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
      portfolio[]{ key, image{ ..., alt } }
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
type VenueLink = { label?: string; slug?: string; regionSlug?: string };
type DocLink = { label?: string; slug?: string };
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
    items?: Array<{
      title?: string;
      meta?: string;
      slug?: string;
      image?: SanityImage;
    }>;
  };
  related?: {
    eyebrow?: string;
    headline?: string;
    articles?: JournalArticleCard[];
    sidebarVenues?: VenueLink[];
    sidebarCultures?: DocLink[];
    sidebarDestinations?: DocLink[];
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
