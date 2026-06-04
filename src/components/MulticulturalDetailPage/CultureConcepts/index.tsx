import { getTranslations } from "next-intl/server";

import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import type { Culture, CultureMedia } from "@/sanity/queries/culture";

import { SectionDeck, SectionHead } from "../SectionHead";
import { ConceptCard } from "./ConceptCard";

type CultureConceptsProps = {
  designConcepts: NonNullable<Culture["designConcepts"]>;
  images: CultureMedia["designConcepts"];
  locale: string;
};

const ROMAN = ["I", "II", "III", "IV", "V"];

export async function CultureConcepts({
  designConcepts,
  images,
  locale,
}: CultureConceptsProps) {
  const t = await getTranslations({
    locale,
    namespace: "multiculturalDetail",
  });
  const imageByKey = keyedImageMap(images);
  const cards = designConcepts.cards ?? [];

  return (
    <section className="bg-ivory px-6 py-[140px] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <SectionHead
          eyebrow={designConcepts.eyebrow}
          headline={designConcepts.headline}
          aside={
            designConcepts.deck ? (
              <SectionDeck>{designConcepts.deck}</SectionDeck>
            ) : undefined
          }
        />

        {cards.length ? (
          <RevealOnScroll className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, i) => (
              <ConceptCard
                key={i}
                eyebrow={`${t("conceptLabel")} № ${ROMAN[i] ?? String(i + 1)}`}
                card={card}
                image={imageByKey.get(card.imageKey ?? "")}
              />
            ))}
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
