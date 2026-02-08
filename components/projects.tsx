import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import projectsData from "../data/projects.json"

export function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-10 border-t border-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex justify-between items-end mb-16 relative z-10">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase italic cyber-text-glow">Selected Works</h2>
        <span className="text-xs text-muted-foreground font-mono">({projectsData.length.toString().padStart(2, '0')})</span>
      </div>
      
      <div className="grid gap-32">
        {projectsData.map((project, i) => (
          <div key={i} className="group relative grid md:grid-cols-12 gap-8 items-center">
            {/* Image Section */}
            <div className={`md:col-span-7 overflow-hidden aspect-video border border-white/10 cyber-box-glow relative ${i % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="absolute inset-0 bg-primary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            {/* Content Section */}
            <div className={`md:col-span-5 flex flex-col justify-center h-full py-4 ${i % 2 === 1 ? 'md:order-1 md:text-right md:items-end' : ''}`}>
              <div>
                <div className={`flex flex-col border-b border-border pb-6 mb-6 ${i % 2 === 1 ? 'items-end' : 'items-start'}`}>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-xs font-mono text-primary/80 uppercase tracking-widest">
                    <span>{project.category}</span>
                    <span>//</span>
                    <span>{project.year}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-md leading-relaxed">
                  {project.description}
                </p>

                <div className={`flex flex-wrap gap-2 mb-8 ${i % 2 === 1 ? 'justify-end' : ''}`}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-[10px] font-bold border border-white/10 rounded-full text-muted-foreground uppercase">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 items-center mt-auto">
                 <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-primary text-primary px-6 py-2 hover:bg-primary hover:text-black transition-all"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </a>
                 
                 <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-white/20 px-6 py-2 hover:bg-white hover:text-black transition-all"
                >
                  <span>Repository</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
