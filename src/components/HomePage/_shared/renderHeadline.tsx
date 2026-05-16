type Tone = "gold" | "olive";

const TONE_CLASS: Record<Tone, string> = {
  gold: "italic text-cine-gold",
  olive: "italic text-olive",
};

export function renderHeadline(text: string, tone: Tone = "gold") {
  const parts = text.split(/(\*[^*]+\*)/g);
  const emClass = TONE_CLASS[tone];
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <em key={i} className={emClass}>
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
