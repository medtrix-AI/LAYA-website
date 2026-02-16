import { motion } from "motion/react";
import { Users, Phone, FileText, Sparkles, Brain, Zap, Target } from "lucide-react";
import { IdeaLayout } from "../components/IdeaLayout";

export default function SmartCallCompanion() {
  const demoSections = [
    // Section 1: Incoming Call
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-4xl mb-6" style={{ fontWeight: 500 }}>
          A call comes in
        </h3>
        <p className="text-xl text-foreground/70 leading-relaxed mb-6">
          The moment a member calls, their profile and recent activity loads instantly.
        </p>
        <p className="text-foreground/60 leading-relaxed">
          No hunting through systems. No putting members on hold. Just context.
        </p>
      </div>
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: [0.95, 1, 0.95] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--pastel-lavender)] to-[var(--pastel-peach)] flex items-center justify-center">
            <Phone className="w-8 h-8 text-foreground/70" />
          </div>
          <div>
            <h4 className="text-xl" style={{ fontWeight: 500 }}>
              Sarah McKenna
            </h4>
            <p className="text-foreground/60">Member since 2023</p>
          </div>
        </div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-[var(--pastel-mint)] rounded-xl px-4 py-3 text-center"
        >
          Incoming call...
        </motion.div>
      </motion.div>
    </div>,

    // Section 2: Split Screen - Transcript + Cards
    <div>
      <h3 className="text-4xl mb-12 text-center" style={{ fontWeight: 500 }}>
        Real-time intelligence
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Live Transcript */}
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[var(--pastel-sky)] flex items-center justify-center">
              <FileText className="w-5 h-5 text-foreground/70" />
            </div>
            <h4 className="text-xl" style={{ fontWeight: 500 }}>
              Live Transcript
            </h4>
          </div>
          <div className="space-y-4">
            <div className="bg-[var(--pastel-lavender)]/30 rounded-xl px-4 py-3">
              <p className="text-sm text-foreground/60 mb-1">Sarah:</p>
              <p className="text-foreground/80">"I had a dental procedure last week..."</p>
            </div>
            <div className="bg-[var(--pastel-mint)]/30 rounded-xl px-4 py-3">
              <p className="text-sm text-foreground/60 mb-1">Agent:</p>
              <p className="text-foreground/80">"Let me check your coverage..."</p>
            </div>
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-3 w-20 bg-foreground/20 rounded-full"
            />
          </div>
        </motion.div>

        {/* Right: Smart Cards */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className="bg-gradient-to-br from-white/80 to-[var(--pastel-lavender)]/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-black/5"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-foreground/60 mt-1" />
              <div>
                <h5 className="text-sm text-foreground/60 mb-1">Policy: Dental Coverage</h5>
                <p className="text-foreground/80">
                  Level 2 plan covers routine dental up to €200/year. Current usage: €50.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className="bg-gradient-to-br from-white/80 to-[var(--pastel-peach)]/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-black/5"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-foreground/60 mt-1" />
              <div>
                <h5 className="text-sm text-foreground/60 mb-1">Recent Activity</h5>
                <p className="text-foreground/80">
                  Last claim: Jan 12, 2026 – Optical (€75, approved)
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05, x: 5 }}
            className="bg-gradient-to-br from-white/80 to-[var(--pastel-mint)]/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-black/5"
          >
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-foreground/60 mt-1" />
              <div>
                <h5 className="text-sm text-foreground/60 mb-1">Suggested Response</h5>
                <p className="text-foreground/80">
                  "Your dental procedure is covered. You have €150 remaining this year."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>,

    // Section 3: Context Cards
    <div className="max-w-4xl mx-auto text-center">
      <h3 className="text-4xl mb-12" style={{ fontWeight: 500 }}>
        Policy knowledge, surfaced instantly
      </h3>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-12 shadow-xl border border-black/5"
      >
        <p className="text-xl text-foreground/70 leading-relaxed mb-10">
          As the conversation flows, relevant policy snippets appear automatically. No searching. No guessing.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[var(--pastel-sky)]/30 rounded-2xl p-6 text-left">
            <h5 className="text-sm text-foreground/60 mb-2">Waiting Periods</h5>
            <p className="text-foreground/80">
              No waiting period for this member (joined 2023)
            </p>
          </div>
          <div className="bg-[var(--pastel-rose)]/30 rounded-2xl p-6 text-left">
            <h5 className="text-sm text-foreground/60 mb-2">Pre-authorization</h5>
            <p className="text-foreground/80">
              Not required for routine dental procedures
            </p>
          </div>
        </div>
      </motion.div>
    </div>,

    // Section 4: Agent Experience
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-white/80 to-[var(--pastel-lavender)]/30 backdrop-blur-sm rounded-[2rem] p-10 shadow-xl border border-black/5"
        >
          <Brain className="w-16 h-16 text-foreground/60 mb-6" />
          <h4 className="text-2xl mb-4" style={{ fontWeight: 500 }}>
            Less cognitive load
          </h4>
          <p className="text-foreground/70 leading-relaxed">
            Agents don't need to memorize policy documents. The system remembers for them.
          </p>
        </motion.div>
        <div>
          <h3 className="text-4xl mb-6" style={{ fontWeight: 500 }}>
            Calm, confident support
          </h3>
          <p className="text-xl text-foreground/70 leading-relaxed">
            When knowledge appears at the right moment, agents can focus on what matters: listening and helping.
          </p>
        </div>
      </div>
    </div>,
  ];

  const benefits = [
    {
      icon: <Zap className="w-10 h-10 text-foreground/60" />,
      title: "Faster calls",
      description: "Less time searching means more time helping. Average call time drops significantly.",
    },
    {
      icon: <Target className="w-10 h-10 text-foreground/60" />,
      title: "Accurate answers",
      description: "Real-time policy cards reduce errors and increase member confidence.",
    },
    {
      icon: <Users className="w-10 h-10 text-foreground/60" />,
      title: "Happier agents",
      description: "Less stress, less memorization, more satisfaction. Agents feel supported, not overwhelmed.",
    },
  ];

  return (
    <IdeaLayout
      title="Smart Call Companion"
      subtitle="Real-time policy cards during calls. Knowledge when you need it."
      color="linear-gradient(135deg, var(--pastel-lavender) 0%, var(--pastel-peach) 100%)"
      glowColor="var(--glow-lavender)"
      icon={<Users className="w-16 h-16 md:w-20 md:h-20 text-foreground/70" />}
      demoSections={demoSections}
      benefits={benefits}
    />
  );
}
