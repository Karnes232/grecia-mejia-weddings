import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { ArticleDetail } from "@/sanity/queries/journal";

export function ArticleBleedQuote({
  data,
}: {
  data?: ArticleDetail["bleedQuote"];
}) {
  if (!data?.quote) return null;
  const imageUrl = data.image?.asset
    ? urlFor(data.image).width(2000).fit("max").auto("format").url()
    : null;

  return (
    <section className="relative isolate overflow-hidden bg-cine-bg px-6 py-[150px] text-center md:px-14 md:py-[170px]">
      {imageUrl ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageUrl}
            alt={data.image?.alt ?? ""}
            fill
            sizes="100vw"
            className="object-cover opacity-[0.42]"
            style={{ filter: "saturate(0.8)" }}
          />
        </div>
      ) : null}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(13,15,10,0.6) 100%)",
        }}
      />
      <div className="relative z-[2] mx-auto max-w-[920px] text-ivory">
        {data.script ? (
          <span className="mb-[18px] block font-script text-[46px] leading-none text-gold-soft">
            {data.script}
          </span>
        ) : null}
        <p className="m-0 font-serif text-[clamp(30px,4.4vw,46px)] font-light italic leading-[1.3] text-ivory">
          {data.quote}
        </p>
        {data.cite ? (
          <cite className="mt-7 block text-[10px] uppercase not-italic tracking-[0.34em] text-[#d4cdb8]">
            {data.cite}
          </cite>
        ) : null}
      </div>
    </section>
  );
}
