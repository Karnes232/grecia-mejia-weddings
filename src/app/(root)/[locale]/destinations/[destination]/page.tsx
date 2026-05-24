import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { JourneyCta } from "@/components/_shared/JourneyCta";
import {
  DestinationFacts,
  DestinationFaq,
  DestinationGuest,
  DestinationHero,
  DestinationLogistics,
  DestinationRelated,
  DestinationStory,
  DestinationStyles,
  DestinationTrends,
  DestinationTypes,
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

      {doc.weddingTypes?.items?.length ? (
        <DestinationTypes weddingTypes={doc.weddingTypes} locale={locale} />
      ) : null}

      {doc.logistics?.headline ? (
        <DestinationLogistics logistics={doc.logistics} />
      ) : null}

      {doc.guest?.cards?.length ? (
        <DestinationGuest guest={doc.guest} images={media?.guestCards} />
      ) : null}

      {doc.trends?.items?.length ? (
        <DestinationTrends trends={doc.trends} />
      ) : null}

      {doc.related?.headline ? (
        <DestinationRelated
          related={doc.related}
          images={media?.relatedArticles}
          locale={locale}
        />
      ) : null}

      {doc.faq?.items?.length ? <DestinationFaq faq={doc.faq} /> : null}

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
  const slugs = await getDestinationSlugs();
  return slugs.map((destination) => ({ destination }));
}
