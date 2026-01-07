"use client"

import { motion } from "framer-motion"

export function Marquee({ text }: { text: string }) {
  return (
    <div className="overflow-hidden whitespace-nowrap border-y-2 border-white py-6 md:py-8 bg-white text-black">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 30, ease: "linear" }}
        className="inline-block text-5xl md:text-8xl font-black uppercase"
      >
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
        <span className="inline-block">{text}</span>
      </motion.div>
    </div>
  )
}
