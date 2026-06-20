type Tone = "gold" | "olive";

const TONE_CLASS: Record<Tone, string> = {
  gold: "italic text-cine-gold",
  olive: "italic text-olive",
};

const SCRIPT_CLASS =
  "font-script text-[1.15em] leading-[0.85] text-olive align-[-0.06em]";

const TOKEN_RE = /(\*[^*]+\*|~[^~]+~)/g;

/** Plain card title — drop the *italic* / ~script~ accent markers. */
export function plainHeadline(text?: string) {
  return (text ?? "").replace(/[*~]/g, "");
}

export function renderHeadline(text: string, tone: Tone = "gold") {
  const parts = text.split(TOKEN_RE);
  const emClass = TONE_CLASS[tone];
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={i} className={emClass}>
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("~") && part.endsWith("~") && part.length > 2) {
      return (
        <span key={i} className={SCRIPT_CLASS}>
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
