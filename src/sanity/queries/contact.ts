import { groq } from "next-sanity";

import { client } from "../lib/client";
import { fetchWithFallback } from "./layout";
import { SEO_PROJECTION, type SeoFields } from "./seo";

export const contactPageQuery = groq`
  *[_type == "contactPage" && language == $locale][0]{
    hero{
      eyebrow,
      scriptOverline,
      headline,
      deck
    },
    form{
      eyebrow,
      headline,
      intro,
      legendAboutYou,
      legendAboutWedding,
      legendInYourWords,
      submitLabel,
      submitNote,
      successMessage
    },
    rail{
      cards[]{
        variant,
        script,
        heading,
        body,
        rows[]{ label, value, href }
      }
    },
    process{
      label,
      headline,
      intro,
      steps[]{ number, title, body }
    },
    faq{
      label,
      headline,
      items[]{ question, answer }
    },
    ${SEO_PROJECTION}
  }
`;

export const contactPageMediaQuery = groq`
  *[_id == "contactPageMedia"][0]{
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

export type ContactRailCard = {
  variant?: "feature" | "rows" | "note";
  script?: string;
  heading?: string;
  body?: string;
  rows?: Array<{ label?: string; value?: string; href?: string }>;
};

export type ContactPage = {
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
  };
  form?: {
    eyebrow?: string;
    headline?: string;
    intro?: string;
    legendAboutYou?: string;
    legendAboutWedding?: string;
    legendInYourWords?: string;
    submitLabel?: string;
    submitNote?: string;
    successMessage?: string;
  };
  rail?: {
    cards?: ContactRailCard[];
  };
  process?: {
    label?: string;
    headline?: string;
    intro?: string;
    steps?: Array<{ number?: string; title?: string; body?: string }>;
  };
  faq?: {
    label?: string;
    headline?: string;
    items?: Array<{ question?: string; answer?: string }>;
  };
  seo?: SeoFields;
};

export type ContactPageMedia = {
  hero?: { image?: SanityImage };
};

export function getContactPage(locale: string) {
  return fetchWithFallback<ContactPage>(contactPageQuery, locale);
}

export function getContactPageMedia() {
  return client.fetch<ContactPageMedia | null>(contactPageMediaQuery);
}
