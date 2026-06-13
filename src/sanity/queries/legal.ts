import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

const LEGAL_PROJECTION = `
  hero{
    eyebrow,
    title,
    titleItalic,
    deck
  },
  meta{
    updated,
    effective,
    appliesTo
  },
  intro,
  helpNote,
  sections[]{
    heading,
    body[]{
      ...,
      markDefs[]{ ... }
    }
  },
  signatureName,
  closing,
  ${SEO_PROJECTION}
`;

export const termsPageQuery = groq`
  *[_type == "termsPage" && language == $locale][0]{
    ${LEGAL_PROJECTION}
  }
`;

export const privacyPageQuery = groq`
  *[_type == "privacyPage" && language == $locale][0]{
    ${LEGAL_PROJECTION}
  }
`;

export type LegalSection = {
  heading?: string;
  body?: PortableTextBlock[];
};

export type LegalPage = {
  hero?: {
    eyebrow?: string;
    title?: string;
    titleItalic?: string;
    deck?: string;
  };
  meta?: {
    updated?: string;
    effective?: string;
    appliesTo?: string;
  };
  intro?: string;
  helpNote?: string;
  sections?: LegalSection[];
  signatureName?: string;
  closing?: string;
  seo?: SeoFields;
};

export function getTermsPage(locale: string) {
  return fetchWithFallback<LegalPage>(termsPageQuery, locale);
}

export function getPrivacyPage(locale: string) {
  return fetchWithFallback<LegalPage>(privacyPageQuery, locale);
}
