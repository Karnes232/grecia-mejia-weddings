import { getTranslations } from "next-intl/server";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { PortfolioPage } from "@/sanity/queries/portfolio";

import { CaseStudyCard } from "../CaseStudyCard";

type PortfolioGridProps = {
  grid: NonNullable<PortfolioPage["grid"]>;
};

/** Build display facets (tag → count) from the case studies' filterTags. */
function facetsOf(cards: NonNullable<PortfolioPage["grid"]>["caseStudies"]) {
  const counts = new Map<string, number>();
  for (const card of cards ?? []) {
    for (const tag of card.filterTags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return [...counts.entries()].map(([tag, count]) => ({ tag, count }));
}

export async function PortfolioGrid({ grid }: PortfolioGridProps) {
  const t = await getTranslations("portfolioHub");
  const cards = grid.caseStudies ?? [];
  const facets = facetsOf(cards);

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <div className="mx-auto max-w-[1480px]">
        {grid.eyebrow || grid.headline ? (
          <RevealOnScroll className="mb-10 border-b border-olive pb-6">
            {grid.eyebrow ? (
              <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {grid.eyebrow}
              </span>
            ) : null}
            {grid.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,6vw,72px)] leading-[0.96] text-ink">
                {renderHeadline(grid.headline, "olive")}
              </h2>
            ) : null}
          </RevealOnScroll>
        ) : null}

        {facets.length ? (
          <div className="mb-12 flex flex-wrap items-center gap-3">
            <span className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {grid.filterLabel ?? t("browse")}
            </span>
            <span className="rounded-full border border-olive bg-olive px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ivory">
              {t("all")} <span className="ml-1 opacity-70">{cards.length}</span>
            </span>
            {facets.map(({ tag, count }) => (
              <span
                key={tag}
                className="rounded-full border border-rule px-4 py-1.5 text-[11px] uppercase tracking-[0.18em] text-ink"
              >
                {tag} <span className="ml-1 text-muted">{count}</span>
              </span>
            ))}
          </div>
        ) : null}

        <RevealOnScroll className="grid grid-cols-1 gap-6 md:grid-cols-6 lg:grid-cols-12">
          {cards.map((card, i) => (
            <CaseStudyCard key={card.id ?? card.slug ?? i} card={card} />
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
