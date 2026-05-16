const CORNER_BASE =
  'absolute h-11 w-11 border-[rgba(212,186,140,0.55)] [animation:corner-in_1.6s_cubic-bezier(0.2,0.7,0.3,1)_var(--cine-corner-delay,0s)_both]'

export function HeroCorners() {
  return (
    <div
      aria-hidden
      className="absolute inset-8 z-3 pointer-events-none hidden md:block"
    >
      <span
        data-cine-anim
        className={`${CORNER_BASE} top-0 left-0 border-t border-l`}
        style={{ ['--cine-corner-delay' as string]: '0.15s' }}
      />
      <span
        data-cine-anim
        className={`${CORNER_BASE} top-0 right-0 border-t border-r`}
        style={{ ['--cine-corner-delay' as string]: '0.30s' }}
      />
      <span
        data-cine-anim
        className={`${CORNER_BASE} bottom-0 left-0 border-b border-l`}
        style={{ ['--cine-corner-delay' as string]: '0.45s' }}
      />
      <span
        data-cine-anim
        className={`${CORNER_BASE} bottom-0 right-0 border-b border-r`}
        style={{ ['--cine-corner-delay' as string]: '0.60s' }}
      />
    </div>
  )
}
