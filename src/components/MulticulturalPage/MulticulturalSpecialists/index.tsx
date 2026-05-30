import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { MulticulturalPage } from "@/sanity/queries/multicultural";

type MulticulturalSpecialistsProps = {
  specialists: NonNullable<MulticulturalPage["specialists"]>;
};

export function MulticulturalSpecialists({
  specialists,
}: MulticulturalSpecialistsProps) {
  const items = specialists.items ?? [];

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <div className="mx-auto max-w-[1300px]">
        <RevealOnScroll className="mb-16 grid grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.4fr_1fr]">
          <div>
            {specialists.eyebrow ? (
              <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {specialists.eyebrow}
              </span>
            ) : null}
            {specialists.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(44px,6vw,74px)] leading-[0.96] text-ink">
                {renderHeadline(specialists.headline, "olive")}
              </h2>
            ) : null}
          </div>
          {specialists.intro ? (
            <p className="m-0 max-w-[40ch] font-serif italic text-[clamp(16px,1.6vw,18px)] leading-[1.55] text-[#3d3a30]">
              {specialists.intro}
            </p>
          ) : null}
        </RevealOnScroll>

        {items.length > 0 ? (
          <RevealOnScroll className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div key={i} className="border-t border-gold pt-6">
                {item.role ? (
                  <span className="mb-2.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                    {item.role}
                  </span>
                ) : null}
                {item.name ? (
                  <h3 className="m-0 mb-3 font-serif text-[24px] font-normal italic leading-[1.1] text-ink">
                    {item.name}
                  </h3>
                ) : null}
                {item.body ? (
                  <p className="m-0 text-[13px] leading-[1.65] text-muted">
                    {item.body}
                  </p>
                ) : null}
              </div>
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
