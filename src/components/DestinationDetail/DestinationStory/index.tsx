import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { Destination } from "@/sanity/queries/destination";

import { StoryBody } from "./StoryBody";
import { StorySide } from "./StorySide";

type DestinationStoryProps = {
  story: NonNullable<Destination["story"]>;
};

export function DestinationStory({ story }: DestinationStoryProps) {
  return (
    <section className="bg-ivory px-6 py-[120px] md:px-14">
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 items-start gap-20 md:grid-cols-[280px_1fr]">
        <StorySide eyebrow={story.sideEyebrow} note={story.sideNote} />

        <RevealOnScroll className="max-w-[62ch]">
          <StoryBody story={story} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
