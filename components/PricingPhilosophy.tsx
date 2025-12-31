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
          <div className="border border-border rounded-lg p-6 space-y-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              POC Sprint
            </h3>
            <p className="text-muted">
              Fixed-scope, short engagement to validate a core behavior with a working prototype.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6 space-y-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              MVP Launch
            </h3>
            <p className="text-muted">
              Fixed-range engagement to ship a product non-technical founders can put in front of real users.
            </p>
          </div>
          
          <div className="border border-border rounded-lg p-6 space-y-2">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Launchpad Ops
            </h3>
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
