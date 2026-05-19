import display from '@/data/portfolio.display.json'
import publicData from '@/data/portfolio.public.json'

export type PortfolioSection =
  | 'platform'
  | 'institutional'
  | 'flagships'
  | 'client_mvps'
  | 'labs'
  | 'community'
export type PortfolioStatus = 'live' | 'selected' | 'experiment'

export interface PortfolioPublicItem {
  id: string
  name: string
  url: string | null
  blurb: string
  section: PortfolioSection
  status: PortfolioStatus
  sort?: number
}

export interface PortfolioDisplayExtra {
  logo?: string
  headline?: string
  displayName?: string
  blurb?: string
  url?: string | null
  problem?: string
  solution?: string
  bullets?: string[]
  linkLabel?: string
}

export type PortfolioItem = PortfolioPublicItem & PortfolioDisplayExtra

const displayMap = display as Record<string, PortfolioDisplayExtra | string>

function mergeItem(item: PortfolioPublicItem): PortfolioItem {
  const raw = displayMap[item.id]
  if (!raw || typeof raw === 'string' || item.id.startsWith('_')) return item
  return { ...item, ...raw }
}

export function getPortfolioBySection(section: PortfolioSection): PortfolioItem[] {
  return publicData.items
    .filter((item) => item.section === section)
    .sort((a, b) => (a.sort ?? 99) - (b.sort ?? 99))
    .map((item) => mergeItem(item as PortfolioPublicItem))
}

export const portfolioMeta = {
  generated: publicData.generated,
  count: publicData.count,
}
