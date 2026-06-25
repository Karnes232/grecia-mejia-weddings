import { getTranslations } from "next-intl/server";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { PortfolioPage } from "@/sanity/queries/portfolio";

import { CaseStudyCard } from "../CaseStudyCard";
import { FilterableGrid } from "./FilterableGrid";

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
  const items = cards.map((card, i) => ({
    key: card.id ?? card.slug ?? String(i),
    tags: card.filterTags ?? [],
    node: <CaseStudyCard card={card} />,
  }));

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

        <FilterableGrid
          items={items}
          facets={facets}
          filterLabel={grid.filterLabel ?? t("browse")}
          allLabel={t("all")}
          total={cards.length}
        />
      </div>
    </section>
  );
}
