import type { PortableTextBlock } from "@portabletext/types";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import { stripAccentTokens } from "@/components/_shared/stripAccentTokens";
import {
  type RouteParamsTranslationsMap,
  SetRouteParamsTranslations,
} from "@/components/Layout/_shared/RouteParamsTranslations";
import {
  ServiceAudience,
  ServiceFaq,
  ServiceHero,
  ServiceInclusions,
  ServiceOverview,
  ServiceProcess,
  ServiceRelated,
  ServiceRelatedServices,
} from "@/components/ServiceDetailPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import {
  type Service,
  getService,
  getServiceParams,
} from "@/sanity/queries/service";

type ServicePageProps = {
  params: Promise<{ locale: string; service: string }>;
};

const ogFrom = (
  image: { asset?: unknown; alt?: string } | undefined | null,
): string | undefined =>
  image?.asset
    ? urlFor(image as Parameters<typeof urlFor>[0])
        .width(1200)
        .height(630)
        .fit("crop")
        .auto("format")
        .url()
    : undefined;

function localizedParamsFrom(
  translations: Service["translations"],
): RouteParamsTranslationsMap {
  const map: RouteParamsTranslationsMap = {};
  for (const t of translations ?? []) {
    if (t?.language && t.slug) map[t.language] = { service: t.slug };
  }
  return map;
}

/** Flatten Portable Text to plain text for the FAQPage answer. */
function ptToText(blocks?: PortableTextBlock[]): string {
  return (blocks ?? [])
    .map((b) =>
      Array.isArray((b as { children?: { text?: string }[] }).children)
        ? (b as { children: { text?: string }[] }).children
            .map((c) => c.text ?? "")
            .join("")
        : "",
    )
    .join("\n\n")
    .trim();
}

/** schema.org FAQPage from the service's FAQ, for rich results. */
function faqJsonLd(faq: Service["faq"]) {
  const items = (faq?.items ?? []).filter(
    (i) => i.question && (i.answer?.length ?? 0) > 0,
  );
  if (!items.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.question,
      acceptedAnswer: { "@type": "Answer", text: ptToText(i.answer) },
    })),
  };
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { locale, service } = await params;
  const doc = await getService(locale, service);

  if (!doc) return {};

  const localizedParams = localizedParamsFrom(doc.translations);
  const hreflangLocales = Object.keys(localizedParams) as Locale[];
  const heroImage = doc.media?.heroImage;

  return buildMetadata({
    seo: doc.seo,
    fallbackTitle:
      doc.name ?? stripAccentTokens(doc.hero?.headline ?? "") ?? service,
    fallbackDescription: doc.summary ?? doc.hero?.deck ?? doc.overview?.lede,
    href: { pathname: "/services/[service]", params: { service } },
    locale: locale as Locale,
    ogImageUrl: ogFrom(heroImage),
    ogImageAlt: heroImage?.alt,
    localizedParams,
    hreflangLocales: hreflangLocales.length ? hreflangLocales : undefined,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { locale, service } = await params;
  setRequestLocale(locale);

  const doc = await getService(locale, service);
  if (!doc) notFound();

  const media = doc.media;
  const ld = parseStructuredData(doc.seo?.structuredData);
  const faqLd = faqJsonLd(doc.faq);
  const localizedParams = localizedParamsFrom(doc.translations);

  return (
    <>
      <SetRouteParamsTranslations map={localizedParams} />
      {ld ? <JsonLd data={ld} /> : null}
      {faqLd ? <JsonLd data={faqLd} /> : null}

      {doc.hero?.headline ? (
        <ServiceHero hero={doc.hero} image={media?.heroImage} />
      ) : null}

      {doc.overview?.headline ? (
        <ServiceOverview overview={doc.overview} image={media?.overviewImage} />
      ) : null}

      {doc.inclusions?.items?.length ? (
        <ServiceInclusions inclusions={doc.inclusions} />
      ) : null}

      {doc.process?.steps?.length ? (
        <ServiceProcess process={doc.process} />
      ) : null}

      {doc.audience?.items?.length ? (
        <ServiceAudience audience={doc.audience} image={media?.audienceImage} />
      ) : null}

      {doc.relatedServices?.length ? (
        <ServiceRelatedServices services={doc.relatedServices} />
      ) : null}

      <ServiceRelated related={doc.related} />

      {doc.faq?.items?.length ? <ServiceFaq faq={doc.faq} /> : null}

      {doc.cta?.headline ? (
        <JourneyCta
          data={{
            eyebrow: doc.cta.eyebrow,
            headline: doc.cta.headline,
            body: doc.cta.body,
            cta: {
              label: doc.cta.ctaLabel?.replace(/\s*→\s*$/, ""),
              href: doc.cta.ctaHref,
            },
          }}
        />
      ) : null}
    </>
  );
}

export async function generateStaticParams() {
  const rows = await getServiceParams();
  return rows.map(({ language, slug }) => ({ locale: language, service: slug }));
}
