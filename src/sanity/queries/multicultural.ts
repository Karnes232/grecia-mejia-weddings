import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import type { SanityImage } from "./destinations";
import {
  ARTICLE_CARD_PROJECTION,
  type JournalArticleCard,
} from "./journal";
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
      cultures[defined(@->_id)]->{
        "name": name,
        "slug": slug.current,
        cardEyebrow,
        cardBlurb,
        cardMeta,
        "image": media->cardImage{ ..., alt, "dimensions": asset->metadata.dimensions{ width, height } }
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
      "articles": articles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} },
      "sidebarDestinations": sidebarDestinations[defined(@->_id)]->{ "label": name, "slug": slug.current },
      "sidebarServices": sidebarServices[defined(@->_id)]->{ "label": name, "slug": slug.current },
      "sidebarWeddings": sidebarWeddings[defined(@->_id)]->{ "label": name, "slug": slug.current }
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
    }
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
    articles?: JournalArticleCard[];
    sidebarDestinations?: Array<{ label?: string; slug?: string }>;
    sidebarServices?: Array<{ label?: string; slug?: string }>;
    sidebarWeddings?: Array<{ label?: string; slug?: string }>;
  };
  cta?: {
    eyebrow?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
  };
  seo?: SeoFields;
};

export type CultureCardData = {
  name?: string;
  slug?: string;
  cardEyebrow?: string;
  cardBlurb?: string;
  cardMeta?: string;
  image?: SanityImage & { dimensions?: { width?: number; height?: number } };
};

export type MulticulturalPageMedia = {
  hero?: { image?: SanityImage };
};

export function getMulticulturalPage(locale: string) {
  return fetchWithFallback<MulticulturalPage>(multiculturalPageQuery, locale);
}

export function getMulticulturalPageMedia() {
  return client.fetch<MulticulturalPageMedia | null>(
    multiculturalPageMediaQuery,
  );
}
