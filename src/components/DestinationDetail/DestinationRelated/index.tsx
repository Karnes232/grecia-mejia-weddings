import { getTranslations } from "next-intl/server";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination } from "@/sanity/queries/destination";

import { ArticleCard } from "./ArticleCard";
import { RelatedSidebar } from "./RelatedSidebar";

type DestinationRelatedProps = {
  related: NonNullable<Destination["related"]>;
  locale: string;
};

export async function DestinationRelated({
  related,
  locale,
}: DestinationRelatedProps) {
  const t = await getTranslations({
    locale,
    namespace: "destinationDetail.related",
  });
  const articles = related.articles ?? [];

  const groups = [
    { heading: t("venues"), items: related.sidebarVenues },
    { heading: t("cultures"), items: related.sidebarCultures },
    { heading: t("services"), items: related.sidebarServices },
  ].filter((g) => g.items?.length);

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <RevealOnScroll className="mx-auto mb-12 max-w-[1400px] border-b border-olive pb-6">
        {related.eyebrow ? (
          <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {related.eyebrow}
          </span>
        ) : null}
        {related.headline ? (
          <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,72px)] leading-[0.96] text-ink">
            {renderHeadline(related.headline, "olive")}
          </h2>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]">
        <div>
          {articles.map((article, i) => (
            <ArticleCard
              key={article.id ?? i}
              category={article.category?.title}
              title={article.title}
              excerpt={article.excerpt}
              slug={article.slug}
              image={article.image}
            />
          ))}
        </div>
        {groups.length ? <RelatedSidebar groups={groups} /> : null}
      </RevealOnScroll>
    </section>
  );
}
