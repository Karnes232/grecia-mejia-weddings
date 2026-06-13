import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { PressPage } from "@/sanity/queries/press";

type PressQuotesProps = {
  quotes: NonNullable<PressPage["quotes"]>;
};

export function PressQuotes({ quotes }: PressQuotesProps) {
  const items = quotes.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="bg-olive px-6 py-[140px] text-ivory md:px-14">
      <RevealOnScroll
        as="div"
        className="mx-auto mb-20 max-w-[1100px] text-center"
      >
        {quotes.label ? (
          <span className="mb-6 block text-[10px] uppercase tracking-wide-eyebrow text-[var(--color-cine-sage)]">
            {quotes.label}
          </span>
        ) : null}
        {quotes.headline ? (
          <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,80px)] leading-none text-ivory">
            {renderHeadline(quotes.headline, "gold")}
          </h2>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll
        as="div"
        className="mx-auto grid max-w-[1300px] grid-cols-1 gap-y-16 gap-x-20 md:grid-cols-2"
      >
        {items.map((item, i) => (
          <figure key={i} className="relative m-0 pt-12">
            <span
              aria-hidden
              className="pointer-events-none absolute -left-1.5 -top-2.5 font-serif text-[120px] leading-none text-[var(--color-cine-gold)] opacity-50"
            >
              &ldquo;
            </span>
            {item.quote ? (
              <blockquote className="m-0 mb-6 font-serif text-[clamp(22px,2.6vw,28px)] font-light italic leading-[1.45] text-ivory">
                {item.quote}
              </blockquote>
            ) : null}
            {item.publication || item.year ? (
              <figcaption className="flex items-baseline gap-3.5 text-[10px] uppercase tracking-[0.32em] text-[var(--color-cine-sage)]">
                {item.publication ? (
                  <span className="font-serif text-[20px] normal-case italic tracking-normal text-[var(--color-cine-gold)]">
                    {item.publication}
                  </span>
                ) : null}
                {item.publication && item.year ? <span>·</span> : null}
                {item.year ? <span>{item.year}</span> : null}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </RevealOnScroll>
    </section>
  );
}
