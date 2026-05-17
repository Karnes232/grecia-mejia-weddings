import { setRequestLocale } from "next-intl/server";

import {
  AtelierIntro,
  CinematicHero,
  FeaturedWedding,
  Traditions,
  VenuesConsidered,
  WhereWeWork,
} from "@/components/HomePage";
import { getHomePage, getHomePageMedia } from "@/sanity/queries/home";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [home, media] = await Promise.all([
    getHomePage(locale),
    getHomePageMedia(),
  ]);

  const hero = home?.hero;
  const heroImage = media?.hero?.image;

  return (
    <>
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

      {home?.featuredWedding?.headline ? (
        <FeaturedWedding
          data={home.featuredWedding}
          image={media?.featuredWedding}
        />
      ) : null}

      {home?.traditions?.headline ? (
        <Traditions data={home.traditions} locale={locale} />
      ) : null}

      {home?.venuesConsidered?.headline ? (
        <VenuesConsidered data={home.venuesConsidered} />
      ) : null}

      {/* TODO: subsequent sections (Portfolio, Press, Testimonials, CTA). */}
    </>
  );
}
