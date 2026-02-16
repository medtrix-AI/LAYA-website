import { motion } from "motion/react";
import { Zap, Mail, AlertTriangle, CheckCircle2, Inbox, TrendingUp, Shield } from "lucide-react";
import { IdeaLayout } from "../components/IdeaLayout";

export default function IntelligentEmailTriage() {
  const demoSections = [
    // Section 1: Inbox Flood
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-4xl mb-6" style={{ fontWeight: 500 }}>
          The inbox problem
        </h3>
        <p className="text-xl text-foreground/70 leading-relaxed mb-6">
          Hundreds of emails arrive daily. Some urgent, some routine, some unclear.
        </p>
        <p className="text-foreground/60 leading-relaxed">
          Adjusters spend hours sorting instead of acting. The system changes that.
        </p>
      </div>
      <motion.div
        className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5 relative overflow-hidden"
        style={{ height: "400px" }}
      >
        <div className="space-y-3 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              className="bg-gray-100 rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <Mail className="w-5 h-5 text-foreground/40" />
              <div className="flex-1">
                <div className="h-3 bg-foreground/10 rounded w-3/4 mb-2" />
                <div className="h-2 bg-foreground/5 rounded w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/80 to-transparent" />
      </motion.div>
    </div>,

    // Section 2: Color-Coded Priority
    <div>
      <h3 className="text-4xl mb-12 text-center" style={{ fontWeight: 500 }}>
        Instant prioritization
      </h3>
      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* Urgent */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02, x: 10 }}
          className="bg-gradient-to-r from-red-50 to-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-red-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-red-600 bg-red-100 px-3 py-1 rounded-full">
                  URGENT
                </span>
                <span className="text-sm text-foreground/60">2 min ago</span>
              </div>
              <h4 className="text-lg mb-1" style={{ fontWeight: 500 }}>
                Member query: Surgery pre-authorization needed today
              </h4>
              <p className="text-foreground/70 text-sm">
                From: sarah.mckenna@email.com • Waiting period expires EOD
              </p>
            </div>
          </div>
        </motion.div>

        {/* Important */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, x: 10 }}
          className="bg-gradient-to-r from-orange-50 to-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-orange-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  IMPORTANT
                </span>
                <span className="text-sm text-foreground/60">15 min ago</span>
              </div>
              <h4 className="text-lg mb-1" style={{ fontWeight: 500 }}>
                Claim appeal: Optical coverage dispute
              </h4>
              <p className="text-foreground/70 text-sm">
                From: john.davis@email.com • Requires manual review
              </p>
            </div>
          </div>
        </motion.div>

        {/* Routine */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.02, x: 10 }}
          className="bg-gradient-to-r from-green-50 to-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-l-4 border-green-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                  ROUTINE
                </span>
                <span className="text-sm text-foreground/60">1 hour ago</span>
              </div>
              <h4 className="text-lg mb-1" style={{ fontWeight: 500 }}>
                Policy confirmation request
              </h4>
              <p className="text-foreground/70 text-sm">
                From: emma.walsh@email.com • Can be auto-responded
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>,

    // Section 3: Routing Lanes
    <div className="max-w-5xl mx-auto">
      <h3 className="text-4xl mb-12 text-center" style={{ fontWeight: 500 }}>
        Automatic routing
      </h3>
      <p className="text-xl text-center text-foreground/70 mb-12 max-w-3xl mx-auto">
        Emails don't just sit in a queue. They flow to the right place, instantly.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Auto-respond */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[var(--pastel-mint)] to-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-black/5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-foreground/70" />
            </div>
            <h4 className="text-xl mb-3" style={{ fontWeight: 500 }}>
              Auto-respond
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Simple queries get instant answers from the knowledge base.
            </p>
            <div className="text-3xl font-bold text-foreground/80">42%</div>
            <p className="text-xs text-foreground/60 mt-1">of emails</p>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-green-400"
          />
        </motion.div>

        {/* Specialist team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[var(--pastel-lavender)] to-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-black/5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-foreground/70" />
            </div>
            <h4 className="text-xl mb-3" style={{ fontWeight: 500 }}>
              Specialist team
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Complex cases route to experts with full context attached.
            </p>
            <div className="text-3xl font-bold text-foreground/80">35%</div>
            <p className="text-xs text-foreground/60 mt-1">of emails</p>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-orange-400"
          />
        </motion.div>

        {/* Manual review */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-[var(--pastel-peach)] to-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-black/5 text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mx-auto mb-6">
              <Inbox className="w-8 h-8 text-foreground/70" />
            </div>
            <h4 className="text-xl mb-3" style={{ fontWeight: 500 }}>
              Manual review
            </h4>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">
              Unclear or sensitive emails flagged for human judgment.
            </p>
            <div className="text-3xl font-bold text-foreground/80">23%</div>
            <p className="text-xs text-foreground/60 mt-1">of emails</p>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-400"
          />
        </motion.div>
      </div>
    </div>,

    // Section 4: Clear Inbox
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-white/80 to-[var(--pastel-sky)]/30 backdrop-blur-sm rounded-[2rem] p-12 shadow-xl border border-black/5"
      >
        <h3 className="text-4xl mb-6" style={{ fontWeight: 500 }}>
          Clear inboxes, clear minds
        </h3>
        <p className="text-xl text-foreground/70 leading-relaxed mb-8">
          Adjusters no longer wade through noise. They focus on what needs their expertise.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white/60 rounded-2xl p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">65%</div>
            <p className="text-foreground/70">reduction in triage time</p>
          </div>
          <div className="bg-white/60 rounded-2xl p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">2.5hrs</div>
            <p className="text-foreground/70">saved per adjuster, daily</p>
          </div>
        </div>
      </motion.div>
    </div>,
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-10 h-10 text-foreground/60" />,
      title: "Dramatic efficiency gains",
      description: "Less sorting, more solving. Adjusters handle 40% more emails with the same team size.",
    },
    {
      icon: <CheckCircle2 className="w-10 h-10 text-foreground/60" />,
      title: "Faster response times",
      description: "Urgent emails surface instantly. Members get answers when they need them most.",
    },
    {
      icon: <Shield className="w-10 h-10 text-foreground/60" />,
      title: "Reduced burnout",
      description: "Less inbox anxiety. More meaningful work. Adjusters feel in control again.",
    },
  ];

  return (
    <IdeaLayout
      title="Intelligent Email Triage"
      subtitle="Sort, prioritize, and route emails automatically. Clear inboxes, clear minds."
      color="linear-gradient(135deg, var(--pastel-sky) 0%, var(--pastel-peach) 100%)"
      glowColor="var(--glow-sky)"
      icon={<Zap className="w-16 h-16 md:w-20 md:h-20 text-foreground/70" />}
      demoSections={demoSections}
      benefits={benefits}
    />
  );
}
