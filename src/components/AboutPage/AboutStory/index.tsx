import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { AboutPage, SanityImage } from "@/sanity/queries/about";

import { StoryBody } from "./StoryBody";
import { StorySide } from "./StorySide";

type AboutStoryProps = {
  story: NonNullable<AboutPage["story"]>;
  figureImage?: SanityImage;
};

export function AboutStory({ story, figureImage }: AboutStoryProps) {
  return (
    <section className="border-t border-rule bg-ivory px-6 py-[120px] md:px-14 md:pb-[140px]">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-20 md:grid-cols-[280px_1fr]">
        <StorySide label={story.sideLabel} note={story.sideNote} />

        <RevealOnScroll className="max-w-[62ch]">
          <StoryBody story={story} figureImage={figureImage} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
