import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { getTranslations } from "next-intl/server";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { Link } from "@/i18n/navigation";
import type { VenueRegion } from "@/sanity/queries/venueRegion";

type RegionGuideProps = {
  guide: NonNullable<VenueRegion["guide"]>;
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 max-w-[60ch] text-[15px] leading-[1.7] text-[#3d3a30] last:mb-0">
        {children}
      </p>
    ),
  },
};

const LINK_CLASS =
  "flex items-baseline justify-between border-b border-transparent py-1.5 font-serif text-[17px] italic text-ink no-underline transition-colors hover:border-gold hover:text-olive";

export async function RegionGuide({ guide }: RegionGuideProps) {
  const t = await getTranslations("venuesPage");

  const groups = [
    { heading: t("subRegions"), items: guide.subRegions },
    { heading: t("related"), items: guide.related },
  ].filter((g) => g.items?.length);

  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
        <RevealOnScroll as="div">
          {guide.sideLabel ? (
            <span className="mb-4 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {guide.sideLabel}
            </span>
          ) : null}
          {guide.headline ? (
            <h3 className="m-0 mb-8 whitespace-pre-line font-serif font-light text-[clamp(36px,5vw,56px)] leading-[1] text-ink">
              {renderHeadline(guide.headline, "olive")}
            </h3>
          ) : null}
          {guide.body?.length ? (
            <PortableText value={guide.body} components={bodyComponents} />
          ) : null}
        </RevealOnScroll>

        {groups.length ? (
          <RevealOnScroll
            as="div"
            className="border border-rule bg-cream p-8 lg:sticky lg:top-[120px] lg:self-start"
          >
            {groups.map((group) => (
              <div key={group.heading} className="mt-8 first:mt-0">
                <h4 className="mb-4 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
                  {group.heading}
                </h4>
                <ul className="grid list-none gap-2 p-0">
                  {(group.items ?? []).map((item, i) => (
                    <li key={i}>
                      {item.href ? (
                        <Link href={item.href as never} className={LINK_CLASS}>
                          {item.label}
                          <span aria-hidden className="text-[14px] text-gold">
                            →
                          </span>
                        </Link>
                      ) : (
                        <span className={LINK_CLASS}>
                          {item.label}
                          <span aria-hidden className="text-[14px] text-gold">
                            →
                          </span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
