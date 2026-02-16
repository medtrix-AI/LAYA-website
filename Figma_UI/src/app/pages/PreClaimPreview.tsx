import { motion } from "motion/react";
import { BookOpen, Upload, CheckCircle, XCircle, AlertCircle, Smile, Clock, TrendingDown } from "lucide-react";
import { IdeaLayout } from "../components/IdeaLayout";

export default function PreClaimPreview() {
  const demoSections = [
    // Section 1: Claim Form Card
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-4xl mb-6" style={{ fontWeight: 500 }}>
          Start with a simple form
        </h3>
        <p className="text-xl text-foreground/70 leading-relaxed mb-6">
          Members enter basic details about their claim. No jargon, no confusion.
        </p>
        <p className="text-foreground/60 leading-relaxed">
          Treatment type, date, and estimated cost. That's all we need to start.
        </p>
      </div>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border border-black/5"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm text-foreground/60 mb-2">Treatment type</label>
            <div className="bg-[var(--pastel-mint)] rounded-xl px-4 py-3">Dental consultation</div>
          </div>
          <div>
            <label className="block text-sm text-foreground/60 mb-2">Date</label>
            <div className="bg-[var(--pastel-lavender)] rounded-xl px-4 py-3">February 15, 2026</div>
          </div>
          <div>
            <label className="block text-sm text-foreground/60 mb-2">Estimated cost</label>
            <div className="bg-[var(--pastel-sky)] rounded-xl px-4 py-3">€150</div>
          </div>
        </div>
      </motion.div>
    </div>,

    // Section 2: Receipt Scanning
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-12 shadow-xl border border-black/5 order-2 md:order-1"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-full aspect-square bg-gradient-to-br from-[var(--pastel-peach)] to-[var(--pastel-rose)] rounded-3xl flex flex-col items-center justify-center gap-4"
        >
          <Upload className="w-16 h-16 text-foreground/60" />
          <p className="text-foreground/70">Upload receipt</p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-1 bg-white/60 rounded-full overflow-hidden"
          >
            <motion.div
              animate={{ x: [-130, 130] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-8 h-full bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="order-1 md:order-2">
        <h3 className="text-4xl mb-6" style={{ fontWeight: 500 }}>
          Snap and upload
        </h3>
        <p className="text-xl text-foreground/70 leading-relaxed mb-6">
          We scan the receipt, extract the details, and validate against policy rules.
        </p>
        <p className="text-foreground/60 leading-relaxed">
          No manual data entry. No typos. Just intelligence.
        </p>
      </div>
    </div>,

    // Section 3: Preview Decision Card
    <div className="text-center">
      <h3 className="text-4xl mb-12" style={{ fontWeight: 500 }}>
        Get your answer instantly
      </h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Approved */}
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border-2 border-green-200"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h4 className="text-2xl mb-3 text-green-700" style={{ fontWeight: 500 }}>
            Approved
          </h4>
          <p className="text-foreground/70 mb-4">€150 covered</p>
          <p className="text-sm text-foreground/60">
            Your plan covers this in full. Submit with confidence.
          </p>
        </motion.div>

        {/* Fix Required */}
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border-2 border-orange-200"
        >
          <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-10 h-10 text-orange-600" />
          </div>
          <h4 className="text-2xl mb-3 text-orange-700" style={{ fontWeight: 500 }}>
            Fix needed
          </h4>
          <p className="text-foreground/70 mb-4">Missing receipt date</p>
          <p className="text-sm text-foreground/60">
            Add the missing info and you're good to go.
          </p>
        </motion.div>

        {/* Rejected */}
        <motion.div
          whileHover={{ scale: 1.05, y: -10 }}
          className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-xl border-2 border-red-200"
        >
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <XCircle className="w-10 h-10 text-red-600" />
          </div>
          <h4 className="text-2xl mb-3 text-red-700" style={{ fontWeight: 500 }}>
            Not covered
          </h4>
          <p className="text-foreground/70 mb-4">Outside policy scope</p>
          <p className="text-sm text-foreground/60">
            This treatment isn't in your plan. Here's why…
          </p>
        </motion.div>
      </div>
    </div>,

    // Section 4: Context and transparency
    <div className="max-w-4xl mx-auto text-center">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gradient-to-br from-white/80 to-[var(--pastel-mint)]/30 backdrop-blur-sm rounded-[2rem] p-12 shadow-xl border border-black/5"
      >
        <h3 className="text-4xl mb-6" style={{ fontWeight: 500 }}>
          Context, not confusion
        </h3>
        <p className="text-xl text-foreground/70 leading-relaxed mb-8">
          Every decision comes with a plain-English explanation. No policy jargon. No surprises.
        </p>
        <div className="bg-white/60 rounded-2xl p-6 text-left">
          <p className="text-foreground/80 italic leading-relaxed">
            "Your Level 2 plan covers routine dental consultations up to €200 per year. You've used €50 so far,
            so this €150 claim is fully covered."
          </p>
        </div>
      </motion.div>
    </div>,
  ];

  const benefits = [
    {
      icon: <Smile className="w-10 h-10 text-foreground/60" />,
      title: "Confidence",
      description: "Members know the outcome before they submit. No more anxiety or waiting.",
    },
    {
      icon: <Clock className="w-10 h-10 text-foreground/60" />,
      title: "Speed",
      description: "Instant validation means faster claims and happier members.",
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-foreground/60" />,
      title: "Fewer rejections",
      description: "Catch errors early. Reduce back-and-forth. Save everyone time.",
    },
  ];

  return (
    <IdeaLayout
      title="Pre-Claim Preview"
      subtitle="Show members their decision before they submit. No more guessing."
      color="linear-gradient(135deg, var(--pastel-mint) 0%, var(--pastel-sage) 100%)"
      glowColor="var(--glow-mint)"
      icon={<BookOpen className="w-16 h-16 md:w-20 md:h-20 text-foreground/70" />}
      demoSections={demoSections}
      benefits={benefits}
    />
  );
}
