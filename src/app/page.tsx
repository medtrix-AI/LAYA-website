"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Users,
  Mail,
  Sparkles,
  BookOpen,
  Zap,
  Shield,
  Lock,
  Activity,
} from "lucide-react";
import { FloatingElement } from "@/components/shared/FloatingElement";
import { ScrollIndicator } from "@/components/shared/ScrollIndicator";
import { ScrollSection } from "@/components/shared/ScrollSection";

const metrics = [
  { value: "90%", label: "STP Rate", color: "var(--pastel-mint)" },
  { value: "25%", label: "AHT Reduction", color: "var(--pastel-lavender)" },
  { value: "<5%", label: "Pending Rate", color: "var(--pastel-sky)" },
  { value: "85%+", label: "FCR", color: "var(--pastel-peach)" },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Section 1: Hero — full height with floating elements */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[var(--pastel-mint)]/25 via-[var(--background)] to-[var(--background)]">
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0} x={-200} y={100} rotation={-15} duration={25}>
            <div className="w-24 h-32 rounded-3xl bg-[var(--pastel-mint)] opacity-50" />
          </FloatingElement>
          <FloatingElement delay={0.5} x={200} y={-50} rotation={20} duration={30}>
            <div className="w-32 h-24 rounded-3xl bg-[var(--pastel-lavender)] opacity-50" />
          </FloatingElement>
          <FloatingElement delay={1} x={-100} y={-100} rotation={10} duration={28}>
            <div className="w-28 h-28 rounded-full bg-[var(--pastel-peach)] opacity-50" />
          </FloatingElement>
          <FloatingElement delay={1.5} x={150} y={150} rotation={-10} duration={32}>
            <div className="w-36 h-20 rounded-3xl bg-[var(--pastel-sky)] opacity-50" />
          </FloatingElement>
          <FloatingElement delay={2} x={-50} y={200} rotation={25} duration={27}>
            <div className="w-20 h-20 rounded-2xl bg-[var(--pastel-rose)] opacity-50" />
          </FloatingElement>
          <FloatingElement delay={0.8} x={250} y={200} rotation={-20} duration={26}>
            <div className="w-24 h-24 rounded-full bg-[var(--pastel-sage)] opacity-40" />
          </FloatingElement>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="fixed top-8 left-8 z-50 inline-flex items-center gap-4 bg-[var(--glass-strong)] backdrop-blur-sm rounded-3xl px-10 py-5 border border-black/5 shadow-lg"
          >
            <Activity className="w-8 h-8 text-[var(--accent-mint)]" />
            <span className="text-2xl text-foreground/70">
              <span className="font-semibold text-foreground/90">Medtrix</span> AI
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05 }}
          >
            We are Medtrix.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl text-foreground/70 mb-4"
            style={{ letterSpacing: "-0.01em" }}
          >
            An AI solution team for healthcare.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/50 font-medium tracking-wide"
          >
           currently building AI- Healthcare solutions representing NCI for Citi UpStarts
          </motion.p>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* Section 2: Problem Context — colored background */}
      <ScrollSection>
        <div className="w-full bg-gradient-to-b from-[var(--background)] via-[var(--pastel-mint)]/15 to-[var(--background)] py-20 md:py-28">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2
                className="text-4xl md:text-5xl mb-4"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                The problem space
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                The system works hard. People work harder.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Claims problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="group bg-[var(--glass)] backdrop-blur-sm rounded-[1.5rem] p-7 shadow-sm border border-[var(--pastel-mint)]/50 hover:shadow-lg hover:border-[var(--pastel-mint)] transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--pastel-mint)] flex items-center justify-center">
                      <FileText className="w-6 h-6 text-[var(--accent-mint)]" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-foreground/80">35k+</div>
                      <div className="text-xs text-foreground/50">claims/month</div>
                    </div>
                  </div>
                  <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                    Claim submission
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    Members submit incomplete claims lacking Consultant Codes and clear receipts, creating extended delays and a growing backlog.
                  </p>
                </div>
              </motion.div>

              {/* Knowledge problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="group bg-[var(--glass)] backdrop-blur-sm rounded-[1.5rem] p-7 shadow-sm border border-[var(--pastel-lavender)]/50 hover:shadow-lg hover:border-[var(--pastel-lavender)] transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--pastel-lavender)] flex items-center justify-center">
                      <Users className="w-6 h-6 text-[var(--accent-lavender)]" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-foreground/80">50+</div>
                      <div className="text-xs text-foreground/50">calls/day</div>
                    </div>
                  </div>
                  <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                    Agent knowledge
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    Support staff managing 50+ calls daily lack quick access to policy information, relying on physical consultation of documents.
                  </p>
                </div>
              </motion.div>

              {/* Volume problem */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="group bg-[var(--glass)] backdrop-blur-sm rounded-[1.5rem] p-7 shadow-sm border border-[var(--pastel-peach)]/50 hover:shadow-lg hover:border-[var(--pastel-peach)] transition-all duration-300 h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[var(--pastel-peach)] flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[var(--accent-peach)]" />
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-foreground/80">65%</div>
                      <div className="text-xs text-foreground/50">time sorting</div>
                    </div>
                  </div>
                  <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                    Adjuster inbox
                  </h3>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    Routine and complex claims mixed together, reducing efficiency. Judgment buried under volume and manual sorting.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Section 3: Performance Targets — compact strip */}
      <ScrollSection>
        <div className="w-full bg-[var(--pastel-sky)]/10 py-14 md:py-20">
          <div className="container max-w-5xl mx-auto px-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center text-foreground/50 text-xs font-medium tracking-widest uppercase mb-10"
            >
              Performance Targets
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div
                    className="inline-flex w-16 h-16 rounded-2xl items-center justify-center mb-3"
                    style={{ background: m.color }}
                  >
                    <span className="text-xl font-bold text-foreground/80">{m.value}</span>
                  </div>
                  <p className="text-xs text-foreground/60 font-medium">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Section 4: Unified Knowledge Base — colored bg */}
      <ScrollSection className="relative">
        <div className="w-full bg-gradient-to-b from-[var(--background)] via-[var(--pastel-lavender)]/15 to-[var(--background)] py-24 md:py-32">
          <div className="relative max-w-4xl mx-auto px-6">
            {/* Central glowing orb */}
            <div className="flex justify-center mb-12">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative"
              >
                <div className="relative w-48 h-48 md:w-56 md:h-56">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--pastel-mint)] via-[var(--pastel-lavender)] to-[var(--pastel-sky)] rounded-full blur-2xl opacity-50 animate-pulse" />
                  <div className="absolute inset-6 bg-gradient-to-br from-[var(--glass-strong)] to-[var(--glass-subtle)] backdrop-blur-xl rounded-full border border-[var(--glass)] shadow-2xl flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-foreground/50" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Labels around — as a grid instead of absolute */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {["Policies", "Business Rules", "Coverage Logic", "Decisions"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="bg-[var(--glass)] backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm border border-[var(--pastel-lavender)]/40 text-center"
                >
                  <p className="text-foreground/70 text-sm font-medium">{label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-center"
            >
              <h2
                className="text-4xl md:text-5xl mb-4"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                One unified knowledge base.
              </h2>
              <p className="text-xl md:text-2xl text-foreground/60">
                The constitution of Laya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-14"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="arch.png"
                alt="Medtrix architecture — unified knowledge base powering three intelligent layers"
                className="w-full rounded-[2rem] shadow-xl border border-black/5"
              />
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* Section 5: Three Intelligent Layers — strong colored bg */}
      <ScrollSection>
        <div className="w-full bg-gradient-to-b from-[var(--pastel-peach)]/15 via-[var(--pastel-rose)]/10 to-[var(--background)] py-20 md:py-28">
          <div className="container max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <h2
                className="text-4xl md:text-5xl mb-4"
                style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
              >
                Three intelligent layers
              </h2>
              <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
                From one unified knowledge base, three tools that make complex decisions feel effortless.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Pre-Claim Preview */}
              <Link href="/idea/pre-claim-preview">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-mint)] to-[var(--glow-sage)] rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[var(--glass-strong)] backdrop-blur-sm rounded-[1.5rem] p-7 shadow-md border border-[var(--pastel-mint)]/40 hover:border-[var(--pastel-mint)] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--pastel-mint)] to-[var(--pastel-sage)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BookOpen className="w-6 h-6 text-[var(--accent-mint)]" />
                      </div>
                      <span className="text-xs font-medium text-[var(--accent-mint)] bg-[var(--pastel-mint)] px-3 py-1 rounded-full">
                        Gatekeeper
                      </span>
                    </div>
                    <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                      Pre-Claim Preview
                    </h3>
                    <p className="text-foreground/60 leading-relaxed text-sm flex-grow mb-3">
                      OCR receipt scanning with 95%+ accuracy and real-time policy validation. Members see their decision before they submit.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-foreground/40 mb-3">
                      <span>WhatsApp + Web</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/20" />
                      <span>Real-time feedback</span>
                    </div>
                    <div className="text-foreground/40 text-sm group-hover:text-[var(--accent-mint)] transition-colors font-medium">
                      Explore this layer →
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Smart Call Companion */}
              <Link href="/idea/smart-call-companion">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-lavender)] to-[var(--glow-peach)] rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[var(--glass-strong)] backdrop-blur-sm rounded-[1.5rem] p-7 shadow-md border border-[var(--pastel-lavender)]/40 hover:border-[var(--pastel-lavender)] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--pastel-lavender)] to-[var(--pastel-peach)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-[var(--accent-lavender)]" />
                      </div>
                      <span className="text-xs font-medium text-[var(--accent-lavender)] bg-[var(--pastel-lavender)] px-3 py-1 rounded-full">
                        Copilot
                      </span>
                    </div>
                    <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                      Smart Call Companion
                    </h3>
                    <p className="text-foreground/60 leading-relaxed text-sm flex-grow mb-3">
                      Live voice transcription with &lt;2s latency. Intent recognition triggers dynamic smart cards with source citations.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-foreground/40 mb-3">
                      <span>Real-time</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/20" />
                      <span>Compliance-ready</span>
                    </div>
                    <div className="text-foreground/40 text-sm group-hover:text-[var(--accent-lavender)] transition-colors font-medium">
                      Explore this layer →
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Intelligent Email Triage */}
              <Link href="/idea/email-triage">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-sky)] to-[var(--glow-peach)] rounded-[1.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-[var(--glass-strong)] backdrop-blur-sm rounded-[1.5rem] p-7 shadow-md border border-[var(--pastel-sky)]/40 hover:border-[var(--pastel-sky)] transition-all duration-300 cursor-pointer h-full flex flex-col">
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--pastel-sky)] to-[var(--pastel-peach)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-6 h-6 text-[var(--accent-sky)]" />
                      </div>
                      <span className="text-xs font-medium text-[var(--accent-sky)] bg-[var(--pastel-sky)] px-3 py-1 rounded-full">
                        Triage Engine
                      </span>
                    </div>
                    <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                      Intelligent Email Triage
                    </h3>
                    <p className="text-foreground/60 leading-relaxed text-sm flex-grow mb-3">
                      Risk scoring 0–100 with automated routing. Auto-pay low-risk, rule-check medium, flag high-risk with anomaly alerts.
                    </p>
                    <div className="flex items-center gap-3 text-xs text-foreground/40 mb-3">
                      <span>Fraud detection</span>
                      <span className="w-1 h-1 rounded-full bg-foreground/20" />
                      <span>Auto-routing</span>
                    </div>
                    <div className="text-foreground/40 text-sm group-hover:text-[var(--accent-sky)] transition-colors font-medium">
                      Explore this layer →
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </ScrollSection>

      {/* Footer with Security & Compliance */}
      <footer className="py-12 px-6 bg-[var(--glass-subtle)]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-foreground/40 text-sm">
              <Shield className="w-4 h-4" />
              <span>PII Redaction before LLM</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/40 text-sm">
              <Lock className="w-4 h-4" />
              <span>GDPR — Dublin Region</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/40 text-sm">
              <FileText className="w-4 h-4" />
              <span>Full AI Audit Trail</span>
            </div>
          </motion.div>
          <p className="text-center text-foreground/40 text-sm">
            Medtrix × Laya Healthcare — 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
