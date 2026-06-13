import { getTranslations } from "next-intl/server";

import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Venue, VenueMedia } from "@/sanity/queries/venue";

import { ArticleCard } from "./ArticleCard";
import { RelatedSidebar } from "./RelatedSidebar";

type VenueRelatedProps = {
  related: NonNullable<Venue["related"]>;
  images: VenueMedia["relatedArticles"];
};

export async function VenueRelated({ related, images }: VenueRelatedProps) {
  const t = await getTranslations("venuesPage");
  const map = keyedImageMap(images);
  const articles = related.articles ?? [];

  const groups = [
    { heading: t("otherVenues"), items: related.sidebarVenues },
    { heading: t("compatibleTraditions"), items: related.sidebarCultures },
    { heading: t("relatedDestinations"), items: related.sidebarDestinations },
  ].filter((g) => g.items?.length);

  if (!articles.length && !groups.length) return null;

  return (
    <section className="bg-cream px-6 py-[120px] md:px-14">
      <RevealOnScroll
        as="div"
        className="mx-auto mb-12 max-w-[1400px] border-b border-olive pb-6"
      >
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

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr]"
      >
        <div>
          {articles.map((article, i) => (
            <ArticleCard
              key={i}
              category={article.category}
              title={article.title}
              body={article.body}
              href={article.href}
              image={article.imageKey ? map.get(article.imageKey) : undefined}
            />
          ))}
        </div>
        {groups.length ? <RelatedSidebar groups={groups} /> : null}
      </RevealOnScroll>
    </section>
  );
}
