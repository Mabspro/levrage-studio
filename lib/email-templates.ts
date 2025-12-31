// Email templates for auto-responses
// Based on production-ready auto-response.md

export interface EmailTemplate {
  subject: string
  html: string
  text: string
}

export function renderTemplate(
  template: string,
  data: {
    first_name?: string
    calendly_link?: string
    start_build_link?: string
  }
): EmailTemplate {
  const firstName = data.first_name || 'there'
  const calendlyLink = data.calendly_link || '#'
  const startBuildLink = data.start_build_link || '#'

  switch (template) {
    case 'pricing_overview':
      return {
        subject: 'Pricing Overview — LevrAge Innovation Studios',
        html: pricingOverviewHTML(firstName, startBuildLink),
        text: pricingOverviewText(firstName, startBuildLink),
      }

    case 'intake_high_fit':
      return {
        subject: 'Next steps for your build request',
        html: highFitHTML(firstName, calendlyLink),
        text: highFitText(firstName, calendlyLink),
      }

    case 'intake_clarify':
      return {
        subject: 'A few quick questions',
        html: clarifyHTML(firstName),
        text: clarifyText(firstName),
      }

    case 'intake_regulated':
      return {
        subject: 'Next steps for your regulated build',
        html: regulatedHTML(firstName, calendlyLink),
        text: regulatedText(firstName, calendlyLink),
      }

    case 'intake_not_fit':
      return {
        subject: 'Thanks for reaching out',
        html: notFitHTML(firstName),
        text: notFitText(firstName),
      }

    default:
      throw new Error(`Unknown template: ${template}`)
  }
}

