import { keyedImageMap } from "@/components/_shared/keyedImageMap";
import { renderHeadline } from "@/components/_shared/renderHeadline";
import { RevealOnScroll } from "@/components/_shared/RevealOnScroll";
import type { AboutPage, AboutPageMedia } from "@/sanity/queries/about";

import { TeamMember } from "./TeamMember";

type AboutTeamProps = {
  team: NonNullable<AboutPage["team"]>;
  images?: NonNullable<AboutPageMedia["team"]>["images"];
};

export function AboutTeam({ team, images }: AboutTeamProps) {
  const imageByKey = keyedImageMap(images);
  const members = team.members ?? [];

  return (
    <section className="bg-cream px-6 py-[140px] md:px-14">
      <RevealOnScroll className="mx-auto mb-16 grid max-w-[1400px] grid-cols-1 items-end gap-12 border-b border-olive pb-6 md:grid-cols-[1.4fr_1fr]">
        <div>
          {team.label ? (
            <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-muted">
              {team.label}
            </span>
          ) : null}
          {team.headline ? (
            <h2 className="m-0 font-serif font-light text-[clamp(44px,7vw,78px)] leading-[0.96] text-ink">
              {renderHeadline(team.headline, "olive")}
            </h2>
          ) : null}
        </div>
        {team.intro ? (
          <p className="m-0 max-w-[42ch] font-serif italic text-[clamp(16px,1.6vw,18px)] leading-[1.55] text-[#3d3a30]">
            {team.intro}
          </p>
        ) : null}
      </RevealOnScroll>

      {members.length > 0 ? (
        <RevealOnScroll className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <TeamMember
              key={i}
              role={member.role}
              name={member.name}
              bio={member.bio}
              image={imageByKey.get(member.imageKey ?? "")}
            />
          ))}
        </RevealOnScroll>
      ) : null}
    </section>
  );
}
