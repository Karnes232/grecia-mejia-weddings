import { DiamondDivider } from "@/components/_shared/DiamondDivider";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

type IntroSideProps = {
  eyebrow?: string;
};

export function IntroSide({ eyebrow }: IntroSideProps) {
  return (
    <RevealOnScroll className="md:sticky md:top-[120px] pt-3.5">
      {eyebrow ? (
        <span className="mb-6 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
          {eyebrow}
        </span>
      ) : null}
      <DiamondDivider width={80} className="text-gold" />
    </RevealOnScroll>
  );
}
