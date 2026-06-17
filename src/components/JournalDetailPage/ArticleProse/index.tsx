import {
  PortableText,
  type PortableTextComponents,
} from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Image from "next/image";
import type { ReactNode } from "react";

import { Link } from "@/i18n/navigation";
import { urlFor } from "@/sanity/lib/image";
import type { SanityImage } from "@/sanity/queries/destinations";

import { blockPlainText, slugifyHeading } from "../_shared/util";

type ImgVal = SanityImage & { caption?: string; credit?: string };

const url = (image: SanityImage | undefined, w: number, h?: number) => {
  if (!image?.asset) return null;
  let b = urlFor(image).width(w);
  if (h) b = b.height(h).fit("crop");
  return b.auto("format").url();
};

const TEXT = "max-w-[68ch]";

function ProseLink({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  const cls =
    "border-b border-gold text-olive no-underline transition-colors hover:bg-[rgba(184,153,104,0.12)]";
  if (href && href.startsWith("/")) {
    return (
      <Link href={href as never} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href ?? "#"} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  );
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className={`${TEXT} mb-[22px] text-[17px] leading-[1.8] text-[#2a2a24]`}>
        {children}
      </p>
    ),
    lede: ({ children }) => (
      <p
        id="intro"
        className={`${TEXT} mb-10 font-serif text-[26px] italic leading-[1.5] text-[#2a2a24]`}
      >
        {children}
      </p>
    ),
    h2: ({ children, value }) => (
      <h2
        id={slugifyHeading(blockPlainText(value as PortableTextBlock))}
        className={`${TEXT} mt-16 mb-6 scroll-mt-24 font-serif text-[clamp(34px,4vw,46px)] font-light leading-[1.08] tracking-[-0.008em] text-ink`}
      >
        {children}
      </h2>
    ),
    h3: ({ children, value }) => (
      <h3
        id={slugifyHeading(blockPlainText(value as PortableTextBlock))}
        className={`${TEXT} mt-11 mb-[18px] scroll-mt-24 font-serif text-[30px] italic leading-[1.15] text-ink`}
      >
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className={`${TEXT} my-10 border-l-2 border-gold py-2 pl-8`}>
        <p className="m-0 font-serif text-[28px] italic leading-[1.4] text-olive">
          {children}
        </p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className={`${TEXT} mb-[22px] grid list-none gap-3.5 p-0`}>{children}</ul>
    ),
    number: ({ children }) => (
      <ol className={`${TEXT} mb-[22px] grid list-decimal gap-3.5 pl-6`}>
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="relative pl-[26px] text-base leading-[1.7] text-[#2a2a24] before:absolute before:left-0 before:top-px before:text-[9px] before:text-gold before:content-['◇']">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="text-base leading-[1.7] text-[#2a2a24]">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-ink">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => (
      <ProseLink href={(value as { href?: string })?.href}>{children}</ProseLink>
    ),
  },
  types: {
    image: ({ value }) => {
      const v = value as ImgVal;
      const src = url(v, 1400);
      if (!src) return null;
      return (
        <figure className="my-12">
          <Image
            src={src}
            alt={v.alt ?? ""}
            width={1400}
            height={933}
            className="aspect-[3/2] w-full object-cover"
          />
          {v.caption ? (
            <figcaption className="mt-3 text-[10px] uppercase tracking-[0.3em] text-muted">
              {v.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    },
    featureImage: ({ value }) => {
      const v = value as { image?: ImgVal; caption?: string; credit?: string };
      const src = url(v.image, 1600);
      if (!src) return null;
      return (
        <figure className="my-16">
          <Image
            src={src}
            alt={v.image?.alt ?? ""}
            width={1600}
            height={900}
            className="aspect-video w-full object-cover"
          />
          {v.caption || v.credit ? (
            <figcaption className="mt-3.5 flex justify-between gap-6 text-[10px] uppercase tracking-[0.3em] text-muted">
              <em className="font-serif text-sm normal-case not-italic tracking-normal text-olive italic">
                {v.caption}
              </em>
              <span>{v.credit}</span>
            </figcaption>
          ) : null}
        </figure>
      );
    },
    articleStats: ({ value }) => {
      const v = value as { items?: Array<{ value?: string; label?: string }> };
      const items = v.items ?? [];
      if (!items.length) return null;
      return (
        <div className="my-14 grid grid-cols-1 border-y border-rule sm:grid-cols-3">
          {items.map((s, i) => (
            <div
              key={i}
              className="border-b border-rule px-6 py-8 text-center last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <span className="mb-2.5 block font-serif text-[52px] font-light italic leading-none text-olive">
                {s.value}
              </span>
              <span className="mx-auto block max-w-[24ch] text-[10px] uppercase tracking-[0.28em] text-muted">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      );
    },
    articleTakeaways: ({ value }) => {
      const v = value as { heading?: string; items?: string[] };
      const items = v.items ?? [];
      return (
        <div className="my-12 border border-rule bg-cream px-10 py-9">
          {v.heading ? (
            <h4 className="m-0 mb-5 text-[10px] uppercase tracking-[0.32em] text-gold">
              {v.heading}
            </h4>
          ) : null}
          <ul className="m-0 grid list-none gap-3.5 p-0">
            {items.map((it, i) => (
              <li
                key={i}
                className="relative pl-7 font-serif text-[19px] italic leading-[1.4] text-ink before:absolute before:left-0 before:top-[9px] before:h-[11px] before:w-[7px] before:rotate-45 before:border-b-2 before:border-r-2 before:border-olive before:content-['']"
              >
                {it}
              </li>
            ))}
          </ul>
        </div>
      );
    },
    articleVenueCards: ({ value }) => {
      const v = value as {
        label?: string;
        cards?: Array<{
          tag?: string;
          eyebrow?: string;
          blurb?: string;
          linkLabel?: string;
          metaRows?: Array<{ label?: string; value?: string }>;
          venue?: {
            name?: string;
            slug?: string;
            region?: string;
            image?: ImgVal;
          };
        }>;
      };
      const cards = v.cards ?? [];
      return (
        <div className="my-11 grid gap-[18px]">
          {v.label ? (
            <p className="m-0 text-[10px] uppercase tracking-[0.32em] text-muted">
              {v.label}
            </p>
          ) : null}
          {cards.map((c, i) => {
            const src = url(c.venue?.image, 500, 600);
            const inner = (
              <>
                <div className="relative overflow-hidden max-md:aspect-video">
                  {c.tag ? (
                    <span className="absolute left-3.5 top-3.5 z-[1] bg-[rgba(245,240,230,0.94)] px-2.5 py-[5px] text-[8px] uppercase tracking-[0.3em] text-olive">
                      {c.tag}
                    </span>
                  ) : null}
                  {src ? (
                    <Image
                      src={src}
                      alt={c.venue?.image?.alt ?? c.venue?.name ?? ""}
                      fill
                      sizes="(min-width:768px) 230px, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-silk group-hover:scale-[1.05]"
                    />
                  ) : null}
                </div>
                <div className="flex flex-col justify-center px-[30px] py-7">
                  {c.eyebrow ? (
                    <span className="mb-2 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                      {c.eyebrow}
                    </span>
                  ) : null}
                  <h4 className="m-0 mb-2.5 font-serif text-[30px] italic leading-none text-ink transition-colors group-hover:text-olive">
                    {c.venue?.name}
                  </h4>
                  {c.blurb ? (
                    <p className="m-0 mb-4 max-w-[48ch] text-[13.5px] leading-[1.6] text-[#3d3a30]">
                      {c.blurb}
                    </p>
                  ) : null}
                  {c.metaRows?.length ? (
                    <div className="mb-4 flex flex-wrap gap-7">
                      {c.metaRows.map((m, j) => (
                        <div key={j}>
                          <span className="mb-1 block text-[8px] uppercase tracking-[0.3em] text-muted">
                            {m.label}
                          </span>
                          <span className="font-serif text-base italic text-ink">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {c.linkLabel ? (
                    <span className="inline-flex gap-2 text-[10px] uppercase tracking-[0.3em] text-olive">
                      {c.linkLabel} <span aria-hidden>→</span>
                    </span>
                  ) : null}
                </div>
              </>
            );
            const cardCls =
              "group grid grid-cols-1 overflow-hidden border border-rule bg-cream text-inherit no-underline transition-colors hover:bg-[#e6dcc4] md:grid-cols-[230px_1fr]";
            return c.venue?.slug && c.venue.region ? (
              <Link
                key={i}
                href={{
                  pathname: "/venues/[region]/[venue]",
                  params: { region: c.venue.region, venue: c.venue.slug },
                }}
                className={cardCls}
              >
                {inner}
              </Link>
            ) : (
              <div key={i} className={cardCls}>
                {inner}
              </div>
            );
          })}
        </div>
      );
    },
    articleGallery: ({ value }) => {
      const v = value as {
        images?: Array<ImgVal & { caption?: string }>;
      };
      const images = v.images ?? [];
      if (!images.length) return null;
      return (
        <div className="my-14 grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {images.map((im, i) => {
            const src = url(im, 700, 875);
            return (
              <figure key={i} className="m-0">
                {src ? (
                  <Image
                    src={src}
                    alt={im.alt ?? ""}
                    width={700}
                    height={875}
                    className="aspect-[4/5] w-full object-cover"
                  />
                ) : null}
                {im.caption ? (
                  <figcaption className="mt-2.5 text-[10px] uppercase tracking-[0.28em] text-muted">
                    {im.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          })}
        </div>
      );
    },
    articlePullQuote: ({ value }) => {
      const v = value as { quote?: string; cite?: string };
      return (
        <div className="my-[72px] border-y border-gold py-12 text-center">
          <p className="mx-auto m-0 max-w-[20ch] font-serif text-[38px] font-light italic leading-[1.3] text-olive">
            {v.quote}
          </p>
          {v.cite ? (
            <cite className="mt-6 block text-[10px] uppercase not-italic tracking-[0.32em] text-muted">
              {v.cite}
            </cite>
          ) : null}
        </div>
      );
    },
    articleSplit: ({ value }) => {
      const v = value as {
        image?: ImgVal;
        eyebrow?: string;
        heading?: string;
        paragraphs?: string[];
        flip?: boolean;
      };
      const src = url(v.image, 700, 875);
      return (
        <div className="my-16 grid grid-cols-1 items-center gap-11 md:grid-cols-[1.05fr_1fr]">
          {src ? (
            <div className={v.flip ? "md:order-2" : undefined}>
              <Image
                src={src}
                alt={v.image?.alt ?? ""}
                width={700}
                height={875}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          ) : null}
          <div className={v.flip ? "md:order-1" : undefined}>
            {v.eyebrow ? (
              <span className="mb-3.5 block text-[10px] uppercase tracking-wide-eyebrow text-gold">
                {v.eyebrow}
              </span>
            ) : null}
            {v.heading ? (
              <h4 className="m-0 mb-4 font-serif text-[34px] font-light leading-[1.06] text-ink">
                {v.heading}
              </h4>
            ) : null}
            {(v.paragraphs ?? []).map((p, i) => (
              <p key={i} className="m-0 mb-3.5 text-[15px] leading-[1.7] text-[#2a2a24] last:mb-0">
                {p}
              </p>
            ))}
          </div>
        </div>
      );
    },
    destinationCard: ({ value }) => {
      const v = value as {
        eyebrow?: string;
        linkLabel?: string;
        destination?: { name?: string; slug?: string; image?: ImgVal };
      };
      const src = url(v.destination?.image, 1600, 686);
      if (!v.destination?.slug) return null;
      return (
        <Link
          href={{
            pathname: "/destinations/[destination]",
            params: { destination: v.destination.slug },
          }}
          className="group relative my-14 block overflow-hidden text-inherit no-underline"
        >
          {src ? (
            <Image
              src={src}
              alt={v.destination.image?.alt ?? v.destination.name ?? ""}
              width={1600}
              height={686}
              className="aspect-[21/9] w-full object-cover transition-transform duration-[1500ms] ease-silk group-hover:scale-[1.05]"
            />
          ) : null}
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 35%, rgba(13,15,10,0.78) 100%)",
            }}
          />
          <div className="absolute inset-x-9 bottom-8 z-[1] text-ivory">
            {v.eyebrow ? (
              <span className="mb-2.5 block text-[10px] uppercase tracking-[0.3em] text-[#d4cdb8]">
                {v.eyebrow}
              </span>
            ) : null}
            <h4 className="m-0 mb-2 font-serif text-[46px] italic leading-none text-ivory">
              {v.destination.name}
            </h4>
            {v.linkLabel ? (
              <span className="inline-flex gap-2 text-[10px] uppercase tracking-[0.3em] text-gold-soft">
                {v.linkLabel} <span aria-hidden>→</span>
              </span>
            ) : null}
          </div>
        </Link>
      );
    },
    inlineCta: ({ value }) => {
      const v = value as {
        script?: string;
        heading?: string;
        body?: string;
        ctaLabel?: string;
        ctaHref?: string;
      };
      return (
        <div className="my-14 bg-olive px-12 py-12 text-center text-ivory">
          {v.script ? (
            <span className="mb-2.5 block font-script text-[38px] leading-none text-gold-soft">
              {v.script}
            </span>
          ) : null}
          {v.heading ? (
            <h4 className="m-0 mb-4 font-serif text-[38px] font-light leading-[1.1] text-ivory">
              {v.heading}
            </h4>
          ) : null}
          {v.body ? (
            <p className="mx-auto m-0 mb-6 max-w-[42ch] font-serif text-lg italic leading-[1.5] text-[#d4cdb8]">
              {v.body}
            </p>
          ) : null}
          {v.ctaLabel && v.ctaHref ? (
            <Link
              href={v.ctaHref as never}
              className="inline-block border border-gold-soft px-7 py-3.5 text-[10px] uppercase tracking-wide-eyebrow text-ivory no-underline transition-colors hover:bg-gold-soft hover:text-olive-dk"
            >
              {v.ctaLabel} →
            </Link>
          ) : null}
        </div>
      );
    },
  },
};

export function ArticleProse({ value }: { value?: PortableTextBlock[] }) {
  if (!value?.length) return null;
  return (
    <div className="pt-14">
      <PortableText value={value} components={components} />
    </div>
  );
}
