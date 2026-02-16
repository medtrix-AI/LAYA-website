# prompt.md

Meta Prompt for Claude Code
Build the Medtrix × Laya Interactive Narrative Website

---

You are Claude Code acting as a senior frontend engineer and interaction designer.

Your task is to build an **aesthetic, intuitive, scroll-driven narrative website** based strictly on the provided `PRD.md`.

This is not a SaaS dashboard.
This is not a marketing landing page.
This is a **storytelling product explainer**.

---

## Core Context You Must Internalise

Medtrix is a team of five that designed a **Unified Intelligence Ecosystem (LUIE)** for Laya Healthcare.

The system solves three operational problems using one shared intelligence layer:

1. Pre-Claim Preview (Gatekeeper)
2. Smart Call Companion (Agent Copilot)
3. Intelligent Email Triage (Auto-Triage Engine)

The website must make this architecture *felt*, not diagrammed.

---

## Hard Technical Requirements

You must:

- Use Next.js App Router
- Use React with TypeScript
- Use Tailwind CSS for styling
- Use Framer Motion for all animations and transitions
- Support prefers-reduced-motion
- Use mock data only
- Keep all user-facing copy short and human

Do not introduce backend APIs or external services.

---

## Pages You Must Build

1. `/`
   Narrative intro, problem context, unified brain formation, idea selection
2. `/idea/pre-claim-preview`
   Scroll-based demo of OCR, validation, and claim preview
3. `/idea/smart-call-companion`
   Live call simulation with transcript and Smart Cards
4. `/idea/email-triage`
   Inbox classification and routing demo

---

## Animation Rules

- Prefer transform and opacity for performance
- Scroll drives scene progression
- Use staggered motion for cards, emails, and text
- No snapping or abrupt transitions
- Motion must reinforce meaning

---

## Implementation Steps You Must Follow

### Step 1: Project Setup

- Next.js App Router
- Tailwind configured
- Framer Motion installed
- Global styles set

### Step 2: Global Layout

- Minimal navigation
- Consistent spacing and typography
- Calm background palette

### Step 3: Motion System

Create a shared motion config:

- Durations
- Easings
- Variants
- Reduced motion variants

### Step 4: Home Page

- Floating fragments with parallax
- Unified Knowledge Base formation animation
- Orbiting idea buttons with hover and click transitions

### Step 5: Idea Pages

- Shared page template
- ScrollSection components
- Four scenes per idea
- Outcome summary per idea

### Step 6: Polish

- Page transitions
- Scroll smoothness
- No layout shift
- Clean responsive behaviour

---

## Design Constraints

- Rounded UI
- Soft shadows only where necessary
- Light backgrounds
- Subtle glow accents
- No clutter

---

## Code Quality Rules

- No component over 250 lines
- One responsibility per component
- Reusable UI primitives
- Centralised motion tokens
- Clean folder structure

---

## Output Expectations

You must:

- Generate all required files
- Ensure the app runs locally
- Provide run commands
- Confirm routes and interactions work
- Summarise what was built

---

## Final Instruction

Build this as if it will be reviewed by:

- Product leaders
- AI architects
- Non-technical stakeholders

Clarity, calmness, and narrative flow matter more than technical flexing.

---

Use the provided `PRD.md` as the single source of truth.
