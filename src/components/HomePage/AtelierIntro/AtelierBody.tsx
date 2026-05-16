import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

type AtelierBodyProps = {
  body: PortableTextBlock[];
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
      <p className="mb-5 last:mb-0 text-[18px] leading-[1.7] text-ink">
        {children}
      </p>
    ),
  },
};

export function AtelierBody({ body }: AtelierBodyProps) {
  if (!body?.length) return null;

  const [lede, ...rest] = body;
  const ledeText = getBlockPlainText(lede);
  const firstChar = ledeText.charAt(0);
  const ledeRemainder = ledeText.slice(1);

  return (
    <>
      {ledeText ? (
        <p className="mb-5 font-serif italic text-[clamp(20px,2.4vw,24px)] leading-[1.55] text-ink">
          <span className="float-left pr-3.5 pt-2.5 font-serif italic text-[88px] leading-[0.75] text-olive">
            {firstChar}
          </span>
          {ledeRemainder}
        </p>
      ) : null}
      {rest.length > 0 ? (
        <PortableText value={rest} components={restComponents} />
      ) : null}
    </>
  );
}
