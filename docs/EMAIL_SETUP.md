# Email Automation Setup Guide

The email automation system is fully implemented and ready to use. Here's what you need to complete the setup.

## What's Been Implemented

✅ **Intake Form**
- Added email field (required)
- Form submits to `/api/contact`

✅ **Tagging System**
- Automatically tags submissions as:
  - **Risk**: `standard` or `regulated` (based on healthcare/finance keywords)
  - **Stage**: `poc`, `mvp`, or `unknown` (based on language in submission)
  - **Fit**: `high`, `clarify`, or `not-fit` (based on budget, scope, urgency)

✅ **Email Templates**
- `intake_high_fit` - For aligned submissions (includes Calendly link)
- `intake_clarify` - For submissions needing more info
- `intake_regulated` - For healthcare/finance submissions (includes Calendly link)
- `intake_not_fit` - For out-of-scope submissions
- `pricing_overview` - For pricing requests (not currently used, but available)

✅ **Resend Integration**
- Sends HTML and plain text emails
- Handles errors gracefully (logs if email fails, still processes submission)

✅ **Internal intake alerts** (ready when you enable env)
- Second email to `NOTIFY_EMAIL` (e.g. your Gmail) on every submit
- Full form payload + tagging summary; `Reply-To` set to the submitter

## Required Credentials

### 1. Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

### 2. From Email Address

1. In Resend dashboard, verify your domain or use their test domain
2. Add to `.env.local`:
   ```
   FROM_EMAIL=studio@levrage.studio
   ```
   Or use Resend's test domain: `onboarding@resend.dev` (for testing only)

### 3. Gmail / inbox notifications

Add the address where you want alerts (usually your personal Gmail):

```
NOTIFY_EMAIL=you@gmail.com
```

Each submission triggers:
1. Auto-reply to the lead (existing templates)
2. Internal notification to `NOTIFY_EMAIL` with subject like `[Levrage intake] AI operating system setup — Jane Doe`

If `NOTIFY_EMAIL` is unset, auto-replies still work; you only miss the alert (logged as a warning).

### 4. Calendly Link (Optional but Recommended)

1. Create a Calendly event (20-30 min "Build Fit Call")
2. Add to `.env.local`:
   ```
   CALENDLY_LINK=https://calendly.com/your-username/build-fit-call
   ```

   **Note**: Calendly links are only included in:
   - High-fit submissions
   - Regulated submissions
   
   They are NOT included in:
   - Clarification requests
   - Not-a-fit responses
   - Pricing overview emails

### 5. Site URLs (Optional)

For pricing overview emails (if you add a pricing request form later):
```
NEXT_PUBLIC_SITE_URL=https://levrage.studio
START_BUILD_LINK=https://levrage.studio#start-a-build
```

## How It Works

1. **User submits form** → Form data sent to `/api/contact`
2. **Tagging** → System analyzes submission and assigns tags
3. **Template selection** → Chooses appropriate email template
4. **Auto-reply sent** → Resend sends personalized response to the lead
5. **Internal alert** → Resend sends full intake summary to `NOTIFY_EMAIL` (if set)
6. **Logging** → Submission logged for audit trail

## Email Routing Logic

| Condition | Template | Calendly? |
|-----------|----------|-----------|
| Regulated domain | `intake_regulated` | ✅ Yes |
| High fit + standard | `intake_high_fit` | ✅ Yes |
| Needs clarification | `intake_clarify` | ❌ No |
| Not a fit | `intake_not_fit` | ❌ No |

## Testing

1. **Without Resend API Key**: System will log what email would be sent (check console)
2. **With Resend API Key**: Emails will be sent automatically
3. **Test submissions**: Use different combinations to trigger different templates:
   - Healthcare keywords → Regulated template
   - Low budget + "build everything" → Not-fit template
   - Clear scope + good budget → High-fit template
   - Vague answers → Clarify template

## Next Steps

1. Copy `.env.example` → `.env.local`
2. Get your Resend API key and verify `FROM_EMAIL`
3. Set `NOTIFY_EMAIL` to your Gmail
4. Create your Calendly event (optional)
5. Add the same vars in Vercel → Environment Variables, redeploy
6. Test with a real submission — you should get the alert in Gmail and the lead gets the auto-reply
7. Monitor logs to refine tagging heuristics if needed

## Files Modified/Created

- `components/StartABuild.tsx` - Added email field
- `app/api/contact/route.ts` - Auto-reply + internal notification
- `lib/intake-notification.ts` - Gmail alert body formatting
- `.env.example` - Credential checklist
- `lib/tagging.ts` - Tagging heuristics
- `lib/email-templates.ts` - Email template rendering
- `package.json` - Added Resend dependency

The system is production-ready and follows the architecture outlined in `production-ready auto-response.md`.
