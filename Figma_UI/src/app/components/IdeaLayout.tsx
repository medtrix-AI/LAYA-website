import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface IdeaLayoutProps {
  title: string;
  subtitle: string;
  color: string;
  glowColor: string;
  icon: ReactNode;
  demoSections: ReactNode[];
  benefits: Array<{
    icon: ReactNode;
    title: string;
    description: string;
  }>;
}

export function IdeaLayout({
  title,
  subtitle,
  color,
  glowColor,
  icon,
  demoSections,
  benefits,
}: IdeaLayoutProps) {
  return (
    <div className="relative bg-[#fafaf9] min-h-screen">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-black/5 hover:border-black/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </motion.button>
        </Link>
      </div>

      {/* Intro Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex w-24 h-24 md:w-32 md:h-32 rounded-3xl items-center justify-center mb-8"
            style={{ background: color }}
          >
            {icon}
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl mb-8" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
            {title}
          </h1>
          <p className="text-2xl md:text-3xl text-foreground/70 leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </section>

      {/* Demo Sections */}
      {demoSections.map((section, index) => (
        <section key={index} className="min-h-screen flex items-center justify-center px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl"
          >
            {section}
          </motion.div>
        </section>
      ))}

      {/* Outcome Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl w-full"
        >
          <h2 className="text-5xl md:text-6xl text-center mb-20" style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>
            The outcome
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex w-20 h-20 rounded-2xl bg-white/60 backdrop-blur-sm items-center justify-center mb-6 border border-black/5">
                  {benefit.icon}
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 500 }}>
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-foreground/50 text-sm">
        <Link to="/" className="hover:text-foreground/70 transition-colors">
          ← Back to overview
        </Link>
      </footer>
    </div>
  );
}
