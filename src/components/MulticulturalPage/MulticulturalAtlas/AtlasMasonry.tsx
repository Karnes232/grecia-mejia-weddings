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
  cardEyebrow?: string;
  name?: string;
  cardBlurb?: string;
  cardMeta?: string;
  slug?: string;
};

type AtlasMasonryProps = {
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
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent from-45% to-[rgba(28,28,24,0.78)]"
      />
      <div className="pointer-events-none absolute inset-x-7 bottom-7 z-[2] text-ivory">
        {photo.cardEyebrow ? (
          <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-cine-sage">
            {photo.cardEyebrow}
          </span>
        ) : null}
        {photo.name ? (
          <h3 className="m-0 font-serif italic font-normal leading-none text-ivory text-[clamp(28px,3.4vw,38px)]">
            {photo.name}
          </h3>
        ) : null}
        {photo.cardBlurb ? (
          <p className="mt-2 max-w-[34ch] text-[12px] leading-[1.5] text-cine-ivory">
            {photo.cardBlurb}
          </p>
        ) : null}
        {photo.cardMeta ? (
          <span className="mt-3.5 block text-[10px] uppercase tracking-[0.32em] text-cine-gold">
            {photo.cardMeta} →
          </span>
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
        pathname: "/multicultural-weddings/[culture]",
        params: { culture: photo.slug },
      }}
      className={className}
      style={style}
    >
      {children}
    </Link>
  );
}

export function AtlasMasonry({ photos }: AtlasMasonryProps) {
  return (
    <MasonryPhotoAlbum
      photos={photos}
      columns={(w) => (w < 800 ? 1 : 2)}
      spacing={24}
      sizes={{
        // 1 column below 800px (full width), 2 columns at/above (~half),
        // capped to the section's 1400px max-width container.
        size: "(min-width: 1400px) 632px, (min-width: 800px) 50vw, 100vw",
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
