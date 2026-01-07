"use client"

import type React from "react"

import { motion } from "framer-motion"

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for "non-linear" feel
      }}
    >
      {children}
    </motion.div>
  )
}
