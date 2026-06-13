/**
 * Shared Portable Text helpers for the legal seeds (`termsPage`, `privacyPage`).
 *
 * Inline markup inside the copy strings:
 *   **bold**            → strong decorator
 *   [label](href)       → link annotation (href may be /internal, mailto:, https:)
 */

import { randomUUID } from "node:crypto";

type Span = { _type: "span"; _key: string; text: string; marks: string[] };
type MarkDef = { _key: string; _type: "link"; href: string };

function span(text: string, marks: string[] = []): Span {
  return { _type: "span", _key: randomUUID(), text, marks };
}

function inlineParse(text: string): { children: Span[]; markDefs: MarkDef[] } {
  const children: Span[] = [];
  const markDefs: MarkDef[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) children.push(span(text.slice(last, m.index)));
    if (m[1] != null) {
      children.push(span(m[1], ["strong"]));
    } else {
      const key = randomUUID();
      markDefs.push({ _key: key, _type: "link", href: m[3] });
      children.push(span(m[2], [key]));
    }
    last = re.lastIndex;
  }
  if (last < text.length) children.push(span(text.slice(last)));
  return { children, markDefs };
}

function block(
  style: string,
  text: string,
  extra: Record<string, unknown> = {},
) {
  const { children, markDefs } = inlineParse(text);
  return {
    _type: "block",
    _key: randomUUID(),
    style,
    markDefs,
    children,
    ...extra,
  };
}

export const p = (text: string) => block("normal", text);
export const h3 = (text: string) => block("h3", text);
export const li = (text: string) =>
  block("normal", text, { listItem: "bullet", level: 1 });
export const bullets = (items: string[]) => items.map(li);

export const callout = (text: string) => ({
  _type: "legalCallout",
  _key: randomUUID(),
  text,
});

export const defs = (pairs: Array<[string, string]>) => ({
  _type: "legalDefinitions",
  _key: randomUUID(),
  items: pairs.map(([term, definition]) => ({
    _key: randomUUID(),
    term,
    definition,
  })),
});

export type LegalSectionCopy = { heading: string; body: object[] };

export const section = (heading: string, body: object[]): LegalSectionCopy => ({
  heading,
  body,
});
