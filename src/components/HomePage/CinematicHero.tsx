import Image from 'next/image'

import { urlFor } from '@/sanity/lib/image'
import type { HomePage, HomePageMedia } from '@/sanity/queries/home'

type CinematicHeroProps = {
  hero: NonNullable<HomePage['hero']>
  image: NonNullable<HomePageMedia['hero']>['image']
  marqueeDestinations?: HomePageMedia['marqueeDestinations']
}

const FALLBACK_MARQUEE = [
  'Punta Cana',
  'Amalfi',
  'Provence',
  'Santorini',
  'Mallorca',
  "Cap d'Antibes",
  'Mustique',
  'Lake Como',
  'Tuscany',
  'Mykonos',
  'St. Barths',
  'Tulum',
  'Marrakech',
  'Hamptons',
  'Aspen',
]

/**
 * Render a headline string with markdown-lite emphasis:
 *   "The *art* of the *destination* wedding."
 * → words wrapped in single asterisks become italic-gold accents.
 */
function renderHeadline(text: string) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
      return (
        <em key={i} className="italic text-[var(--color-cine-gold)]">
          {part.slice(1, -1)}
        </em>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export function CinematicHero({
  hero,
  image,
  marqueeDestinations,
}: CinematicHeroProps) {
  const marquee =
    marqueeDestinations && marqueeDestinations.length > 0
      ? marqueeDestinations
      : FALLBACK_MARQUEE
  const marqueeDoubled = [...marquee, ...marquee]

  const imageUrl = image?.asset
    ? urlFor(image).width(2400).fit('max').auto('format').url()
    : null

  return (
    <section className="relative h-screen min-h-[760px] max-h-[980px] overflow-hidden bg-[var(--color-cine-bg)] isolate">
      {/* Layer 1 — Background image with Ken-Burns drift */}
      {imageUrl ? (
        <div
          className="absolute -inset-[4%] z-0 motion-safe:[animation:ken-burns_26s_ease-in-out_infinite_alternate]"
          data-cine-anim
        >
          <Image
            src={imageUrl}
            alt={image?.alt ?? ''}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ filter: 'saturate(0.78) contrast(1.05) brightness(0.74)' }}
          />
        </div>
      ) : null}

      {/* Layer 2 — Vignette (radial + vertical) */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.35) 90%), linear-gradient(180deg, rgba(13,15,10,0.55) 0%, transparent 22%, transparent 55%, rgba(13,15,10,0.85) 100%)',
        }}
      />

      {/* Layer 3 — Corner brackets */}
      <div
        aria-hidden
        className="absolute inset-8 z-[3] pointer-events-none hidden md:block"
      >
        <span
          data-cine-anim
          className="absolute top-0 left-0 h-11 w-11 border-t border-l border-[rgba(212,186,140,0.55)] [animation:corner-in_1.6s_cubic-bezier(0.2,0.7,0.3,1)_0.15s_both]"
        />
        <span
          data-cine-anim
          className="absolute top-0 right-0 h-11 w-11 border-t border-r border-[rgba(212,186,140,0.55)] [animation:corner-in_1.6s_cubic-bezier(0.2,0.7,0.3,1)_0.30s_both]"
        />
        <span
          data-cine-anim
          className="absolute bottom-0 left-0 h-11 w-11 border-b border-l border-[rgba(212,186,140,0.55)] [animation:corner-in_1.6s_cubic-bezier(0.2,0.7,0.3,1)_0.45s_both]"
        />
        <span
          data-cine-anim
          className="absolute bottom-0 right-0 h-11 w-11 border-b border-r border-[rgba(212,186,140,0.55)] [animation:corner-in_1.6s_cubic-bezier(0.2,0.7,0.3,1)_0.60s_both]"
        />
      </div>

      {/* Layer 4 — Centered content column */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center px-[7vw]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center text-ivory">
          {hero.overline ? (
            <div className="mb-8 flex items-center justify-center gap-[18px]">
              <span
                aria-hidden
                className="h-px w-[60px] bg-[var(--color-cine-gold)]"
              />
              <span className="text-[10px] uppercase tracking-wide-eyebrow text-[var(--color-cine-sage)]">
                {hero.overline}
              </span>
              <span
                aria-hidden
                className="h-px w-[60px] bg-[var(--color-cine-gold)]"
              />
            </div>
          ) : null}

          <h1
            data-cine-anim
            className="m-0 font-serif font-light text-ivory text-[clamp(56px,12vw,148px)] leading-[0.94] tracking-[-0.018em] [animation:headline-rise_1.6s_cubic-bezier(0.18,0.7,0.2,1)_0.2s_both]"
          >
            {renderHeadline(hero.headline ?? '')}
          </h1>

          {hero.subheadline ? (
            <p
              data-cine-anim
              className="mt-9 max-w-[48ch] font-serif italic text-[clamp(17px,2.2vw,22px)] leading-relaxed text-[var(--color-cine-ivory)] [animation:deck-fade_1.4s_ease-out_0.55s_both]"
            >
              {hero.subheadline}
            </p>
          ) : null}

          {(hero.primaryCta?.label || hero.secondaryCta?.label) && (
            <div
              data-cine-anim
              className="mt-12 flex flex-wrap items-center justify-center gap-5 [animation:deck-fade_1.4s_ease-out_0.8s_both]"
            >
              {hero.primaryCta?.label ? (
                <a
                  href={hero.primaryCta.href ?? '#'}
                  className="inline-block border border-[var(--color-cine-gold)] bg-transparent px-[34px] py-[18px] text-[10px] uppercase tracking-wide-eyebrow text-ivory no-underline transition-colors duration-300 hover:bg-[var(--color-cine-gold)] hover:text-olive-dk"
                >
                  {hero.primaryCta.label}
                </a>
              ) : null}
              {hero.secondaryCta?.label ? (
                <a
                  href={hero.secondaryCta.href ?? '#'}
                  className="inline-block border border-[rgba(212,186,140,0.4)] bg-transparent px-[34px] py-[18px] text-[10px] uppercase tracking-wide-eyebrow text-[var(--color-cine-ivory)] no-underline transition-colors duration-300 hover:bg-[rgba(212,186,140,0.18)] hover:text-ivory"
                >
                  {hero.secondaryCta.label}
                </a>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {/* Layer 5 — Bottom strip: marquee + scroll cue */}
      <div className="absolute inset-x-0 bottom-0 z-[4] flex flex-col pointer-events-none">
        <div
          className="relative hidden md:block h-[42px] overflow-hidden border-t border-b border-[rgba(212,186,140,0.18)] bg-[rgba(13,15,10,0.5)] backdrop-blur-[6px]"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
          }}
        >
          <div
            data-cine-anim
            className="flex h-full w-max items-center [animation:marquee-x_110s_linear_infinite]"
          >
            {marqueeDoubled.map((place, i) => (
              <span
                key={`${place}-${i}`}
                className="inline-flex items-center gap-7 px-7 whitespace-nowrap font-serif italic text-[18px] tracking-[0.04em] text-[var(--color-cine-gold)]"
              >
                <span>{place}</span>
                <span className="text-[8px] text-[rgba(212,186,140,0.6)] -translate-y-px">
                  ◇
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-[14px] py-[22px] pb-[18px]">
          <span className="text-[9px] uppercase tracking-wide-eyebrow text-[rgba(245,240,230,0.6)]">
            Scroll
          </span>
          <span className="relative block h-9 w-px overflow-hidden bg-[rgba(212,186,140,0.2)]">
            <span
              data-cine-anim
              className="absolute -top-9 left-0 right-0 h-9 bg-[linear-gradient(180deg,transparent,#d4ba8c)] [animation:scroll-cue_2.4s_cubic-bezier(0.7,0,0.3,1)_infinite]"
            />
          </span>
        </div>
      </div>
    </section>
  )
}
