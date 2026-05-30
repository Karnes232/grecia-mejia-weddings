import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

export const multiculturalPageQuery = groq`
  *[_type == "multiculturalPage" && language == $locale][0]{
    hero{
      eyebrow,
      scriptOverline,
      headline,
      deck,
      captionLeft,
      captionCenter,
      captionRight
    },
    philosophy{
      sideLabel,
      sideNote,
      headline,
      lede,
      body,
      pull
    },
    methodology{
      eyebrow,
      headline,
      intro,
      steps[]{ title, body }
    },
    atlas{
      eyebrow,
      headline,
      deck,
      cultures[]->{
        number,
        tile,
        "name": name,
        "slug": slug.current,
        cardEyebrow,
        cardBlurb,
        cardMeta,
        "image": *[_type == "cultureMedia" && slug == ^.slug.current][0].cardImage{ ..., alt }
      }
    },
    pairings{
      eyebrow,
      headline,
      intro,
      items[]{ first, second, body }
    },
    specialists{
      eyebrow,
      headline,
      intro,
      items[]{ role, name, body }
    },
    related{
      eyebrow,
      headline,
      articles[]{ category, title, body, imageKey, href },
      sidebarDestinations[]{ label, href },
      sidebarServices[]{ label, href },
      sidebarWeddings[]{ label, href }
    },
    cta{
      "eyebrow": scriptLine,
      headline,
      body,
      "cta": { "label": ctaLabel, "href": ctaHref }
    },
    ${SEO_PROJECTION}
  }
`;

export const multiculturalPageMediaQuery = groq`
  *[_id == "multiculturalPageMedia"][0]{
    hero{
      image{ ..., alt }
    },
    relatedArticles[]{ key, image{ ..., alt } }
  }
`;

export type MulticulturalPage = {
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  philosophy?: {
    sideLabel?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    pull?: string;
  };
  methodology?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    steps?: Array<{ title?: string; body?: string }>;
  };
  atlas?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    cultures?: CultureCardData[];
  };
  pairings?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    items?: Array<{ first?: string; second?: string; body?: string }>;
  };
  specialists?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    items?: Array<{ role?: string; name?: string; body?: string }>;
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
    sidebarDestinations?: Array<{ label?: string; href?: string }>;
    sidebarServices?: Array<{ label?: string; href?: string }>;
    sidebarWeddings?: Array<{ label?: string; href?: string }>;
  };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
  seo?: SeoFields;
};

export type CultureTile = "hero" | "tall" | "square" | "wide" | "full";

export type CultureCardData = {
  number?: string;
  tile?: CultureTile;
  name?: string;
  slug?: string;
  cardEyebrow?: string;
  cardBlurb?: string;
  cardMeta?: string;
  image?: SanityImage;
};

export type MulticulturalPageMedia = {
  hero?: { image?: SanityImage };
  relatedArticles?: Array<{ key?: string; image?: SanityImage }>;
};

export function getMulticulturalPage(locale: string) {
  return fetchWithFallback<MulticulturalPage>(multiculturalPageQuery, locale);
}

export function getMulticulturalPageMedia() {
  return client.fetch<MulticulturalPageMedia | null>(
    multiculturalPageMediaQuery,
  );
}
