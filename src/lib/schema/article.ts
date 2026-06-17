/**
 * schema.org JSON-LD builders for Journal articles (BlogPosting + FAQPage +
 * BreadcrumbList), per `.claude/seo-strategy.md`. Emit each as a separate
 * `<JsonLd>` tag. Builders are pure — the caller resolves image URLs + absolute
 * page URLs and passes plain values in.
 */

import type { PortableTextBlock } from "@portabletext/types";

import { BRAND_NAME, SITE_URL } from "@/lib/seo/siteUrl";

/** Flatten Portable Text to plain text (for FAQ answers in JSON-LD). */
export function portableTextToPlain(
  blocks: PortableTextBlock[] | undefined,
): string {
  if (!blocks?.length) return "";
  return blocks
    .filter((b) => (b as { _type?: string })._type === "block")
    .map((b) =>
      ((b as { children?: Array<{ text?: string }> }).children ?? [])
        .map((c) => c.text ?? "")
        .join(""),
    )
    .join("\n\n")
    .trim();
}

type BlogPostingArgs = {
  url: string;
  headline: string;
  description?: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  locale: string;
};

export function blogPostingSchema({
  url,
  headline,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  locale,
}: BlogPostingArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline,
    ...(description ? { description } : {}),
    ...(imageUrl ? { image: imageUrl } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified ? { dateModified } : {}),
    inLanguage: locale,
    author: {
      "@type": "Person",
      name: authorName || "Grecia Mejía",
      url: `${SITE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
  };
}

export function faqPageSchema(
  faqs: Array<{ question?: string; answer?: PortableTextBlock[] }> | undefined,
) {
  const items = (faqs ?? [])
    .filter((f) => f.question)
    .map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: portableTextToPlain(f.answer),
      },
    }));
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items,
  };
}

export function breadcrumbListSchema(
  crumbs: Array<{ name: string; url?: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.url ? { item: c.url } : {}),
    })),
  };
}
