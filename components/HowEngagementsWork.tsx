'use client'

import { useState, useEffect } from 'react'

const steps = [
  {
    id: 1,
    title: 'Clarify the idea',
    description: 'Short working session to define the problem, users, constraints, and success signal.',
    infra: null,
  },
  {
    id: 2,
    title: 'Shape the first version',
    description: 'Decide what must exist in v1 and what can wait; map flows and data.',
    infra: null,
  },
  {
    id: 3,
    title: 'Build and host',
    description: 'Ship a working POC or MVP, set up backend, hosting, and minimal monitoring.',
    infra: 'Auth, data models, API integrations, deployments, monitoring',
  },
  {
    id: 4,
    title: 'Learn and adjust',
    description: 'Incorporate early feedback, fix what breaks, and refine the core loop.',
    infra: null,
  },
  {
    id: 5,
    title: 'Graduate the product',
    description: 'Move infra into accounts you own and outline options for your next build phase.',
    infra: 'Account migration, documentation, handoff roadmap',
  },
]

export default function HowEngagementsWork() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = parseInt(entry.target.getAttribute('data-step') || '0')
            setActiveStep(stepId)
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = document.querySelectorAll('[data-step]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="how-engagements-work" className="py-24 px-4 sm:px-6 lg:px-8 bg-border/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
          How engagements work
        </h2>
        <p className="text-lg text-muted mb-12 max-w-3xl">
          The studio runs like a focused build sprint, not an open-ended agency engagement.
        </p>
        
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border">
            <div
              className="absolute top-0 left-0 w-full bg-primary transition-all duration-500 ease-out will-change-[height]"
              style={{
                height: activeStep
                  ? `${((activeStep - 1) / (steps.length - 1)) * 100}%`
                  : '0%',
              }}
            />
          </div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                data-step={step.id}
                className="relative pl-14 sm:pl-20"
              >
                {/* Step marker */}
                <div
                  className={`absolute left-6 w-4 h-4 rounded-full border-2 transition-[background-color,border-color] duration-300 ease-out will-change-[background-color,border-color] ${
                    activeStep && activeStep >= step.id
                      ? 'bg-primary border-primary'
                      : 'bg-background border-border'
                  }`}
                />
                
                <div className="space-y-2">
                  <h3 className="text-xl font-heading font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted">{step.description}</p>
                  {/* Reserve space for infra box to prevent layout shift - only for steps with infra */}
                  {step.infra ? (
                    <div className="mt-3 min-h-[60px]">
                      <div className="p-3 bg-background border border-border rounded text-sm">
                        <span className="text-xs font-medium text-primary">Infra decisions:</span>
                        <p className="text-muted mt-1">{step.infra}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-3" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
