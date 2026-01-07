import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-10 flex justify-between items-end">
      <Link href="/" className="group flex items-end gap-2">
        <span className="text-xl md:text-2xl font-bold tracking-tighter leading-none">LAB68DEV</span>
      </Link>
      <div className="flex gap-8 text-[10px] md:text-xs font-medium tracking-widest uppercase">
        <Link href="#work" className="hover:opacity-50 transition-opacity">
          Work
        </Link>
        <Link href="#about" className="hover:opacity-50 transition-opacity">
          About
        </Link>
        <Link href="#contact" className="hover:opacity-50 transition-opacity">
          Contact
        </Link>
      </div>
    </nav>
  )
}
