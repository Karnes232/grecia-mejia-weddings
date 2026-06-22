import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Service } from "@/sanity/queries/service";

type ServiceOverviewProps = {
  overview: NonNullable<Service["overview"]>;
  image: NonNullable<Service["media"]>["overviewImage"];
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[17px] leading-[1.75] text-ink last:mb-0">
        {children}
      </p>
    ),
  },
};

export function ServiceOverview({ overview, image }: ServiceOverviewProps) {
  const url = image?.asset
    ? urlFor(image).width(900).height(1125).fit("crop").auto("format").url()
    : null;
  const blocks = overview.body ?? [];

  return (
    <section className="bg-ivory px-6 py-[130px] md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-16 md:grid-cols-[1.5fr_1fr]">
        <RevealOnScroll>
          {overview.eyebrow ? (
            <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {overview.eyebrow}
            </span>
          ) : null}
          {overview.headline ? (
            <h2 className="m-0 mb-8 whitespace-pre-line font-serif font-light text-[clamp(44px,6vw,76px)] leading-[0.98] text-ink">
              {renderHeadline(overview.headline, "olive")}
            </h2>
          ) : null}
          {overview.lede ? (
            <p className="mb-6 max-w-[62ch] font-serif text-[22px] italic leading-[1.55] text-ink">
              {overview.lede}
            </p>
          ) : null}
          {blocks.length ? (
            <PortableText value={blocks} components={bodyComponents} />
          ) : null}
        </RevealOnScroll>

        {url ? (
          <RevealOnScroll>
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <Image
                src={url}
                alt={image?.alt ?? ""}
                fill
                sizes="(min-width:768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            {overview.captionLine1 || overview.captionLine2 ? (
              <div className="mt-3 flex flex-col gap-0.5 text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {overview.captionLine1 ? <span>{overview.captionLine1}</span> : null}
                {overview.captionLine2 ? <span>{overview.captionLine2}</span> : null}
              </div>
            ) : null}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
