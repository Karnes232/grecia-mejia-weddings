import { CTAButton } from "@/components/_shared/CTAButton";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import type { AboutPage } from "@/sanity/queries/about";

type ContactBodyProps = {
  contact: NonNullable<AboutPage["contact"]>;
};

export function ContactBody({ contact }: ContactBodyProps) {
  const { label, scriptLine, headline, body, cta } = contact;

  return (
    <div>
      {label ? (
        <span className="mb-[18px] block text-[10px] uppercase tracking-wide-eyebrow text-cine-gold">
          {label}
        </span>
      ) : null}

      {scriptLine || headline ? (
        <h2 className="m-0 mb-6 font-serif font-light text-[clamp(56px,8vw,84px)] leading-[0.96] text-ivory">
          {scriptLine ? (
            <span className="-mb-1.5 block font-script text-[clamp(64px,8vw,96px)] leading-[0.85] text-cine-gold">
              {scriptLine}
            </span>
          ) : null}
          {headline ? renderHeadline(headline, "gold") : null}
        </h2>
      ) : null}

      {body ? (
        <p className="m-0 mb-9 max-w-[44ch] font-serif italic text-[clamp(18px,1.9vw,22px)] leading-[1.55] text-cine-sage">
          {body}
        </p>
      ) : null}

      {cta?.label && cta?.href ? (
        <CTAButton href={cta.href} tone="ivory">
          {cta.label}
        </CTAButton>
      ) : null}
    </div>
  );
}
