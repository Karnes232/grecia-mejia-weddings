import { Link } from "@/i18n/navigation";

type TocItem = { heading: string; slug: string };

type LegalTocProps = {
  items: TocItem[];
  title: string;
  helpNote?: string;
  contactCta: string;
};

export function LegalToc({
  items,
  title,
  helpNote,
  contactCta,
}: LegalTocProps) {
  return (
    <aside className="lg:sticky lg:top-[120px]">
      <h4 className="mb-[18px] border-b border-gold pb-3.5 font-sans text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
        {title}
      </h4>
      <ol className="m-0 grid list-none gap-0.5 p-0">
        {items.map((item, i) => (
          <li key={item.slug}>
            <a
              href={`#${item.slug}`}
              className="flex items-baseline gap-3 py-2 font-serif text-base italic leading-[1.25] text-ink no-underline transition-colors hover:text-olive"
            >
              <span className="shrink-0 pt-[3px] font-sans text-[10px] not-italic tracking-[0.1em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item.heading}</span>
            </a>
          </li>
        ))}
      </ol>

      {helpNote ? (
        <div className="mt-8 border border-rule bg-cream p-6">
          <p className="m-0 mb-3 text-xs leading-[1.7] text-muted">
            {helpNote}
          </p>
          <Link
            href="/contact"
            className="border-b border-gold pb-[3px] text-[10px] uppercase tracking-[0.28em] text-olive no-underline"
          >
            {contactCta}
          </Link>
        </div>
      ) : null}
    </aside>
  );
}
