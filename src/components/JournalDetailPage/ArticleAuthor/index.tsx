import Image from "next/image";
import { useTranslations } from "next-intl";

import { urlFor } from "@/sanity/lib/image";
import type { ArticleAuthor as Author } from "@/sanity/queries/journal";

export function ArticleAuthor({ author }: { author?: Author | null }) {
  const t = useTranslations("journalDetail");
  if (!author?.name) return null;

  const portraitUrl = author.portrait?.asset
    ? urlFor(author.portrait).width(180).height(180).fit("crop").auto("format").url()
    : null;

  return (
    <div className="mt-16 grid grid-cols-[88px_1fr] items-start gap-7 border border-rule bg-cream p-9">
      {portraitUrl ? (
        <Image
          src={portraitUrl}
          alt={author.name}
          width={88}
          height={88}
          className="h-[88px] w-[88px] rounded-full object-cover"
        />
      ) : (
        <div className="h-[88px] w-[88px] rounded-full bg-rule" aria-hidden />
      )}
      <div>
        <span className="mb-2 block text-[9px] uppercase tracking-[0.3em] text-gold">
          {t("writtenBy")}
        </span>
        <h4 className="m-0 mb-3 font-serif text-[26px] italic text-ink">
          {author.name}
        </h4>
        {author.bio ? (
          <p className="m-0 text-sm leading-[1.7] text-[#3d3a30]">{author.bio}</p>
        ) : null}
      </div>
    </div>
  );
}
