import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Venue, VenueMedia } from "@/sanity/queries/venue";

import { SectionDeck, SectionHead } from "../_shared/SectionHead";

type VenuePortfolioProps = {
  portfolio: NonNullable<Venue["portfolio"]>;
  images: VenueMedia["portfolio"];
};

export async function VenuePortfolio({ portfolio, images }: VenuePortfolioProps) {
  const items = portfolio.items ?? [];
  if (items.length === 0) return null;
  const t = await getTranslations("venuesPage");
  const map = keyedImageMap(images);

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <SectionHead
        eyebrow={portfolio.eyebrow}
        headline={portfolio.headline}
        aside={
          portfolio.viewAllLabel ? (
            portfolio.viewAllHref ? (
              <a
                href={portfolio.viewAllHref}
                className="self-end border-b border-gold pb-1 text-[11px] uppercase tracking-[0.32em] text-olive"
              >
                {portfolio.viewAllLabel} →
              </a>
            ) : (
              <SectionDeck>{portfolio.viewAllLabel}</SectionDeck>
            )
          ) : null
        }
      />

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-3"
      >
        {items.map((item, i) => {
          const image = item.imageKey ? map.get(item.imageKey) : undefined;
          const url = image?.asset
            ? urlFor(image).width(800).height(1000).fit("crop").auto("format").url()
            : null;
          return (
            <div key={i} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                {url ? (
                  <Image
                    src={url}
                    alt={image?.alt ?? ""}
                    fill
                    sizes="(min-width:640px) 31vw, 90vw"
                    className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.04]"
                  />
                ) : null}
              </div>
              <div className="pt-[18px]">
                <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                  {t("caseStudy")}
                </span>
                {item.title ? (
                  <h4 className="m-0 mb-2 font-serif text-[26px] font-normal italic leading-none text-ink">
                    {item.title}
                  </h4>
                ) : null}
                {item.meta ? (
                  <p className="m-0 text-[12px] uppercase tracking-[0.24em] text-muted">
                    {item.meta}
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
