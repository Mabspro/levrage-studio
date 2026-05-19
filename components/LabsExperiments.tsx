import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function LabsExperiments() {
  const items = getPortfolioBySection('labs')

  return (
    <section id="labs-experiments" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Labs & experiments
        </h2>
        <p className="text-lg text-muted mb-8">
          These are fast experiments that show how the studio explores ideas and ships quickly. They
          are not polished products.
        </p>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="border-l-2 border-primary pl-6 space-y-2">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                {item.displayName || item.name}
              </h3>
              <p className="text-muted text-sm">{item.blurb}</p>
              {item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline inline-block"
                >
                  View experiment →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
