import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-start px-6 md:px-20 lg:px-32 bg-background overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02] pointer-events-none" />
      
      <div className="z-10 max-w-4xl pt-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-muted/50 border border-border text-xs font-medium text-muted-foreground uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          Lab68dev Studio
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-foreground mb-6">
          We design and build <br className="hidden md:block" />
          <span className="text-orange-500">minimalist SaaS.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light mb-12 leading-relaxed tracking-wide">
          A dedicated creative studio focusing on high-performance infrastructure, seamless user experiences, and scalable solutions for modern businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            href="#work" 
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors"
          >
            Explore Our Work
          </Link>
          <Link 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-foreground bg-transparent border border-border hover:bg-muted/50 rounded-md transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}