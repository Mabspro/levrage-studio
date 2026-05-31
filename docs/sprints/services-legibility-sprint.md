# Levrage Studios — Services Legibility Sprint

**Author:** Levi (gatekeeper) · **Executor:** Cursor · **Ratifed by:** Mabs  
**Branch:** `levrage-studios/main` (direct, docs-only review after)  
**Goal:** Make the AI onboarding/operating-system offer legible to non-technical founders who want the capability without the confidence to DIY. Do NOT rebuild the whole site — only change what makes services visible and convertible. Portfolio stays untouched.

---

## What changes (4 components + page.tsx ordering)

### 1. `components/Hero.tsx` — widen positioning

**Current:** "Studio that builds first real version of your product"

**New:** Two lanes in hero copy — AI operating systems for founders who want capability without DIY, AND custom builds for founders who need a first version shipped.

**Key additions:**
- Headline or sub-headline acknowledging the AI setup lane
- Keep "Start a build" CTA, but also add a secondary link to the new Services section
- One honest sentence about who this is for that includes the non-technical founder who wants OpenClaw-like setup

**Don't change:** Visual layout, watermark effect, button styles, footer links. Only text.

---

### 2. `components/WhatWeDo.tsx` — add AI onboarding lane

**Current:** 3 boxes — POC→MVP builds, Backend/hosting/integrations, Graduation-not-dependency

**New:** 4 boxes — AI operating system setup is service lane #1.

**The 4 boxes:**

| # | Title | What it covers |
|---|-------|----------------|
| 1 | **AI operating system setup** | Provider setup, model routing, safe defaults, token discipline, project-memory architecture, human-in-the-loop guardrails. You bring the ideas and the work; we bring the operating layer that makes AI useful instead of chaotic. |
| 2 | **POC → MVP builds** | Rapid builds you can click, test, and show. Focused scopes that validate the core behavior — not every feature. (keep existing, tighten) |
| 3 | **Backend, hosting & integrations** | Auth, data models, API integrations, deployments, monitoring. Clean setups that can later be handed off. (keep existing) |
| 4 | **Graduation, not dependency** | Everything built so you can outgrow the studio. When you're ready, your product moves into accounts you own. (keep existing) |

The section header text should change to reflect both lanes — "LevrAge Studios helps non-technical founders **operate with AI AND** go from idea to functioning software."

---

### 3. NEW: `components/Services.tsx` — detailed service cards

Inserted between Hero and WhatWeDo (via page.tsx ordering). This is **the** legibility section — the one that makes the offer real.

**Section title:** "How we help"
**Subhead:** "Two paths. One door."

#### Service card 1: AI Operating System Setup

```
Title: AI Operating System Setup
Tag: Most popular for founders starting out

What's included:
• AI provider setup and model routing — pick the right model for each task, not the most expensive one
• Safe defaults, permissions, and human-in-the-loop guardrails — no black boxes
• Token discipline strategies — stay useful without burning budget
• Project-memory architecture — your AI remembers context between sessions
• MCP tool wiring (read-first) — connect AI to your tools safely
• Runbook and operating doctrine — documented so you're not locked in

What's not included:
• Fully autonomous operations without review
• Compliance or security guarantees
• Long-term managed IT or monitoring

Starting from: $X-$Y (fixed-scope diagnostic + setup sprint)
```

#### Service card 2: Custom Build (POC → MVP)

```
Title: Custom Build — POC to MVP
Tag: For founders who need working software

What's included:
• Full-stack web application — auth, data model, API, deployment
• One focused scope that validates the core behavior
• Fast iteration with real users — not generated code drops
• Hosting setup in accounts you own
• Handoff documentation and gradation roadmap

What's not included:
• Large-team features, scale engineering
• Open-ended maintenance retainer
• Mobile apps (scoped separately)

Starting from: $X-$Y (fixed-scope MVP sprint)
```

#### Service card 3 (optional): Advisory & Strategy

```
Title: Technical Advisory & Strategy
Tag: For teams who need direction before build

What's included:
• Architecture review, project-state audit, risk assessment
• Tool selection, provider routing, budget sizing
• Technical doctrine — what's true, what's proposed, what's allowed
• Light restructure of existing code or docs

What's not included:
• Full implementation (bundled with setup or build)
• Legal opinions, compliance certification
```

