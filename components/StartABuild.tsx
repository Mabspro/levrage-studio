'use client'

import { useState, FormEvent } from 'react'

type HelpType = '' | 'signal-scan' | 'ai-setup' | 'custom-build' | 'advisory' | 'not-sure'

const HELP_OPTIONS: { value: HelpType; label: string }[] = [
  {
    value: 'signal-scan',
    label:
      'Signal Scan - I have messy notes/docs and need an action map before I build',
  },
  {
    value: 'ai-setup',
    label:
      'AI operating system setup — I want to use AI tools productively, not DIY the config',
  },
  { value: 'custom-build', label: 'Custom build — I need a POC or MVP shipped' },
  { value: 'advisory', label: 'Advisory — I need technical direction' },
  { value: 'not-sure', label: 'Not sure yet' },
]

const emptyForm = {
  helpType: '' as HelpType,
  name: '',
  email: '',
  role: '',
  building: '',
  audience: '',
  timeline: '',
  budget: '',
  sensitive: '',
  scanFolder: '',
  scanDecision: '',
  scanAvoid: '',
  aiTools: '',
  aiMainGoal: '',
  aiDecisionMaker: '',
  curiousAbout: '',
  advisoryNeed: '',
}

export default function StartABuild() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState(emptyForm)

  const helpType = formData.helpType

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!helpType) return

    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData(emptyForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'

  return (
    <section id="start-a-build" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Start a build
        </h2>
        <p className="text-lg text-muted mb-4">
          This is for founders who are ready to move from scattered knowledge, documents, and decks to a clear next action — whether that means a Signal Scan, an AI operating layer, or something users can actually touch.
        </p>
        <p className="text-sm text-muted mb-4">
          Share enough detail to understand what you need, who it&apos;s for, your timeline, and what success looks like. If it&apos;s not a fit, you&apos;ll hear that quickly.
        </p>

        <p className="text-xs text-primary mb-8 italic border-l-2 border-primary/30 pl-4 py-2">
          This site was built the same way your product would be.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <fieldset>
            <legend className="block text-sm font-medium text-foreground mb-3">
              What kind of help do you need? <span className="text-muted">(required)</span>
            </legend>
            <div className="space-y-2">
              {HELP_OPTIONS.map((option) => {
                const isSelected = formData.helpType === option.value
                return (
                  <label
                    key={option.value}
                    className={`flex items-start gap-3 cursor-pointer text-sm rounded-md px-3 py-2.5 -mx-3 transition-colors focus-within:ring-2 focus-within:ring-primary/50 ${
                      isSelected
                        ? 'bg-primary/10 text-foreground'
                        : 'text-muted hover:bg-border/40 hover:text-foreground'
                    }`}
                  >
                    <input
                      type="radio"
                      name="helpType"
                      required
                      value={option.value}
                      checked={isSelected}
                      onChange={() =>
                        setFormData({ ...formData, helpType: option.value })
                      }
                      className="mt-1 accent-primary"
                    />
                    <span>{option.label}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>

          {helpType && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>
            </>
          )}

          {helpType === 'signal-scan' && (
            <>
              <div>
                <label htmlFor="scanFolder" className="block text-sm font-medium text-foreground mb-2">
                  What messy notes/docs folder should we review?
                </label>
                <textarea
                  id="scanFolder"
                  required
                  rows={3}
                  value={formData.scanFolder}
                  onChange={(e) => setFormData({ ...formData, scanFolder: e.target.value })}
                  className={inputClass}
                  placeholder="Markdown notes, repo docs, exported planning docs, research folder, etc. Do not paste sensitive content here."
                />
              </div>

              <div>
                <label htmlFor="scanDecision" className="block text-sm font-medium text-foreground mb-2">
                  What decision are you trying to make from it?
                </label>
                <textarea
                  id="scanDecision"
                  required
                  rows={3}
                  value={formData.scanDecision}
                  onChange={(e) => setFormData({ ...formData, scanDecision: e.target.value })}
                  className={inputClass}
                  placeholder="What to build, what to package, what to park, what to organize, etc."
                />
              </div>

              <div>
                <label htmlFor="scanAvoid" className="block text-sm font-medium text-foreground mb-2">
                  What should we avoid touching? <span className="text-muted">(optional)</span>
                </label>
                <textarea
                  id="scanAvoid"
                  rows={2}
                  value={formData.scanAvoid}
                  onChange={(e) => setFormData({ ...formData, scanAvoid: e.target.value })}
                  className={inputClass}
                  placeholder="Sensitive folders, client data, legal/health/finance material, private exports..."
                />
              </div>
            </>
          )}
          {helpType === 'ai-setup' && (
            <>
              <div>
                <label htmlFor="aiTools" className="block text-sm font-medium text-foreground mb-2">
                  What tools are you already using? <span className="text-muted">(optional)</span>
                </label>
                <input
                  type="text"
                  id="aiTools"
                  value={formData.aiTools}
                  onChange={(e) => setFormData({ ...formData, aiTools: e.target.value })}
                  className={inputClass}
                  placeholder="ChatGPT, Claude, Cursor, etc."
                />
              </div>

              <div>
                <label htmlFor="aiMainGoal" className="block text-sm font-medium text-foreground mb-2">
                  What&apos;s the main thing you want AI to help you with?{' '}
                  <span className="text-muted">(optional)</span>
                </label>
                <textarea
                  id="aiMainGoal"
                  rows={3}
                  value={formData.aiMainGoal}
                  onChange={(e) => setFormData({ ...formData, aiMainGoal: e.target.value })}
                  className={inputClass}
                  placeholder="Research, coding, ops, content, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="aiDecisionMaker"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Do you have someone who can make decisions on scope and budget?
                </label>
                <textarea
                  id="aiDecisionMaker"
                  required
                  rows={2}
                  value={formData.aiDecisionMaker}
                  onChange={(e) =>
                    setFormData({ ...formData, aiDecisionMaker: e.target.value })
                  }
                  className={inputClass}
                  placeholder="Yes — me / co-founder / team lead..."
                />
              </div>
            </>
          )}

          {helpType === 'custom-build' && (
            <>
              <div>
                <label htmlFor="building" className="block text-sm font-medium text-foreground mb-2">
                  What you&apos;re building in one sentence
                </label>
                <input
                  type="text"
                  id="building"
                  required
                  value={formData.building}
                  onChange={(e) => setFormData({ ...formData, building: e.target.value })}
                  className={inputClass}
                  placeholder="A platform that..."
                />
              </div>

              <div>
                <label htmlFor="audience" className="block text-sm font-medium text-foreground mb-2">
                  Who it&apos;s for
                </label>
                <textarea
                  id="audience"
                  required
                  rows={3}
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  className={inputClass}
                  placeholder="Describe your target users..."
                />
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                  What you need in the next 60–90 days
                </label>
                <textarea
                  id="timeline"
                  required
                  rows={3}
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className={inputClass}
                  placeholder="Describe your timeline and priorities..."
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                  Budget range for v1
                </label>
                <input
                  type="text"
                  id="budget"
                  required
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className={inputClass}
                  placeholder="$X - $Y"
                />
              </div>

              <div>
                <label htmlFor="sensitive" className="block text-sm font-medium text-foreground mb-2">
                  Anything that makes this regulated or sensitive
                </label>
                <textarea
                  id="sensitive"
                  rows={2}
                  value={formData.sensitive}
                  onChange={(e) => setFormData({ ...formData, sensitive: e.target.value })}
                  className={inputClass}
                  placeholder="Healthcare, finance, compliance requirements, etc. (optional)"
                />
              </div>
            </>
          )}

          {helpType === 'advisory' && (
            <div>
              <label htmlFor="advisoryNeed" className="block text-sm font-medium text-foreground mb-2">
                What do you need direction on?
              </label>
              <textarea
                id="advisoryNeed"
                required
                rows={4}
                value={formData.advisoryNeed}
                onChange={(e) => setFormData({ ...formData, advisoryNeed: e.target.value })}
                className={inputClass}
                placeholder="Architecture, tooling, budget, existing project state..."
              />
            </div>
          )}

          {helpType === 'not-sure' && (
            <div>
              <label htmlFor="curiousAbout" className="block text-sm font-medium text-foreground mb-2">
                What are you curious about?
              </label>
              <textarea
                id="curiousAbout"
                required
                rows={4}
                value={formData.curiousAbout}
                onChange={(e) => setFormData({ ...formData, curiousAbout: e.target.value })}
                className={inputClass}
                placeholder="AI setup, a build, advisory, or not sure yet..."
              />
            </div>
          )}

          {helpType && (
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary w-full px-8 py-3"
            >
              {status === 'submitting' && (
                <svg
                  className="h-4 w-4 animate-spin text-background"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              )}
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>
          )}

          {status === 'success' && (
            <div
              role="status"
              className="flex items-start gap-3 rounded-md border border-success/30 bg-success/10 p-4 text-sm text-success"
            >
              <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Thanks! We&apos;ll review your submission and get back to you soon.</p>
            </div>
          )}

          {status === 'error' && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-md border border-danger/30 bg-danger/10 p-4 text-sm text-danger"
            >
              <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 10-2 0v4a1 1 0 102 0V6zm-1 8a1 1 0 100-2 1 1 0 000 2z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Something went wrong. Please try again or contact us directly.</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
