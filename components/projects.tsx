import { ArrowUpRight } from "lucide-react"

const PROJECTS = [
  {
    title: "LAB68 PLATFORM",
    category: "ECOSYSTEM",
    year: "2025",
    image: "/lab68devplatform.png",
    link: "https://github.com/lab68dev/lab68dev-platform",
  },
  {
    title: "LAB68 POMODORO",
    category: "PRODUCTIVITY",
    year: "2025",
    image: "/lab68devpomodoro.png",
    link: "https://github.com/lab68dev/lab68-pomodoro",
  },
  {
    title: "EVENT HUB",
    category: "COMMUNITY",
    year: "2025",
    image: "/event-hub.jpg",
    link: "https://github.com/lab68dev/lab68dev-event-hub",
  },
  {
    title: "VIDEO RESIZER",
    category: "UTILITY",
    year: "2025",
    image: "/video-resizer.jpg",
    link: "https://github.com/lab68dev/lab68dev-video-resizer-app",
  },
]

export function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-10 border-t border-white/10">
      <div className="flex justify-between items-end mb-16">
        <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase italic">Selected Works</h2>
        <span className="text-xs text-muted-foreground">(04)</span>
      </div>
      <div className="grid gap-24">
        {PROJECTS.map((project, i) => (
          <div key={i} className="group relative grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 overflow-hidden aspect-[16/9] brutalist-border">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-between h-full py-4">
              <div>
                <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-6">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
                <div className="flex gap-4 text-xs font-medium text-muted-foreground uppercase">
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 text-xs font-bold uppercase tracking-widest border border-white px-6 py-3 hover:bg-white hover:text-black transition-colors w-fit text-center"
              >
                View Repository
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
