export default function WhyAI() {
  return (
    <section id="why-ai" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          AI builds code. Studios build products.
        </h2>
        <p className="text-lg text-muted mb-8">
          AI tools are incredible accelerators, but they don't own your architecture, your uptime, or your user trust. LevrAge Innovation Studios uses AI inside a disciplined build process rather than outsourcing judgment to a prompt.
        </p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted">AI generates snippets, not coherent systems with tradeoffs.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted">Prompts don't design your data model, infra, or error paths.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted">Real users force real iteration, not one-off generations.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span className="text-muted">Someone has to be accountable when production breaks.</span>
          </li>
        </ul>
        
        <p className="text-muted">
          AI is part of the workflow here — never a substitute for ownership, judgment, or engineering decisions.
        </p>
      </div>
    </section>
  )
}
