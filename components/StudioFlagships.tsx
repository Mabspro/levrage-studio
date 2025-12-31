import Image from 'next/image'
import Link from 'next/link'

export default function StudioFlagships() {
  return (
    <section id="studio-flagships" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Studio flagships
        </h2>
        <p className="text-xs text-muted mb-4">
          Built using the same stack and patterns behind live SaaS products, healthcare MVPs, and infrastructure-grade experiments.
        </p>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          These are products built and owned in-house at LevrAge Innovation Studios, showing how the studio thinks about systems, data, and real-world use.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* LevrAge */}
          <div className="border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors">
            <div className="h-12 relative">
              <Image
                src="/images/logos/LevrAge.png"
                alt="LevrAge logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Network intelligence for serious operators.
            </h3>
            <p className="text-muted text-sm">
              A professional network intelligence platform that unifies fragmented contacts into a single view with AI-powered insights, visualizations, and filters.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-foreground">What we shipped:</p>
              <ul className="text-xs text-muted space-y-1">
                <li>• Multi-tenant SaaS-style architecture with secure auth and data separation.</li>
                <li>• Contact graph, tagging, and search with AI-assisted enrichment and insights.</li>
              </ul>
            </div>
            <div className="pt-2">
              <Link
                href="https://www.levrage.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                Status: Live flagship SaaS MVP at levrage.app →
              </Link>
            </div>
          </div>
          
          {/* CopperCloud AI */}
          <div className="border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors">
            <div className="h-12 relative">
              <Image
                src="/images/logos/CopperCoud-logo.png"
                alt="CopperCloud logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              AI + data infrastructure for operational teams.
            </h3>
            <p className="text-muted text-sm">
              An AI and data-driven environment focused on bringing cloud-style intelligence and automation to operational workflows.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-foreground">What we shipped:</p>
              <ul className="text-xs text-muted space-y-1">
                <li>• Core data and infra patterns to support AI-augmented workflows.</li>
                <li>• Deployment setup that can evolve into client-specific solutions.</li>
              </ul>
            </div>
            <div className="pt-2">
              <Link
                href="https://www.coppercloud.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                Status: Active studio venture and template for AI/infra MVPs →
              </Link>
            </div>
          </div>
          
          {/* Healyri */}
          <div className="border border-border rounded-lg p-6 space-y-4 hover:border-primary/50 transition-colors">
            <div className="h-12 relative">
              <Image
                src="/images/logos/healyri_logo.png"
                alt="Healyri logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Community emergency mobilizer
            </h3>
            <p className="text-muted text-sm">
              A health and community emergency app for emerging markets that can trigger trusted drivers, route to appropriate facilities, and coordinate response with minimal friction.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-foreground">What we shipped:</p>
              <ul className="text-xs text-muted space-y-1">
                <li>• Event-driven flow to request help and notify vetted drivers.</li>
                <li>• Location and destination logic oriented around local hospitals and services.</li>
              </ul>
            </div>
            <div className="pt-2">
              <Link
                href="https://healyri-af36a.web.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                Status: Lab-grade concept exploring emergency infrastructure patterns →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
