import type { HomePage, HomePageMedia } from "@/sanity/queries/home";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

import { FeatureBody } from "./FeatureBody";
import { FeatureImage } from "./FeatureImage";

type FeaturedWeddingProps = {
  data: NonNullable<HomePage["featuredWedding"]>;
  image?: HomePageMedia["featuredWedding"];
  eyebrow?: string;
};

export function FeaturedWedding({
  data,
  image,
  eyebrow,
}: FeaturedWeddingProps) {
  return (
    <section className="bg-ivory px-6 py-[160px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 md:gap-20 md:grid-cols-[1.1fr_1fr]">
        <RevealOnScroll>
          <FeatureImage
            image={image?.image}
            subjectCaption={data.subjectCaption}
            metaCaption={data.metaCaption}
            alt={data.subjectCaption}
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <FeatureBody data={data} eyebrow={eyebrow} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
