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
  JournalArticleCard,
} from "@/sanity/queries/journal";

type Props = {
  articles?: JournalArticleCard[];
  destination?: ArticleDestinationRef | null;
  venue?: ArticleVenueRef | null;
  culture?: ArticleCultureRef | null;
};

const ASIDE_LINK =
  "flex items-center justify-between gap-3 border-b border-rule py-2.5 text-[13px] text-ink no-underline transition-colors hover:text-olive";

export function ArticleRelatedWriting({
  articles,
  destination,
  venue,
  culture,
}: Props) {
  const t = useTranslations("journalDetail");
  const list = articles ?? [];

  return (
    <section className="bg-ivory px-6 py-[100px] md:px-14">
      <RevealOnScroll className="mx-auto mb-12 max-w-[1240px] border-b border-olive pb-6">
        <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
          {t("keepReading")}
        </span>
        <h2 className="m-0 font-serif text-[clamp(36px,4.5vw,56px)] font-light leading-[0.98] text-ink">
          {renderHeadline(t("relatedWriting"), "olive")}
        </h2>
      </RevealOnScroll>

      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {list.map((a) =>
            a.slug ? (
              <Link
                key={a.id}
                href={{ pathname: "/journal/[slug]", params: { slug: a.slug } }}
                className="group grid grid-cols-[140px_1fr] gap-4 text-inherit no-underline"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {a.image?.asset ? (
                    <Image
                      src={urlFor(a.image)
                        .width(280)
                        .height(210)
                        .fit("crop")
                        .auto("format")
                        .url()}
                      alt={a.image?.alt ?? a.title ?? ""}
                      fill
                      sizes="140px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null}
                </div>
                <div>
                  {a.category?.title ? (
                    <span className="mb-1.5 block text-[9px] uppercase tracking-[0.26em] text-gold">
                      {[a.category.title, a.kicker].filter(Boolean).join(" · ")}
                    </span>
                  ) : null}
                  <h4 className="m-0 mb-1.5 font-serif text-[19px] italic leading-[1.15] text-ink transition-colors group-hover:text-olive">
                    {a.title?.replace(/[*~]/g, "")}
                  </h4>
                  {a.excerpt ? (
                    <p className="m-0 line-clamp-2 text-[13px] leading-[1.55] text-muted">
                      {a.excerpt}
                    </p>
                  ) : null}
                </div>
              </Link>
            ) : null,
          )}
        </div>

        <aside className="flex flex-col gap-8">
          {destination?.slug && destination.name ? (
            <div>
              <h4 className="mb-2 font-serif text-base italic text-ink">
                {t("relatedDestinations")}
              </h4>
              <Link
                href={{
                  pathname: "/destinations/[destination]",
                  params: { destination: destination.slug },
                }}
                className={ASIDE_LINK}
              >
                {destination.name} <span aria-hidden className="text-gold">→</span>
              </Link>
              <Link href="/destinations" className={ASIDE_LINK}>
                {t("allDestinations")} <span aria-hidden className="text-gold">→</span>
              </Link>
            </div>
          ) : null}

          {venue?.slug && venue.region && venue.name ? (
            <div>
              <h4 className="mb-2 font-serif text-base italic text-ink">
                {t("relatedVenues")}
              </h4>
              <Link
                href={{
                  pathname: "/venues/[region]/[venue]",
                  params: { region: venue.region, venue: venue.slug },
                }}
                className={ASIDE_LINK}
              >
                {venue.name} <span aria-hidden className="text-gold">→</span>
              </Link>
              <Link href="/venues" className={ASIDE_LINK}>
                {t("allVenues")} <span aria-hidden className="text-gold">→</span>
              </Link>
            </div>
          ) : null}

          {culture?.slug && culture.name ? (
            <div>
              <h4 className="mb-2 font-serif text-base italic text-ink">
                {t("relatedTraditions")}
              </h4>
              <Link
                href={{
                  pathname: "/multicultural-weddings/[culture]",
                  params: { culture: culture.slug },
                }}
                className={ASIDE_LINK}
              >
                {culture.name} <span aria-hidden className="text-gold">→</span>
              </Link>
              <Link href="/multicultural-weddings" className={ASIDE_LINK}>
                {t("allTraditions")} <span aria-hidden className="text-gold">→</span>
              </Link>
            </div>
          ) : null}

          <div>
            <h4 className="mb-2 font-serif text-base italic text-ink">
              {t("relatedServices")}
            </h4>
            <Link href="/contact" className={ASIDE_LINK}>
              {t("destinationPlanning")} <span aria-hidden className="text-gold">→</span>
            </Link>
            <Link href="/contact" className={ASIDE_LINK}>
              {t("weddingWeekendDesign")} <span aria-hidden className="text-gold">→</span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
