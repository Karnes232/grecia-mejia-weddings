import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import {
  DestinationFacts,
  DestinationHero,
  DestinationStory,
  DestinationStyles,
  DestinationVenues,
} from "@/components/DestinationDetail";
import {
  getDestination,
  getDestinationMedia,
  getDestinationSlugs,
} from "@/sanity/queries/destination";

type DestinationPageProps = {
  params: Promise<{ locale: string; destination: string }>;
};

export default async function DestinationPage({
  params,
}: DestinationPageProps) {
  const { locale, destination } = await params;
  setRequestLocale(locale);

  const [doc, media] = await Promise.all([
    getDestination(locale, destination),
    getDestinationMedia(destination),
  ]);

  if (!doc) notFound();

  return (
    <>
      {doc.hero?.headline ? (
        <DestinationHero hero={doc.hero} image={media?.heroImage} />
      ) : null}

      {doc.facts?.length ? <DestinationFacts facts={doc.facts} /> : null}

      {doc.story?.headline ? <DestinationStory story={doc.story} /> : null}

      {doc.styles?.items?.length ? (
        <DestinationStyles styles={doc.styles} images={media?.styles} />
      ) : null}

      {doc.venues?.cards?.length ? (
        <DestinationVenues
          venues={doc.venues}
          images={media?.venueCards}
          locale={locale}
        />
      ) : null}

      {/* Remaining sections (weddingTypes, logistics, …) — later passes. */}
    </>
  );
}

export async function generateStaticParams() {
  const slugs = await getDestinationSlugs();
  return slugs.map((destination) => ({ destination }));
}
