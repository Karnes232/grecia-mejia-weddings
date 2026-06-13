import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { PressPage } from "@/sanity/queries/press";

type PressArchiveProps = {
  archive: NonNullable<PressPage["archive"]>;
};

export function PressArchive({ archive }: PressArchiveProps) {
  const items = archive.items ?? [];
  if (items.length === 0) return null;

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <RevealOnScroll
        as="div"
        className="mx-auto mb-12 flex max-w-[1400px] flex-col gap-4 border-b border-olive pb-6 sm:flex-row sm:items-end sm:justify-between sm:gap-12"
      >
        <div>
          {archive.label ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {archive.label}
            </span>
          ) : null}
          {archive.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,78px)] leading-[0.96] text-ink">
              {renderHeadline(archive.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {archive.count ? (
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted sm:text-right">
            {archive.count}
          </span>
        ) : null}
      </RevealOnScroll>

      <RevealOnScroll as="div" className="mx-auto max-w-[1400px]">
        {items.map((item, i) => {
          const inner = (
            <>
              <span className="font-serif text-[18px] italic text-gold">
                {item.year}
              </span>
              {item.publication ? (
                <span className="font-serif text-[22px] italic leading-[1.1] text-olive">
                  {item.publication}
                </span>
              ) : (
                <span />
              )}
              {item.title ? (
                <span className="text-[15px] leading-[1.5] text-ink">
                  {item.title}
                </span>
              ) : (
                <span />
              )}
              {item.type ? (
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  {item.type}
                </span>
              ) : (
                <span />
              )}
              <span
                aria-hidden
                className="hidden text-right font-serif text-[22px] italic text-olive md:block"
              >
                →
              </span>
            </>
          );

          const rowClass =
            "grid grid-cols-1 gap-1 border-b border-rule py-6 transition-[padding,background] duration-300 hover:bg-[rgba(184,153,104,0.04)] md:grid-cols-[90px_220px_1fr_160px_60px] md:items-center md:gap-8 md:py-[26px] md:hover:pl-2";

          return item.href ? (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={rowClass}
            >
              {inner}
            </a>
          ) : (
            <div key={i} className={rowClass}>
              {inner}
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
