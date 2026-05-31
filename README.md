# LevrAge Innovation Studios

A clean, minimal studio site built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Email Automation Setup

The site includes automated email responses based on intake tagging. To enable:

1. **Set up Resend**
   - Sign up at [resend.com](https://resend.com)
   - Get your API key
   - Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   FROM_EMAIL=studio@levrage.studio
   NOTIFY_EMAIL=you@gmail.com
   ```

   See `.env.example` for the full list.

2. **Set up Calendly** (optional but recommended)
   - Create a Calendly event (20-30 min "Build Fit Call")
   - Add to `.env.local`:
   ```
   CALENDLY_LINK=https://calendly.com/your-username/build-fit-call
   ```

3. **Site Configuration**
   ```
   NEXT_PUBLIC_SITE_URL=https://levrage.studio
   START_BUILD_LINK=https://levrage.studio#start-a-build
   ```

The system automatically:
- Tags submissions (regulated, POC/MVP, fit level)
- Routes to appropriate email templates
- Includes Calendly links for high-fit and regulated submissions
- Sends personalized auto-responses

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy

The site is optimized for Vercel's edge network and serverless functions.

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## Project Structure

```
├── app/
│   ├── api/contact/     # Form submission endpoint
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── Hero.tsx
│   ├── WhatWeDo.tsx
│   ├── WhyAI.tsx
│   ├── StudioFlagships.tsx
│   ├── ClientMVPs.tsx
│   ├── LabsExperiments.tsx
│   ├── HowEngagementsWork.tsx
│   ├── PricingPhilosophy.tsx
│   └── StartABuild.tsx
├── public/
│   └── images/logos/   # Logo assets
└── vision.md           # Original vision document
```

## Customization

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Content**: Update component files in `components/`
- **Styling**: Modify Tailwind classes or add custom CSS in `app/globals.css`

## License

Private project - LevrAge Innovation Studios
