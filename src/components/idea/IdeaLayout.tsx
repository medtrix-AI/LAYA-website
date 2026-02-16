"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { Shield, Lock, FileText } from "lucide-react";

interface IdeaLayoutProps {
  title: string;
  subtitle: string;
  color: string;
  glowColor: string;
  icon: ReactNode;
  codename: string;
  demoSections: ReactNode[];
  benefits: Array<{
    icon: ReactNode;
    title: string;
    description: string;
    stat?: string;
  }>;
  personaQuote?: {
    name: string;
    role: string;
    quote: string;
  };
}

export function IdeaLayout({
  title,
  subtitle,
  color,
  glowColor,
  icon,
  codename,
  demoSections,
  benefits,
  personaQuote,
}: IdeaLayoutProps) {
  const prefersReduced = useReducedMotion();
  const dur = (d: number) => (prefersReduced ? 0.01 : d);

  return (
    <div className="relative min-h-screen">
      {/* Intro Section — full height hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24 bg-gradient-to-b from-[var(--pastel-mint)]/20 via-[var(--background)] to-[var(--background)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: dur(0.8) }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: dur(0.5), delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-[var(--glass-subtle)] backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-black/5 text-xs font-medium text-foreground/50 tracking-wide uppercase"
          >
            {codename}
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: dur(0.6), delay: 0.2 }}
            className="inline-flex w-20 h-20 md:w-24 md:h-24 rounded-3xl items-center justify-center mb-8"
            style={{ background: color }}
          >
            {icon}
          </motion.div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl mb-6"
            style={{ fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>
      </section>

      {/* Demo Sections — compact, alternating colored backgrounds */}
      {demoSections.map((section, index) => {
        const bgColors = [
          "bg-gradient-to-b from-[var(--background)] via-[var(--pastel-mint)]/10 to-[var(--background)]",
          "bg-gradient-to-b from-[var(--background)] via-[var(--pastel-lavender)]/10 to-[var(--background)]",
          "bg-gradient-to-b from-[var(--background)] via-[var(--pastel-sky)]/10 to-[var(--background)]",
          "bg-gradient-to-b from-[var(--background)] via-[var(--pastel-peach)]/10 to-[var(--background)]",
        ];
        return (
          <section
            key={index}
            className={`flex items-center justify-center px-6 py-20 md:py-28 ${bgColors[index % bgColors.length]}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: dur(0.7) }}
              className="w-full max-w-6xl"
            >
              {section}
            </motion.div>
          </section>
        );
      })}

      {/* Persona Quote — colored background */}
      {personaQuote && (
        <section className="flex items-center justify-center px-6 py-16 md:py-20 bg-gradient-to-b from-[var(--background)] via-[var(--pastel-rose)]/10 to-[var(--background)]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: dur(0.8) }}
            className="max-w-3xl w-full"
          >
            <div className="bg-[var(--glass)] backdrop-blur-sm rounded-[2rem] p-10 md:p-12 border border-[var(--pastel-rose)]/40 shadow-sm text-center">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-8 italic" style={{ fontWeight: 400 }}>
                &ldquo;{personaQuote.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-foreground/80">{personaQuote.name}</p>
                <p className="text-sm text-foreground/50">{personaQuote.role}</p>
              </div>
            </div>
          </motion.div>
        </section>
      )}

      {/* Outcome Section — compact with color */}
      <section className="flex items-center justify-center px-6 py-20 md:py-28 bg-gradient-to-b from-[var(--background)] via-[var(--pastel-sky)]/10 to-[var(--background)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: dur(0.8) }}
          className="max-w-5xl w-full"
        >
          <h2
            className="text-4xl md:text-5xl text-center mb-14"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            The outcome
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={
                  prefersReduced
                    ? { duration: 0.01 }
                    : { delay: index * 0.1, duration: 0.6 }
                }
                className="bg-[var(--glass)] backdrop-blur-sm rounded-[1.5rem] p-7 border border-[var(--pastel-sky)]/30 shadow-sm text-center"
              >
                <div className="inline-flex w-14 h-14 rounded-xl bg-[var(--glass-strong)] items-center justify-center mb-4 border border-black/5">
                  {benefit.icon}
                </div>
                {benefit.stat && (
                  <div className="text-3xl font-bold text-foreground/80 mb-1">
                    {benefit.stat}
                  </div>
                )}
                <h3 className="text-base mb-2" style={{ fontWeight: 600 }}>
                  {benefit.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-[var(--glass-subtle)]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-foreground/30 text-xs">
              <Shield className="w-3.5 h-3.5" />
              <span>PII Redaction</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/30 text-xs">
              <Lock className="w-3.5 h-3.5" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/30 text-xs">
              <FileText className="w-3.5 h-3.5" />
              <span>Audit Trail</span>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/"
              className="text-foreground/50 text-sm hover:text-foreground/70 transition-colors"
            >
              ← Back to overview
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
