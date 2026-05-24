/**
 * Build a `key → image` lookup from a destination media keyed-image array
 * (styles, venueCards, guestCards, relatedArticles). Each card section maps its
 * `imageKey` against this. Entries without a `key` are dropped.
 */
export function keyedImageMap<I>(
  arr?: Array<{ key?: string; image?: I }> | null,
): Map<string, I | undefined> {
  return new Map(
    (arr ?? [])
      .filter((e): e is { key: string; image?: I } => Boolean(e.key))
      .map((e) => [e.key, e.image]),
  );
}
