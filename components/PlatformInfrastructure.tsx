import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function PlatformInfrastructure() {
  const items = getPortfolioBySection('platform')
  if (items.length === 0) return null

  return (
    <section id="platform-infrastructure" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Platform infrastructure
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          The largest systems we operate — sovereign-grade infrastructure, not client MVPs. When
          prospects ask what we&apos;ve built at scale, this is it.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-primary/30 rounded-lg p-6 space-y-4 bg-primary/5"
            >
              <p className="text-xs uppercase tracking-widest text-primary font-medium">
                Sovereign infrastructure
              </p>
              <h3 className="text-xl font-heading font-semibold text-foreground">
                {item.headline || item.name}
              </h3>
              <p className="text-muted text-sm">{item.blurb}</p>
              {item.bullets && item.bullets.length > 0 && (
                <ul className="text-xs text-muted space-y-2">
                  {item.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              )}
              {item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-block"
                >
                  {item.linkLabel || 'View live'} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
