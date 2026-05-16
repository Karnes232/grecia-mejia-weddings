import { setRequestLocale } from 'next-intl/server'

type HomePageProps = {
  params: Promise<{ locale: string }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="mx-auto max-w-[1100px] px-6 py-32 md:px-14">
      <p className="text-[10px] uppercase tracking-wide-eyebrow text-muted">
        Locale · {locale}
      </p>
      <h1 className="mt-4 font-serif text-[88px] leading-[0.95] tracking-[-0.012em] text-ink">
        Curating <span className="italic text-olive">timeless</span> weddings.
      </h1>
      <p className="mt-6 max-w-[48ch] font-serif italic text-[22px] leading-relaxed text-ink/80">
        Homepage scaffolding. The cinematic hero, atlas grid, and editorial
        sections will land in subsequent passes.
      </p>
    </div>
  )
}
