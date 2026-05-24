import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";

type SpotlightBodyProps = {
  eyebrow?: string;
  scriptAccent?: string;
  headline?: string;
  deck?: string;
  body?: string;
  facts?: Array<{ label?: string; value?: string }>;
  ctaLabel?: string;
  ctaHref?: string;
};

export function SpotlightBody({
  eyebrow,
  scriptAccent,
  headline,
  deck,
  body,
  facts,
  ctaLabel,
  ctaHref,
}: SpotlightBodyProps) {
  return (
    <div>
      {eyebrow && (
        <p className="mb-3.5 text-[10px] uppercase tracking-wide-eyebrow text-gold">
          {eyebrow}
        </p>
      )}

      <h3 className="m-0 mb-6 font-serif font-light text-[88px] leading-[0.96] tracking-[-0.012em] text-ink">
        {scriptAccent && (
          <span
            className="mb-[-6px] block font-script text-olive leading-[0.85]"
            style={{ fontSize: "clamp(72px, 8vw, 96px)" }}
          >
            {scriptAccent}
          </span>
        )}
        {headline ? renderHeadline(headline, "olive") : null}
      </h3>

      {deck && (
        <p className="mb-7 font-serif italic text-[22px] leading-[1.5] text-[#3d3a30]">
          {deck}
        </p>
      )}

      {body ? (
        <p className="mb-4 text-[15px] leading-[1.75] text-ink last:mb-0">
          {body}
        </p>
      ) : null}

      {facts?.length ? (
        <dl className="my-8 grid grid-cols-2 gap-x-8 gap-y-4 border-y border-rule py-6">
          {facts.map((fact, i) => (
            <div key={i}>
              <dt className="mb-1 text-[10px] uppercase tracking-wide-eyebrow text-muted">
                {fact.label}
              </dt>
              <dd className="m-0 font-serif italic text-[18px] text-ink">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {ctaLabel && ctaHref ? (
        <CTAButton href={ctaHref} variant="primary">
          {ctaLabel}
        </CTAButton>
      ) : null}
    </div>
  );
}
