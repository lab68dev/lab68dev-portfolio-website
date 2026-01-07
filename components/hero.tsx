"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

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
      className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b-2 border-white"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <motion.div style={{ y: y1 }} animate={{ x: mousePos.x }} className="z-10 text-center select-none px-4">
        <h1 className="text-[22vw] font-black leading-none tracking-tighter italic">LAB68</h1>
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        animate={{ x: -mousePos.x }}
        className="z-10 text-center select-none px-4 mt-[-8vw]"
      >
        <h1 className="text-[22vw] font-black leading-none tracking-tighter text-outline">DEV</h1>
      </motion.div>

      <div className="absolute top-[15%] left-[10%] text-[10px] md:text-sm font-black uppercase tracking-widest hidden md:block">
        THINK. CODE. TEST. SHIP.
      </div>

      <div className="absolute bottom-10 left-10 text-[10px] md:text-xs font-mono flex flex-col gap-1 uppercase tracking-widest">
        <span>[ STATUS: ACTIVE ]</span>
        <span>[ REGION: GLOBAL ]</span>
      </div>

      <div className="absolute bottom-10 right-10 animate-bounce text-[10px] md:text-xs font-bold uppercase tracking-widest">
        <span>↓ SCROLL_TO_DISCOVER</span>
      </div>
    </section>
  )
}
