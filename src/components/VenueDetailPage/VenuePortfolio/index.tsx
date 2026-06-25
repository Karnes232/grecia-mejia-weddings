import Image from "next/image";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { Venue } from "@/sanity/queries/venue";

import { SectionDeck, SectionHead } from "../_shared/SectionHead";

type VenuePortfolioProps = {
  portfolio: NonNullable<Venue["portfolio"]>;
};

const CARD_CLASS = "group block no-underline text-inherit";

export async function VenuePortfolio({ portfolio }: VenuePortfolioProps) {
  const items = portfolio.items ?? [];
  if (items.length === 0) return null;
  const t = await getTranslations("venuesPage");
  const caseStudyLabel = t("caseStudy");

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
          const url = item.image?.asset
            ? urlFor(item.image)
                .width(800)
                .height(1000)
                .fit("crop")
                .auto("format")
                .url()
            : null;

          const inner: ReactNode = (
            <>
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                {url ? (
                  <Image
                    src={url}
                    alt={item.image?.alt ?? item.title ?? ""}
                    fill
                    sizes="(min-width:640px) 31vw, 90vw"
                    className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.04]"
                  />
                ) : null}
              </div>
              <div className="pt-[18px]">
                <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                  {caseStudyLabel}
                </span>
                {item.title ? (
                  <h4 className="m-0 mb-2 font-serif text-[26px] font-normal italic leading-none text-ink transition-colors group-hover:text-olive">
                    {item.title}
                  </h4>
                ) : null}
                {item.meta ? (
                  <p className="m-0 text-[12px] uppercase tracking-[0.24em] text-muted">
                    {item.meta}
                  </p>
                ) : null}
              </div>
            </>
          );

          return item.slug ? (
            <Link
              key={item.slug ?? i}
              href={{ pathname: "/portfolio/[slug]", params: { slug: item.slug } }}
              className={CARD_CLASS}
            >
              {inner}
            </Link>
          ) : (
            <div key={i} className="group">
              {inner}
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
