import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function ClientMVPs() {
  const items = getPortfolioBySection('client_mvps')
  if (items.length === 0) return null

  return (
    <section id="client-mvps" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_0%_50%,rgba(0,217,255,0.05),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
          Client delivery
        </p>
        <h2 className="text-3xl font-heading font-bold text-foreground sm:text-4xl text-balance">
          Selected client MVPs
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          Shown with permission — execution patterns and shipped scope, not proprietary product
          ideas.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="group flex h-full flex-col rounded-xl border border-border/80 bg-gradient-to-b from-[#0f1528] to-[#0a0e1a] p-6 shadow-[0_6px_24px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30"
            >
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {item.displayName || item.name}
              </h3>

              {item.problem && (
                <div className="mt-4 space-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
                    Problem
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{item.problem}</p>
                </div>
              )}

              {item.solution && (
                <div className="mt-4 space-y-1.5">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
                    Solution
                  </p>
                  <p className="text-sm leading-relaxed text-muted">{item.solution}</p>
                </div>
              )}

              {!item.problem && !item.solution && (
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.blurb}</p>
              )}

              {item.bullets && item.bullets.length > 0 && (
                <div className="mt-5 flex-grow space-y-2 border-t border-border/60 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
                    What we shipped
                  </p>
                  <ul className="space-y-2 text-xs leading-relaxed text-muted">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70"
                          aria-hidden
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.url && (
                <div className="mt-6 pt-1">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80"
                  >
                    <span>{item.linkLabel || 'View site'}</span>
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
