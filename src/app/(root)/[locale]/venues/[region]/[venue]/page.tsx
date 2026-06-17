import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { FromJournal } from "@/components/_shared/FromJournal";
import { JourneyCta } from "@/components/_shared/JourneyCta";
import { stripAccentTokens } from "@/components/_shared/stripAccentTokens";
import {
  type RouteParamsTranslationsMap,
  SetRouteParamsTranslations,
} from "@/components/Layout/_shared/RouteParamsTranslations";
import { JsonLd } from "@/components/ui/JsonLd";
import {
  VenueCapacity,
  VenueCompatibility,
  VenueFacts,
  VenueFaq,
  VenueGallery,
  VenueHeader,
  VenueHotels,
  VenueLogistics,
  VenueOverview,
  VenuePhotography,
  VenuePortfolio,
  VenueRelated,
} from "@/components/VenueDetailPage";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import { getArticlesReferencing } from "@/sanity/queries/journal";
import { getVenue, getVenueParams, type Venue } from "@/sanity/queries/venue";

type VenuePageProps = {
  params: Promise<{ locale: string; region: string; venue: string }>;
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

/**
 * Both segments are translated per locale, so each sibling translation carries
 * its own `{region, venue}` slug pair — used for hreflang/canonical and the
 * language switcher.
 */
function localizedParamsFrom(
  translations: Venue["translations"],
): RouteParamsTranslationsMap {
  const map: RouteParamsTranslationsMap = {};
  for (const t of translations ?? []) {
    if (t?.language && t.region && t.venue) {
      map[t.language] = { region: t.region, venue: t.venue };
    }
  }
  return map;
}

export async function generateMetadata({
  params,
}: VenuePageProps): Promise<Metadata> {
  const { locale, region, venue } = await params;
  const doc = await getVenue(locale, region, venue);

  if (!doc) return {};

  const localizedParams = localizedParamsFrom(doc.translations);
  const hreflangLocales = Object.keys(localizedParams) as Locale[];
  const heroImage = doc.media?.cardImage ?? doc.media?.mosaic?.[0]?.image;

  return buildMetadata({
    seo: doc.seo,
    fallbackTitle:
      doc.name ?? stripAccentTokens(doc.header?.headline ?? "") ?? venue,
    fallbackDescription: doc.header?.deck,
    href: {
      pathname: "/venues/[region]/[venue]",
      params: { region, venue },
    },
    locale: locale as Locale,
    ogImageUrl: ogFrom(heroImage),
    ogImageAlt: heroImage?.alt,
    localizedParams,
    hreflangLocales: hreflangLocales.length ? hreflangLocales : undefined,
  });
}

export default async function VenuePage({ params }: VenuePageProps) {
  const { locale, region, venue } = await params;
  setRequestLocale(locale);

  const doc = await getVenue(locale, region, venue);

  if (!doc) notFound();

  const media = doc.media;
  const journalArticles = doc.id
    ? await getArticlesReferencing(locale, doc.id)
    : [];
  const ld = parseStructuredData(doc.seo?.structuredData);
  const localizedParams = localizedParamsFrom(doc.translations);

  return (
    <>
      <SetRouteParamsTranslations map={localizedParams} />
      {ld ? <JsonLd data={ld} /> : null}

      <VenueGallery gallery={doc.header?.gallery} images={media?.mosaic} />

      {doc.header?.headline ? <VenueHeader header={doc.header} /> : null}

      {doc.facts?.length ? <VenueFacts facts={doc.facts} /> : null}

      {doc.overview?.headline || doc.overview?.body?.length ? (
        <VenueOverview overview={doc.overview} />
      ) : null}

      {doc.capacity?.meter || doc.capacity?.loves?.items?.length ? (
        <VenueCapacity capacity={doc.capacity} />
      ) : null}

      {doc.compatibility?.items?.length ? (
        <VenueCompatibility compatibility={doc.compatibility} />
      ) : null}

      {doc.logistics?.blocks?.length ? (
        <VenueLogistics logistics={doc.logistics} />
      ) : null}

      {doc.photography?.items?.length ? (
        <VenuePhotography
          photography={doc.photography}
          images={media?.photography}
        />
      ) : null}

      {doc.hotels?.items?.length ? <VenueHotels hotels={doc.hotels} /> : null}

      {doc.portfolio?.items?.length ? (
        <VenuePortfolio portfolio={doc.portfolio} images={media?.portfolio} />
      ) : null}

      {doc.related?.articles?.length ||
      doc.related?.sidebarVenues?.length ||
      doc.related?.sidebarCultures?.length ||
      doc.related?.sidebarDestinations?.length ? (
        <VenueRelated related={doc.related} images={media?.relatedArticles} />
      ) : null}

      {doc.faq?.items?.length ? <VenueFaq faq={doc.faq} /> : null}

      <FromJournal articles={journalArticles} />

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

// Both segments differ per locale, so emit full {locale, region, venue} triples.
export async function generateStaticParams() {
  const rows = await getVenueParams();
  return rows.map(({ language, region, venue }) => ({
    locale: language,
    region,
    venue,
  }));
}
