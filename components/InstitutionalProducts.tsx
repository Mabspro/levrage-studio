import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function InstitutionalProducts() {
  const items = getPortfolioBySection('institutional')
  if (items.length === 0) return null

  return (
    <section id="institutional-products" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Institutional products
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          Fully built systems for evidence, traceability, and institutional decision-making — shipped
          end-to-end, not experiments.
        </p>

        <div className="grid gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg p-8 space-y-4 md:flex md:gap-8 md:items-start"
            >
              <div className="flex-1 space-y-4">
                <p className="text-xs uppercase tracking-widest text-muted font-medium">
                  Fully built · {item.status === 'live' ? 'Live' : 'Selected'}
                </p>
                <h3 className="text-2xl font-heading font-semibold text-foreground">
                  {item.displayName || item.headline || item.name}
                </h3>
                <p className="text-muted">{item.blurb}</p>
                {item.bullets && item.bullets.length > 0 && (
                  <ul className="text-sm text-muted space-y-2">
                    {item.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                )}
              </div>
              {item.url && (
                <div className="md:flex-shrink-0">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    {item.linkLabel || 'View live dashboard'} →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
