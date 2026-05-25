/**
 * Emit a schema.org JSON-LD block. `<` is escaped so editor-authored content
 * cannot break out of the <script> tag (e.g. a literal "</script>" in a string).
 */
export function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
