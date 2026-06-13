import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

export const venuesPageQuery = groq`
  *[_type == "venuesPage" && language == $locale][0]{
    hero{
      eyebrow,
      scriptOverline,
      headline,
      deck,
      captionLeft,
      captionCenter,
      captionRight
    },
    intro{
      sideLabel,
      sideNote,
      headline,
      lede,
      body,
      stats[]{ value, label }
    },
    typology{
      eyebrow,
      headline,
      intro,
      items[]{ title, count, sub, imageKey }
    },
    regions{
      eyebrow,
      headline,
      intro,
      items[]->{
        "name": name,
        "slug": slug.current,
        cardBlurb,
        cardMeta[]{ value, label },
        "image": media->cardImage{ ..., alt }
      }
    },
    cta{
      eyebrow,
      headline,
      body,
      "cta": { "label": ctaLabel, "href": ctaHref }
    },
    ${SEO_PROJECTION}
  }
`;

export const venuesPageMediaQuery = groq`
  *[_id == "venuesPageMedia"][0]{
    hero{ image{ ..., alt } },
    typology{ images[]{ key, "image": { ..., alt } } }
  }
`;

export type VenueRegionCard = {
  name?: string;
  slug?: string;
  cardBlurb?: string;
  cardMeta?: Array<{ value?: string; label?: string }>;
  image?: SanityImage;
};

export type VenuesPage = {
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
    sideLabel?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    stats?: Array<{ value?: string; label?: string }>;
  };
  typology?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    items?: Array<{
      title?: string;
      count?: string;
      sub?: string;
      imageKey?: string;
    }>;
  };
  regions?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    items?: VenueRegionCard[];
  };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
  seo?: SeoFields;
};

export type VenuesPageMedia = {
  hero?: { image?: SanityImage };
  typology?: { images?: Array<{ key?: string; image?: SanityImage }> };
};

export function getVenuesPage(locale: string) {
  return fetchWithFallback<VenuesPage>(venuesPageQuery, locale);
}

export function getVenuesPageMedia() {
  return client.fetch<VenuesPageMedia | null>(venuesPageMediaQuery);
}
