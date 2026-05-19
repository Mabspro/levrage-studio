import { getPortfolioBySection, type PortfolioItem } from '@/lib/portfolio'
import PortfolioFlagshipCard from '@/components/PortfolioFlagshipCard'

const FLAGSHIP_ACCENTS: Record<string, 'primary' | 'secondary'> = {
  'coppercloud-ai': 'primary',
  'levrage-solutions': 'primary',
  'network-manager': 'primary',
  'lobito-platform': 'secondary',
  'zambia-untold': 'secondary',
  healyri: 'primary',
}

function getAccent(item: PortfolioItem): 'primary' | 'secondary' {
  return FLAGSHIP_ACCENTS[item.id] ?? 'primary'
}

export default function StudioFlagships() {
  const items = getPortfolioBySection('flagships')
  if (items.length === 0) return null

  return (
    <section id="studio-flagships" className="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,217,255,0.07),transparent)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary/80">
          In-house products
        </p>
        <h2 className="text-3xl font-heading font-bold text-foreground sm:text-4xl text-balance">
          Studio flagships
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
          Built and owned at LevrAge Innovation Studios — the same stack and patterns behind live
          SaaS, corridor infrastructure, and institutional surfaces.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item) => (
            <PortfolioFlagshipCard key={item.id} item={item} accent={getAccent(item)} />
          ))}
        </div>
        </div>
    </section>
  )
}
