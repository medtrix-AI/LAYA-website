import { motion } from "motion/react";
import { Link } from "react-router";
import { FileText, Users, Mail, Sparkles, BookOpen, Zap } from "lucide-react";
import { FloatingElement } from "../components/FloatingElement";
import { ScrollIndicator } from "../components/ScrollIndicator";
import { ScrollSection } from "../components/ScrollSection";

export default function Home() {
  return (
    <div className="relative bg-[#fafaf9] overflow-hidden">
      {/* Section 1: Hero / Team Intro */}
      <section className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <FloatingElement delay={0} x={-200} y={100} rotation={-15} duration={25}>
            <div className="w-24 h-32 rounded-3xl bg-[var(--pastel-mint)] opacity-40 backdrop-blur-sm" />
          </FloatingElement>
          <FloatingElement delay={0.5} x={200} y={-50} rotation={20} duration={30}>
            <div className="w-32 h-24 rounded-3xl bg-[var(--pastel-lavender)] opacity-40" />
          </FloatingElement>
          <FloatingElement delay={1} x={-100} y={-100} rotation={10} duration={28}>
            <div className="w-28 h-28 rounded-full bg-[var(--pastel-peach)] opacity-40" />
          </FloatingElement>
          <FloatingElement delay={1.5} x={150} y={150} rotation={-10} duration={32}>
            <div className="w-36 h-20 rounded-3xl bg-[var(--pastel-sky)] opacity-40" />
          </FloatingElement>
          <FloatingElement delay={2} x={-50} y={200} rotation={25} duration={27}>
            <div className="w-20 h-20 rounded-2xl bg-[var(--pastel-rose)] opacity-40" />
          </FloatingElement>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <motion.h1
            className="text-7xl md:text-8xl mb-8"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            We are Medtrix.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl text-foreground/80 mb-6"
          >
            AI solution team for healthcare.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-foreground/70"
          >
            Curently building  AI- Healthcare solutions representing NCI for CITI UpStarts.
          </motion.p>
        </motion.div>

        <ScrollIndicator />
      </section>

      {/* Section 2: Problem Context */}
      <ScrollSection>
        <div className="container max-w-6xl mx-auto px-6 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-center mb-24"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            The problem space
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Cluster 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[var(--pastel-mint)] flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-foreground/70" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 500 }}>
                  Claim submission
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  A black box where members submit and wait, uncertain of outcomes.
                </p>
              </div>
            </motion.div>

            {/* Cluster 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[var(--pastel-lavender)] flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-foreground/70" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 500 }}>
                  Agent knowledge
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Hundreds of policies, rules, and edge cases to keep in working memory.
                </p>
              </div>
            </motion.div>

            {/* Cluster 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-8 shadow-sm border border-black/5 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-[var(--pastel-peach)] flex items-center justify-center mb-6">
                  <Mail className="w-8 h-8 text-foreground/70" />
                </div>
                <h3 className="text-2xl mb-4" style={{ fontWeight: 500 }}>
                  Adjuster inbox
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  Flooded with emails that need triage, context, and immediate action.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </ScrollSection>

      {/* Section 3: Unified Knowledge Base */}
      <ScrollSection className="relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Central glowing core */}
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--pastel-mint)] via-[var(--pastel-lavender)] to-[var(--pastel-sky)] rounded-full blur-3xl opacity-40 animate-pulse" />
              <div className="absolute inset-8 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-xl rounded-full border border-white/60 shadow-2xl flex items-center justify-center">
                <Sparkles className="w-20 h-20 text-foreground/60" />
              </div>
            </div>

            {/* Floating labels around core */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-32 top-1/4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-black/5"
            >
              <p className="text-foreground/80">Policies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -right-32 top-1/4 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-black/5"
            >
              <p className="text-foreground/80">Business Rules</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 -top-20 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-black/5"
            >
              <p className="text-foreground/80">Coverage Logic</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute left-1/2 -translate-x-1/2 -bottom-20 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-black/5"
            >
              <p className="text-foreground/80">Decisions</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative z-20 text-center px-6 mt-[500px] md:mt-[600px]"
        >
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
            One unified knowledge base.
          </h2>
          <p className="text-2xl md:text-3xl text-foreground/70">
            The constitution of Laya.
          </p>
        </motion.div>
      </ScrollSection>

      {/* Section 4: Choice Moment */}
      <ScrollSection>
        <div className="container max-w-6xl mx-auto px-6 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-center mb-16"
            style={{ fontWeight: 500, letterSpacing: "-0.02em" }}
          >
            Three intelligent outcomes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-center text-foreground/70 mb-20 max-w-2xl mx-auto"
          >
            From one unified knowledge base, we built three tools that make complex decisions feel effortless.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Button 1 */}
            <Link to="/pre-claim-preview">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-mint)] to-[var(--glow-sage)] rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border border-black/5 hover:border-black/10 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--pastel-mint)] to-[var(--pastel-sage)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-foreground/70" />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontWeight: 500 }}>
                    Pre-Claim Preview
                  </h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">
                    Show members their decision before they submit. No more guessing.
                  </p>
                  <div className="mt-6 text-foreground/50 text-sm group-hover:text-foreground/70 transition-colors">
                    Explore →
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Button 2 */}
            <Link to="/smart-call-companion">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-lavender)] to-[var(--glow-peach)] rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border border-black/5 hover:border-black/10 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--pastel-lavender)] to-[var(--pastel-peach)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-foreground/70" />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontWeight: 500 }}>
                    Smart Call Companion
                  </h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">
                    Real-time policy cards during calls. Knowledge when you need it.
                  </p>
                  <div className="mt-6 text-foreground/50 text-sm group-hover:text-foreground/70 transition-colors">
                    Explore →
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Button 3 */}
            <Link to="/intelligent-email-triage">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow-sky)] to-[var(--glow-peach)] rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-lg border border-black/5 hover:border-black/10 transition-all duration-300 cursor-pointer h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--pastel-sky)] to-[var(--pastel-peach)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-foreground/70" />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ fontWeight: 500 }}>
                    Intelligent Email Triage
                  </h3>
                  <p className="text-foreground/70 leading-relaxed flex-grow">
                    Sort, prioritize, and route emails automatically. Clear inboxes, clear minds.
                  </p>
                  <div className="mt-6 text-foreground/50 text-sm group-hover:text-foreground/70 transition-colors">
                    Explore →
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </ScrollSection>

      {/* Footer */}
      <footer className="py-12 text-center text-foreground/50 text-sm">
        <p>Medtrix × Laya Healthcare – 2026</p>
      </footer>
    </div>
  );
}
