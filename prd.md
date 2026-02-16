# PRD.md
Aesthetic & Intuitive Interactive Webpage  
**Project:** Medtrix × Laya Unified Intelligence Ecosystem (LUIE)  
**Version:** 1.0  
**Status:** Final Draft  
**Owner:** Medtrix Team  

---

## 1. Product Vision

This website is an **interactive narrative experience**, not a traditional product site.

Its purpose is to communicate how **Medtrix** approached Laya Healthcare’s operational challenges and designed a **Unified Intelligence Ecosystem (LUIE)** that powers three intelligent agents through a shared brain.

The site must:
- Feel intuitive and calm
- Avoid information overload
- Explain complex systems visually
- Be memorable after a single scroll-through

The user should *feel* the system before understanding it.

---

## 2. Team Introduction & Identity

### Brand Voice
Confident, curious, slightly playful, human.

### Narrative Identity
The team introduces itself as thinkers, not vendors.

**Core identity message:**
> We are Medtrix.  
> A team of five.  
> Curious by nature.  
> Slightly allergic to inefficiency.

The team positions itself as problem solvers who questioned *why* problems exist, not just *how* to patch them.

---

## 3. Problem Context (Laya-Specific, Non-Technical)

The website must visually communicate the following realities without using dashboards or KPIs upfront:

1. Claims often enter Laya’s system incomplete and become “Pending”
2. Support agents carry a heavy cognitive load searching for policy knowledge
3. Claims adjusters are overwhelmed by volume instead of focusing on judgment

These are shown as:
- Visual chaos
- Waiting states
- Human overload

**Key framing insight:**
> The system works hard.  
> People work harder.

---

## 4. Core Concept

### Unified Knowledge Base  
**“The Constitution of Laya”**

At the heart of the experience is a single shared intelligence layer that contains:
- Policies
- Business Rules (BRE)
- Coverage logic
- Decision history

This Unified Knowledge Base:
- Acts as the single source of truth
- Grounds all AI reasoning
- Powers every agent consistently

Visually represented as a **glowing core** formed from fragmented documents and rules.

---

## 5. Website Structure

### Routes
- `/`  
  Narrative introduction, problem context, unified brain, idea selection
- `/idea/pre-claim-preview`
- `/idea/smart-call-companion`
- `/idea/email-triage`

No complex navigation.  
One clear scroll-based journey.

---

## 6. Home Page User Flow

### 6.1 Hero Section
Purpose:
Introduce Medtrix and set narrative tone.

Visuals:
- Soft floating policy documents
- Rule fragments
- Gentle parallax motion

Copy appears line-by-line:
- We are Medtrix
- A team of five
- We saw three real problems
- We chose to solve the intelligence behind them

---

### 6.2 Problem Context Section
Purpose:
Make operational pain *felt*, not explained.

Visuals:
- Floating fragments become slightly chaotic
- Three loose clusters form

Each cluster represents:
1. Claim submission black box
2. Agent knowledge overload
3. Adjuster volume overload

Minimal copy supports each cluster.

---

### 6.3 Unified Knowledge Base Formation
Purpose:
Reveal the core insight.

Visuals:
- Fragments magnetise into a central glowing core
- Brief labels appear then fade:
  Policies
  Business Rules
  Coverage Logic
  Decisions

Copy:
> One shared brain.  
> One source of truth.

---

### 6.4 Choice Moment
Purpose:
Let the user explore consequences of the shared brain.

Visuals:
- Three orbiting buttons around the core

Buttons:
- Pre-Claim Preview
- Smart Call Companion
- Intelligent Email Triage

Hover slows orbit.  
Click pulls the idea forward.

---

## 7. Idea Page Template (Shared)

Every idea page follows the same structure:

1. One-line layman explanation
2. Scroll-driven interactive scenario
3. Visual decision logic
4. Clear operational outcome
5. Return-to-core action

Consistency reinforces the “one brain, many agents” idea.

---

## 8. Idea Flows

### 8.1 Pre-Claim Preview (Pre-Claim Gatekeeper)

Goal:
Prevent incomplete claims from entering Laya’s backend.

Flow:
1. User uploads receipt
2. OCR extracts fields
3. Missing information is highlighted
4. Policy and rule validation runs
5. Preview card shows:
   Likely Approved
   Needs Correction
   Likely Rejected

Outcome visuals:
- Fewer pending claims
- Cleaner intake
- Faster resolution

---

### 8.2 Smart Call Companion (Agent Copilot)

Goal:
Reduce agent AHT and cognitive load.

Flow:
1. Incoming call animation
2. Live transcript types naturally
3. Smart Cards appear:
   Policy answer
   Compliance snippet
   Next step guidance
4. Source citations visible

Outcome visuals:
- Shorter calls
- Higher first-call resolution
- Reduced agent stress

---

### 8.3 Intelligent Email Triage (Auto-Triage Engine)

Goal:
Ensure humans focus on judgment, not sorting.

Flow:
1. Inbox floods with emails
2. AI classifies intent and priority
3. Emails route into:
   Auto-pay
   Rules engine
   Human review

Outcome visuals:
- Clear inbox
- Faster turnaround
- Focused human attention

---

## 9. Visual & Motion Principles

- No abrupt animations
- Everything eases in and out
- Scroll drives understanding
- Motion explains logic
- Calm, rounded, aesthetic UI

Reduced motion must be supported automatically.

---

## 10. Tech Stack

Chosen for animation precision and aesthetic control:
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion

No backend integrations.  
Mock data only.

---

## 11. Accessibility

- Keyboard navigable
- Sufficient contrast
- Motion reduced for prefers-reduced-motion
- No information conveyed by color alone

---

## 12. Success Criteria

The website is successful if:
- A viewer can explain LUIE in one sentence
- The Unified Knowledge Base is memorable
- The three agents feel cohesive, not separate tools

---

## 13. Assumptions

- Demo-only experience
- Desktop-first, mobile supported
- Focus on clarity and storytelling over feature depth
