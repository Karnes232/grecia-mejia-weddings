import Image from "next/image";
import { useTranslations } from "next-intl";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { JournalArticleCard } from "@/sanity/queries/journal";

/**
 * "From the journal" — a reverse-reference block showing articles that link to
 * the current pillar page (destination / culture / venue). Rendered only when
 * articles exist. Mirrors the editorial card grid.
 */
export function FromJournal({
  articles,
  tone = "cream",
}: {
  articles?: JournalArticleCard[];
  tone?: "cream" | "ivory";
}) {
  const t = useTranslations("journalDetail");
  const list = (articles ?? []).slice(0, 3);
  if (!list.length) return null;

  return (
    <section
      className={`${tone === "cream" ? "bg-cream" : "bg-ivory"} px-6 py-[100px] md:px-14`}
    >
      <RevealOnScroll className="mx-auto mb-12 flex max-w-[1400px] items-end justify-between gap-8 border-b border-olive pb-6">
        <div>
          <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
            {t("fromTheJournal")}
          </span>
          <h2 className="m-0 font-serif text-[clamp(36px,4.5vw,56px)] font-light leading-[0.98] text-ink">
            {renderHeadline(t("fromJournalHeadline"), "olive")}
          </h2>
        </div>
        <Link
          href="/journal"
          className="hidden whitespace-nowrap border-b border-gold pb-1 text-[10px] uppercase tracking-[0.3em] text-olive no-underline sm:inline-block"
        >
          {t("allArticles")} →
        </Link>
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3">
        {list.map((a) =>
          a.slug ? (
            <Link
              key={a.id}
              href={{ pathname: "/journal/[slug]", params: { slug: a.slug } }}
              className="group block text-inherit no-underline"
            >
              <div className="relative mb-5 aspect-[3/2] overflow-hidden">
                {a.category?.title ? (
                  <span className="absolute left-3.5 top-3.5 z-[1] bg-[rgba(245,240,230,0.94)] px-3 py-1.5 text-[8px] uppercase tracking-[0.3em] text-olive">
                    {a.category.title}
                  </span>
                ) : null}
                {a.image?.asset ? (
                  <Image
                    src={urlFor(a.image)
                      .width(800)
                      .height(540)
                      .fit("crop")
                      .auto("format")
                      .url()}
                    alt={a.image?.alt ?? a.title ?? ""}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.05]"
                  />
                ) : null}
              </div>
              {a.category?.title ? (
                <span className="mb-2.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                  {[a.category.title, a.kicker].filter(Boolean).join(" · ")}
                </span>
              ) : null}
              <h3 className="m-0 mb-3 font-serif text-[26px] font-normal italic leading-[1.12] text-ink transition-colors group-hover:text-olive">
                {a.title?.replace(/[*~]/g, "")}
              </h3>
              {a.excerpt ? (
                <p className="m-0 line-clamp-2 text-sm leading-[1.65] text-muted">
                  {a.excerpt}
                </p>
              ) : null}
            </Link>
          ) : null,
        )}
      </RevealOnScroll>
    </section>
  );
}
