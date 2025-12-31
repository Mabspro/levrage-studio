// Tagging logic for intake submissions
// Based on production-ready auto-response.md

export interface SubmissionTags {
  intent: 'pricing' | 'build'
  stage: 'poc' | 'mvp' | 'unknown'
  risk: 'standard' | 'regulated'
  fit: 'high' | 'clarify' | 'not-fit'
}

export interface SubmissionData {
  name: string
  email: string
  building: string
  audience: string
  timeline: string
  budget: string
  sensitive: string
}

export function tagSubmission(data: SubmissionData): SubmissionTags {
  const allText = `${data.building} ${data.audience} ${data.timeline} ${data.sensitive}`.toLowerCase()
  const budgetText = data.budget.toLowerCase()

  // A) Detect regulated / exception cases
  const regulatedKeywords = [
    'health',
    'healthcare',
    'patient',
    'medical',
    'clinic',
    'hipaa',
    'finance',
    'banking',
    'payments',
    'credit',
    'lending',
    'insurance',
    'claims',
    'ehr',
    'emr',
    'pii',
    'phi',
    'regulated',
    'compliance',
    'fda',
    'sec',
    'gdpr',
  ]

  const risk: 'standard' | 'regulated' = regulatedKeywords.some((keyword) =>
    allText.includes(keyword)
  )
    ? 'regulated'
    : 'standard'

  // B) Determine POC vs MVP
  const pocKeywords = ['validate', 'demo', 'idea', 'prototype', 'poc', 'proof of concept', 'test', 'testing']
  const mvpKeywords = [
    'users',
    'login',
    'auth',
    'roles',
    'data',
    'mvp',
    'minimum viable',
    'launch',
    'production',
    'customers',
    'market',
  ]

  const hasPOC = pocKeywords.some((keyword) => allText.includes(keyword))
  const hasMVP = mvpKeywords.some((keyword) => allText.includes(keyword))

  let stage: 'poc' | 'mvp' | 'unknown'
  if (hasMVP && !hasPOC) {
    stage = 'mvp'
  } else if (hasPOC && !hasMVP) {
    stage = 'poc'
  } else {
    stage = 'unknown'
  }

  // C) Determine fit
  // Extract budget numbers
  let budgetValue: number | null = null
  if (budgetText.includes('$') || budgetText.includes('usd') || budgetText.includes('dollar')) {
    const numbers = budgetText.match(/\d+/g)
    if (numbers && numbers.length > 0) {
      budgetValue = Math.max(...numbers.map((n) => parseInt(n)))
    }
  }

  // Check for "build everything" language
  const buildEverythingKeywords = [
    'everything',
    'all features',
    'complete',
    'full',
    'entire',
    'long-term',
    'ongoing',
    'permanent',
  ]
  const hasBuildEverything = buildEverythingKeywords.some((keyword) => allText.includes(keyword))

  // Check for unrealistic urgency
  const urgentKeywords = ['asap', 'urgent', 'immediately', 'tomorrow', 'this week', 'rush']
  const hasUrgent = urgentKeywords.some((keyword) => allText.includes(keyword))

  // Check for vague scope
  const vagueKeywords = ['not sure', 'maybe', 'tbd', 'to be determined', 'exploring', 'thinking about']
  const hasVague = vagueKeywords.some((keyword) => allText.includes(keyword))

  // Budget ranges from pricing doc
  const minBudget = 2500 // POC Sprint minimum
  const maxBudget = 45000 // MVP+ maximum

  let fit: 'high' | 'clarify' | 'not-fit'

  // Not a fit conditions
  if (
    (budgetValue !== null && budgetValue < minBudget) ||
    hasBuildEverything ||
    (hasUrgent && budgetValue !== null && budgetValue < 10000)
  ) {
    fit = 'not-fit'
  }
  // Clarify conditions
  else if (hasVague || budgetValue === null || stage === 'unknown') {
    fit = 'clarify'
  }
  // High fit conditions
  else if (
    budgetValue >= minBudget &&
    budgetValue <= maxBudget &&
    !hasBuildEverything &&
    !hasVague &&
    (stage === 'poc' || stage === 'mvp')
  ) {
    fit = 'high'
  } else {
    fit = 'clarify'
  }

  return {
    intent: 'build', // Current form is always a build request
    stage,
    risk,
    fit,
  }
}

export function getEmailTemplate(tags: SubmissionTags): string {
  if (tags.risk === 'regulated') {
    return 'intake_regulated'
  }

  switch (tags.fit) {
    case 'high':
      return 'intake_high_fit'
    case 'clarify':
      return 'intake_clarify'
    case 'not-fit':
      return 'intake_not_fit'
    default:
      return 'intake_clarify'
  }
}

export function shouldIncludeCalendly(tags: SubmissionTags): boolean {
  return tags.fit === 'high' || tags.risk === 'regulated'
}
