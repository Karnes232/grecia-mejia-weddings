import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { HomePage } from "@/sanity/queries/home";

type FeatureImageProps = {
  image: NonNullable<
    NonNullable<HomePage["featuredWedding"]>["caseStudy"]
  >["image"];
  subjectCaption?: string;
  metaCaption?: string;
  alt?: string;
};

export function FeatureImage({
  image,
  subjectCaption,
  metaCaption,
  alt,
}: FeatureImageProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(1100).height(1375).fit("crop").auto("format").url()
    : null;

  return (
    <figure className="m-0">
      <div className="relative w-full overflow-hidden aspect-[4/5] bg-olive-dk/10">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? alt ?? ""}
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : null}
      </div>
      {subjectCaption || metaCaption ? (
        <figcaption className="mt-4 flex justify-between gap-6 text-[10px] uppercase tracking-wide-eyebrow text-muted">
          {subjectCaption ? <span>{subjectCaption}</span> : <span />}
          {metaCaption ? <span>{metaCaption}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
