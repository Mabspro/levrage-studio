export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          What LevrAge Innovation Studios does
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          LevrAge Innovation Studios helps non-technical founders go from idea to functioning software by handling the architecture, infrastructure, and first version builds that most "quick fixes" skip.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-semibold text-foreground">
              POC → MVP builds
            </h3>
            <p className="text-muted">
              Rapid builds you can click, test, and show to users or investors.
            </p>
            <p className="text-sm text-muted">
              Focused scopes that validate the core behavior, not every feature.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Backend, hosting, and integrations
            </h3>
            <p className="text-muted">
              Auth, data models, API integrations, deployments, and monitoring.
            </p>
            <p className="text-sm text-muted">
              Clean setups that can later be handed off to your own team or vendors.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-semibold text-foreground">
              Graduation, not dependency
            </h3>
            <p className="text-muted">
              Everything is built with the assumption you'll outgrow the studio.
            </p>
            <p className="text-sm text-muted">
              When you're ready, your product moves into accounts you own — with a roadmap for the next team.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
