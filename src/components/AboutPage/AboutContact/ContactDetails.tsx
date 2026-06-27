type ContactDetailsProps = {
  details?: Array<{ label?: string; value?: string; href?: string }>;
};

export function ContactDetails({ details }: ContactDetailsProps) {
  if (!details?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-6 border border-[rgba(212,186,140,0.25)] bg-olive-dk p-8 sm:grid-cols-2">
      {details.map((row, i) => (
        <div key={i}>
          {row.label ? (
            <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-cine-gold">
              {row.label}
            </span>
          ) : null}
          {row.value ? (
            <span className="block font-serif text-[20px] italic leading-[1.2] text-ivory">
              {row.href ? (
                <a
                  href={row.href}
                  className="border-b border-[rgba(212,186,140,0.4)] no-underline transition-colors hover:border-cine-gold"
                >
                  {row.value}
                </a>
              ) : (
                row.value
              )}
            </span>
          ) : null}
        </div>
      ))}
    </div>
  );
}
