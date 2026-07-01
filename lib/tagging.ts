// Tagging logic for intake submissions
// Based on production-ready auto-response.md

export type HelpType = 'signal-scan' | 'ai-setup' | 'custom-build' | 'advisory' | 'not-sure'

export interface SubmissionTags {
  intent: 'signal-scan' | 'ai-setup' | 'build' | 'advisory' | 'pricing'
  stage: 'scan' | 'setup' | 'poc' | 'mvp' | 'advisory' | 'unknown'
  risk: 'standard' | 'regulated'
  fit: 'high' | 'clarify' | 'not-fit'
}

export interface SubmissionData {
  helpType?: HelpType | ''
  name: string
  email: string
  building?: string
  audience?: string
  timeline?: string
  budget?: string
  sensitive?: string
  scanFolder?: string
  scanDecision?: string
  scanAvoid?: string
  aiTools?: string
  aiMainGoal?: string
  aiDecisionMaker?: string
  curiousAbout?: string
  advisoryNeed?: string
}

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

function combinedText(data: SubmissionData): string {
  return [
    data.building,
    data.audience,
    data.timeline,
    data.sensitive,
    data.scanFolder,
    data.scanDecision,
    data.scanAvoid,
    data.aiTools,
    data.aiMainGoal,
    data.aiDecisionMaker,
    data.curiousAbout,
    data.advisoryNeed,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

function detectRisk(text: string): 'standard' | 'regulated' {
  return regulatedKeywords.some((keyword) => text.includes(keyword)) ? 'regulated' : 'standard'
}

function detectBuildStage(text: string): 'poc' | 'mvp' | 'unknown' {
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

  const hasPOC = pocKeywords.some((keyword) => text.includes(keyword))
  const hasMVP = mvpKeywords.some((keyword) => text.includes(keyword))

  if (hasMVP && !hasPOC) return 'mvp'
  if (hasPOC && !hasMVP) return 'poc'
  return 'unknown'
}

function budgetValueFrom(text: string): number | null {
  const budgetText = text.toLowerCase()
  if (!budgetText.includes('$') && !budgetText.includes('usd') && !budgetText.includes('dollar')) {
    return null
  }

  const numbers = budgetText.match(/\d+/g)
  if (!numbers || numbers.length === 0) return null
  return Math.max(...numbers.map((n) => parseInt(n)))
}

function detectBuildFit(data: SubmissionData, text: string, stage: SubmissionTags['stage']): SubmissionTags['fit'] {
  const budgetValue = budgetValueFrom(data.budget || '')
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
  const urgentKeywords = ['asap', 'urgent', 'immediately', 'tomorrow', 'this week', 'rush']
  const vagueKeywords = ['not sure', 'maybe', 'tbd', 'to be determined', 'exploring', 'thinking about']

  const hasBuildEverything = buildEverythingKeywords.some((keyword) => text.includes(keyword))
  const hasUrgent = urgentKeywords.some((keyword) => text.includes(keyword))
  const hasVague = vagueKeywords.some((keyword) => text.includes(keyword))
  const minBudget = 2500
  const maxBudget = 45000

  if (
    (budgetValue !== null && budgetValue < minBudget) ||
    hasBuildEverything ||
    (hasUrgent && budgetValue !== null && budgetValue < 10000)
  ) {
    return 'not-fit'
  }

  if (hasVague || budgetValue === null || stage === 'unknown') {
    return 'clarify'
  }

  if (budgetValue >= minBudget && budgetValue <= maxBudget && (stage === 'poc' || stage === 'mvp')) {
    return 'high'
  }

  return 'clarify'
}

export function tagSubmission(data: SubmissionData): SubmissionTags {
  const helpType = data.helpType || 'custom-build'
  const text = combinedText(data)
  const risk = detectRisk(text)

  if (helpType === 'signal-scan') {
    const hasDecision = Boolean(data.scanDecision?.trim())
    const hasCorpus = Boolean(data.scanFolder?.trim())
    return {
      intent: 'signal-scan',
      stage: 'scan',
      risk,
      fit: hasDecision && hasCorpus && risk === 'standard' ? 'high' : 'clarify',
    }
  }

  if (helpType === 'ai-setup') {
    return {
      intent: 'ai-setup',
      stage: 'setup',
      risk,
      fit: data.aiDecisionMaker?.trim() && risk === 'standard' ? 'high' : 'clarify',
    }
  }

  if (helpType === 'advisory') {
    return {
      intent: 'advisory',
      stage: 'advisory',
      risk,
      fit: data.advisoryNeed?.trim() ? 'clarify' : 'not-fit',
    }
  }

  if (helpType === 'not-sure') {
    return {
      intent: 'advisory',
      stage: 'unknown',
      risk,
      fit: 'clarify',
    }
  }

  const stage = detectBuildStage(text)
  const fit = detectBuildFit(data, text, stage)

  return {
    intent: 'build',
    stage,
    risk,
    fit,
  }
}

export function getEmailTemplate(tags: SubmissionTags): string {
  if (tags.intent === 'signal-scan') {
    return 'signal_scan_received'
  }

  if (tags.intent === 'ai-setup') {
    return 'ai_setup_received'
  }

  if (tags.intent === 'advisory') {
    return 'advisory_received'
  }

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
  return (tags.fit === 'high' || tags.risk === 'regulated') && tags.intent !== 'signal-scan'
}
