"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const isIdea = pathname.startsWith("/idea");

  if (!isIdea) return null;

  return (
    <div className="fixed top-8 left-8 z-50">
      <Link href="/">
        <motion.button
          whileHover={{ scale: 1.05, x: -5 }}
          className="flex items-center gap-3 bg-[var(--glass-strong)] backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-black/5 hover:border-black/10 transition-all cursor-pointer text-lg font-medium"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Back</span>
        </motion.button>
      </Link>
    </div>
  );
}
