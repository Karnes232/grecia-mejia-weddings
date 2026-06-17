import type { ArticleDetail } from "@/sanity/queries/journal";

import { ArticleAuthor } from "../ArticleAuthor";
import { ArticleFaq } from "../ArticleFaq";
import { ArticleProse } from "../ArticleProse";
import { ArticleTags, type ArticleTag } from "../ArticleTags";
import { ArticleToc } from "../ArticleToc";
import type { TocEntry } from "../_shared/util";

type ArticleBodyProps = {
  article: ArticleDetail;
  toc: TocEntry[];
  tags: ArticleTag[];
};

export function ArticleBody({ article, toc, tags }: ArticleBodyProps) {
  return (
    <article className="bg-ivory px-6 pb-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-start gap-12 lg:grid-cols-[260px_1fr] lg:gap-[72px]">
        <ArticleToc toc={toc} />
        <div className="min-w-0">
          <ArticleProse value={article.body} />
          <ArticleFaq faqs={article.faqs} />
          <ArticleAuthor author={article.author} />
          <ArticleTags tags={tags} />
        </div>
      </div>
    </article>
  );
}
