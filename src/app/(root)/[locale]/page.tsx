import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import {
  AtelierIntro,
  CinematicHero,
  FeaturedWedding,
  JourneyCta,
  RecentWeddings,
  Testimonials,
  Traditions,
  VenuesConsidered,
  WhereWeWork,
} from "@/components/HomePage";
import { JsonLd } from "@/components/ui/JsonLd";
import { type Locale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { parseStructuredData } from "@/lib/seo/structuredData";
import { urlFor } from "@/sanity/lib/image";
import { getHomePage, getHomePageMedia } from "@/sanity/queries/home";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const [home, media] = await Promise.all([
    getHomePage(locale),
    getHomePageMedia(),
  ]);

  const heroImage = media?.hero?.image;
  const ogImageUrl = heroImage?.asset
    ? urlFor(heroImage).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return buildMetadata({
    seo: home?.seo,
    fallbackTitle: "Grecia Mejía Weddings — Multicultural Destination Weddings",
    fallbackDescription:
      home?.hero?.subheadline ??
      "Curating timeless multicultural destination weddings across Punta Cana, the Caribbean and the world.",
    href: "/",
    locale: locale as Locale,
    ogImageUrl,
    ogImageAlt: heroImage?.alt,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [home, media] = await Promise.all([
    getHomePage(locale),
    getHomePageMedia(),
  ]);

  const hero = home?.hero;
  const heroImage = media?.hero?.image;
  const ld = parseStructuredData(home?.seo?.structuredData);

  return (
    <>
      {ld ? <JsonLd data={ld} /> : null}

      {hero?.headline ? (
        <CinematicHero
          hero={hero}
          image={heroImage}
          marqueeDestinations={media?.marqueeDestinations ?? []}
        />
      ) : (
        <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-14">
          <p className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
            Hero pending content · {locale}
          </p>
          <h1 className="mt-4 font-serif text-[88px] leading-[0.95] tracking-[-0.012em] text-ink">
            Add a hero in{" "}
            <span className="italic text-olive">Sanity Studio</span>.
          </h1>
        </div>
      )}

      {home?.atelier?.headline ? <AtelierIntro atelier={home.atelier} /> : null}

      {home?.whereWeWork?.headline ? (
        <WhereWeWork data={home.whereWeWork} />
      ) : null}

      {home?.featuredWedding?.caseStudy ? (
        <FeaturedWedding data={home.featuredWedding} />
      ) : null}

      {home?.traditions?.headline ? (
        <Traditions data={home.traditions} locale={locale} />
      ) : null}

      {home?.venuesConsidered?.headline ? (
        <VenuesConsidered data={home.venuesConsidered} />
      ) : null}

      {home?.recentWeddings?.headline ? (
        <RecentWeddings
          data={home.recentWeddings}
          images={media?.recentWeddings?.images ?? []}
        />
      ) : null}

      {home?.testimonials?.items?.length ? (
        <Testimonials data={home.testimonials} />
      ) : null}

      {home?.journeyCta?.headline ? (
        <JourneyCta data={home.journeyCta} />
      ) : null}

      {/* TODO: Press strip. */}
    </>
  );
}
