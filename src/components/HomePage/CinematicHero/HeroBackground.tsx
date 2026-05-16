'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

import { urlFor } from '@/sanity/lib/image'
import type { HomePageMedia } from '@/sanity/queries/home'

type HeroBackgroundProps = {
  image: NonNullable<HomePageMedia['hero']>['image']
}

export function HeroBackground({ image }: HeroBackgroundProps) {
  const parallaxRef = useRef<HTMLDivElement | null>(null)

  const imageUrl = image?.asset
    ? urlFor(image).width(2400).fit('max').auto('format').url()
    : null

  useEffect(() => {
    const el = parallaxRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 700)
        el.style.setProperty('--cine-parallax', `${y * 0.25}px`)
        raf = 0
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  if (!imageUrl) return null

  return (
    <div
      ref={parallaxRef}
      data-cine-parallax
      className="absolute -inset-[4%] z-0 will-change-transform"
      style={{ transform: 'translate3d(0, var(--cine-parallax, 0px), 0)' }}
    >
      <div
        className="absolute inset-0 motion-safe:[animation:ken-burns_26s_cubic-bezier(0.45,0.05,0.55,0.95)_infinite_alternate]"
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
    </div>
  )
}
