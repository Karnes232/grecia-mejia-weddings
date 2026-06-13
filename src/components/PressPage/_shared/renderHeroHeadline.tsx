const TOKEN_RE = /(\*[^*]+\*)/g;

/**
 * Hero-headline accent: base text is italic Cormorant, *word* becomes
 * roman (non-italic) ivory — inverted from the homepage's italic-gold pattern.
 */
export function renderHeroHeadline(text: string) {
  const parts = text.split(TOKEN_RE);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return (
        <span key={i} className="not-italic text-ivory">
          {part.slice(1, -1)}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
