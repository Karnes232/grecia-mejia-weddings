import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

export const destinationsPageQuery = groq`
  *[_type == "destinationsPage" && language == $locale][0]{
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
      eyebrow,
      headline,
      lede,
      body,
      stats[]{ value, label }
    },
    regions[]{
      eyebrow,
      name,
      intro,
      slug,
      destinations[]{
        number,
        tile,
        "country": destination->country,
        "name": destination->name,
        "subLocations": destination->subLocations,
        "slug": destination->slug.current,
        "image": *[_type == "destinationMedia" && slug == ^.destination->slug.current][0].cardImage{ ..., alt }
      }
    },
    calendar{
      headline,
      intro,
      rows[]{ region, note, months },
      legend{ peak, good, off }
    },
    spotlight{
      eyebrow,
      "scriptAccent": destination->hero.scriptOverline,
      "headline": destination->hero.headline,
      "deck": destination->hero.deck,
      "body": destination->story.lede,
      "facts": destination->facts[]{ label, value },
      "name": destination->name,
      "slug": destination->slug.current,
      "captionPlace": destination->subLocations,
      "image": *[_type == "destinationMedia" && slug == ^.destination->slug.current][0].heroImage{ ..., alt }
    },
    journeyCta{
      eyebrow,
      headline,
      body,
      cta{ label, href }
    },
    ${SEO_PROJECTION}
  }
`;

export const destinationsPageMediaQuery = groq`
  *[_id == "destinationsPageMedia"][0]{
    hero{
      image{ ..., alt }
    }
  }
`;

export type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type DestinationTile =
  | "featured"
  | "tall-lg"
  | "tall"
  | "wide"
  | "square"
  | "square-sm";

export type DestinationCardData = {
  number?: string;
  country?: string;
  name?: string;
  subLocations?: string;
  slug?: string;
  tile?: DestinationTile;
  image?: SanityImage;
};

export type Region = {
  eyebrow?: string;
  name?: string;
  intro?: string;
  slug?: string;
  destinations?: DestinationCardData[];
};

export type DestinationsPage = {
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
    eyebrow?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    stats?: Array<{ value?: string; label?: string }>;
  };
  regions?: Region[];
  calendar?: {
    headline?: string;
    intro?: string;
    rows?: Array<{
      region?: string;
      note?: string;
      months?: Array<CalendarCellValue | string>;
    }>;
    legend?: { peak?: string; good?: string; off?: string };
  };
  spotlight?: {
    eyebrow?: string;
    scriptAccent?: string;
    headline?: string;
    deck?: string;
    body?: string;
    facts?: Array<{ label?: string; value?: string }>;
    name?: string;
    slug?: string;
    captionPlace?: string;
    image?: SanityImage;
  };
  journeyCta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
  seo?: SeoFields;
};

export type CalendarCellValue = "peak" | "good" | "off";

export type DestinationsPageMedia = {
  hero?: { image?: SanityImage };
};

export function getDestinationsPage(locale: string) {
  return fetchWithFallback<DestinationsPage>(destinationsPageQuery, locale);
}

export function getDestinationsPageMedia() {
  return client.fetch<DestinationsPageMedia | null>(destinationsPageMediaQuery);
}
