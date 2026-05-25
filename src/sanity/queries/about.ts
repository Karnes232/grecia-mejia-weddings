import type { PortableTextBlock } from "@portabletext/types";
import { groq } from "next-sanity";

import { client } from "../lib/client";
import { fetchWithFallback } from "./layout";

export const aboutPageQuery = groq`
  *[_type == "aboutPage" && language == $locale][0]{
    hero{
      eyebrow,
      scriptOverline,
      headline,
      deck,
      signedName,
      signedRole,
      captionLeft,
      captionRight
    },
    story{
      sideLabel,
      sideNote,
      headline,
      body,
      figureCaption{ emphasis, note },
      signoffName,
      signoffPlace
    },
    manifesto{
      label,
      headline,
      intro,
      tenets[]{ title, body }
    },
    timeline{
      label,
      headline,
      intro,
      items[]{ year, title, place, body }
    },
    numbers{
      stats[]{ value, label }
    },
    team{
      label,
      headline,
      intro,
      members[]{ role, name, bio, imageKey }
    },
    press{
      label,
      headline,
      publications,
      awards{
        heading,
        items[]{ year, title, sub, publication }
      }
    },
    contact{
      label,
      scriptLine,
      headline,
      body,
      cta{ label, href },
      details[]{ label, value, href }
    }
  }
`;

export const aboutPageMediaQuery = groq`
  *[_id == "aboutPageMedia"][0]{
    hero{
      image{ ..., alt }
    },
    storyFigure{
      image{ ..., alt }
    },
    team{
      images[]{ key, "image": { ..., alt } }
    }
  }
`;

export type SanityImage = {
  asset?: { _ref: string; _type: "reference" };
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type AboutPage = {
  hero?: {
    eyebrow?: string;
    scriptOverline?: string;
    headline?: string;
    deck?: string;
    signedName?: string;
    signedRole?: string;
    captionLeft?: string;
    captionRight?: string;
  };
  story?: {
    sideLabel?: string;
    sideNote?: string;
    headline?: string;
    body?: PortableTextBlock[];
    figureCaption?: { emphasis?: string; note?: string };
    signoffName?: string;
    signoffPlace?: string;
  };
  manifesto?: {
    label?: string;
    headline?: string;
    intro?: string;
    tenets?: Array<{ title?: string; body?: string }>;
  };
  timeline?: {
    label?: string;
    headline?: string;
    intro?: string;
    items?: Array<{
      year?: string;
      title?: string;
      place?: string;
      body?: string;
    }>;
  };
  numbers?: {
    stats?: Array<{ value?: string; label?: string }>;
  };
  team?: {
    label?: string;
    headline?: string;
    intro?: string;
    members?: Array<{
      role?: string;
      name?: string;
      bio?: string;
      imageKey?: string;
    }>;
  };
  press?: {
    label?: string;
    headline?: string;
    publications?: string[];
    awards?: {
      heading?: string;
      items?: Array<{
        year?: string;
        title?: string;
        sub?: string;
        publication?: string;
      }>;
    };
  };
  contact?: {
    label?: string;
    scriptLine?: string;
    headline?: string;
    body?: string;
    cta?: { label?: string; href?: string };
    details?: Array<{ label?: string; value?: string; href?: string }>;
  };
};

export type AboutPageMedia = {
  hero?: { image?: SanityImage };
  storyFigure?: { image?: SanityImage };
  team?: { images?: Array<{ key?: string; image?: SanityImage }> };
};

export function getAboutPage(locale: string) {
  return fetchWithFallback<AboutPage>(aboutPageQuery, locale);
}

export function getAboutPageMedia() {
  return client.fetch<AboutPageMedia | null>(aboutPageMediaQuery);
}
