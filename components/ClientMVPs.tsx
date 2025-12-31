export default function ClientMVPs() {
  return (
    <section id="client-mvps" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Selected client MVPs
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          Client work is shown with permission and focuses on execution patterns — not on exposing anyone's proprietary ideas.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* The Wealth Shift */}
          <div className="border border-border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              The Wealth Shift
            </h3>
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">Problem:</p>
              <p className="text-sm text-muted">
                A wealth and finance brand needed a clear online presence that could educate and convert without a complex app.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">Solution:</p>
              <p className="text-sm text-muted">
                Brand and funnel site that explains the offer, captures leads, and guides visitors into the right next step.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-foreground">What we shipped:</p>
              <ul className="text-xs text-muted space-y-1">
                <li>• Conversion-oriented marketing site with clear narrative and CTAs.</li>
                <li>• Lightweight infrastructure that can later plug into more advanced tools.</li>
              </ul>
            </div>
          </div>
          
          {/* Alpha01 */}
          <div className="border border-border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              Alpha01 (telehealth MVP)
            </h3>
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">Problem:</p>
              <p className="text-sm text-muted">
                A health organization needed a secure way to deliver telehealth services and manage patient interactions in a specific regional context.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">Solution:</p>
              <p className="text-sm text-muted">
                Specialized telehealth MVP with secure access, visit flows, and provider–patient communication primitives.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-foreground">What we shipped:</p>
              <ul className="text-xs text-muted space-y-1">
                <li>• Auth and role-based access for patients and providers.</li>
                <li>• Telehealth-ready flows that can be extended into full EHR or integrations.</li>
              </ul>
            </div>
          </div>
          
          {/* PBS */}
          <div className="border border-border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-heading font-semibold text-foreground">
              PBS (Phoenix Bookkeeping)
            </h3>
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">Problem:</p>
              <p className="text-sm text-muted">
                A bookkeeping firm needed a simple, credible web presence and light operational tooling.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-medium text-foreground">Solution:</p>
              <p className="text-sm text-muted">
                Small business MVP that communicates services and supports basic client workflows.
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <p className="text-xs font-medium text-foreground">What we shipped:</p>
              <ul className="text-xs text-muted space-y-1">
                <li>• Service site with structured information architecture.</li>
                <li>• Simple flows that can evolve into client onboarding or portals.</li>
              </ul>
            </div>
            <div className="pt-2">
              <a
                href="https://pbs-three.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary hover:underline"
              >
                View site →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
