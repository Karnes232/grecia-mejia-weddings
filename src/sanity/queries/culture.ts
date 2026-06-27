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
 * Culture detail page (`/multicultural-weddings/[culture]`).
 *
 * Culture slugs are translated per locale (en `indian-weddings`,
 * es `bodas-indias`, …), so unlike destinations:
 * - media is joined via the `media` reference (slug joins would break),
 * - the query returns a `translations` slug map (via `translation.metadata`)
 *   for hreflang alternates and the language switcher,
 * - there is no English-fallback fetch — a localized URL only exists when its
 *   localized doc exists (`getCultureParams` builds params per locale).
 */
export const cultureQuery = groq`
  *[_type == "culture" && language == $locale && slug.current == $slug][0]{
    "id": _id,
    name,
    "slug": slug.current,
    intro,
    hero,
    factStrip[]{ label, value, sub },
    overview{
      sideEyebrow, sideNote, headline, lede, body,
      pull, signatureName, signatureRole
    },
    ceremonyArc{
      eyebrow, headline, deck,
      steps[]{ numeral, name, sub, when, body }
    },
    designConcepts{
      eyebrow, headline, deck,
      cards[]{ title, body, palette, imageKey, rows[]{ label, value } }
    },
    protocols{
      eyebrow, headline, deck,
      items[]{ title, body }
    },
    planning{
      eyebrow, headline, deck,
      days[]{ numeral, dayLabel, title, body, events[]{ time, body } }
    },
    compatibility{
      eyebrow, headline, viewAllLabel, viewAllHref,
      cards[]{
        rating, name, sub,
        "destinationSlug": destination->slug.current,
        "image": *[_type == "destinationMedia" && slug == ^.destination->slug.current][0].cardImage{ ..., alt }
      }
    },
    guest{
      eyebrow, headline, deck,
      cells[]{ title, body }
    },
    related{
      eyebrow, headline,
      "articles": articles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} },
      "sidebarDestinations": sidebarDestinations[defined(@->_id)]->{ "label": name, "slug": slug.current },
      "sidebarVenues": sidebarVenues[defined(@->_id)]->{ "label": name, "slug": slug.current, "regionSlug": region->slug.current },
      "sidebarCultures": sidebarCultures[defined(@->_id)]->{ "label": name, "slug": slug.current }
    },
    faq{
      eyebrow, headline,
      items[]{ question, answer }
    },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    "media": media->{
      cardImage{ ..., alt },
      heroImage{ ..., alt },
      designConcepts[]{ key, image{ ..., alt } }
    },
    "translations": *[_type == "translation.metadata" && references(^._id)][0]
      .translations[].value->{ language, "slug": slug.current },
    ${SEO_PROJECTION}
  }
`;

/** `{language, slug}` of every culture doc — generateStaticParams + sitemap. */
export const cultureParamsQuery = groq`
  *[_type == "culture" && defined(slug.current) && defined(language)]{
    language,
    "slug": slug.current,
    "metadataId": *[_type == "translation.metadata" && references(^._id)][0]._id
  }
`;

type Fact = { label?: string; value?: string; sub?: string };

export type Culture = {
  id?: string;
  name?: string;
  slug?: string;
  intro?: string;
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  factStrip?: Fact[];
  overview?: {
    sideEyebrow?: string;
    sideNote?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    pull?: string;
    signatureName?: string;
    signatureRole?: string;
  };
  ceremonyArc?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    steps?: Array<{
      numeral?: string;
      name?: string;
      sub?: string;
      when?: string;
      body?: string;
    }>;
  };
  designConcepts?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    cards?: Array<{
      title?: string;
      body?: string;
      palette?: string[];
      imageKey?: string;
      rows?: Array<{ label?: string; value?: string }>;
    }>;
  };
  protocols?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    items?: Array<{ title?: string; body?: string }>;
  };
  planning?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    days?: Array<{
      numeral?: string;
      dayLabel?: string;
      title?: string;
      body?: string;
      events?: Array<{ time?: string; body?: string }>;
    }>;
  };
  compatibility?: {
    eyebrow?: string;
    headline?: string;
    viewAllLabel?: string;
    viewAllHref?: string;
    cards?: Array<{
      rating?: number;
      name?: string;
      sub?: string;
      destinationSlug?: string;
      image?: SanityImage;
    }>;
  };
  guest?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    cells?: Array<{ title?: string; body?: string }>;
  };
  related?: {
    eyebrow?: string;
    headline?: string;
    articles?: JournalArticleCard[];
    sidebarDestinations?: Array<{ label?: string; slug?: string }>;
    sidebarVenues?: Array<{
      label?: string;
      slug?: string;
      regionSlug?: string;
    }>;
    sidebarCultures?: Array<{ label?: string; slug?: string }>;
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
  media?: CultureMedia | null;
  translations?: Array<{ language?: Locale; slug?: string }>;
  seo?: SeoFields;
};

export type CultureMedia = {
  cardImage?: SanityImage;
  heroImage?: SanityImage;
  designConcepts?: Array<{ key?: string; image?: SanityImage }>;
};

export type CultureParams = {
  language: Locale;
  slug: string;
  metadataId?: string | null;
};

export function getCulture(locale: string, slug: string) {
  // No English fallback on purpose — see the query doc comment.
  return client.fetch<Culture | null>(cultureQuery, { locale, slug });
}

export function getCultureParams() {
  return client.fetch<CultureParams[]>(cultureParamsQuery);
}
