import Image from "next/image";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Service } from "@/sanity/queries/service";

type ServiceAudienceProps = {
  audience: NonNullable<Service["audience"]>;
  image: NonNullable<Service["media"]>["audienceImage"];
};

export function ServiceAudience({ audience, image }: ServiceAudienceProps) {
  const url = image?.asset
    ? urlFor(image).width(900).height(1125).fit("crop").auto("format").url()
    : null;
  const items = audience.items ?? [];

  return (
    <section className="bg-cream px-6 py-[130px] md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 md:grid-cols-[1.4fr_1fr]">
        <RevealOnScroll>
          {audience.eyebrow ? (
            <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {audience.eyebrow}
            </span>
          ) : null}
          {audience.headline ? (
            <h2 className="m-0 mb-9 font-serif font-light text-[clamp(40px,5.5vw,68px)] leading-[0.98] text-ink">
              {renderHeadline(audience.headline, "olive")}
            </h2>
          ) : null}
          <ul className="m-0 list-none p-0">
            {items.map((item, i) => (
              <li key={i} className="flex gap-4 border-t border-rule py-5">
                <span aria-hidden className="mt-1 text-[12px] text-gold">
                  ◇
                </span>
                <span className="text-[15px] leading-[1.7] text-muted">
                  {item.title ? (
                    <strong className="mr-1.5 font-serif text-[17px] not-italic text-ink">
                      {item.title}.
                    </strong>
                  ) : null}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </RevealOnScroll>

        {url ? (
          <RevealOnScroll className="relative aspect-[4/5] overflow-hidden bg-sand">
            <Image
              src={url}
              alt={image?.alt ?? ""}
              fill
              sizes="(min-width:768px) 33vw, 100vw"
              className="object-cover"
            />
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
