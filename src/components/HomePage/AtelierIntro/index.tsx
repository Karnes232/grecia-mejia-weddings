import type { HomePage } from "@/sanity/queries/home";

import { DiamondDivider } from "../_shared/DiamondDivider";
import { RevealOnScroll } from "../_shared/RevealOnScroll";
import { renderHeadline } from "../_shared/renderHeadline";

import { AtelierBody } from "./AtelierBody";
import { Signature } from "./Signature";

type AtelierIntroProps = {
  atelier: NonNullable<HomePage["atelier"]>;
  role?: string;
};

export function AtelierIntro({
  atelier,
  role = "Founder · Lead Curator",
}: AtelierIntroProps) {
  return (
    <section className="border-t border-rule bg-ivory px-6 py-[120px] pb-[140px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-20 md:grid-cols-[280px_1fr]">
        <RevealOnScroll className="md:sticky md:top-[120px] pt-3.5">
          {atelier.eyebrow ? (
            <span className="mb-6 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {atelier.eyebrow}
            </span>
          ) : null}
          <DiamondDivider width={80} className="text-gold" />
        </RevealOnScroll>

        <RevealOnScroll className="max-w-[62ch]">
          {atelier.headline ? (
            <h2 className="m-0 mb-10 font-serif font-light text-[clamp(48px,7vw,78px)] leading-[0.98] tracking-[-0.008em] text-ink">
              {renderHeadline(atelier.headline, "olive")}
            </h2>
          ) : null}

          {atelier.body ? <AtelierBody body={atelier.body} /> : null}

          {atelier.signature ? (
            <Signature name={atelier.signature} role={role} />
          ) : null}
        </RevealOnScroll>
      </div>
    </section>
  );
}
