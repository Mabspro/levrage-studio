import Image from 'next/image'
import Link from 'next/link'
import type { PortfolioItem } from '@/lib/portfolio'

const ACCENT_STYLES = {
  primary: 'border-primary/25 bg-primary/[0.07] text-primary',
  secondary: 'border-secondary/25 bg-secondary/[0.07] text-secondary',
} as const

const STATUS_STYLES = {
  live: 'bg-primary/15 text-primary border-primary/30',
  selected: 'bg-foreground/5 text-foreground/80 border-border',
  experiment: 'bg-secondary/15 text-secondary border-secondary/30',
} as const

const STATUS_LABEL = {
  live: 'Live',
  selected: 'Maintained',
  experiment: 'In progress',
} as const

type CardAccent = keyof typeof ACCENT_STYLES

function getMonogramLabel(item: PortfolioItem): string {
  const name = item.displayName || item.name
  const words = name.split(/\s+/).filter(Boolean)
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return name.slice(0, 2).toUpperCase()
}

export default function PortfolioFlagshipCard({
  item,
  accent = 'primary',
}: {
  item: PortfolioItem
  accent?: CardAccent
}) {
  const title = item.headline || item.displayName || item.name
  const accentClass = ACCENT_STYLES[accent]
  const statusStyle = STATUS_STYLES[item.status]
  const statusLabel = STATUS_LABEL[item.status]

  return (
    <article className="group relative flex h-full flex-col rounded-xl border border-border/80 bg-gradient-to-b from-[#0f1528] to-[#0a0e1a] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_12px_40px_rgba(0,217,255,0.08)]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="mb-5 flex items-start justify-between gap-3">
        {item.logo ? (
          <div className="relative h-11 w-28 shrink-0">
            <Image
              src={item.logo}
              alt=""
              fill
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
        ) : (
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-sm font-semibold tracking-wide ${accentClass}`}
            aria-hidden
          >
            {getMonogramLabel(item)}
          </div>
        )}
        <span
          className={`shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${statusStyle}`}
        >
          {statusLabel}
        </span>
      </div>

      <h3 className="text-lg font-heading font-semibold leading-snug text-foreground text-balance">
        {title}
      </h3>

      <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">{item.blurb}</p>

      {item.bullets && item.bullets.length > 0 && (
        <div className="mt-5 space-y-2 border-t border-border/60 pt-4">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
            What we shipped
          </p>
          <ul className="space-y-2 text-xs leading-relaxed text-muted">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.url ? (
        <div className="mt-6 pt-2">
          <Link
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            <span>{item.linkLabel || 'View live'}</span>
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
              →
            </span>
          </Link>
        </div>
      ) : (
        <p className="mt-6 text-xs text-muted/80">{item.linkLabel || 'Mobile · studio flagship'}</p>
      )}
    </article>
  )
}
