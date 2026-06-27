"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

type Slide = { src: string; alt?: string };

type VenueGalleryLightboxProps = {
  slides: Slide[];
  label: string;
};

/** Overlay button on the hero mosaic that opens every venue image in a lightbox. */
export function VenueGalleryLightbox({ slides, label }: VenueGalleryLightboxProps) {
  const [open, setOpen] = useState(false);

  if (!slides.length) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="absolute bottom-4 right-4 z-[2] cursor-pointer border border-[rgba(212,186,140,0.3)] bg-[rgba(28,30,24,0.85)] px-4 py-2 text-[9px] uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-[rgba(28,30,24,0.95)]"
      >
        {label} →
      </button>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        styles={{ container: { backgroundColor: "rgba(13,15,10,0.94)" } }}
      />
    </>
  );
}
