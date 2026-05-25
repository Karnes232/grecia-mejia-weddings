/**
 * Parse the editor-authored `seo.structuredData` JSON-LD string into an object
 * (or array / @graph). Returns null for empty or invalid input, so callers can
 * skip rendering. The string is validated as JSON in Studio, but we re-check here.
 */
export function parseStructuredData(text?: string): object | null {
  if (!text || text.trim() === "") return null;
  try {
    const parsed: unknown = JSON.parse(text);
    return typeof parsed === "object" && parsed !== null ? parsed : null;
  } catch {
    return null;
  }
}
