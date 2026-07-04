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
      stats[]{ source, value, label },
      "venueCount": count(*[_type == "venue" && language == $locale && defined(slug.current)]),
      "regionCount": count(*[_type == "venueRegion" && language == $locale && defined(slug.current)])
    },
    regions{
      eyebrow,
      headline,
      intro,
      items[defined(@->_id)]->{
        "name": name,
        "slug": slug.current,
        cardBlurb,
        cardMeta[]{ value, label, useVenueCount },
        "venueCount": count(*[_type == "venue"
          && language == ^.language
          && region._ref == ^._id
          && listed != false
          && defined(slug.current)]),
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
    hero{ image{ ..., alt } }
  }
`;

export type VenueRegionCard = {
  name?: string;
  slug?: string;
  cardBlurb?: string;
  cardMeta?: Array<{
    value?: string;
    label?: string;
    useVenueCount?: boolean;
  }>;
  venueCount?: number;
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
    stats?: Array<{ source?: string; value?: string; label?: string }>;
    venueCount?: number;
    regionCount?: number;
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
};

export function getVenuesPage(locale: string) {
  return fetchWithFallback<VenuesPage>(venuesPageQuery, locale);
}

export function getVenuesPageMedia() {
  return client.fetch<VenuesPageMedia | null>(venuesPageMediaQuery);
}
