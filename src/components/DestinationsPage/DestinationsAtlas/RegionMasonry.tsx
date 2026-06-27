"use client";

import Image from "next/image";
import {
  MasonryPhotoAlbum,
  type Photo,
  type RenderImageContext,
  type RenderImageProps,
  type RenderLinkContext,
  type RenderLinkProps,
} from "react-photo-album";
import "react-photo-album/masonry.css";

import { Link } from "@/i18n/navigation";

export type CardPhoto = Photo & {
  name?: string;
  country?: string;
  subLocations?: string;
  slug?: string;
};

type RegionMasonryProps = {
  photos: CardPhoto[];
};

function renderImage(
  { sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext<CardPhoto>,
) {
  return (
    <div
      className="relative bg-cream"
      style={{ width: "100%", aspectRatio: `${width} / ${height}` }}
    >
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt ?? photo.name ?? ""}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-silk)] group-hover:scale-[1.05]"
        />
      ) : null}
    </div>
  );
}

function renderExtras(_: unknown, { photo }: RenderImageContext<CardPhoto>) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-45% to-[rgba(28,28,24,0.7)]"
      />
      <div className="pointer-events-none absolute inset-x-6 bottom-6 z-[2] text-ivory">
        {photo.country ? (
          <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            {photo.country}
          </span>
        ) : null}
        {photo.name ? (
          <h4 className="m-0 font-serif text-[clamp(28px,3vw,38px)] font-normal italic leading-none text-ivory">
            {photo.name}
          </h4>
        ) : null}
        {photo.subLocations ? (
          <small className="mt-1.5 block text-[10px] uppercase tracking-eyebrow text-cine-sage">
            {photo.subLocations}
          </small>
        ) : null}
      </div>
    </>
  );
}

function renderLink(
  { children, className, style }: RenderLinkProps,
  { photo }: RenderLinkContext<CardPhoto>,
) {
  if (!photo.slug) return <>{children}</>;
  return (
    <Link
      // Object-form href so next-intl localizes the path segment.
      href={{
        pathname: "/destinations/[destination]",
        params: { destination: photo.slug },
      }}
      className={className}
      style={style}
    >
      {children}
    </Link>
  );
}

export function RegionMasonry({ photos }: RegionMasonryProps) {
  return (
    <MasonryPhotoAlbum
      photos={photos}
      columns={(w) => (w < 640 ? 1 : w < 1100 ? 2 : 3)}
      spacing={24}
      sizes={{
        size: "(min-width:1100px) 33vw, (min-width:640px) 50vw, 100vw",
      }}
      render={{
        image: renderImage,
        extras: renderExtras,
        link: renderLink,
        wrapper: (props) => (
          <div
            {...props}
            className={`group overflow-hidden bg-cream text-ivory ${props.className ?? ""}`}
          />
        ),
      }}
    />
  );
}
