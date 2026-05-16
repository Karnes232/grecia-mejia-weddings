'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { usePathname } from '@/i18n/navigation'

type NavbarShellProps = {
  desktopCenter: React.ReactNode
  desktopRight: React.ReactNode
  brand: React.ReactNode
  mobileMenu: React.ReactNode
  openLabel: string
  closeLabel: string
}

export function NavbarShell({
  desktopCenter,
  desktopRight,
  brand,
  mobileMenu,
  openLabel,
  closeLabel,
}: NavbarShellProps) {
  const [visible, setVisible] = useState(true)
  const [open, setOpen] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const pathname = usePathname()

  // Hide on scroll-down / reveal on scroll-up (>80px threshold)
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        const last = lastScrollY.current
        if (open) {
          setVisible(true)
        } else if (y < 80) {
          setVisible(true)
        } else if (y > last + 4) {
          setVisible(false)
        } else if (y < last - 4) {
          setVisible(true)
        }
        lastScrollY.current = y
        ticking.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  // Close overlay on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock body scroll + ESC handler while overlay is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        data-visible={visible}
        className={clsx(
          'sticky top-0 z-50 bg-ivory border-b border-rule',
          'transition-transform duration-[400ms] [transition-timing-function:var(--ease-silk)]',
          'data-[visible=false]:-translate-y-full',
        )}
      >
        <div className="flex items-center px-6 py-5 md:px-14 md:py-6">
          <div className="flex-1 flex items-center">{brand}</div>
          <nav
            aria-label="Primary"
            className="hidden xl:flex items-center justify-center gap-8"
          >
            {desktopCenter}
          </nav>
          <div className="hidden xl:flex xl:ml-4 flex-1 items-center justify-end gap-6">
            {desktopRight}
          </div>
          <button
            type="button"
            aria-label={open ? closeLabel : openLabel}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-auto inline-flex h-10 w-10 items-center justify-center text-ink xl:hidden"
          >
            {open ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-overlay"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-ivory lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex h-full flex-col px-8 pt-24 pb-10 overflow-y-auto">
              {mobileMenu}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
