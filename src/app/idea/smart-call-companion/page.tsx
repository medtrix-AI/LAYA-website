"use client";

import { motion } from "framer-motion";
import {
  Users,
  Phone,
  FileText,
  Sparkles,
  Brain,
  Zap,
  Target,
  Radio,
  BookOpen,
  Quote,
} from "lucide-react";
import { IdeaLayout } from "@/components/idea/IdeaLayout";
import { personaQuotes } from "@/lib/constants";

export default function SmartCallCompanionPage() {
  const demoSections = [
    // Section 1: Incoming Call
    <div key="call" className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 500 }}>
          A call comes in
        </h3>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          The moment a member calls, their profile, policy details, and recent activity load instantly. No hunting through systems.
        </p>
        <div className="flex items-center gap-4 text-sm text-foreground/50">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4" />
            <span>&lt;2s latency</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4" />
            <span>Intent recognition</span>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--pastel-lavender)] to-[var(--pastel-peach)] flex items-center justify-center">
            <Phone className="w-7 h-7 text-foreground/70" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg" style={{ fontWeight: 600 }}>
              Sarah McKenna
            </h4>
            <p className="text-sm text-foreground/50">Member since 2023 · Level 2 Plan</p>
          </div>
          <div className="bg-[var(--pastel-lavender)] rounded-full px-3 py-1 text-xs font-medium text-[var(--accent-lavender)]">
            Live
          </div>
        </div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-[var(--pastel-mint)] rounded-xl px-4 py-3 text-center text-foreground/70 text-sm"
        >
          Incoming call... voice transcription active
        </motion.div>
      </motion.div>
    </div>,

    // Section 2: Split Screen - Transcript + Smart Cards
    <div key="transcript">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-3xl md:text-4xl" style={{ fontWeight: 500 }}>
          Real-time intelligence
        </h3>
        <div className="hidden md:flex items-center gap-2 text-xs text-foreground/40 bg-[var(--glass-subtle)] rounded-full px-3 py-1.5 border border-black/5">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Live transcription · &lt;2s latency</span>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Live Transcript */}
        <motion.div
          whileHover={{ scale: 1.01, y: -3 }}
          className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-[var(--pastel-sky)] flex items-center justify-center">
              <FileText className="w-4 h-4 text-foreground/60" />
            </div>
            <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wide">
              Live Transcript
            </h4>
          </div>
          <div className="space-y-4">
            <div className="bg-[var(--pastel-lavender)]/20 rounded-xl px-4 py-3">
              <p className="text-xs text-foreground/50 mb-1">Sarah (Member):</p>
              <p className="text-sm text-foreground/80">&ldquo;I had a dental procedure last week and I need to check if it&apos;s covered...&rdquo;</p>
            </div>
            <div className="bg-[var(--pastel-mint)]/20 rounded-xl px-4 py-3">
              <p className="text-xs text-foreground/50 mb-1">Agent:</p>
              <p className="text-sm text-foreground/80">&ldquo;Of course, let me check your coverage right now.&rdquo;</p>
            </div>
            <div className="flex items-center gap-2 px-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-foreground/30"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                className="h-2 w-2 rounded-full bg-foreground/30"
              />
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                className="h-2 w-2 rounded-full bg-foreground/30"
              />
              <span className="text-xs text-foreground/30 ml-1">Listening...</span>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-black/5">
            <div className="flex items-center gap-2 text-xs text-foreground/40">
              <Brain className="w-3.5 h-3.5" />
              <span>Intent detected: <span className="text-foreground/60 font-medium">Coverage inquiry — Dental</span></span>
            </div>
          </div>
        </motion.div>

        {/* Right: Smart Cards */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03, x: 5 }}
            className="bg-gradient-to-br from-[var(--glass-strong)] to-[var(--pastel-lavender)]/20 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-black/5"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--accent-lavender)] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h5 className="text-xs text-foreground/50 mb-1 font-medium uppercase tracking-wide">Policy: Dental Coverage</h5>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Level 2 plan covers routine dental up to €200/year. Current usage: €50.
                </p>
                <p className="text-xs text-foreground/40 mt-2 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  Source: Policy §4.2
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.03, x: 5 }}
            className="bg-gradient-to-br from-[var(--glass-strong)] to-[var(--pastel-peach)]/20 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-black/5"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--accent-peach)] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h5 className="text-xs text-foreground/50 mb-1 font-medium uppercase tracking-wide">Recent Activity</h5>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Last claim: Jan 12, 2026 — Optical (€75, approved)
                </p>
                <p className="text-xs text-foreground/40 mt-2 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  Source: Claims History
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03, x: 5 }}
            className="bg-gradient-to-br from-[var(--glass-strong)] to-[var(--pastel-mint)]/20 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-black/5"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--accent-mint)] mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <h5 className="text-xs text-foreground/50 mb-1 font-medium uppercase tracking-wide">Suggested Response</h5>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  &ldquo;Your dental procedure is covered. You have €150 remaining this year.&rdquo;
                </p>
                <p className="text-xs text-foreground/40 mt-2 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" />
                  Source: Policy §4.2 + Claims DB
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>,

    // Section 3: Policy Knowledge
    <div key="policy" className="max-w-5xl mx-auto">
      <h3 className="text-3xl md:text-4xl mb-4 text-center" style={{ fontWeight: 500 }}>
        Policy knowledge, surfaced instantly
      </h3>
      <p className="text-foreground/60 text-center mb-12 max-w-2xl mx-auto">
        As the conversation flows, relevant policy snippets appear automatically — each with source citations for compliance.
      </p>
      <motion.div
        whileHover={{ scale: 1.01 }}
        className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-10 shadow-xl border border-black/5"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--pastel-sky)]/20 rounded-2xl p-6">
            <h5 className="text-xs text-foreground/50 mb-2 font-medium uppercase tracking-wide">Waiting Periods</h5>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              No waiting period for this member (joined 2023). Immediate access to dental benefits.
            </p>
            <p className="text-xs text-foreground/40 flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              BRE Rule #WP-104
            </p>
          </div>
          <div className="bg-[var(--pastel-rose)]/20 rounded-2xl p-6">
            <h5 className="text-xs text-foreground/50 mb-2 font-medium uppercase tracking-wide">Pre-authorization</h5>
            <p className="text-sm text-foreground/80 leading-relaxed mb-3">
              Not required for routine dental. Required for crowns, bridges, and specialist referrals.
            </p>
            <p className="text-xs text-foreground/40 flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              Policy §6.1 — Pre-Auth Matrix
            </p>
          </div>
        </div>
      </motion.div>
    </div>,

    // Section 4: Agent Experience
    <div key="agent" className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-[var(--glass-strong)] to-[var(--pastel-lavender)]/20 backdrop-blur-sm rounded-[2rem] p-10 shadow-xl border border-black/5"
        >
          <Brain className="w-14 h-14 text-foreground/50 mb-6" />
          <h4 className="text-2xl mb-3" style={{ fontWeight: 600 }}>
            Less cognitive load
          </h4>
          <p className="text-foreground/60 leading-relaxed mb-6">
            Agents don&apos;t need to memorise policy documents. The system listens, understands intent, and surfaces the right answer — with full source citations for compliance.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="bg-[var(--glass-subtle)] rounded-full px-3 py-1 border border-black/5 text-foreground/50">Voice transcription</span>
            <span className="bg-[var(--glass-subtle)] rounded-full px-3 py-1 border border-black/5 text-foreground/50">Intent detection</span>
            <span className="bg-[var(--glass-subtle)] rounded-full px-3 py-1 border border-black/5 text-foreground/50">Source citations</span>
          </div>
        </motion.div>
        <div>
          <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 500 }}>
            Calm, confident support
          </h3>
          <p className="text-lg text-foreground/60 leading-relaxed mb-6">
            When knowledge appears at the right moment, agents can focus on what matters: listening and helping. Every response is backed by a verifiable source.
          </p>
          <div className="text-sm text-foreground/50">
            50+ calls/day managed with confidence — no more physical policy binder consultations.
          </div>
        </div>
      </div>
    </div>,
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-foreground/60" />,
      title: "Faster calls",
      description: "25% reduction in average handling time. Less searching, more helping.",
      stat: "-25%",
    },
    {
      icon: <Target className="w-8 h-8 text-foreground/60" />,
      title: "Accurate answers",
      description: "85%+ first contact resolution with real-time policy cards and source citations.",
      stat: "85%+",
    },
    {
      icon: <Users className="w-8 h-8 text-foreground/60" />,
      title: "Happier agents",
      description: "Less stress, less memorisation, more satisfaction. Agents feel supported, not overwhelmed.",
    },
  ];

  return (
    <IdeaLayout
      title="Smart Call Companion"
      subtitle="Live voice transcription with <2 second latency. Intent recognition triggers dynamic smart cards with source citations for full compliance."
      color="linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-peach) 100%)"
      glowColor="var(--glow-lavender)"
      codename="Layer 2 — The Copilot"
      icon={<Users className="w-12 h-12 md:w-14 md:h-14 text-foreground/70" />}
      demoSections={demoSections}
      benefits={benefits}
      personaQuote={personaQuotes.agentSarah}
    />
  );
}
