'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { usePathname, useRouter } from '@/i18n/navigation'
import { type Locale, locales } from '@/i18n/routing'

type LanguageSwitcherProps = {
  currentLocale: Locale
  /**
   * "inline"  — desktop header dropdown (compact, ivory popover)
   * "stacked" — mobile overlay (full list, ivory background)
   * "footer"  — footer bottom bar (full list, dark background, dot separators)
   */
  variant?: 'inline' | 'stacked' | 'footer'
  className?: string
}

export function LanguageSwitcher({
  currentLocale,
  variant = 'inline',
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()

  const select = (target: Locale) => {
    if (target === currentLocale) return
    router.replace(
      // Pathname may be a dynamic-segment key (e.g. "/venues/[region]/[venue]");
      // next-intl requires { pathname, params } in that case. Passing both unconditionally is safe.
      { pathname, params } as never,
      { locale: target },
    )
  }

  if (variant === 'footer') {
    return (
      <ul
        className={clsx(
          'flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] uppercase tracking-eyebrow text-footer-muted',
          className,
        )}
      >
        {locales.map((l, i) => (
          <li key={l} className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => select(l)}
              className={clsx(
                'transition-colors',
                l === currentLocale
                  ? 'text-footer-heading'
                  : 'hover:text-ivory',
              )}
              aria-current={l === currentLocale ? 'true' : undefined}
            >
              {l.toUpperCase()}
            </button>
            {i < locales.length - 1 ? <span aria-hidden>·</span> : null}
          </li>
        ))}
      </ul>
    )
  }

  if (variant === 'stacked') {
    return (
      <ul
        className={clsx(
          'flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-wide-eyebrow text-muted',
          className,
        )}
      >
        {locales.map((l, i) => (
          <li key={l} className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => select(l)}
              className={clsx(
                'min-h-11 transition-colors',
                l === currentLocale ? 'text-olive' : 'hover:text-olive',
              )}
              aria-current={l === currentLocale ? 'true' : undefined}
            >
              {l.toUpperCase()}
            </button>
            {i < locales.length - 1 ? <span aria-hidden>·</span> : null}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <InlineDropdown
      currentLocale={currentLocale}
      onSelect={select}
      className={className}
    />
  )
}

function InlineDropdown({
  currentLocale,
  onSelect,
  className,
}: {
  currentLocale: Locale
  onSelect: (l: Locale) => void
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const others = locales.filter((l) => l !== currentLocale)

  return (
    <div ref={rootRef} className={clsx('relative', className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={clsx(
          'inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wide-eyebrow text-muted',
          'transition-colors hover:text-olive',
          open && 'text-olive',
        )}
      >
        <span>{currentLocale.toUpperCase()}</span>
        <Chevron open={open} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.ul
            key="lang-menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.2, 0.7, 0.3, 1] }}
            role="listbox"
            className={clsx(
              'absolute right-0 top-full mt-3 min-w-[88px]',
              'border border-rule bg-ivory py-2 shadow-[0_8px_24px_-12px_rgba(28,28,24,0.18)]',
            )}
          >
            {others.map((l) => (
              <li key={l} role="option" aria-selected={false}>
                <button
                  type="button"
                  onClick={() => {
                    onSelect(l)
                    setOpen(false)
                  }}
                  className="flex w-full items-center justify-end gap-2 px-4 py-2 text-[10px] uppercase tracking-wide-eyebrow text-ink transition-colors hover:text-olive"
                >
                  {l.toUpperCase()}
                </button>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="8"
      height="6"
      viewBox="0 0 8 6"
      aria-hidden="true"
      className={clsx(
        'transition-transform duration-200',
        open && 'rotate-180',
      )}
    >
      <path
        d="M1 1.5 L4 4.5 L7 1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}
