import { useTranslations } from "next-intl";

type JournalCategoryHeroProps = {
  title?: string;
  blurb?: string;
  total: number;
};

export function JournalCategoryHero({
  title,
  blurb,
  total,
}: JournalCategoryHeroProps) {
  const t = useTranslations("journalPage");
  const td = useTranslations("journalDetail");

  return (
    <section className="bg-cream px-6 pt-[120px] pb-16 text-center md:px-14">
      <div className="mx-auto max-w-[760px]">
        <div className="mb-7 flex items-center justify-center gap-[14px] text-[10px] uppercase tracking-[0.36em] text-gold">
          <span aria-hidden className="h-px w-9 bg-gold" />
          <span>{td("journal")}</span>
          <span aria-hidden className="h-px w-9 bg-gold" />
        </div>
        {title ? (
          <h1 className="m-0 font-serif text-[clamp(44px,6vw,80px)] font-light italic leading-[1.0] tracking-[-0.01em] text-ink">
            {title}
          </h1>
        ) : null}
        {blurb ? (
          <p className="mx-auto mt-7 max-w-[56ch] font-serif text-[20px] italic leading-[1.5] text-[#3d3a30]">
            {blurb}
          </p>
        ) : null}
        <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-muted">
          {total} {t("articles")}
        </p>
      </div>
    </section>
  );
}
