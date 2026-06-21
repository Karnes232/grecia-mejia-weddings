import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { Portfolio } from "@/sanity/queries/portfolio";

type CaseStudyQuoteProps = {
  quote: NonNullable<Portfolio["quote"]>;
  image: NonNullable<Portfolio["media"]>["quoteImage"];
};

export function CaseStudyQuote({ quote, image }: CaseStudyQuoteProps) {
  const url = image?.asset
    ? urlFor(image).width(2000).height(1100).fit("crop").auto("format").url()
    : null;

  return (
    <section className="relative isolate flex min-h-[60vh] items-center justify-center overflow-hidden bg-cine-bg px-6 py-[140px] text-center md:px-14">
      {url ? (
        <Image
          src={url}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
      ) : null}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] bg-[rgba(13,15,10,0.45)]"
      />
      <div className="relative z-[2] mx-auto max-w-[900px] text-ivory">
        {quote.quote ? (
          <p className="m-0 font-serif text-[clamp(26px,3.4vw,40px)] font-light italic leading-[1.4]">
            {quote.quote}
          </p>
        ) : null}
        {quote.cite ? (
          <cite className="mt-8 block text-[10px] uppercase not-italic tracking-[0.32em] text-cine-gold">
            {quote.cite}
          </cite>
        ) : null}
      </div>
    </section>
  );
}
