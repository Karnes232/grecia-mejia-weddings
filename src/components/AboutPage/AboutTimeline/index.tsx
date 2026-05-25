import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { AboutPage } from "@/sanity/queries/about";

type AboutTimelineProps = {
  timeline: NonNullable<AboutPage["timeline"]>;
};

export function AboutTimeline({ timeline }: AboutTimelineProps) {
  const items = timeline.items ?? [];

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-20 grid max-w-[1400px] grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          {timeline.label ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {timeline.label}
            </span>
          ) : null}
          {timeline.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(48px,7vw,88px)] leading-[0.96] text-ink">
              {renderHeadline(timeline.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {timeline.intro ? (
          <p className="m-0 max-w-[40ch] font-serif italic text-[clamp(16px,1.6vw,18px)] leading-[1.55] text-[#3d3a30]">
            {timeline.intro}
          </p>
        ) : null}
      </RevealOnScroll>

      {items.length > 0 ? (
        <RevealOnScroll className="relative mx-auto max-w-[1100px]">
          <span
            aria-hidden
            className="pointer-events-none absolute top-3.5 bottom-3.5 left-[72px] w-px bg-gold md:left-[140px]"
          />
          {items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[72px_28px_1fr] py-8 md:grid-cols-[140px_40px_1fr]"
            >
              <span className="font-serif text-[clamp(28px,4vw,36px)] font-light italic leading-none text-olive pt-1">
                {item.year}
              </span>
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute left-0 top-3.5 h-3 w-3 -translate-x-1/2 rounded-full bg-olive shadow-[0_0_0_4px_var(--color-cream),0_0_0_5px_var(--color-gold)]"
                />
              </div>
              <div>
                {item.place ? (
                  <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                    {item.place}
                  </span>
                ) : null}
                {item.title ? (
                  <h4 className="m-0 mb-2.5 font-serif text-[clamp(22px,2.4vw,28px)] font-normal italic leading-[1.1] text-ink">
                    {item.title}
                  </h4>
                ) : null}
                {item.body ? (
                  <p className="m-0 max-w-[54ch] text-[14px] leading-[1.7] text-[#3d3a30]">
                    {item.body}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </RevealOnScroll>
      ) : null}
    </section>
  );
}
