import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

import type { HomePage } from "@/sanity/queries/home";

import { GhostLink } from "../_shared/GhostLink";
import { renderHeadline } from "@/components/_shared/renderHeadline";

type FeatureBodyProps = {
  data: NonNullable<HomePage["featuredWedding"]>;
  eyebrow?: string;
};

function getBlockPlainText(block: PortableTextBlock): string {
  if (!Array.isArray(block.children)) return "";
  return block.children
    .map((c) =>
      typeof (c as { text?: unknown }).text === "string"
        ? (c as { text: string }).text
        : "",
    )
    .join("");
}

const restComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 last:mb-0 text-[16px] leading-[1.75] text-ink/90">
        {children}
      </p>
    ),
  },
};

export function FeatureBody({
  data,
  eyebrow = "Featured wedding",
}: FeatureBodyProps) {
  const body = data.body ?? [];
  const [deck, lede, ...rest] = body;

  const deckText = deck ? getBlockPlainText(deck) : "";
  const ledeText = lede ? getBlockPlainText(lede) : "";
  const ledeFirst = ledeText.charAt(0);
  const ledeRest = ledeText.slice(1);

  return (
    <div>
      {eyebrow ? (
        <span className="mb-4 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
          {eyebrow}
        </span>
      ) : null}

      {data.headline ? (
        <h2 className="m-0 mb-7 font-serif font-light text-[clamp(48px,6vw,80px)] leading-[0.96] tracking-[-0.005em] text-ink">
          {renderHeadline(data.headline, "olive")}
        </h2>
      ) : null}

      {deckText ? (
        <p className="mb-7 font-serif italic text-[clamp(19px,2vw,22px)] leading-[1.5] text-ink/80">
          {deckText}
        </p>
      ) : null}

      {ledeText ? (
        <p className="mb-6 text-[16px] leading-[1.75] text-ink/90">
          <span className="float-left pr-3.5 pt-2.5 font-serif italic text-[88px] leading-[0.75] text-olive">
            {ledeFirst}
          </span>
          {ledeRest}
        </p>
      ) : null}

      {rest.length > 0 ? (
        <PortableText value={rest} components={restComponents} />
      ) : null}

      {data.quote ? (
        <blockquote className="my-8 border-y border-gold py-6 px-0 font-serif italic text-[clamp(22px,2.4vw,28px)] leading-[1.35] text-olive">
          “{data.quote}”
        </blockquote>
      ) : null}

      {data.facts && data.facts.length > 0 ? (
        <dl className="mb-0 mt-8 grid grid-cols-[auto_1fr] gap-x-9 gap-y-3.5">
          {data.facts.map((f, i) =>
            f.label || f.value ? (
              <div key={`${f.label ?? "fact"}-${i}`} className="contents">
                <dt className="text-[10px] uppercase tracking-eyebrow text-muted self-center">
                  {f.label}
                </dt>
                <dd className="m-0 font-serif italic text-[18px] leading-[1.2] text-ink">
                  {f.value}
                </dd>
              </div>
            ) : null,
          )}
        </dl>
      ) : null}

      {data.linkHref && data.linkLabel ? (
        <div className="mt-10">
          <GhostLink href={data.linkHref}>{data.linkLabel} →</GhostLink>
        </div>
      ) : null}
    </div>
  );
}
