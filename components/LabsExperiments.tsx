import Link from 'next/link'
import { getPortfolioBySection } from '@/lib/portfolio'

export default function LabsExperiments() {
  const items = getPortfolioBySection('labs')
  if (items.length === 0) return null

  const withUrl = items.filter((i) => i.url)
  const ideasOnly = items.filter((i) => !i.url)

  return (
    <section id="labs-experiments" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
          Exploratory
        </p>
        <h2 className="text-3xl font-heading font-bold text-foreground sm:text-4xl">
          Labs & experiments
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          Project ideas and early builds — some shipped as demos, most started for clients or partners
          who didn&apos;t move forward. Not maintained like{' '}
          <a href="#community-work" className="text-primary hover:underline">
            community work
          </a>{' '}
          above.
        </p>

        {withUrl.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {withUrl.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-border/80 border-l-2 border-l-primary/50 bg-[#0c101c] p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {item.displayName || item.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-wider text-muted">Demo / paused</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.blurb}</p>
                <Link
                  href={item.url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-medium text-primary hover:underline"
                >
                  View build →
                </Link>
              </div>
            ))}
          </div>
        )}

        {ideasOnly.length > 0 && (
          <ul className={`space-y-5 ${withUrl.length > 0 ? 'mt-10' : 'mt-12'}`}>
            {ideasOnly.map((item) => (
              <li
                key={item.id}
                className="border-l-2 border-primary/40 pl-5 transition-colors hover:border-primary/70"
              >
                <h3 className="font-heading text-base font-semibold text-foreground">
                  {item.displayName || item.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.blurb}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
