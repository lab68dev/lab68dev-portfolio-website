import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Marquee } from "@/components/marquee"
import { Sponsor, FloatingSponsor } from "@/components/sponsor"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <FloatingSponsor />
      <Hero />
      <Marquee text="THINK. CODE. TEST. SHIP. • LAB68DEV • CREATIVE STUDIO • FUEL THE LAB • " />
      <About />
      <Projects />
      <Sponsor />
      <Contact />
      <footer className="py-8 px-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono uppercase tracking-widest text-muted-foreground">
        <p>© 2026 lab68dev Studio</p>
        <div className="flex items-center gap-6">
          <a href="https://ko-fi.com/dongphuduong" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Ko-fi</a>
          <a href="https://buymeacoffee.com/lab68dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Buy Me a Coffee</a>
          <a href="https://github.com/sponsors/lab68dev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">GitHub Sponsors</a>
        </div>
        <p>BUILT BY lab68dev Developers</p>
      </footer>
    </main>
  )
}
