import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import {
  AboutHero,
  AboutStory,
  AboutManifesto,
  AboutTimeline,
  AboutNumbers,
  AboutTeam,
  AboutPress,
  AboutContact,
} from "@/components/AboutPage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import { getAboutPage, getAboutPageMedia } from "@/sanity/queries/about";
import { getSiteSettings } from "@/sanity/queries/layout";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const [page, media] = await Promise.all([
    getAboutPage(locale),
    getAboutPageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: page?.seo,
    fallbackTitle: "About",
    fallbackDescription: page?.hero?.deck,
    href: "/about",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
  });
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media, siteSettings] = await Promise.all([
    getAboutPage(locale),
    getAboutPageMedia(),
    getSiteSettings(locale),
  ]);

  const hero = page?.hero;
  const ld = parseStructuredData(page?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}
      {hero?.headline ? (
        <AboutHero hero={hero} image={media?.hero?.image} />
      ) : null}

      {page?.story?.headline ? (
        <AboutStory
          story={page.story}
          figureImage={media?.storyFigure?.image}
        />
      ) : null}

      {page?.manifesto?.headline ? (
        <AboutManifesto manifesto={page.manifesto} />
      ) : null}

      {page?.timeline?.headline ? (
        <AboutTimeline timeline={page.timeline} />
      ) : null}

      {page?.numbers?.stats?.length ? (
        <AboutNumbers numbers={page.numbers} />
      ) : null}

      {page?.team?.headline ? (
        <AboutTeam team={page.team} images={media?.team?.images} />
      ) : null}

      {page?.press?.headline ? <AboutPress press={page.press} /> : null}

      {page?.contact?.headline ? (
        <AboutContact
          contact={page.contact}
          siteContact={siteSettings?.contact}
        />
      ) : null}
    </>
  );
}
