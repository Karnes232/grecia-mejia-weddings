type SpotlightMetaProps = {
  facts?: Array<{ label?: string; value?: string }>;
};

export function SpotlightMeta({ facts }: SpotlightMetaProps) {
  if (!facts?.length) return null;

  return (
    <dl className="my-8 grid grid-cols-2 gap-x-8 gap-y-4 border-y border-rule py-6">
      {facts.map((fact, i) => (
        <div key={i}>
          <dt className="mb-1 text-[10px] uppercase tracking-wide-eyebrow text-muted">
            {fact.label}
          </dt>
          <dd className="m-0 font-serif italic text-[18px] text-ink">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
