import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { AboutPage } from "@/sanity/queries/about";

type AboutManifestoProps = {
  manifesto: NonNullable<AboutPage["manifesto"]>;
};

export function AboutManifesto({ manifesto }: AboutManifestoProps) {
  const tenets = manifesto.tenets ?? [];

  return (
    <section className="bg-olive px-6 py-[160px] text-ivory md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <RevealOnScroll className="mb-20 grid grid-cols-1 items-end gap-12 border-b border-[rgba(212,205,184,0.3)] pb-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            {manifesto.label ? (
              <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
                {manifesto.label}
              </span>
            ) : null}
            {manifesto.headline ? (
              <h2 className="m-0 font-serif font-light text-[clamp(48px,7vw,88px)] leading-[0.96] text-ivory">
                {renderHeadline(manifesto.headline, "gold")}
              </h2>
            ) : null}
          </div>
          {manifesto.intro ? (
            <p className="m-0 max-w-[44ch] font-serif italic text-[clamp(17px,1.7vw,20px)] leading-[1.55] text-cine-sage">
              {manifesto.intro}
            </p>
          ) : null}
        </RevealOnScroll>

        {tenets.length > 0 ? (
          <RevealOnScroll className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {tenets.map((tenet, i) => (
              <div
                key={i}
                className="border-t border-[rgba(212,186,140,0.4)] pt-9"
              >
                <span className="mb-[18px] block font-serif text-[18px] italic text-cine-gold">
                  № {String(i + 1).padStart(2, "0")}
                </span>
                {tenet.title ? (
                  <h3 className="m-0 mb-[18px] font-serif text-[clamp(24px,2.2vw,30px)] font-normal italic leading-[1.1] text-ivory">
                    {tenet.title}
                  </h3>
                ) : null}
                {tenet.body ? (
                  <p className="m-0 text-[14px] leading-[1.7] text-cine-sage">
                    {tenet.body}
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
