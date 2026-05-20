import { renderHeadline } from "@/components/_shared/renderHeadline";

type RegionHeadProps = {
  eyebrow?: string;
  name?: string;
  intro?: string;
};

export function RegionHead({ eyebrow, name, intro }: RegionHeadProps) {
  return (
    <div className="mb-12 grid grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.4fr_1fr]">
      <div>
        {eyebrow ? (
          <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {eyebrow}
          </span>
        ) : null}
        {name ? (
          <h3 className="m-0 font-serif font-light text-[clamp(44px,6vw,72px)] leading-[0.95] text-ink">
            {renderHeadline(name, "olive")}
          </h3>
        ) : null}
      </div>
      {intro ? (
        <p className="m-0 max-w-[42ch] font-serif italic text-[18px] leading-[1.55] text-[#3d3a30]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
