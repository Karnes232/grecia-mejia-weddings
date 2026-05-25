import Image from "next/image";

import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/about";

type TeamMemberProps = {
  role?: string;
  name?: string;
  bio?: string;
  image?: SanityImage;
};

export function TeamMember({ role, name, bio, image }: TeamMemberProps) {
  const imageUrl = image?.asset
    ? urlFor(image).width(800).height(1000).fit("crop").auto("format").url()
    : null;

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={image?.alt ?? name ?? ""}
            fill
            sizes="(min-width:1024px) 22vw, (min-width:640px) 45vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
            style={{ filter: "saturate(0.9)" }}
          />
        ) : null}
      </div>

      <div className="pt-5">
        {role ? (
          <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
            {role}
          </span>
        ) : null}
        {name ? (
          <h4 className="m-0 mb-3 font-serif text-[28px] font-normal italic leading-none text-ink">
            {name}
          </h4>
        ) : null}
        {bio ? (
          <p className="m-0 text-[13px] leading-[1.7] text-muted">{bio}</p>
        ) : null}
      </div>
    </article>
  );
}
