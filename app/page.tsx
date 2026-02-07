import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Marquee } from "@/components/marquee"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <Marquee text="THINK. CODE. TEST. SHIP. • LAB68DEV • CREATIVE STUDIO • " />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 px-6 border-t border-border flex justify-between items-center text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <p>© 2025 LAB68DEV</p>
        <p>BUILT BY LAB68DEV DEVELOPERS</p>
      </footer>
    </main>
  )
}
