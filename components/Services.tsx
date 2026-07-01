export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          How we help
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          Four entry points. One door.
        </p>

        <div className="space-y-8">
          <div className="border border-primary/30 rounded-lg p-6 sm:p-8 space-y-6 bg-primary/5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Knowledge Asset Recovery Signal Scan
                </h3>
                <span className="bg-primary text-background text-xs px-2 py-0.5 rounded-full">
                  New diagnostic lane
                </span>
              </div>
              <span className="shrink-0 text-xl font-heading font-bold text-primary">$250</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Inventory of one bounded text-native notes/docs folder without changing your files</li>
                  <li>Short evidence-backed findings tied to approved source documents</li>
                  <li>Now / next / later action map that separates useful signals from stale material</li>
                  <li>Clear recommendation on whether an implementation sprint is worth pursuing</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s not included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Generic Drive cleanup, enterprise search, or a document chatbot</li>
                  <li>First-pass DOCX/PDF extraction, OCR, embeddings, or cloud ingestion</li>
                  <li>Legal, health, finance, or compliance review</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">Beta price</span> — paid diagnostic
              for messy text-native notes, repo docs, research, or planning folders
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  AI Operating System Setup
                </h3>
                <span className="bg-primary text-background text-xs px-2 py-0.5 rounded-full">
                  Most popular for founders starting out
                </span>
              </div>
              <span className="shrink-0 text-xl font-heading font-bold text-primary whitespace-nowrap">
                $500–$5K
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>AI provider setup and model routing — pick the right model for each task, not the most expensive one</li>
                  <li>Safe defaults, permissions, and human-in-the-loop guardrails — no black boxes</li>
                  <li>Token discipline strategies — stay useful without burning budget</li>
                  <li>Project-memory architecture — your AI remembers context between sessions</li>
                  <li>MCP tool wiring (read-first) — connect AI to your tools safely</li>
                  <li>Runbook and operating doctrine — documented so you&apos;re not locked in</li>
                  <li>Post-setup consult — a couple of weeks of check-ins so the setup sticks in real use</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s not included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Fully autonomous operations without review</li>
                  <li>Compliance or security guarantees</li>
                  <li>Long-term managed IT or monitoring</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">Starting from</span> — individual
              setups from ~$500; fuller sprints up to $5K (fixed-scope diagnostic + setup)
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  Custom Build — POC to MVP
                </h3>
                <span className="border border-border text-muted text-xs px-2 py-0.5 rounded-full">
                  For founders who need working software
                </span>
              </div>
              <span className="shrink-0 text-xl font-heading font-bold text-primary whitespace-nowrap">
                $2K–$5K
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Full-stack web application — auth, data model, API, deployment</li>
                  <li>One focused scope that validates the core behavior</li>
                  <li>Fast iteration with real users — not generated code drops</li>
                  <li>Hosting setup in accounts you own</li>
                  <li>Handoff documentation and gradation roadmap</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s not included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Large-team features, scale engineering</li>
                  <li>Open-ended maintenance retainer</li>
                  <li>Mobile apps (scoped separately)</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">Starting from</span> — fixed-scope
              MVP sprint
            </p>
          </div>

          <div className="border border-border rounded-lg p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl font-heading font-semibold text-foreground">
                Technical Advisory &amp; Strategy
              </h3>
              <span className="border border-border text-muted text-xs px-2 py-0.5 rounded-full">
                For teams who need direction before build
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Architecture review, project-state audit, risk assessment</li>
                  <li>Tool selection, provider routing, budget sizing</li>
                  <li>Technical doctrine — what&apos;s true, what&apos;s proposed, what&apos;s allowed</li>
                  <li>Light restructure of existing code or docs</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-foreground">What&apos;s not included</h4>
                <ul className="text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Full implementation (bundled with setup or build)</li>
                  <li>Legal opinions, compliance certification</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