---

### 4. `components/StartABuild.tsx` — add help-type selector

**Add** a required field at the top of the form, before all existing fields:

```
What kind of help do you need?
  [ ] AI operating system setup — I want to use AI tools productively, not DIY the config
  [ ] Custom build — I need a POC or MVP shipped
  [ ] Advisory — I need technical direction
  [ ] Not sure yet
```

When "AI operating system setup" is selected, the form should ask different follow-ups:
- What tools are you already using? (optional)
- What's the main thing you want AI to help you with? (optional)
- Do you have someone who can make decisions on scope and budget? (required)

When "Custom build" is selected, keep the existing fields as-is.

When "Not sure yet" is selected, only ask for name, email, and what they're curious about.

**Implementation note:** Simple React conditional rendering — no routing changes, no new API endpoints. The `api/contact` endpoint already accepts JSON; just add the `helpType` field to the payload.

---

### 5. `components/PricingPhilosophy.tsx` — add AI sprint tier

Add a 4th pricing tier above the existing three:

```
Title: AI Setup Sprint
What it covers: Fixed-scope engagement to get you running with an AI operating layer — provider config, model routing, memory structure, safe defaults, and the first runbook. Walk away with disciplined defaults, not a black box.
```

Keep existing tiers unchanged. The "AI Setup Sprint" should be first in the list since it's the anchor low-hanging offer.

---

### 6. `app/page.tsx` — section ordering

Insert the new Services section between Hero and WhatWeDo. The revised order:

1. Hero
2. **Services** ← NEW
3. WhatWeDo
4. WhyAI
5. SystemsMap
6. Portfolio sections (unchanged)
7. HowEngagementsWork
8. PricingPhilosophy
9. StartABuild
10. Footer

---

## Design guidance

- **Tone:** Serious, practical, not hype. Matching existing site voice.
- **Colors/texture:** Use existing design tokens — `bg-primary`, `bg-border/20`, `text-foreground`, `text-muted`, `border-border`. No new CSS.
- **Layout:** Same grid/card patterns already in the codebase (PricingPhilosophy's border cards, WhatWeDo's 3-column grid). Reuse them.
- **"Most popular" tag:** Simple pill/badge using `bg-primary text-background text-xs px-2 py-0.5 rounded-full` or similar.
- **Starting from $X-$Y:** AI setup uses `$500-$5K` (individual setups from ~$500, fuller sprints to $5K, plus post-setup consult). Custom build ranges stay separate. Mabs confirms final pricing.

---

## What NOT to change

- Portfolio data files (`data/portfolio.*.json`) — untouched
- Any component not listed above — untouched
- Branding, logo, footer — untouched
- `api/contact` endpoint — only needs to accept the new `helpType` field, no code change required if it's already doing generic JSON forwarding
- `HowEngagementsWork.tsx` — the POC→MVP engagement steps don't need AI-specific steps; the process is the same, just different scope
- No new routes (`/services`, `/approach`) — this sprint is about legibility, not architecture expansion

---

## Verification

1. `npm run build` passes clean
2. Form submits with new `helpType` field and reaches existing `api/contact` handler
3. Section ordering on page matches the new sequence
4. PricingPhilosophy shows 4 tiers (AI setup first)
5. Hero text reads honestly — no overclaim, no "we do everything"
6. All existing portfolio sections render correctly in order

---

## Future (not in this sprint)

- `/services` page route if the single-page gets too long
- `/approach` page with full doctrine for serious buyers
- MCP (Stage 2 in sequencing) — not yet offered as standalone
- RAG chat (Stage 3) — not yet offered
- `api/contact` migration to Notion/email — if needed

---

## Notes for Cursor

- Work on `main` branch — this is a direct commit, not a branched review. Mabs will review live after push.
- Use the existing component patterns (border cards, grid layouts, text treatments) already in the codebase.
- Do not add any new npm dependencies.
- After build verification, push to origin and confirm Vercel deploy passes.
- If `api/contact` doesn't handle the new field, flag it but don't restructure the endpoint — just confirm the payload ships.