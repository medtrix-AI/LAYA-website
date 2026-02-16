import type { ReceiptField, PolicyRule, TranscriptLine, SmartCard, Email } from "@/types";

export const receiptFields: ReceiptField[] = [
  { id: "r1", label: "Patient Name", value: "Sarah Murphy", status: "valid" },
  { id: "r2", label: "Date of Service", value: "2024-11-15", status: "valid" },
  { id: "r3", label: "Provider", value: "Dublin Dental Clinic", status: "valid" },
  { id: "r4", label: "Procedure Code", value: "D2740", status: "valid" },
  { id: "r5", label: "Amount Charged", value: "€385.00", status: "valid" },
  { id: "r6", label: "Policy Number", value: "LAY-2024-8912", status: "valid" },
  { id: "r7", label: "Referral Code", value: "", status: "missing" },
  { id: "r8", label: "Pre-Authorization", value: "", status: "missing" },
];

export const policyRules: PolicyRule[] = [
  { id: "p1", rule: "Coverage active for dental procedures", result: "pass" },
  { id: "p2", rule: "Provider is within network", result: "pass" },
  { id: "p3", rule: "Amount within policy limit (€500)", result: "pass" },
  { id: "p4", rule: "Pre-authorization required for crowns", result: "fail" },
  { id: "p5", rule: "Referral required for specialist procedures", result: "warning" },
];

export const transcriptLines: TranscriptLine[] = [
  { id: "t1", speaker: "caller", text: "Hi, I'm calling about my dental claim. It's been pending for two weeks.", timestamp: "0:03" },
  { id: "t2", speaker: "agent", text: "I can help with that. Can I have your policy number?", timestamp: "0:08" },
  { id: "t3", speaker: "caller", text: "Sure, it's LAY-2024-8912.", timestamp: "0:12" },
  { id: "t4", speaker: "agent", text: "Thank you. I can see your claim for the dental crown procedure.", timestamp: "0:18" },
  { id: "t5", speaker: "caller", text: "Why is it still pending? I submitted everything.", timestamp: "0:23" },
  { id: "t6", speaker: "agent", text: "It looks like the pre-authorization document is missing. Let me check the requirements.", timestamp: "0:30" },
];

export const smartCards: SmartCard[] = [
  {
    id: "sc1",
    type: "policy",
    title: "Crown Coverage Policy",
    content: "Dental crowns (D2740) require pre-authorization when exceeding €300. Policy §4.2 applies.",
    source: "Policy Document §4.2",
  },
  {
    id: "sc2",
    type: "compliance",
    title: "Pre-Auth Requirement",
    content: "Member must obtain pre-authorization from their plan coordinator before specialist procedures.",
    source: "BRE Rule #CR-201",
  },
  {
    id: "sc3",
    type: "next-step",
    title: "Recommended Action",
    content: "Advise member to request retroactive pre-authorization. Form available at member portal. Processing: 48 hours.",
    source: "Resolution Playbook",
  },
];

export const emails: Email[] = [
  {
    id: "e1",
    from: "sarah.murphy@email.com",
    subject: "Claim status update request",
    preview: "Hi, I submitted my dental claim two weeks ago and haven't heard back...",
    intent: "Claim Status Inquiry",
    priority: "medium",
    route: "rules-engine",
  },
  {
    id: "e2",
    from: "john.kelly@email.com",
    subject: "Payment confirmation needed",
    preview: "I received treatment on Nov 3rd and my provider says the payment...",
    intent: "Payment Verification",
    priority: "low",
    route: "auto-pay",
  },
  {
    id: "e3",
    from: "emma.walsh@email.com",
    subject: "URGENT: Denied claim appeal",
    preview: "My claim was denied but I believe this is covered under my policy...",
    intent: "Claim Appeal",
    priority: "high",
    route: "human-review",
  },
  {
    id: "e4",
    from: "liam.byrne@email.com",
    subject: "Refund for overpayment",
    preview: "I was charged twice for the same consultation. Please process...",
    intent: "Refund Request",
    priority: "medium",
    route: "auto-pay",
  },
  {
    id: "e5",
    from: "aoife.odonoghue@email.com",
    subject: "Policy coverage question",
    preview: "I'm planning to get physiotherapy sessions and want to know if...",
    intent: "Coverage Inquiry",
    priority: "low",
    route: "rules-engine",
  },
  {
    id: "e6",
    from: "ciaran.murphy@email.com",
    subject: "Complaint about service delay",
    preview: "I've been waiting three weeks for a response and this is unacceptable...",
    intent: "Complaint",
    priority: "high",
    route: "human-review",
  },
];
