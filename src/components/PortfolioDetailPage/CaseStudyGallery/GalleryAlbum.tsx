"use client";

import Image from "next/image";
import { useState } from "react";
import {
  RowsPhotoAlbum,
  type Photo,
  type RenderImageContext,
  type RenderImageProps,
} from "react-photo-album";
import "react-photo-album/rows.css";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

type GalleryAlbumProps = {
  photos: Photo[];
};

function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext,
) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <Image
        src={photo.src}
        alt={alt}
        title={title}
        fill
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export function GalleryAlbum({ photos }: GalleryAlbumProps) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        spacing={16}
        targetRowHeight={350}
        sizes={{ size: "(max-width: 1400px) 100vw, 1400px" }}
        render={{ image: renderNextImage }}
        onClick={({ index: i }) => setIndex(i)}
      />
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos.map((p) => ({
          src: p.src,
          alt: p.alt,
          width: p.width,
          height: p.height,
        }))}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        styles={{
          container: { backgroundColor: "rgba(13,15,10,0.94)" },
        }}
      />
    </>
  );
}
