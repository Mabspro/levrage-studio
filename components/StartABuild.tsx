'use client'

import { useState, FormEvent } from 'react'

export default function StartABuild() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    building: '',
    audience: '',
    timeline: '',
    budget: '',
    sensitive: '',
  })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          role: '',
          building: '',
          audience: '',
          timeline: '',
          budget: '',
          sensitive: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <section id="start-a-build" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          Start a build
        </h2>
        <p className="text-lg text-muted mb-4">
          This is for founders who are ready to move from documents and decks to something users can actually touch.
        </p>
        <p className="text-sm text-muted mb-4">
          Share enough detail to understand the problem, who it's for, your timeline, and what "success" looks like for v1. If it's not a fit, you'll hear that quickly so you don't lose time.
        </p>
        
        <p className="text-xs text-primary mb-8 italic border-l-2 border-primary/30 pl-4 py-2">
          This site was built the same way your product would be.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="building" className="block text-sm font-medium text-foreground mb-2">
              What you're building in one sentence
            </label>
            <input
              type="text"
              id="building"
              required
              value={formData.building}
              onChange={(e) => setFormData({ ...formData, building: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="A platform that..."
            />
          </div>

          <div>
            <label htmlFor="audience" className="block text-sm font-medium text-foreground mb-2">
              Who it's for
            </label>
            <textarea
              id="audience"
              required
              rows={3}
              value={formData.audience}
              onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
              className="w-full px-4 py-2 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Healthcare, finance, compliance requirements, etc. (optional)"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full px-8 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-primary">
              Thanks! We'll review your submission and get back to you soon.
            </p>
          )}

          {status === 'error' && (
            <p className="text-sm text-secondary">
              Something went wrong. Please try again or contact us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
