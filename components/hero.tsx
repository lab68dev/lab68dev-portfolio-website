"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Floating Particles Effect - Client Side Only to prevent Hydration Mismatch
  const [particles, setParticles] = useState<Array<{x: number, y: number, duration: number, delay: number}>>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5
      }))
    )
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-border bg-black perspective-[1000px]"
    >
      {/* 3D Digital Horizon Grid */}
      <div className="absolute inset-0 perspective-grid opacity-30 pointer-events-none">
        <div className="absolute inset-[-100%] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:4rem_4rem] animate-grid-flow [mask-image:linear-gradient(to_bottom,transparent_10%,black_100%)] border-t border-primary/50" />
      </div>

       {/* Floating Particles */}
       {particles.map((p, i) => (
        <motion.div
          key={i}
          className="particle"
          initial={{
            x: p.x,
            y: p.y,
            opacity: 0,
            scale: 0
          }}
          animate={{
            y: [null, Math.random() * -100], // Random movement is fine in animate prop as it happens on client
            opacity: [0, 0.5, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay
          }}
          style={{
            left: 0,
            top: 0,
            backgroundColor: i % 2 === 0 ? '#3b82f6' : '#ffffff' // Blue/White mix
          }}
        />
      ))}


      {/* Glow Effects - Sun/Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none mix-blend-screen animate-pulse" />

      <motion.div animate={{ x: mousePos.x, y: mousePos.y }} transition={{ type: "spring", stiffness: 50 }} className="z-10 text-center select-none px-4 mix-blend-difference relative">
        <h1 className="text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter italic text-white drop-shadow-2xl">
          LAB68
        </h1>
         {/* Glitch Effect Layer */}
         <div className="absolute inset-0 text-[#0ff] opacity-50 mix-blend-overlay translate-x-[2px] pointer-events-none" aria-hidden="true">
            LAB68
         </div>
      </motion.div>

      <motion.div
        animate={{ x: -mousePos.x, y: -mousePos.y }}
        transition={{ type: "spring", stiffness: 50 }}
        className="z-10 text-center select-none px-4 mt-[-6vw] md:mt-[-8vw] relative"
      >
        <h1 className="text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter text-outline drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          DEV
        </h1>
      </motion.div>

      <div className="absolute top-[15%] left-[5%] md:left-[10%] text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground hidden md:block border-l-2 border-primary pl-4">
        <span className="text-primary mr-2">//</span>THINK. CODE. TEST. SHIP.
      </div>

      <div className="absolute bottom-10 left-6 md:left-10 text-[10px] md:text-xs font-mono flex flex-col gap-1 uppercase tracking-widest text-muted-foreground/50">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
            <span>[ SYSTEM: ONLINE ]</span>
        </div>
        <span>[ REGION: GLOBAL_NET ]</span>
        <span>[ LAT: 35.6895° N ]</span>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 flex flex-col items-end gap-2">
         <div className="animate-bounce text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-2">
            <span className="writing-mode-vertical rotate-180">SCROLL</span>
            ↓
         </div>
      </div>
    </section>
  )
}
