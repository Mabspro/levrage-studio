import type { SubmissionTags } from '@/lib/tagging'

const FIELD_LABELS: Record<string, string> = {
  helpType: 'Help type',
  name: 'Name',
  email: 'Email',
  role: 'Role',
  building: 'What they are building',
  audience: 'Audience',
  timeline: 'Timeline (60–90 days)',
  budget: 'Budget',
  sensitive: 'Regulated / sensitive',
  aiTools: 'AI tools in use',
  aiMainGoal: 'Main AI goal',
  aiDecisionMaker: 'Decision maker on scope/budget',
  curiousAbout: 'Curious about',
  advisoryNeed: 'Advisory need',
}

function formatHelpType(value: string): string {
  const labels: Record<string, string> = {
    'ai-setup': 'AI operating system setup',
    'custom-build': 'Custom build (POC / MVP)',
    advisory: 'Advisory',
    'not-sure': 'Not sure yet',
  }
  return labels[value] || value || '(not set)'
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function fieldsFromBody(body: Record<string, unknown>): { label: string; value: string }[] {
  const fields: { label: string; value: string }[] = []

  for (const [key, label] of Object.entries(FIELD_LABELS)) {
    const raw = body[key]
    if (raw === undefined || raw === null || String(raw).trim() === '') continue

    const value = key === 'helpType' ? formatHelpType(String(raw)) : String(raw)
    fields.push({ label, value })
  }

  return fields
}

export function renderIntakeNotification(
  body: Record<string, unknown>,
  tags: SubmissionTags,
  templateName: string
): { subject: string; text: string; html: string } {
  const name = String(body.name || 'Unknown')
  const email = String(body.email || '')
  const helpType = formatHelpType(String(body.helpType || ''))
  const fields = fieldsFromBody(body)

  const meta = [
    `Auto-reply template: ${templateName}`,
    `Tags — fit: ${tags.fit}, stage: ${tags.stage}, risk: ${tags.risk}, intent: ${tags.intent}`,
    `Submitted: ${new Date().toISOString()}`,
  ]

  const text = [
    'New Levrage Studios intake',
    '',
    `From: ${name} <${email}>`,
    `Help type: ${helpType}`,
    '',
    ...fields.map((f) => `${f.label}: ${f.value}`),
    '',
    '—',
    ...meta,
  ].join('\n')

  const htmlFields = fields
    .map(
      (f) =>
        `<tr><td style="padding:4px 12px 4px 0;vertical-align:top;color:#666;white-space:nowrap;">${escapeHtml(f.label)}</td><td style="padding:4px 0;">${escapeHtml(f.value)}</td></tr>`
    )
    .join('')

  const html = `<!DOCTYPE html>
<html>
<body style="font-family:system-ui,sans-serif;line-height:1.5;color:#111;">
  <h2 style="margin:0 0 8px;">New intake — ${escapeHtml(name)}</h2>
  <p style="margin:0 0 16px;color:#444;"><strong>Help type:</strong> ${escapeHtml(helpType)} · <strong>Reply to:</strong> ${escapeHtml(email)}</p>
  <table style="border-collapse:collapse;margin-bottom:16px;">${htmlFields}</table>
  <p style="font-size:12px;color:#666;margin:0;">${meta.map(escapeHtml).join('<br>')}</p>
</body>
</html>`

  const subject = `[Levrage intake] ${helpType} — ${name}`

  return { subject, text, html }
}
