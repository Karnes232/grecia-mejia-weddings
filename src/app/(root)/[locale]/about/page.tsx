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
import { getAboutPage, getAboutPageMedia } from "@/sanity/queries/about";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [page, media] = await Promise.all([
    getAboutPage(locale),
    getAboutPageMedia(),
  ]);

  const hero = page?.hero;

  return (
    <>
      {hero?.headline ? (
        <AboutHero hero={hero} image={media?.hero?.image} />
      ) : null}

      {page?.story?.headline ? (
        <AboutStory story={page.story} figureImage={media?.storyFigure?.image} />
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
        <AboutContact contact={page.contact} />
      ) : null}
    </>
  );
}
