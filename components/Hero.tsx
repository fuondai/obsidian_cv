"use client";
import { motion } from "framer-motion";
import ObsidianScene from "./ObsidianScene";

export default function Hero() {
  return (
    <section className="pt-28 md:pt-36">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <span className="gradient-text">Smart Contract Auditor</span><br/>
          Blockchain Security • Research
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-zinc-300"
        >
          Substrate • ink! • Polkadot • XCM • Formal Verification • Fuzzing
        </motion.p>
        <div className="mt-8"><ObsidianScene/></div>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#projects" className="px-5 py-2 rounded-xl border border-white/15 hover:shadow-glow transition-shadow">View Projects</a>
          <a href="#contact" className="px-5 py-2 rounded-xl bg-accent.purple/20 border border-accent.purple/40 hover:shadow-glow transition-shadow">Contact</a>
        </div>
      </div>
    </section>
  );
}
