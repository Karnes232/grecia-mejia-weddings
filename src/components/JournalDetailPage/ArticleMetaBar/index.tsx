import Image from "next/image";
import { useTranslations } from "next-intl";

import { urlFor } from "@/sanity/lib/image";
import type { ArticleAuthor } from "@/sanity/queries/journal";

type ArticleMetaBarProps = {
  author?: ArticleAuthor | null;
  title?: string;
  shareUrl: string;
};

const SHARE_ICON =
  "flex h-[34px] w-[34px] items-center justify-center rounded-full border border-rule font-serif text-[11px] italic text-olive no-underline transition-colors hover:border-olive hover:bg-olive hover:text-ivory";

export function ArticleMetaBar({ author, title, shareUrl }: ArticleMetaBarProps) {
  const t = useTranslations("journalDetail");
  const portraitUrl = author?.portrait?.asset
    ? urlFor(author.portrait).width(120).height(120).fit("crop").auto("format").url()
    : null;

  const shareTitle = (title ?? "").replace(/[*~]/g, "");
  const pinterest = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    shareUrl,
  )}&description=${encodeURIComponent(shareTitle)}`;
  const email = `mailto:?subject=${encodeURIComponent(
    shareTitle,
  )}&body=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 border-b border-rule px-6 py-10 md:px-14">
      <div className="flex items-center gap-4">
        {portraitUrl ? (
          <Image
            src={portraitUrl}
            alt={author?.name ?? ""}
            width={52}
            height={52}
            className="h-[52px] w-[52px] rounded-full object-cover"
          />
        ) : null}
        <div>
          <span className="mb-1.5 block text-[9px] uppercase tracking-[0.3em] text-muted">
            {t("writtenBy")}
          </span>
          <span className="font-serif text-xl italic leading-none text-ink">
            {[author?.name, author?.role].filter(Boolean).join(" · ")}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        <span className="mr-1.5 text-[9px] uppercase tracking-[0.3em] text-muted">
          {t("share")}
        </span>
        <a
          href={pinterest}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Pinterest"
          className={SHARE_ICON}
        >
          Pin
        </a>
        <a href={email} aria-label={t("share")} className={SHARE_ICON}>
          @
        </a>
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("share")}
          className={SHARE_ICON}
        >
          ↗
        </a>
      </div>
    </div>
  );
}
