import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Reveal } from "./reveal"

const projectsData = [
  {
    title: "LAB68 PLATFORM",
    category: "ECOSYSTEM",
    year: "2025",
    image: "/lab68devplatform.png",
    link: "https://github.com/lab68dev/lab68dev-platform",
    liveDemo: "https://github.com/lab68dev/lab68dev-platform",
    description: "A unified ecosystem platform powering the LAB68 suite of developer tools and services.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "LAB68 POMODORO",
    category: "PRODUCTIVITY",
    year: "2025",
    image: "/lab68devpomodoro.png",
    link: "https://github.com/lab68dev/lab68-pomodoro",
    liveDemo: "https://github.com/lab68dev/lab68-pomodoro",
    description: "A minimalist Pomodoro timer app designed to boost focus and productivity.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "EVENT HUB",
    category: "COMMUNITY",
    year: "2025",
    image: "/event-hub.jpg",
    link: "https://github.com/lab68dev/lab68dev-event-hub",
    liveDemo: "https://github.com/lab68dev/lab68dev-event-hub",
    description: "A community-driven event management platform to discover and host developer events.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "VIDEO RESIZER",
    category: "UTILITY",
    year: "2025",
    image: "/video-resizer.jpg",
    link: "https://github.com/lab68dev/lab68dev-video-resizer-app",
    liveDemo: "https://github.com/lab68dev/lab68dev-video-resizer-app",
    description: "A fast, browser-based video resizing utility with no upload required.",
    techStack: ["Electron", "TypeScript", "FFmpeg"],
  },
  {
    title: "LAB68 CV BUILDER",
    category: "PRODUCTIVITY",
    year: "2026",
    image: "/Screenshot 2026-03-06 145846.png",
    link: "https://github.com/lab68dev/lab68dev-cv-builder",
    liveDemo: "https://github.com/lab68dev/lab68dev-cv-builder",
    description: "A modern CV builder that helps developers craft standout resumes with ease.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
]

export function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-10 border-t border-white/10">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase italic">Selected Works</h2>
        <span className="text-xs text-muted-foreground">(05)</span>
      </div>
      
      <div className="grid gap-32">
        {projectsData.map((project, i) => (
          <Reveal key={i} delay={i * 0.2}>
            <div className="group relative grid md:grid-cols-12 gap-8 items-center">
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
