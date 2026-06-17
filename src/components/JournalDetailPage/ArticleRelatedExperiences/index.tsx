import Image from "next/image";
import { useTranslations } from "next-intl";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type {
  ArticleCultureRef,
  ArticleDestinationRef,
  ArticleVenueRef,
} from "@/sanity/queries/journal";

type Card = {
  kind: string;
  name: string;
  imageUrl: string | null;
  alt: string;
  link: string;
  href: React.ComponentProps<typeof Link>["href"];
};

const img = (image: { asset?: unknown; alt?: string } | undefined) =>
  image?.asset
    ? urlFor(image as Parameters<typeof urlFor>[0])
        .width(700)
        .height(875)
        .fit("crop")
        .auto("format")
        .url()
    : null;

type Props = {
  destination?: ArticleDestinationRef | null;
  venue?: ArticleVenueRef | null;
  culture?: ArticleCultureRef | null;
};

export function ArticleRelatedExperiences({ destination, venue, culture }: Props) {
  const t = useTranslations("journalDetail");

  const cards: Card[] = [];
  if (destination?.slug && destination.name) {
    cards.push({
      kind: t("destination"),
      name: destination.name,
      imageUrl: img(destination.image),
      alt: destination.image?.alt ?? destination.name,
      link: t("exploreDestination"),
      href: {
        pathname: "/destinations/[destination]",
        params: { destination: destination.slug },
      },
    });
  }
  if (venue?.slug && venue.region && venue.name) {
    cards.push({
      kind: t("venue"),
      name: venue.name,
      imageUrl: img(venue.image),
      alt: venue.image?.alt ?? venue.name,
      link: t("readVenueBrief"),
      href: {
        pathname: "/venues/[region]/[venue]",
        params: { region: venue.region, venue: venue.slug },
      },
    });
  }
  if (culture?.slug && culture.name) {
    cards.push({
      kind: t("tradition"),
      name: culture.name,
      imageUrl: img(culture.image),
      alt: culture.image?.alt ?? culture.name,
      link: t("exploreTradition"),
      href: {
        pathname: "/multicultural-weddings/[culture]",
        params: { culture: culture.slug },
      },
    });
  }

  if (!cards.length) return null;

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <RevealOnScroll className="mx-auto mb-14 max-w-[1400px] border-b border-olive pb-6">
        <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
          {t("continueJourney")}
        </span>
        <h2 className="m-0 font-serif text-[clamp(40px,5vw,64px)] font-light leading-[0.96] text-ink">
          {renderHeadline(t("relatedExperiences"), "olive")}
        </h2>
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 md:grid-cols-3">
        {cards.map((c, i) => (
          <Link key={i} href={c.href} className="group block text-inherit no-underline">
            <div className="relative mb-5 aspect-[4/5] overflow-hidden">
              <span className="absolute left-[18px] top-[18px] z-[1] bg-[rgba(28,30,24,0.78)] px-3.5 py-[7px] text-[9px] uppercase tracking-[0.3em] text-gold-soft">
                {c.kind}
              </span>
              {c.imageUrl ? (
                <Image
                  src={c.imageUrl}
                  alt={c.alt}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1300ms] ease-silk group-hover:scale-[1.05]"
                />
              ) : null}
            </div>
            <h3 className="m-0 mb-3 font-serif text-[30px] italic leading-[1.06] text-ink transition-colors group-hover:text-olive">
              {c.name}
            </h3>
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-olive">
              {c.link} <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </RevealOnScroll>
    </section>
  );
}
