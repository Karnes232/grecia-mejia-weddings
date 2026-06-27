import type { HomePage } from "@/sanity/queries/home";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";

import { FeatureBody } from "./FeatureBody";
import { FeatureImage } from "./FeatureImage";

type FeaturedWeddingProps = {
  data: NonNullable<HomePage["featuredWedding"]>;
};

export function FeaturedWedding({ data }: FeaturedWeddingProps) {
  const cs = data.caseStudy;
  if (!cs) return null;

  const subjectCaption = [cs.name, cs.destination].filter(Boolean).join(" · ");

  return (
    <section className="bg-ivory px-6 py-[160px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-center gap-12 md:gap-20 md:grid-cols-[1.1fr_1fr]">
        <RevealOnScroll>
          <FeatureImage
            image={cs.image}
            subjectCaption={subjectCaption}
            metaCaption={cs.cardMeta}
            alt={cs.name}
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <FeatureBody caseStudy={cs} eyebrow={data.eyebrow} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
