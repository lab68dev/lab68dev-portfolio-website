"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Heart } from "lucide-react"

const SPONSOR_TIERS = [
  {
    platform: "Ko-fi",
    handle: "@dongphuduong",
    tagline:
      "Drop a coffee and fuel the next late-night build session. Every cup counts.",
    href: "https://ko-fi.com/dongphuduong",
    cta: "Buy a Coffee",
    badge: "ONE-TIME",
    accent: "#FF5E5B",
    emoji: "☕",
    index: "01",
  },
  {
    platform: "Buy Me a Coffee",
    handle: "@lab68dev",
    tagline:
      "Quick support that directly powers our open-source tools & future releases.",
    href: "https://buymeacoffee.com/lab68dev",
    cta: "Support Now",
    badge: "INSTANT",
    accent: "#FFDD00",
    emoji: "⚡",
    index: "02",
    featured: true,
  },
  {
    platform: "GitHub Sponsors",
    handle: "@lab68dev",
    tagline:
      "Become a recurring sponsor & shape the roadmap of LAB68 ecosystem.",
    href: "https://github.com/sponsors/lab68dev",
    cta: "Sponsor Monthly",
    badge: "MONTHLY",
    accent: "#EA4AAA",
    emoji: "💜",
    index: "03",
  },
]

export function Sponsor() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" })

  return (
    <section
      ref={sectionRef}
      id="sponsor"
      className="py-24 px-6 md:px-10 border-t border-white/10 relative overflow-hidden"
    >
      {/* Ambient background layers */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[250px] bg-primary/6 blur-[110px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-purple-600/5 blur-[90px] rounded-full" />
        {/* Decorative large number watermark */}
        <div className="absolute -right-10 top-1/2 -translate-y-1/2 text-[200px] font-black leading-none text-white/[0.015] select-none pointer-events-none tabular-nums">
          ♥
        </div>
      </div>

      <div className="relative z-10">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <p className="font-mono text-[11px] text-primary uppercase tracking-[0.3em] mb-4">
            // Open Source Funding
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
              Fuel
              <br />
              <span className="text-outline">The Lab</span>
            </h2>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed md:text-right">
              Every contribution powers more open-source tools, late-night
              builds, and developer experiences crafted for the community.
            </p>
          </div>
        </motion.div>

        {/* ── Platform cards ── */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {SPONSOR_TIERS.map((tier, i) => (
            <motion.a
              key={tier.platform}
              href={tier.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col p-7 border border-white/10 bg-card/20 overflow-hidden transition-colors duration-500 cursor-pointer"
            >
              {/* Hover radial glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(ellipse at 50% -10%, ${tier.accent}1C 0%, transparent 65%)`,
                }}
              />

              {/* Animated top-border line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent 0%, ${tier.accent} 50%, transparent 100%)`,
                }}
              />

              {/* Animated side accent */}
              <div
                className="absolute left-0 top-0 bottom-0 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{ background: tier.accent }}
              />

              {/* Index + badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-muted-foreground/30">
                  {tier.index}
                </span>
                <span
                  className="font-mono text-[9px] uppercase tracking-[0.25em] px-2 py-0.5 border"
                  style={{ color: tier.accent, borderColor: `${tier.accent}40` }}
                >
                  {tier.badge}
                </span>
              </div>

              {/* Emoji + platform name */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl leading-none">{tier.emoji}</span>
                <div>
                  <p className="font-black text-sm md:text-base uppercase tracking-tight leading-tight">
                    {tier.platform}
                  </p>
                  <p className="font-mono text-[10px] text-muted-foreground mt-0.5">
                    {tier.handle}
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <p
                className="text-sm text-muted-foreground leading-relaxed flex-1 mb-8 border-l-2 pl-3"
                style={{ borderColor: `${tier.accent}40` }}
              >
                {tier.tagline}
              </p>

              {/* CTA */}
              <div
                className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest py-3 px-4 transition-all duration-300"
                style={{
                  color: tier.accent,
                  border: `1px solid ${tier.accent}30`,
                  background: `${tier.accent}0D`,
                }}
              >
                <span>{tier.cta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── Bottom status bar ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <p className="font-mono text-[10px] text-muted-foreground/50 uppercase tracking-widest">
              100% of contributions go directly into development &amp;
              open-source releases.
            </p>
          </div>
          <p className="font-mono text-[10px] text-muted-foreground/30 uppercase tracking-widest shrink-0">
            LAB68DEV / STUDIO
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export function FloatingSponsor() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 right-8 z-50"
    >
      <a
        href="#sponsor"
        className="group flex items-center gap-2 px-4 py-2.5 bg-background/80 backdrop-blur-sm border border-white/15 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-xl shadow-black/40"
      >
        <Heart className="w-3.5 h-3.5 text-primary group-hover:scale-125 transition-transform duration-300" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
          Support
        </span>
      </a>
    </motion.div>
  )
}
