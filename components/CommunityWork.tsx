import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function CommunityWork() {
  const items = getPortfolioBySection('community')
  if (items.length === 0) return null

  return (
    <section id="community-work" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Community work
        </h2>
        <p className="text-lg text-muted mb-8">
          Built for community organizations — stays live and maintained, separate from client MVP
          engagements.
        </p>

        {items.map((item) => (
          <div
            key={item.id}
            className="border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-lg font-heading font-semibold text-foreground">
              {item.headline || item.name}
            </h3>
            <p className="text-muted text-sm">{item.blurb}</p>
            {item.bullets && (
              <ul className="text-xs text-muted space-y-1">
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
                className="text-xs text-primary hover:underline"
              >
                {item.linkLabel || 'Visit site'} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
