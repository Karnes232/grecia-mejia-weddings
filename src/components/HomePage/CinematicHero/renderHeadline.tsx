/**
 * Render a headline string with markdown-lite emphasis:
 *   "The *art* of the *destination* wedding."
 * → words wrapped in single asterisks become italic-gold accents.
 */
export function renderHeadline(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={i} className="italic text-[var(--color-cine-gold)]">
          {part.slice(1, -1)}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}
