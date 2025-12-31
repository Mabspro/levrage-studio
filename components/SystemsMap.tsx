'use client'

import { useState } from 'react'

interface SystemNode {
  id: string
  label: string
  insight: string
}

const nodes: SystemNode[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    insight: 'React-first, because real users need real interactions, not static pages.',
  },
  {
    id: 'auth',
    label: 'Auth',
    insight: 'Auth first, because real users change everything.',
  },
  {
    id: 'api',
    label: 'API',
    insight: 'RESTful patterns that can evolve, not over-engineered microservices.',
  },
  {
    id: 'database',
    label: 'Database',
    insight: 'Schema that reflects real use, not theoretical perfection.',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    insight: 'Third-party APIs that extend capability without creating dependency.',
  },
  {
    id: 'monitoring',
    label: 'Monitoring',
    insight: 'Basic observability from day one, because production breaks.',
  },
]

export default function SystemsMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-border/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4 text-center">
          How we think about systems
        </h2>
        <p className="text-lg text-muted mb-12 text-center max-w-2xl mx-auto">
          Every MVP needs infrastructure decisions. Here's how we approach them at the studio.
        </p>

        <div className="relative bg-background border border-border rounded-lg p-8 md:p-16">
          {/* Simple grid layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {nodes.map((node) => {
              const isHovered = hoveredNode === node.id
              return (
                <button
                  key={node.id}
                  type="button"
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="relative group text-left"
                >
                  <div
                    className={`p-4 rounded-lg border min-h-[100px] transition-[border-color,background-color,box-shadow] duration-300 ease-out will-change-[border-color,background-color,box-shadow] ${
                      isHovered
                        ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 transition-[background-color,box-shadow] duration-300 ease-out will-change-[background-color,box-shadow] ${
                          isHovered
                            ? 'bg-primary shadow-lg shadow-primary/50'
                            : 'bg-border group-hover:bg-primary/50'
                        }`}
                      />
                      <h3
                        className={`text-sm font-medium transition-colors duration-300 ease-out will-change-[color] ${
                          isHovered ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {node.label}
                      </h3>
                    </div>
                    {/* Reserve space for insight text to prevent layout shift */}
                    <div className="mt-2 min-h-[40px]">
                      <p
                        className={`text-xs text-muted transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] ${
                          isHovered
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-2 pointer-events-none'
                        }`}
                      >
                        {node.insight}
                      </p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Central insight display for mobile - fixed height to prevent shift */}
          <div className="mt-8 md:hidden min-h-[60px]">
            <div
              className={`bg-background border border-primary/50 rounded-lg p-4 transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] ${
                hoveredNode
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}
            >
              {hoveredNode && (
                <p className="text-sm text-foreground">
                  {nodes.find((n) => n.id === hoveredNode)?.insight}
                </p>
              )}
            </div>
          </div>
        </div>

        <p className="text-sm text-muted text-center mt-8 max-w-2xl mx-auto">
          Hover over each component to see why these decisions matter at MVP stage.
        </p>
      </div>
    </section>
  )
}
