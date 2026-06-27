import { getTranslations } from "next-intl/server";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination } from "@/sanity/queries/destination";

import { TypeCard } from "./TypeCard";

type DestinationTypesProps = {
  weddingTypes: NonNullable<Destination["weddingTypes"]>;
  locale: string;
};

export async function DestinationTypes({
  weddingTypes,
  locale,
}: DestinationTypesProps) {
  const t = await getTranslations({
    locale,
    namespace: "destinationDetail.weddingTypes",
  });
  const items = weddingTypes.items ?? [];

  return (
    <section className="bg-olive px-6 py-[120px] text-ivory md:px-14">
      <RevealOnScroll className="mx-auto mb-14 grid max-w-[1400px] grid-cols-1 items-end gap-12 border-b border-[rgba(212,205,184,0.3)] pb-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          {weddingTypes.eyebrow ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
              {weddingTypes.eyebrow}
            </span>
          ) : null}
          {weddingTypes.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,8vw,82px)] leading-[0.96] text-ivory">
              {renderHeadline(weddingTypes.headline, "gold")}
            </h2>
          ) : null}
        </div>
        {weddingTypes.deck ? (
          <p className="m-0 max-w-[42ch] font-serif text-[18px] italic leading-[1.55] text-cine-sage">
            {weddingTypes.deck}
          </p>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-px border border-[rgba(212,205,184,0.18)] bg-[rgba(212,205,184,0.18)] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <TypeCard
            key={i}
            name={item.name}
            body={item.body}
            href={
              item.slug
                ? {
                    pathname: "/multicultural-weddings/[culture]",
                    params: { culture: item.slug },
                  }
                : undefined
            }
            discoverLabel={t("discover")}
          />
        ))}
      </RevealOnScroll>
    </section>
  );
}
