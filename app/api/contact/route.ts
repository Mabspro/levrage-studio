import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { tagSubmission, getEmailTemplate, shouldIncludeCalendly, type SubmissionData } from '@/lib/tagging'
import { renderTemplate } from '@/lib/email-templates'

// Initialize Resend lazily to avoid build-time errors when API key is not set
function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return null
  }
  return new Resend(apiKey)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.email || !body.name) {
      return NextResponse.json({ error: 'Email and name are required' }, { status: 400 })
    }

    // Tag submission
    const submissionData: SubmissionData = {
      name: body.name || '',
      email: body.email || '',
      building: body.building || '',
      audience: body.audience || '',
      timeline: body.timeline || '',
      budget: body.budget || '',
      sensitive: body.sensitive || '',
    }

    const tags = tagSubmission(submissionData)
    const templateName = getEmailTemplate(tags)

    // Extract first name from full name
    const firstName = submissionData.name.split(' ')[0] || 'there'

    // Get environment variables
    const fromEmail = process.env.FROM_EMAIL || 'studio@levrage.studio'
    const calendlyLink = process.env.CALENDLY_LINK || ''
    const startBuildLink = process.env.START_BUILD_LINK || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://levrage.studio'}#start-a-build`

    // Prepare email data
    const emailData: {
      first_name: string
      calendly_link?: string
      start_build_link?: string
    } = {
      first_name: firstName,
    }

    // Include Calendly link only for high-fit and regulated
    if (shouldIncludeCalendly(tags)) {
      emailData.calendly_link = calendlyLink
    }

    // Include start build link for pricing overview (not used in current flow but available)
    if (templateName === 'pricing_overview') {
      emailData.start_build_link = startBuildLink
    }

    // Render email template
    const emailTemplate = renderTemplate(templateName, emailData)

    // Send email via Resend
    const resend = getResend()
    if (resend && process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: submissionData.email,
          subject: emailTemplate.subject,
          html: emailTemplate.html,
          text: emailTemplate.text,
        })

        console.log('Email sent successfully:', {
          to: submissionData.email,
          template: templateName,
          tags,
        })
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Continue execution even if email fails - log submission
      }
    } else {
      console.warn('RESEND_API_KEY not set - email not sent')
      console.log('Would send email:', {
        to: submissionData.email,
        template: templateName,
        tags,
        subject: emailTemplate.subject,
      })
    }

    // Log submission for audit trail
    console.log('Form submission processed:', {
      email: submissionData.email,
      name: submissionData.name,
      tags,
      template: templateName,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        tags,
        message: 'Submission received. Check your email for next steps.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Failed to process submission' }, { status: 500 })
  }
}
