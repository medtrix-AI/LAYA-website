import type { Fragment, IdeaRoute } from "@/types";

// Color palette
export const colors = {
  bg: "#fafafa",
  surface: "#ffffff",
  foreground: "#1e293b",
  muted: "#64748b",
  border: "#e2e8f0",
  accent: "#4f46e5",
  accentLight: "#818cf8",
  accentGlow: "rgba(99, 102, 241, 0.3)",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
} as const;

// Hero copy
export const heroCopy = [
  "We are Medtrix.",
  "A team of five.",
  "We saw three real problems.",
  "We chose to solve the intelligence behind them.",
];

export const heroTagline = "One Brain. Three Layers. Zero Bottlenecks.";

export const heroStat = {
  value: "35,000+",
  label: "monthly claims processed",
};

// Performance targets
export const performanceMetrics = [
  { value: "90%", label: "Straight-Through Processing", description: "Claims processed without manual intervention" },
  { value: "25%", label: "AHT Reduction", description: "Average handling time improvement" },
  { value: "<5%", label: "Pending Rate", description: "Fewer claims stuck in limbo" },
  { value: "85%+", label: "First Contact Resolution", description: "Issues resolved on the first call" },
];

// Problem section
export const problems = [
  {
    id: "claims",
    title: "The Claims Black Box",
    description:
      "Members submit incomplete claims lacking Consultant Codes and clear receipts, creating extended delays and a growing backlog of pending cases.",
    stat: "35,000+",
    statLabel: "claims/month",
    icon: "📄",
  },
  {
    id: "knowledge",
    title: "Agent Knowledge Overload",
    description:
      "Support staff managing 50+ calls daily lack quick access to policy information, relying on physical consultation of hundreds of policy documents.",
    stat: "50+",
    statLabel: "calls/day per agent",
    icon: "🧠",
  },
  {
    id: "volume",
    title: "Adjuster Volume Overload",
    description:
      "Routine and complex claims mixed together, reducing efficiency. Adjusters spend hours sorting instead of applying the judgment they were hired for.",
    stat: "65%",
    statLabel: "time spent sorting",
    icon: "📬",
  },
];

// Unified brain labels
export const brainLabels = ["Policies", "Business Rules", "Coverage Logic", "Decisions"];

export const brainCopy = {
  line1: "One shared brain.",
  line2: "One source of truth.",
};

// Persona quotes
export const personaQuotes = {
  patientPatrick: {
    name: "Patient Patrick",
    role: "Member",
    quote: "I want to upload a photo of my receipt to WhatsApp and be told instantly if I'm missing any details.",
  },
  agentSarah: {
    name: "Agent Sarah",
    role: "Support Agent",
    quote: "I want the system to listen to my call and pop up the correct policy answer on my screen.",
  },
  claimsManagerMike: {
    name: "Claims Manager Mike",
    role: "Claims Adjuster",
    quote: "I only want to see claims that have a High Risk Score or Policy Violations.",
  },
};

// Security & compliance
export const complianceItems = [
  { label: "PII Redaction", description: "All personal data redacted before LLM processing" },
  { label: "GDPR Compliant", description: "EU data residency, Dublin Region" },
  { label: "Full Audit Trail", description: "Complete log of all AI decisions" },
];

// Idea routes
export const ideaRoutes: IdeaRoute[] = [
  {
    id: "pre-claim",
    title: "Pre-Claim Preview",
    subtitle: "OCR-powered receipt scanning with real-time policy validation — stop incomplete claims before they enter the system",
    href: "/idea/pre-claim-preview",
    color: "#10b981",
  },
  {
    id: "call-companion",
    title: "Smart Call Companion",
    subtitle: "Live voice transcription with <2s latency and dynamic smart cards — give every agent an AI copilot",
    href: "/idea/smart-call-companion",
    color: "#3b82f6",
  },
  {
    id: "email-triage",
    title: "Intelligent Email Triage",
    subtitle: "Risk scoring 0–100 with automated routing — let humans focus on judgment, not sorting",
    href: "/idea/email-triage",
    color: "#8b5cf6",
  },
];

// Fragments that float across the home page
export const fragments: Fragment[] = [
  { id: "f1", label: "Policy §4.2", type: "policy" },
  { id: "f2", label: "Outpatient Rule", type: "rule" },
  { id: "f3", label: "Cover: Dental", type: "coverage" },
  { id: "f4", label: "Claim #7291", type: "decision" },
  { id: "f5", label: "Policy §1.8", type: "policy" },
  { id: "f6", label: "BRE: Max €500", type: "rule" },
  { id: "f7", label: "Cover: Vision", type: "coverage" },
  { id: "f8", label: "Pre-Auth Req.", type: "decision" },
  { id: "f9", label: "Policy §12.1", type: "policy" },
  { id: "f10", label: "Exclusion: §3", type: "rule" },
  { id: "f11", label: "Cover: Physio", type: "coverage" },
  { id: "f12", label: "Appeal #412", type: "decision" },
];

// Outcome metrics per idea
export const preClaimOutcomes = [
  { label: "Pending claims", value: "-62%", description: "Fewer incomplete submissions" },
  { label: "Intake speed", value: "3x faster", description: "Cleaner first-pass data" },
  { label: "Resolution time", value: "-40%", description: "Less back-and-forth" },
];

export const callCompanionOutcomes = [
  { label: "Avg. handle time", value: "-35%", description: "Faster, focused calls" },
  { label: "First-call resolution", value: "+28%", description: "Answers on the spot" },
  { label: "Agent confidence", value: "High", description: "Reduced cognitive load" },
];

export const emailTriageOutcomes = [
  { label: "Manual sorting", value: "Eliminated", description: "AI handles classification" },
  { label: "Response time", value: "-50%", description: "Faster turnaround" },
  { label: "Human focus", value: "Judgment only", description: "No more busywork" },
];
