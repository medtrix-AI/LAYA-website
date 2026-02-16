"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  AlertTriangle,
  CheckCircle2,
  Inbox,
  TrendingUp,
  Shield,
  CreditCard,
  Scale,
  Eye,
  AlertOctagon,
} from "lucide-react";
import { IdeaLayout } from "@/components/idea/IdeaLayout";
import { personaQuotes } from "@/lib/constants";

export default function EmailTriagePage() {
  const demoSections = [
    // Section 1: Inbox Flood
    <div key="flood" className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 500 }}>
          The inbox problem
        </h3>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Hundreds of emails arrive daily. Routine and complex claims mixed together — adjusters spend hours sorting instead of applying judgment.
        </p>
        <p className="text-foreground/50 leading-relaxed">
          65% of adjuster time is spent on triage. The system changes that with AI-powered risk scoring and automatic routing.
        </p>
      </div>
      <motion.div
        className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5 relative overflow-hidden"
        style={{ height: "400px" }}
      >
        <div className="space-y-3 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className="bg-[var(--glass-subtle)] rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <Mail className="w-4 h-4 text-foreground/30 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="h-3 bg-foreground/8 rounded w-3/4 mb-2" />
                <div className="h-2 bg-foreground/5 rounded w-1/2" />
              </div>
              <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center text-xs text-foreground/30 font-mono flex-shrink-0">
                {[72, 15, 45, 88, 8, 63, 91, 22][i]}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--card)] to-transparent" />
      </motion.div>
    </div>,

    // Section 2: Risk Scoring 0-100
    <div key="scoring">
      <h3 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontWeight: 500 }}>
        Risk scoring: 0–100
      </h3>
      <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
        Every incoming claim is scored on a 0–100 risk scale. Low-risk claims flow through automatically. High-risk claims get flagged for human expertise.
      </p>

      {/* Visual risk scale */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="relative h-3 rounded-full overflow-hidden bg-[var(--glass)]">
          <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-green-300 to-green-400 rounded-l-full" />
          <div className="absolute inset-y-0 left-[20%] w-[50%] bg-gradient-to-r from-orange-300 to-orange-400" />
          <div className="absolute inset-y-0 left-[70%] w-[30%] bg-gradient-to-r from-red-400 to-red-500 rounded-r-full" />
        </div>
        <div className="flex justify-between mt-3 text-xs text-foreground/50">
          <span>0 — Low Risk</span>
          <span>20</span>
          <span>70</span>
          <span>100 — High Risk</span>
        </div>
      </div>

      <div className="grid gap-5 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02, x: 8 }}
          className="bg-gradient-to-r from-red-50 to-[var(--glass-strong)] backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-red-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">
                  SCORE: 88
                </span>
                <span className="text-xs text-foreground/40">2 min ago</span>
              </div>
              <h4 className="text-base mb-1" style={{ fontWeight: 600 }}>
                Surgery pre-authorization — same-day request
              </h4>
              <p className="text-foreground/60 text-sm">
                From: sarah.mckenna@email.com — High-value claim, waiting period expiry detected
              </p>
            </div>
            <div className="hidden md:flex items-center gap-1 text-xs text-red-500">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>Anomaly flagged</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, x: 8 }}
          className="bg-gradient-to-r from-orange-50 to-[var(--glass-strong)] backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-orange-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  SCORE: 45
                </span>
                <span className="text-xs text-foreground/40">15 min ago</span>
              </div>
              <h4 className="text-base mb-1" style={{ fontWeight: 600 }}>
                Claim appeal — optical coverage dispute
              </h4>
              <p className="text-foreground/60 text-sm">
                From: john.davis@email.com — Requires manual policy interpretation
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02, x: 8 }}
          className="bg-gradient-to-r from-green-50 to-[var(--glass-strong)] backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-green-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  SCORE: 12
                </span>
                <span className="text-xs text-foreground/40">1 hour ago</span>
              </div>
              <h4 className="text-base mb-1" style={{ fontWeight: 600 }}>
                Routine payment confirmation
              </h4>
              <p className="text-foreground/60 text-sm">
                From: emma.walsh@email.com — Standard claim, all fields valid, auto-payable
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>,

    // Section 3: Routing Lanes (updated to match reference)
    <div key="routing" className="max-w-5xl mx-auto">
      <h3 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontWeight: 500 }}>
        Automatic routing
      </h3>
      <p className="text-lg text-center text-foreground/60 mb-12 max-w-3xl mx-auto">
        Claims don&apos;t sit in a queue. They flow to the right destination based on risk score — instantly.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[var(--pastel-mint)] to-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-black/5 text-center h-full">
            <div className="w-14 h-14 rounded-2xl bg-[var(--glass-subtle)] flex items-center justify-center mx-auto mb-5">
              <CreditCard className="w-7 h-7 text-foreground/60" />
            </div>
            <h4 className="text-lg mb-1" style={{ fontWeight: 600 }}>
              Auto-Pay
            </h4>
            <p className="text-xs text-green-600 font-medium mb-4">Score 0–20</p>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              Low-risk claims with valid fields get instant automatic payment from the knowledge base.
            </p>
            <div className="text-3xl font-bold text-foreground/80">42%</div>
            <p className="text-xs text-foreground/50 mt-1">of claims</p>
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[var(--pastel-lavender)] to-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-black/5 text-center h-full">
            <div className="w-14 h-14 rounded-2xl bg-[var(--glass-subtle)] flex items-center justify-center mx-auto mb-5">
              <Scale className="w-7 h-7 text-foreground/60" />
            </div>
            <h4 className="text-lg mb-1" style={{ fontWeight: 600 }}>
              Rules Engine
            </h4>
            <p className="text-xs text-orange-600 font-medium mb-4">Score 21–70</p>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              Medium-risk claims checked against business rules with context attached for faster resolution.
            </p>
            <div className="text-3xl font-bold text-foreground/80">35%</div>
            <p className="text-xs text-foreground/50 mt-1">of claims</p>
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[var(--pastel-peach)] to-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-black/5 text-center h-full">
            <div className="w-14 h-14 rounded-2xl bg-[var(--glass-subtle)] flex items-center justify-center mx-auto mb-5">
              <Eye className="w-7 h-7 text-foreground/60" />
            </div>
            <h4 className="text-lg mb-1" style={{ fontWeight: 600 }}>
              Human Review
            </h4>
            <p className="text-xs text-red-600 font-medium mb-4">Score 71–100</p>
            <p className="text-foreground/60 text-sm leading-relaxed mb-4">
              High-risk claims flagged with fraud detection and anomaly alerts for expert human judgment.
            </p>
            <div className="text-3xl font-bold text-foreground/80">23%</div>
            <p className="text-xs text-foreground/50 mt-1">of claims</p>
          </div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-400"
          />
        </motion.div>
      </div>
    </div>,

    // Section 4: Impact Metrics + Fraud Detection
    <div key="impact" className="max-w-5xl mx-auto">
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-gradient-to-br from-[var(--glass-strong)] to-[var(--pastel-sky)]/20 backdrop-blur-sm rounded-[2rem] p-10 md:p-12 shadow-xl border border-black/5"
      >
        <h3 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontWeight: 500 }}>
          Clear inboxes, clear minds
        </h3>
        <p className="text-lg text-foreground/60 leading-relaxed text-center mb-10 max-w-2xl mx-auto">
          Adjusters no longer wade through noise. They focus on what needs their expertise.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[var(--glass-subtle)] rounded-2xl p-6">
            <div className="text-4xl font-bold text-green-600 mb-1">65%</div>
            <p className="text-foreground/70 text-sm">reduction in triage time</p>
          </div>
          <div className="bg-[var(--glass-subtle)] rounded-2xl p-6">
            <div className="text-4xl font-bold text-[var(--accent-sky)] mb-1">2.5hrs</div>
            <p className="text-foreground/70 text-sm">saved per adjuster, daily</p>
          </div>
        </div>
        <div className="bg-red-50/50 rounded-xl p-5 border border-red-100 flex items-start gap-3">
          <AlertOctagon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-foreground/70 mb-1">Fraud Detection Built In</p>
            <p className="text-xs text-foreground/50 leading-relaxed">
              Anomaly alerts flag suspicious patterns — duplicate claims, unusual amounts, or policy timing irregularities — for immediate human review.
            </p>
          </div>
        </div>
      </motion.div>
    </div>,
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-foreground/60" />,
      title: "Dramatic efficiency",
      description: "40% more claims handled with the same team size. Less sorting, more solving.",
      stat: "+40%",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-foreground/60" />,
      title: "Faster responses",
      description: "Risk-scored claims surface instantly. Members get answers when they need them most.",
      stat: "-50%",
    },
    {
      icon: <Shield className="w-8 h-8 text-foreground/60" />,
      title: "Reduced burnout",
      description: "Less inbox anxiety. More meaningful work. Adjusters feel in control again.",
      stat: "2.5hrs",
    },
  ];

  return (
    <IdeaLayout
      title="Intelligent Email Triage"
      subtitle="Risk scoring 0–100 with automated routing. Auto-pay low-risk claims, rule-check medium-risk, and flag high-risk with fraud detection and anomaly alerts."
      color="linear-gradient(135deg, var(--pastel-sky) 0%, var(--pastel-peach) 100%)"
      glowColor="var(--glow-sky)"
      codename="Layer 3 — The Triage Engine"
      icon={<Zap className="w-12 h-12 md:w-14 md:h-14 text-foreground/70" />}
      demoSections={demoSections}
      benefits={benefits}
      personaQuote={personaQuotes.claimsManagerMike}
    />
  );
}
