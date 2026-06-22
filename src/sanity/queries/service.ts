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

// Shared card projection — hub index + "related services" cards.
const SERVICE_CARD_PROJECTION = `
  "id": _id,
  name,
  "slug": slug.current,
  number,
  summary
`;

/**
 * Service detail page (`/services/[service]`).
 *
 * Slugs are translated per locale, so media joins by reference and the query
 * returns a `translations` slug map for hreflang + the language switcher. No
 * English fallback — a localized URL only exists when its localized doc does.
 * Mirrors `portfolio.ts`.
 */
export const serviceQuery = groq`
  *[_type == "service" && language == $locale && slug.current == $slug][0]{
    "id": _id,
    name,
    "slug": slug.current,
    number,
    summary,
    hero,
    overview{ eyebrow, headline, lede, body, captionLine1, captionLine2 },
    inclusions{ eyebrow, headline, deck, items[]{ title, body } },
    process{ eyebrow, headline, deck, steps[]{ numeral, title, when, body } },
    audience{ eyebrow, headline, items[]{ title, body } },
    "relatedServices": relatedServices[defined(@->_id)]->{ ${SERVICE_CARD_PROJECTION} },
    "related": {
      "articles": relatedArticles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} },
      "destinations": relatedDestinations[defined(@->_id)]->{
        name,
        "slug": slug.current,
        "image": *[_type == "destinationMedia" && slug == ^.slug.current][0].cardImage{ ..., alt }
      },
      "cultures": relatedCultures[defined(@->_id)]->{ name, "slug": slug.current }
    },
    faq{ eyebrow, headline, items[]{ question, answer } },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    "media": media->{
      heroImage{ ..., alt },
      overviewImage{ ..., alt },
      audienceImage{ ..., alt }
    },
    "translations": *[_type == "translation.metadata" && references(^._id)][0]
      .translations[].value->{ language, "slug": slug.current },
    ${SEO_PROJECTION}
  }
`;

/** `{language, slug, metadataId}` of every service — static params + sitemap. */
export const serviceParamsQuery = groq`
  *[_type == "service" && defined(slug.current) && defined(language)]{
    language,
    "slug": slug.current,
    "metadataId": *[_type == "translation.metadata" && references(^._id)][0]._id
  }
`;

// ── Hub ──────────────────────────────────────────────────────────────────────
export const servicePageQuery = groq`
  *[_type == "servicePage" && language == $locale][0]{
    hero{
      eyebrow, scriptOverline, headline, deck,
      captionLeft, captionCenter, captionRight
    },
    intro{ sideEyebrow, sideNote, headline, lede, body },
    index{
      eyebrow, headline,
      "services": services[defined(@->_id)]->{ ${SERVICE_CARD_PROJECTION} }
    },
    approach{ eyebrow, headline, deck, movements[]{ title, body } },
    related{
      eyebrow, headline,
      "articles": articles[defined(@->_id)]->{ ${ARTICLE_CARD_PROJECTION} }
    },
    cta{ eyebrow, headline, body, ctaLabel, ctaHref },
    ${SEO_PROJECTION}
  }
`;

export const servicePageMediaQuery = groq`
  *[_id == "servicePageMedia"][0]{
    hero{ image{ ..., alt } }
  }
`;

// ── Types ────────────────────────────────────────────────────────────────────
export type ServiceCard = {
  id?: string;
  name?: string;
  slug?: string;
  number?: string;
  summary?: string;
};

type DestinationRef = {
  name?: string;
  slug?: string;
  image?: SanityImage;
};

type CtaFields = {
  eyebrow?: string;
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type Service = {
  id?: string;
  name?: string;
  slug?: string;
  number?: string;
  summary?: string;
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    captionLeft?: string;
    captionCenter?: string;
    captionRight?: string;
  };
  overview?: {
    eyebrow?: string;
    headline?: string;
    lede?: string;
    body?: PortableTextBlock[];
    captionLine1?: string;
    captionLine2?: string;
  };
  inclusions?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    items?: Array<{ title?: string; body?: string }>;
  };
  process?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    steps?: Array<{
      numeral?: string;
      title?: string;
      when?: string;
      body?: string;
    }>;
  };
  audience?: {
    eyebrow?: string;
    headline?: string;
    items?: Array<{ title?: string; body?: string }>;
  };
  relatedServices?: ServiceCard[];
  related?: {
    articles?: JournalArticleCard[];
    destinations?: DestinationRef[];
    cultures?: Array<{ name?: string; slug?: string }>;
  };
  faq?: {
    eyebrow?: string;
    headline?: string;
    items?: Array<{ question?: string; answer?: PortableTextBlock[] }>;
  };
  cta?: CtaFields;
  media?: {
    heroImage?: SanityImage;
    overviewImage?: SanityImage;
    audienceImage?: SanityImage;
  } | null;
  translations?: Array<{ language?: Locale; slug?: string }>;
  seo?: SeoFields;
};

export type ServicePage = {
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
  index?: {
    eyebrow?: string;
    headline?: string;
    services?: ServiceCard[];
  };
  approach?: {
    eyebrow?: string;
    headline?: string;
    deck?: string;
    movements?: Array<{ title?: string; body?: string }>;
  };
  related?: {
    eyebrow?: string;
    headline?: string;
    articles?: JournalArticleCard[];
  };
  cta?: CtaFields;
  seo?: SeoFields;
};

export type ServicePageMedia = {
  hero?: { image?: SanityImage };
};

export type ServiceParams = {
  language: Locale;
  slug: string;
  metadataId?: string | null;
};

// ── Fetchers ─────────────────────────────────────────────────────────────────
export function getService(locale: string, slug: string) {
  // No English fallback on purpose — see the query doc comment.
  return client.fetch<Service | null>(serviceQuery, { locale, slug });
}

export function getServiceParams() {
  return client.fetch<ServiceParams[]>(serviceParamsQuery);
}

export function getServicePage(locale: string) {
  return fetchWithFallback<ServicePage>(servicePageQuery, locale);
}

export function getServicePageMedia() {
  return client.fetch<ServicePageMedia | null>(servicePageMediaQuery);
}