function pricingOverviewHTML(firstName: string, startBuildLink: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi ${firstName},</p>
  
  <p>Thanks for your interest in LevrAge Innovation Studios.</p>
  
  <p>Below is a high-level overview of how pricing works for early-stage product builds. This is meant to give you clarity before any deeper conversation — not to lock you into anything.</p>
  
  <h2 style="margin-top: 30px; margin-bottom: 15px;">How we price</h2>
  
  <p>We price based on outcomes and systems, not pages or hours.</p>
  
  <p>Every engagement accounts for:</p>
  <ul>
    <li>architecture and backend decisions</li>
    <li>authentication and data models</li>
    <li>hosting, deployment, and environments</li>
    <li>iteration and stabilization</li>
    <li>a clear path to owning your own stack</li>
  </ul>
  
  <p>AI tools are used internally to accelerate delivery, but pricing reflects judgment, accountability, and real-world execution, not keystrokes.</p>
  
  <h2 style="margin-top: 30px; margin-bottom: 15px;">Typical engagement ranges</h2>
  
  <p><strong>POC Sprint</strong><br>
  $2,500 – $6,500<br>
  For validating a core idea with a working, shareable prototype.<br>
  Timeline: ~1–2 weeks.</p>
  
  <p><strong>MVP Launch</strong><br>
  $8,500 – $20,000<br>
  For products supporting real users, auth, data, and live workflows.<br>
  Timeline: ~3–6 weeks.</p>
  
  <p><strong>MVP+ / Integration-Heavy or Regulated Builds</strong><br>
  $20,000 – $45,000+<br>
  Accepted selectively for healthcare, finance, or complex integrations.</p>
  
  <p><strong>Optional: Launchpad Ops (monthly)</strong></p>
  <p>For short-term help running and stabilizing your first version.</p>
  <ul>
    <li>Ops Lite: $750 – $1,500 / month</li>
    <li>Ops Plus: $2,000 – $4,000 / month</li>
  </ul>
  
  <p>This support is intentionally temporary. The goal is graduation, not dependency.</p>
  
  <h2 style="margin-top: 30px; margin-bottom: 15px;">What affects where a project lands in a range</h2>
  <ul>
    <li>number of user roles</li>
    <li>depth of data modeling</li>
    <li>integrations (video, payments, calendars, etc.)</li>
    <li>domain sensitivity (health, finance)</li>
    <li>timeline urgency</li>
  </ul>
  
  <p>You'll always know why your project lands where it does before any work begins.</p>
  
  <h2 style="margin-top: 30px; margin-bottom: 15px;">Next steps (if it feels aligned)</h2>
  
  <p>If you're ready to move forward, you can start a build request here:</p>
  <p><a href="${startBuildLink}" style="color: #00d9ff; text-decoration: none;">👉 Start a build</a></p>
  
  <p>If you're still exploring, no action is needed. This overview is here so you can evaluate fit without pressure.</p>
  
  <p>Either way, thanks for taking a look — clarity early saves time for everyone.</p>
  
  <p>Best,<br>
  Mabs<br>
  LevrAge Innovation Studios</p>
</body>
</html>
  `.trim()
}

function pricingOverviewText(firstName: string, startBuildLink: string): string {
  return `Hi ${firstName},

Thanks for your interest in LevrAge Innovation Studios.

Below is a high-level overview of how pricing works for early-stage product builds. This is meant to give you clarity before any deeper conversation — not to lock you into anything.

How we price

We price based on outcomes and systems, not pages or hours.

Every engagement accounts for:
- architecture and backend decisions
- authentication and data models
- hosting, deployment, and environments
- iteration and stabilization
- a clear path to owning your own stack

AI tools are used internally to accelerate delivery, but pricing reflects judgment, accountability, and real-world execution, not keystrokes.

Typical engagement ranges

POC Sprint
$2,500 – $6,500
For validating a core idea with a working, shareable prototype.
Timeline: ~1–2 weeks.

MVP Launch
$8,500 – $20,000
For products supporting real users, auth, data, and live workflows.
Timeline: ~3–6 weeks.

MVP+ / Integration-Heavy or Regulated Builds
$20,000 – $45,000+
Accepted selectively for healthcare, finance, or complex integrations.

Optional: Launchpad Ops (monthly)

For short-term help running and stabilizing your first version.

Ops Lite: $750 – $1,500 / month
Ops Plus: $2,000 – $4,000 / month

This support is intentionally temporary. The goal is graduation, not dependency.

What affects where a project lands in a range
- number of user roles
- depth of data modeling
- integrations (video, payments, calendars, etc.)
- domain sensitivity (health, finance)
- timeline urgency

You'll always know why your project lands where it does before any work begins.

Next steps (if it feels aligned)

If you're ready to move forward, you can start a build request here:
👉 Start a build
${startBuildLink}

If you're still exploring, no action is needed. This overview is here so you can evaluate fit without pressure.

Either way, thanks for taking a look — clarity early saves time for everyone.

Best,
Mabs
LevrAge Innovation Studios`
}

function highFitHTML(firstName: string, calendlyLink: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi ${firstName},</p>
  
  <p>Thanks for sharing details about what you're building. Based on what you submitted, this looks like a good fit for how LevrAge Innovation Studios works.</p>
  
  <p>The next step is a short working conversation to:</p>
  <ul>
    <li>confirm the scope of a first version</li>
    <li>align on timelines and priorities</li>
    <li>outline where your project fits within our pricing ranges</li>
  </ul>
  
  <p>You can book time directly here:</p>
  <p><a href="${calendlyLink}" style="color: #00d9ff; text-decoration: none;">👉 Book a call</a></p>
  
  <p>If nothing on the calendar works, feel free to reply with a couple of windows that do.</p>
  
  <p>Looking forward to it,<br>
  Mabs<br>
  LevrAge Innovation Studios</p>
</body>
</html>
  `.trim()
}

function highFitText(firstName: string, calendlyLink: string): string {
  return `Hi ${firstName},

Thanks for sharing details about what you're building. Based on what you submitted, this looks like a good fit for how LevrAge Innovation Studios works.

The next step is a short working conversation to:
- confirm the scope of a first version
- align on timelines and priorities
- outline where your project fits within our pricing ranges

You can book time directly here:
👉 ${calendlyLink}

If nothing on the calendar works, feel free to reply with a couple of windows that do.

Looking forward to it,
Mabs
LevrAge Innovation Studios`
}

