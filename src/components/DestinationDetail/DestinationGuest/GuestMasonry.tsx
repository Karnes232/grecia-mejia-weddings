"use client";

import Image from "next/image";
import {
  MasonryPhotoAlbum,
  type Photo,
  type RenderImageContext,
  type RenderImageProps,
} from "react-photo-album";
import "react-photo-album/masonry.css";

export type GuestPhoto = Photo & {
  label?: string;
  headline?: string;
};

type GuestMasonryProps = {
  photos: GuestPhoto[];
};

function renderImage(
  { sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext<GuestPhoto>,
) {
  return (
    <div
      className="relative bg-sand"
      style={{ width: "100%", aspectRatio: `${width} / ${height}` }}
    >
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.alt ?? photo.headline ?? ""}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-[var(--ease-silk)] group-hover:scale-[1.04]"
        />
      ) : null}
    </div>
  );
}

function renderExtras(_: unknown, { photo }: RenderImageContext<GuestPhoto>) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-60% to-[rgba(28,28,24,0.65)]"
      />
      <div className="pointer-events-none absolute inset-x-6 bottom-6 z-[2] text-ivory">
        {photo.label ? (
          <span className="mb-1.5 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            {photo.label}
          </span>
        ) : null}
        {photo.headline ? (
          <h4 className="m-0 font-serif text-[28px] font-normal italic leading-none text-ivory">
            {photo.headline}
          </h4>
        ) : null}
      </div>
    </>
  );
}

export function GuestMasonry({ photos }: GuestMasonryProps) {
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
        wrapper: (props) => (
          <div
            {...props}
            className={`group overflow-hidden bg-sand text-ivory ${props.className ?? ""}`}
          />
        ),
      }}
    />
  );
}
