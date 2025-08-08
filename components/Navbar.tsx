"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const items = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Research", "#research"],
    ["Contact", "#contact"]
  ] as const;

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed left-0 right-0 top-4 z-50 mx-auto max-w-5xl glass px-4 py-3"
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide gradient-text">BUI PHUONG DAI</Link>
        <div className="hidden gap-4 md:flex">
          {items.map(([label, href]) => (
            <a key={label} href={href} className="text-sm text-zinc-300 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </div>
        <a href="/resume" className="text-xs md:text-sm px-3 py-2 rounded-lg border border-white/15 hover:shadow-glow transition-shadow">
          Resume
        </a>
      </div>
    </motion.nav>
  );
}
