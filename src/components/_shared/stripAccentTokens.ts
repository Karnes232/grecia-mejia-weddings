/**
 * Removes `*…*` and `~…~` accent markers from a string, returning plain text.
 * Used to derive display labels (e.g. chip text) from fields that may contain
 * the renderHeadline tokens.
 */
export function stripAccentTokens(text: string): string {
  return text.replace(/[*~]([^*~]+)[*~]/g, "$1");
}
