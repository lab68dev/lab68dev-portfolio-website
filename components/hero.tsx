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

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-border bg-black"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div animate={{ x: mousePos.x, y: mousePos.y }} transition={{ type: "spring", stiffness: 50 }} className="z-10 text-center select-none px-4 mix-blend-difference">
        <h1 className="text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter italic text-white drop-shadow-2xl">
          LAB68
        </h1>
      </motion.div>

      <motion.div
        animate={{ x: -mousePos.x, y: -mousePos.y }}
        transition={{ type: "spring", stiffness: 50 }}
        className="z-10 text-center select-none px-4 mt-[-6vw] md:mt-[-8vw]"
      >
        <h1 className="text-[15vw] md:text-[18vw] font-black leading-none tracking-tighter text-outline drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
          DEV
        </h1>
      </motion.div>

      <div className="absolute top-[15%] left-[5%] md:left-[10%] text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground hidden md:block">
        <span className="text-primary mr-2">//</span>THINK. CODE. TEST. SHIP.
      </div>

      <div className="absolute bottom-10 left-6 md:left-10 text-[10px] md:text-xs font-mono flex flex-col gap-1 uppercase tracking-widest text-muted-foreground/50">
        <span>[ STATUS: <span className="text-green-500 animate-pulse">ACTIVE</span> ]</span>
        <span>[ REGION: GLOBAL ]</span>
        <span>[ LAT: 35.6895° N ]</span>
      </div>

      <div className="absolute bottom-10 right-6 md:right-10 flex flex-col items-end gap-2">
         <div className="animate-bounce text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary">
            ↓ SCROLL_TO_DISCOVER
         </div>
      </div>
    </section>
  )
}
