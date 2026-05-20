import { renderHeadline } from "@/components/_shared/renderHeadline";

type CalendarHeadProps = {
  headline?: string;
  intro?: string;
};

export function CalendarHead({ headline, intro }: CalendarHeadProps) {
  return (
    <div className="mx-auto mb-14 grid max-w-[1400px] grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-2">
      {headline ? (
        <h3 className="m-0 font-serif font-light text-[clamp(48px,7vw,78px)] leading-[0.95] text-ink">
          {renderHeadline(headline, "olive")}
        </h3>
      ) : null}
      {intro ? (
        <p className="m-0 max-w-[42ch] font-serif italic text-[clamp(17px,2vw,20px)] leading-[1.5] text-[#3d3a30]">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
