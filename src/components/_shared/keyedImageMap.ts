/**
 * Build a `key → image` lookup from a media keyed-image array (destination
 * styles/venues/guest/related cards, about team photos, …). Each consumer maps
 * its `imageKey` against this. Entries without a `key` are dropped.
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
