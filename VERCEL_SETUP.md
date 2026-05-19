# Vercel Deployment Setup

Your code is now on GitHub at: https://github.com/Mabspro/levrage-studio.git

## Quick Deploy to Vercel

### Step 1: Import Project
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import from GitHub: `Mabspro/levrage-studio`
4. Vercel will auto-detect Next.js settings

### Step 2: Configure Environment Variables

In Vercel project settings → Environment Variables, add:

#### Required:
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
FROM_EMAIL=studio@levrage.studio
```

#### Recommended:
```
CALENDLY_LINK=https://calendly.com/your-username/build-fit-call
```

#### Optional:
```
NEXT_PUBLIC_SITE_URL=https://levrage.studio
START_BUILD_LINK=https://levrage.studio#start-a-build
```

### Step 3: Deploy

1. Click "Deploy"
2. Vercel will build and deploy automatically
3. Your site will be live at: `https://levrage-studio.vercel.app` (or your custom domain)

## Post-Deployment Checklist

✅ **Verify Environment Variables**
- Go to Project Settings → Environment Variables
- Ensure all variables are set for Production, Preview, and Development

✅ **Test Email System**
- Submit a test form submission
- Check Vercel function logs for email sending status
- Verify email is received

✅ **Custom Domain (Optional)**
- Go to Project Settings → Domains
- Add your custom domain (e.g., `levrage.studio`)
- Follow DNS configuration instructions

✅ **Monitor Function Logs**
- Go to Project → Functions tab
- Watch `/api/contact` logs for:
  - Tagging decisions
  - Email send status
  - Any errors

## Vercel-Specific Notes

### Serverless Functions
- `/api/contact` runs as a serverless function
- Cold starts are minimal (< 1s typically)
- Function logs are available in Vercel dashboard

### Environment Variables
- Variables set in Vercel override `.env.local`
- Use Vercel's environment variable UI for production
- Keep `.env.local` for local development only

### Build Settings
Vercel auto-detects:
- Framework: Next.js
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

No additional configuration needed!

## Troubleshooting

**Email not sending?**
- Check `RESEND_API_KEY` is set in Vercel
- Verify `FROM_EMAIL` is a verified domain in Resend
- Check function logs for errors

**Build fails?**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compiles locally first

**Environment variables not working?**
- Ensure variables are set for the correct environment (Production/Preview/Development)
- Redeploy after adding new variables
- Check variable names match exactly (case-sensitive)

## Next Steps After Deployment

1. **Test the live site**
   - Submit a test form
   - Verify email automation works

2. **Set up custom domain** (if desired)
   - Configure DNS
   - Update `NEXT_PUBLIC_SITE_URL` if needed

3. **Monitor first submissions**
   - Review tagging accuracy
   - Adjust heuristics in `lib/tagging.ts` if needed

4. **Set up analytics** (optional)
   - Add Plausible or Umami
   - Track form submissions

Your site is production-ready! 🚀
