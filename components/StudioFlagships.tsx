import Image from 'next/image'
import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function StudioFlagships() {
  const items = getPortfolioBySection('flagships')

  return (
    <section id="studio-flagships" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Studio flagships
        </h2>
        <p className="text-xs text-muted mb-4">
          Built using the same stack and patterns behind live SaaS products, healthcare MVPs, and
          infrastructure-grade experiments.
        </p>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          These are products built and owned in-house at LevrAge Innovation Studios, showing how the
          studio thinks about systems, data, and real-world use.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors"
            >
              {item.logo && (
                <div className="h-12 relative">
                  <Image
                    src={item.logo}
                    alt={`${item.name} logo`}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              )}
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {item.headline || item.name}
              </h3>
              <p className="text-muted text-sm">{item.blurb}</p>
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
                    {item.linkLabel ? `${item.linkLabel} →` : 'View live →'}
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
