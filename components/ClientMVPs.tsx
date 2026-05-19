import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function ClientMVPs() {
  const items = getPortfolioBySection('client_mvps')

  return (
    <section id="client-mvps" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Selected client MVPs
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          Client work is shown with permission and focuses on execution patterns — not on exposing
          anyone&apos;s proprietary ideas.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="border border-border rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {item.displayName || item.name}
              </h3>
              {item.problem && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-foreground">Problem:</p>
                  <p className="text-sm text-muted">{item.problem}</p>
                </div>
              )}
              {item.solution && (
                <div className="space-y-2">
                  <p className="text-xs font-medium text-foreground">Solution:</p>
                  <p className="text-sm text-muted">{item.solution}</p>
                </div>
              )}
              {!item.problem && <p className="text-sm text-muted">{item.blurb}</p>}
              {item.bullets && item.bullets.length > 0 && (
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-medium text-foreground">What we shipped:</p>
                  <ul className="text-xs text-muted space-y-1">
                    {item.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              )}
              {item.url && (
                <div className="pt-2">
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline"
                  >
                    {item.linkLabel || 'View site'} →
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
