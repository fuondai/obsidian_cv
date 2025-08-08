"use client";
import { motion } from "framer-motion";

export default function ProjectCard({ name, desc, tags, repo }:{name:string, desc:string, tags:string[], repo:string}){
  return (
    <motion.a
      href={repo}
      target="_blank"
      rel="noreferrer"
      className="glass p-5 card-hover block"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{name}</h3>
        <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10">GitHub</span>
      </div>
      <p className="mt-2 text-sm text-zinc-300">{desc}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => <span key={t} className="text-xs px-2 py-1 rounded border border-white/10 text-zinc-300">{t}</span>)}
      </div>
    </motion.a>
  )
}
