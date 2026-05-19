import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function CommunityWork() {
  const items = getPortfolioBySection('community')
  if (items.length === 0) return null

  return (
    <section id="community-work" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-border/10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_80%_0%,rgba(255,165,0,0.06),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-secondary/90">
          Shipped & maintained
        </p>
        <h2 className="text-3xl font-heading font-bold text-foreground sm:text-4xl text-balance">
          Community work
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          Live platforms built for community organizations — deployed, maintained, and separate from
          client MVPs and lab experiments below.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col rounded-xl border border-secondary/20 bg-gradient-to-b from-[#101828] to-[#0a0e1a] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary/40 hover:shadow-[0_12px_36px_rgba(255,165,0,0.07)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-full border border-secondary/30 bg-secondary/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-secondary">
                  Live · maintained
                </span>
              </div>

              <h3 className="text-xl font-heading font-semibold leading-snug text-foreground">
                {item.headline || item.displayName || item.name}
              </h3>

              <p className="mt-3 flex-grow text-sm leading-relaxed text-muted">
                {item.blurb}
              </p>

              {item.bullets && item.bullets.length > 0 && (
                <ul className="mt-5 space-y-2 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary/80"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              {item.url && (
                <div className="mt-6">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    <span>{item.linkLabel || 'Visit site'}</span>
                    <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
