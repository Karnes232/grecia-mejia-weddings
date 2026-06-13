import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import type { Locale } from "@/i18n/routing";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import { SEO_PROJECTION, type SeoFields } from "./seo";

/**
 * Venue region detail page (`/venues/[region]`).
 *
 * Region slugs are translated per locale, so (like cultures):
 * - media is joined via the `media` reference (slug joins would break),
 * - the query returns a `translations` slug map (via `translation.metadata`)
 *   for hreflang alternates and the language switcher,
 * - there is no English-fallback fetch — a localized URL only exists when its
 *   localized doc exists (`getVenueRegionParams` builds params per locale).
 */
export const venueRegionQuery = groq`
  *[_type == "venueRegion" && language == $locale && slug.current == $slug][0]{
    name,
    "slug": slug.current,
    hero,
    guide{
      sideLabel, headline, body,
      subRegions[]{ label, href },
      related[]{ label, href }
    },
    filter{
      typologies[]{ label, count },
      guestBands[]{ label }
    },
    venuesHeadline{ eyebrow, headline },
    venues[]->{
      number,
      name,
      tag,
      location,
      "blurb": cardBlurb,
      "meta": cardMeta[]{ label, value },
      "slug": slug.current,
      "image": media->cardImage{ ..., alt }
    },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    "media": media->{
      heroImage{ ..., alt },
      cardImage{ ..., alt }
    },
    "translations": *[_type == "translation.metadata" && references(^._id)][0]
      .translations[].value->{ language, "slug": slug.current },
    ${SEO_PROJECTION}
  }
`;

/** `{language, slug}` of every venue-region doc — generateStaticParams + sitemap. */
export const venueRegionParamsQuery = groq`
  *[_type == "venueRegion" && defined(slug.current) && defined(language)]{
    language,
    "slug": slug.current
  }
`;

type LabelHref = { label?: string; href?: string };

export type VenueRegion = {
  name?: string;
  slug?: string;
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  guide?: {
    sideLabel?: string;
    headline?: string;
    body?: PortableTextBlock[];
    subRegions?: LabelHref[];
    related?: LabelHref[];
  };
  filter?: {
    typologies?: Array<{ label?: string; count?: number }>;
    guestBands?: Array<{ label?: string }>;
  };
  venuesHeadline?: { eyebrow?: string; headline?: string };
  venues?: Array<{
    number?: string;
    name?: string;
    tag?: string;
    location?: string;
    blurb?: string;
    meta?: Array<{ label?: string; value?: string }>;
    slug?: string;
    image?: SanityImage;
  }>;
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  media?: VenueRegionMedia | null;
  translations?: Array<{ language?: Locale; slug?: string }>;
  seo?: SeoFields;
};

export type VenueRegionMedia = {
  heroImage?: SanityImage;
  cardImage?: SanityImage;
};

export type VenueRegionParams = {
  language: Locale;
  slug: string;
};

export function getVenueRegion(locale: string, slug: string) {
  // No English fallback on purpose — a localized URL only exists when its doc does.
  return client.fetch<VenueRegion | null>(venueRegionQuery, { locale, slug });
}

export function getVenueRegionParams() {
  return client.fetch<VenueRegionParams[]>(venueRegionParamsQuery);
}