function clarifyHTML(firstName: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi ${firstName},</p>
  
  <p>Thanks for reaching out and for the context you shared. Before suggesting next steps, I'd like to clarify a few points so we don't waste your time or over-scope a first version.</p>
  
  <p>Could you reply with short answers to the following?</p>
  <ul>
    <li>Who is the primary user of v1?</li>
    <li>What must work for v1 to be considered a success?</li>
    <li>Do you expect real users to sign in immediately, or is this primarily a validation build?</li>
    <li>Are there any integrations that are non-negotiable in the first version?</li>
  </ul>
  
  <p>Once I have that, I'll let you know whether it makes sense to move forward and how.</p>
  
  <p>Best,<br>
  Mabs<br>
  LevrAge Innovation Studios</p>
</body>
</html>
  `.trim()
}

function clarifyText(firstName: string): string {
  return `Hi ${firstName},

Thanks for reaching out and for the context you shared. Before suggesting next steps, I'd like to clarify a few points so we don't waste your time or over-scope a first version.

Could you reply with short answers to the following?

- Who is the primary user of v1?
- What must work for v1 to be considered a success?
- Do you expect real users to sign in immediately, or is this primarily a validation build?
- Are there any integrations that are non-negotiable in the first version?

Once I have that, I'll let you know whether it makes sense to move forward and how.

Best,
Mabs
LevrAge Innovation Studios`
}

function regulatedHTML(firstName: string, calendlyLink: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi ${firstName},</p>
  
  <p>Thanks for the detailed submission. Based on what you shared, your project touches on a regulated or higher-risk domain.</p>
  
  <p>These builds are accepted selectively and require:</p>
  <ul>
    <li>more deliberate scoping</li>
    <li>additional safeguards</li>
    <li>and tighter alignment before moving forward</li>
  </ul>
  
  <p>The right next step is a short exploratory conversation to assess feasibility and fit before discussing timelines or pricing.</p>
  
  <p>If that sounds reasonable, you can book time here:</p>
  <p><a href="${calendlyLink}" style="color: #00d9ff; text-decoration: none;">👉 Book a call</a></p>
  
  <p>If not, no problem — it's better to surface that early.</p>
  
  <p>Best,<br>
  Mabs<br>
  LevrAge Innovation Studios</p>
</body>
</html>
  `.trim()
}

function regulatedText(firstName: string, calendlyLink: string): string {
  return `Hi ${firstName},

Thanks for the detailed submission. Based on what you shared, your project touches on a regulated or higher-risk domain.

These builds are accepted selectively and require:
- more deliberate scoping
- additional safeguards
- and tighter alignment before moving forward

The right next step is a short exploratory conversation to assess feasibility and fit before discussing timelines or pricing.

If that sounds reasonable, you can book time here:
👉 ${calendlyLink}

If not, no problem — it's better to surface that early.

Best,
Mabs
LevrAge Innovation Studios`
}

function notFitHTML(firstName: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <p>Hi ${firstName},</p>
  
  <p>Thanks for taking the time to share details about your project.</p>
  
  <p>Based on what you submitted, this doesn't appear to be the right fit for how LevrAge Innovation Studios operates. The studio is optimized for first versions where scope, timelines, and ownership paths are clearly defined.</p>
  
  <p>Rather than over-promise or stretch the engagement, it's better to be direct early.</p>
  
  <p>I appreciate you reaching out, and I wish you the best with the build ahead.</p>
  
  <p>Best,<br>
  Mabs<br>
  LevrAge Innovation Studios</p>
</body>
</html>
  `.trim()
}

function notFitText(firstName: string): string {
  return `Hi ${firstName},

Thanks for taking the time to share details about your project.

Based on what you submitted, this doesn't appear to be the right fit for how LevrAge Innovation Studios operates. The studio is optimized for first versions where scope, timelines, and ownership paths are clearly defined.

Rather than over-promise or stretch the engagement, it's better to be direct early.

I appreciate you reaching out, and I wish you the best with the build ahead.

Best,
Mabs
LevrAge Innovation Studios`
}
