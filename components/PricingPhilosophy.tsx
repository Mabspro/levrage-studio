export default function PricingPhilosophy() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Pricing, in ranges not tricks
        </h2>
        <p className="text-lg text-muted mb-8">
          Early-stage builds need clarity more than precision quotes. The studio uses simple ranges and scopes instead of open-ended hourly work.
        </p>
        
        <div className="space-y-6">
          <div className="border border-primary/30 rounded-lg p-6 space-y-2 bg-primary/5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-heading font-semibold text-foreground">
                  Signal Scan
                </h3>
                <span className="bg-primary text-background text-xs px-2 py-0.5 rounded-full">
                  Beta diagnostic
                </span>
              </div>
              <span className="shrink-0 text-lg font-heading font-bold text-primary">$250</span>
            </div>
            <p className="text-muted">
              A bounded Knowledge Asset Recovery review for one messy text-native notes/docs folder. You get an inventory snapshot, evidence-backed findings, what not to build yet, and a short action map that can qualify a deeper sprint or implementation build.
            </p>
          </div>
          <div className="border border-border rounded-lg p-6 space-y-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                AI Setup Sprint
              </h3>
              <span className="shrink-0 text-lg font-heading font-bold text-primary whitespace-nowrap">
                $500–$5K
              </span>
            </div>
            <p className="text-muted">
              Fixed-scope engagement to get you running with an AI operating layer — provider config, model routing, memory structure, safe defaults, and the first runbook. Individual setups can start around $500; fuller engagements run up to $5K, with a couple of weeks of post-setup consult included. Walk away with disciplined defaults, not a black box.
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 space-y-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                POC Sprint
              </h3>
              <span className="shrink-0 border border-border text-muted text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                Fixed-scope
              </span>
            </div>
            <p className="text-muted">
              Fixed-scope, short engagement to validate a core behavior with a working prototype.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6 space-y-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                MVP Launch
              </h3>
              <span className="shrink-0 border border-border text-muted text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                Fixed-range
              </span>
            </div>
            <p className="text-muted">
              Fixed-range engagement to ship a product non-technical founders can put in front of real users.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6 space-y-2">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="text-lg font-heading font-semibold text-foreground">
                Launchpad Ops
              </h3>
              <span className="shrink-0 border border-border text-muted text-xs px-2 py-0.5 rounded-full whitespace-nowrap">
                Monthly
              </span>
            </div>
            <p className="text-muted">
              Monthly support for teams that need short-term help running and stabilizing their first version.
            </p>
          </div>
        </div>
        
        <div className="mt-8 space-y-4">
          <p className="text-sm text-muted italic">
            Compliance-heavy, regulated, or highly sensitive builds are scoped separately.
          </p>
          <div className="border-l-2 border-border pl-4 py-2">
            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">Scope boundary:</span> This studio is optimized for first versions. Long-term product development, scale engineering, or large teams are intentionally out of scope.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
