import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 px-6 py-4 md:px-10 lg:px-20 flex justify-between items-center transition-all duration-300">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-8 h-8 rounded-md overflow-hidden">
           <Image src="/favicon_io/apple-touch-icon.png" alt="lab68dev logo" fill className="object-cover" />
        </div>
        <span className="text-sm font-semibold tracking-tight">lab68dev</span>
      </Link>
      
      <div className="flex items-center gap-6 md:gap-8 text-sm font-medium text-muted-foreground">
         <Link href="#work" className="hover:text-foreground transition-colors hidden sm:block">
          Work
        </Link>
        <Link href="#about" className="hover:text-foreground transition-colors hidden sm:block">
          Studio
        </Link>
        <Link href="#contact" className="hover:text-foreground transition-colors">
          Contact
        </Link>
        <Link
          href="#sponsor"
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-colors"
        >
          Sponsor
        </Link>
      </div>
    </nav>
  )
}