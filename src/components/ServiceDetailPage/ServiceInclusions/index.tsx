import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Service } from "@/sanity/queries/service";

type ServiceInclusionsProps = {
  inclusions: NonNullable<Service["inclusions"]>;
};

export function ServiceInclusions({ inclusions }: ServiceInclusionsProps) {
  const items = inclusions.items ?? [];

  return (
    <section className="bg-cream px-6 py-[130px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-14 flex flex-col items-start justify-between gap-8 border-b border-olive pb-6 md:flex-row md:items-end">
          <div>
            {inclusions.eyebrow ? (
              <span className="mb-3 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {inclusions.eyebrow}
              </span>
            ) : null}
            {inclusions.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(40px,5.5vw,72px)] leading-[0.96] text-ink">
                {renderHeadline(inclusions.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {inclusions.deck ? (
            <p className="max-w-[42ch] font-serif text-[17px] italic leading-[1.55] text-muted">
              {inclusions.deck}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div key={i} className="border-t border-rule pt-6">
              {item.title ? (
                <h4 className="m-0 mb-3 font-serif text-[21px] italic font-normal text-ink">
                  {item.title}
                </h4>
              ) : null}
              {item.body ? (
                <p className="m-0 text-[14px] leading-[1.7] text-muted">
                  {item.body}
                </p>
              ) : null}
            </div>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
