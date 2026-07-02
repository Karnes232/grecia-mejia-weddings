/**
 * Shared types for the Journal article seed. Each article lives in its own file
 * under `articles/` and implements `buildBody(locale)` with the `body.ts`
 * helpers; the per-locale doc fields (title/excerpt/kicker/lede/faqs/bleedQuote)
 * live in `byLocale`.
 */

import { type Locale } from "../../../i18n/routing";

import type { BleedQuoteCopy, FaqCopy } from "./body";

export type ArticleLocaleCopy = {
  /** May use *word* for one italic accent (hero renders the accent). */
  title: string;
  excerpt: string;
  /** Second eyebrow half after the category. */
  kicker?: string;
  /** Opening lede paragraph — also the article body's first block. */
  lede: string;
  /** FAQ accordion + FAQPage schema. */
  faqs: FaqCopy[];
  /** Optional cinematic full-bleed quote after the body. */
  bleedQuote?: BleedQuoteCopy;
};

export type ArticleSeed = {
  canonicalSlug: string;
  categorySlug: string;
  relatedDestinationSlug: string;
  relatedCultureSlug?: string;
  relatedVenueSlug?: string;
  readMinutes: number;
  publishedAt: string;
  featured: boolean;
  /** 3 canonical slugs from the other eight articles. */
  relatedArticles: string[];
  byLocale: Record<Locale, ArticleLocaleCopy>;
  /** Builds the rich Portable Text body for one locale. */
  buildBody: (locale: Locale) => Record<string, unknown>[];
};
