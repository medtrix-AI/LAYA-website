"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Upload,
  CheckCircle,
  XCircle,
  AlertCircle,
  Smile,
  Clock,
  TrendingDown,
  Scan,
  MessageCircle,
  Globe,
} from "lucide-react";
import { IdeaLayout } from "@/components/idea/IdeaLayout";
import { personaQuotes } from "@/lib/constants";

export default function PreClaimPreviewPage() {
  const demoSections = [
    // Section 1: Claim Form + Channels
    <div key="form" className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 500 }}>
          Start with a simple form
        </h3>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Members enter basic details about their claim. No jargon, no confusion — just treatment type, date, and estimated cost.
        </p>
        <div className="flex items-center gap-6 text-sm text-foreground/50">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4" />
            <span>Web Portal</span>
          </div>
        </div>
      </div>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5"
      >
        <div className="space-y-5">
          <div>
            <label className="block text-xs text-foreground/50 mb-2 font-medium uppercase tracking-wide">Treatment type</label>
            <div className="bg-[var(--pastel-mint)] rounded-xl px-4 py-3 text-foreground/80">Dental consultation</div>
          </div>
          <div>
            <label className="block text-xs text-foreground/50 mb-2 font-medium uppercase tracking-wide">Consultant Code</label>
            <div className="bg-[var(--pastel-lavender)] rounded-xl px-4 py-3 text-foreground/80">DR-4821</div>
          </div>
          <div>
            <label className="block text-xs text-foreground/50 mb-2 font-medium uppercase tracking-wide">Date of service</label>
            <div className="bg-[var(--pastel-sky)] rounded-xl px-4 py-3 text-foreground/80">February 15, 2026</div>
          </div>
          <div>
            <label className="block text-xs text-foreground/50 mb-2 font-medium uppercase tracking-wide">Estimated cost</label>
            <div className="bg-[var(--pastel-peach)] rounded-xl px-4 py-3 text-foreground/80">€150</div>
          </div>
        </div>
      </motion.div>
    </div>,

    // Section 2: OCR Receipt Scanning
    <div key="scan" className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-10 shadow-xl border border-black/5 order-2 md:order-1"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-full aspect-square bg-gradient-to-br from-[var(--pastel-peach)] to-[var(--pastel-rose)] rounded-3xl flex flex-col items-center justify-center gap-4 relative overflow-hidden"
        >
          <Scan className="w-16 h-16 text-foreground/50" />
          <p className="text-foreground/60 font-medium">OCR Processing</p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-1.5 bg-[var(--glass-subtle)] rounded-full overflow-hidden"
          >
            <motion.div
              animate={{ x: [-130, 130] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-10 h-full bg-white rounded-full"
            />
          </motion.div>

          {/* Accuracy badge */}
          <div className="absolute top-4 right-4 bg-[var(--glass-strong)] backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-[var(--accent-mint)]">
            95%+ accuracy
          </div>
        </motion.div>
      </motion.div>
      <div className="order-1 md:order-2">
        <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 500 }}>
          Snap and upload
        </h3>
        <p className="text-lg text-foreground/70 leading-relaxed mb-6">
          Our OCR engine scans receipts with 95%+ accuracy, extracting provider details, procedure codes, and amounts automatically.
        </p>
        <p className="text-foreground/50 leading-relaxed mb-6">
          Real-time policy validation checks every field against coverage rules. Missing data? The system tells you exactly what to add.
        </p>
        <div className="bg-[var(--pastel-mint)]/20 rounded-xl px-4 py-3 border border-[var(--pastel-mint)]">
          <p className="text-sm text-foreground/70">
            <span className="font-semibold">Interactive feedback:</span> Missing Consultant Code detected — tap to add from provider list.
          </p>
        </div>
      </div>
    </div>,

    // Section 3: Preview Decision Cards
    <div key="preview" className="text-center">
      <h3 className="text-3xl md:text-4xl mb-4" style={{ fontWeight: 500 }}>
        Get your answer instantly
      </h3>
      <p className="text-foreground/60 mb-12 max-w-2xl mx-auto">
        Before submitting, members see exactly what will happen — preventing incomplete claims from entering the system.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.03, y: -8 }}
          className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border-2 border-green-200"
        >
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h4 className="text-xl mb-2 text-green-700" style={{ fontWeight: 600 }}>
            Approved
          </h4>
          <p className="text-foreground/70 mb-3 text-sm">€150 fully covered</p>
          <p className="text-xs text-foreground/50 leading-relaxed">
            Your Level 2 plan covers routine dental consultations. You have €150 remaining of your €200 annual limit.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, y: -8 }}
          className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border-2 border-orange-200"
        >
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-5">
            <AlertCircle className="w-8 h-8 text-orange-600" />
          </div>
          <h4 className="text-xl mb-2 text-orange-700" style={{ fontWeight: 600 }}>
            Fix needed
          </h4>
          <p className="text-foreground/70 mb-3 text-sm">Missing Consultant Code</p>
          <p className="text-xs text-foreground/50 leading-relaxed">
            Add your consultant&apos;s registration code. Tap the field to search by provider name.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.03, y: -8 }}
          className="bg-[var(--glass-strong)] backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border-2 border-red-200"
        >
          <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-5">
            <XCircle className="w-8 h-8 text-red-600" />
          </div>
          <h4 className="text-xl mb-2 text-red-700" style={{ fontWeight: 600 }}>
            Not covered
          </h4>
          <p className="text-foreground/70 mb-3 text-sm">Outside policy scope</p>
          <p className="text-xs text-foreground/50 leading-relaxed">
            Cosmetic dental procedures aren&apos;t included in your current plan. Here&apos;s what upgrading would cover.
          </p>
        </motion.div>
      </div>
    </div>,

    // Section 4: Context & Transparency
    <div key="context" className="max-w-4xl mx-auto text-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-[var(--glass-strong)] to-[var(--pastel-mint)]/20 backdrop-blur-sm rounded-[2rem] p-10 md:p-12 shadow-xl border border-black/5"
      >
        <h3 className="text-3xl md:text-4xl mb-6" style={{ fontWeight: 500 }}>
          Context, not confusion
        </h3>
        <p className="text-lg text-foreground/60 leading-relaxed mb-8">
          Every decision comes with a plain-English explanation. No policy jargon. No surprises.
        </p>
        <div className="bg-[var(--glass-subtle)] rounded-2xl p-6 text-left mb-6">
          <p className="text-foreground/70 italic leading-relaxed">
            &ldquo;Your Level 2 plan covers routine dental consultations up to €200 per year. You&apos;ve used €50 so far,
            so this €150 claim is fully covered. No pre-authorization needed.&rdquo;
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-foreground/40">
          <span className="bg-[var(--glass-subtle)] rounded-full px-3 py-1 border border-black/5">Policy §4.2 referenced</span>
          <span className="bg-[var(--glass-subtle)] rounded-full px-3 py-1 border border-black/5">Coverage table matched</span>
          <span className="bg-[var(--glass-subtle)] rounded-full px-3 py-1 border border-black/5">Limit calculation shown</span>
        </div>
      </motion.div>
    </div>,
  ];

  const benefits = [
    {
      icon: <Smile className="w-8 h-8 text-foreground/60" />,
      title: "Member confidence",
      description: "Members know the outcome before they submit. No more anxiety or waiting.",
      stat: "<5%",
    },
    {
      icon: <Clock className="w-8 h-8 text-foreground/60" />,
      title: "Instant validation",
      description: "95%+ OCR accuracy means faster claims and happier members.",
      stat: "95%+",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-foreground/60" />,
      title: "Fewer rejections",
      description: "Catch errors early with interactive feedback. Reduce back-and-forth by 62%.",
      stat: "-62%",
    },
  ];

  return (
    <IdeaLayout
      title="Pre-Claim Preview"
      subtitle="Show members their decision before they submit. OCR-powered receipt scanning with real-time policy validation across WhatsApp and web."
      color="linear-gradient(135deg, var(--pastel-mint) 0%, var(--pastel-sage) 100%)"
      glowColor="var(--glow-mint)"
      codename="Layer 1 — The Gatekeeper"
      icon={<BookOpen className="w-12 h-12 md:w-14 md:h-14 text-foreground/70" />}
      demoSections={demoSections}
      benefits={benefits}
      personaQuote={personaQuotes.patientPatrick}
    />
  );
}
