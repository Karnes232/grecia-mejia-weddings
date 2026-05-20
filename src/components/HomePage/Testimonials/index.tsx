import type { HomePage } from "@/sanity/queries/home";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

type TestimonialsProps = {
  data: NonNullable<HomePage["testimonials"]>;
};

export function Testimonials({ data }: TestimonialsProps) {
  const items = data.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 md:grid-cols-2">
        {items.map((t, i) => (
          <figure
            key={i}
            className="relative bg-cream px-10 pt-14 pb-12 md:px-12"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -top-3 left-9 select-none font-serif text-[160px] leading-none text-cine-gold/50"
            >
              &ldquo;
            </span>
            {t.quote ? (
              <blockquote className="relative m-0 mt-6 mb-8 font-serif font-light italic text-[clamp(20px,1.9vw,24px)] leading-[1.45] text-ink">
                {t.quote}
              </blockquote>
            ) : null}
            {t.attribution ? (
              <span className="block font-script text-[42px] leading-none text-olive">
                {t.attribution}
              </span>
            ) : null}
            {t.caption ? (
              <figcaption className="mt-2 block text-[10px] uppercase tracking-[0.32em] text-muted not-italic">
                {t.caption}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </RevealOnScroll>
    </section>
  );
}
