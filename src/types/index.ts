export type FragmentState = "floating" | "chaotic" | "clustered" | "magnetized";

export interface Fragment {
  id: string;
  label: string;
  type: "policy" | "rule" | "coverage" | "decision";
}

export interface IdeaRoute {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  color: string;
}

export interface ReceiptField {
  id: string;
  label: string;
  value: string;
  status: "valid" | "missing" | "invalid";
}

export interface PolicyRule {
  id: string;
  rule: string;
  result: "pass" | "fail" | "warning";
}

export interface TranscriptLine {
  id: string;
  speaker: "caller" | "agent";
  text: string;
  timestamp: string;
}

export interface SmartCard {
  id: string;
  type: "policy" | "compliance" | "next-step";
  title: string;
  content: string;
  source: string;
}

export interface Email {
  id: string;
  from: string;
  subject: string;
  preview: string;
  intent: string;
  priority: "high" | "medium" | "low";
  route: "auto-pay" | "rules-engine" | "human-review";
}

export interface OutcomeMetric {
  label: string;
  value: string;
  description: string;
}
