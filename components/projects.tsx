"use client"

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { useRef } from "react"

const projectsData = [
  {
    index: "01",
    title: "LAB68 PLATFORM",
    category: "ECOSYSTEM",
    year: "2025",
    image: "/lab68devplatform.png",
    link: "https://github.com/lab68dev/lab68dev-platform",
    liveDemo: "https://lab68devplatform.vercel.app/",
    description:
      "A unified ecosystem platform powering the LAB68 suite of developer tools and services — built for speed, scale, and developer experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    index: "02",
    title: "LAB68 CV BUILDER",
    category: "PRODUCTIVITY",
    year: "2026",
    image: "/Screenshot 2026-03-06 145846.png",
    link: "https://github.com/lab68dev/lab68dev-cv-builder",
    liveDemo: "https://lab68cvbuilder.vercel.app/",
    description:
      "A modern CV builder that helps developers craft standout, ATS-ready resumes with a clean editor and real-time preview.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projectsData)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const isReversed = index % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative group"
    >
      {/* Giant watermark index */}
      <div className="absolute -top-8 right-0 text-[clamp(100px,16vw,200px)] font-black leading-none text-white/2.5 select-none pointer-events-none z-0 tabular-nums">
        {project.index}
      </div>

      <div className="relative z-10 grid md:grid-cols-12 border border-white/10 overflow-hidden bg-card/20">

        {/* ── Image panel ── */}
        <motion.div
          initial={{ x: isReversed ? 50 : -50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={`md:col-span-7 relative aspect-video overflow-hidden ${isReversed ? "md:order-2" : ""}`}
        >
          {/* Scanline texture */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-30 bg-[repeating-linear-gradient(0deg,transparent,transparent_3px,rgba(0,0,0,0.18)_3px,rgba(0,0,0,0.18)_4px)]" />

          {/* HUD corner brackets — animate in from corners on hover */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-primary z-30 transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-primary z-30 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-primary z-30 transition-all duration-500 opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-primary z-30 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />

          {/* Hover color wash */}
          <div className="absolute inset-0 bg-primary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Category badge — bottom left */}
          <div className="absolute bottom-0 left-0 z-30 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 border-t border-r border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-primary">
              {project.category}
            </span>
          </div>

          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
          />
        </motion.div>

        {/* ── Content panel ── */}
        <motion.div
          initial={{ x: isReversed ? -50 : 50, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={`md:col-span-5 flex flex-col justify-between p-8 md:p-10 border-white/10 ${
            isReversed ? "md:order-1 border-r" : "border-l"
          }`}
        >
          <div>
            {/* Meta row */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-primary" />
                <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-[0.25em]">
                  {project.year}
                </span>
              </div>
              <span className="text-5xl font-black text-white/6 select-none tabular-nums leading-none">
                {project.index}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-[2.5rem] font-black uppercase tracking-tighter leading-[0.95] mb-6 text-foreground group-hover:text-primary transition-colors duration-500">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Tech stack pills */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[10px] font-mono font-bold border border-white/10 text-muted-foreground uppercase tracking-wider hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3 mt-10 pt-8 border-t border-white/10">
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest bg-primary text-primary-foreground py-3 hover:brightness-90 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-[11px] font-bold uppercase tracking-widest border border-white/20 py-3 hover:bg-white/5 hover:border-white/40 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  return (
    <section id="work" className="py-24 px-6 md:px-10 border-t border-white/10">
      {/* Section header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 24 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-4"
      >
        <div>
          <p className="font-mono text-[11px] text-primary uppercase tracking-[0.3em] mb-4">
            // Selected Works
          </p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase italic leading-none">
            Flagship
            <br />
            Products
          </h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-1">
          <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
            (02) Projects
          </span>
          <span className="font-mono text-[10px] text-muted-foreground/40">
            2025 — 2026
          </span>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col gap-20">
        {projectsData.map((project, i) => (
          <ProjectCard key={project.index} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
