import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";

import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { urlFor } from "@/sanity/lib/image";
import type { Portfolio } from "@/sanity/queries/portfolio";

type CaseStudyDesignProps = {
  design: NonNullable<Portfolio["design"]>;
  image: NonNullable<Portfolio["media"]>["designImage"];
};

const bodyComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 text-[16px] leading-[1.75] text-ink last:mb-0">
        {children}
      </p>
    ),
  },
};

export function CaseStudyDesign({ design, image }: CaseStudyDesignProps) {
  const url = image?.asset
    ? urlFor(image).width(900).height(1125).fit("crop").auto("format").url()
    : null;
  const palette = design.palette ?? [];
  const blocks = design.body ?? [];

  return (
    <section className="bg-ivory px-6 py-[130px] md:px-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        <RevealOnScroll className="relative aspect-[4/5] overflow-hidden bg-sand">
          {url ? (
            <Image
              src={url}
              alt={image?.alt ?? ""}
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll>
          {design.eyebrow ? (
            <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {design.eyebrow}
            </span>
          ) : null}
          {design.headline ? (
            <h2 className="m-0 mb-7 font-serif font-light text-[clamp(40px,5vw,64px)] leading-[0.98] text-ink">
              {renderHeadline(design.headline, "olive")}
            </h2>
          ) : null}
          {blocks.length ? (
            <PortableText value={blocks} components={bodyComponents} />
          ) : null}

          {palette.length ? (
            <div className="mt-9 flex flex-wrap gap-4">
              {palette.map((swatch, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <span
                    className="block h-12 w-12 rounded-full border border-rule"
                    style={{ background: swatch.hex ?? "transparent" }}
                  />
                  {swatch.name ? (
                    <span className="text-[9px] uppercase tracking-wide-eyebrow text-muted">
                      {swatch.name}
                    </span>
                  ) : null}
                </div>
              ))}
            </div>
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
