import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

const projectsData = [
  {
    index: "01",
    title: "LAB68 Platform",
    category: "Ecosystem",
    year: "2025",
    image: "/lab68studio.png",
    link: "https://github.com/lab68dev/lab68dev-platform",
    liveDemo: "https://lab68devplatform.vercel.app/",
    description:
      "A unified ecosystem platform powering the LAB68 suite of developer tools and services — built for speed, scale, and developer experience.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    badges: [
      { href: "https://unikorn.vn/p/lab68studio?ref=embed-lab68studio", src: "https://unikorn.vn/api/widgets/badge/lab68studio?theme=light", alt: "lab68studio trên Unikorn.vn" },
      { href: "https://unikorn.vn/p/lab68studio?ref=embed-lab68studio", src: "https://unikorn.vn/api/widgets/badge/lab68studio/rank?theme=light&type=daily", alt: "lab68studio - Hàng ngày", isRank: true }
    ]
  },
  {
    index: "02",
    title: "LAB68 CV Builder",
    category: "Productivity",
    year: "2026",
    image: "/lab68cvbuilder.png",
    link: "https://github.com/lab68dev/lab68dev-cv-builder",
    liveDemo: "https://lab68cvbuilder.vercel.app/",
    description:
      "A modern CV builder that helps developers craft standout, ATS-ready resumes with a clean editor and real-time preview.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    badges: [
      { href: "https://unikorn.vn/p/lab68dev-cv-builder?ref=embed-lab68dev-cv-builder", src: "https://unikorn.vn/api/widgets/badge/lab68dev-cv-builder?theme=light", alt: "lab68CV Builder trên Unikorn.vn" },
      { href: "https://unikorn.vn/p/lab68dev-cv-builder?ref=embed-lab68dev-cv-builder", src: "https://unikorn.vn/api/widgets/badge/lab68dev-cv-builder/rank?theme=light&type=daily", alt: "lab68CV Builder - Hàng ngày", isRank: true }
    ]
  },
]

function ProjectCard({ project }: { project: (typeof projectsData)[0] }) {
  return (
    <div className="group flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-center py-16 border-b border-border/40 last:border-0">
      <div className="w-full md:col-span-7 relative aspect-[4/3] bg-muted rounded-xl overflow-hidden shadow-sm">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-mono">
            [ IMAGE ]
          </div>
        )}
      </div>

      <div className="w-full md:col-span-5 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{project.category}</span>
          <span className="text-xs text-muted-foreground/50 font-medium">— {project.year}</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground mb-4 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 font-light">
          {project.description}
        </p>

        {project.badges && (
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {project.badges.map((badge, idx) => (
              <a key={idx} href={badge.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={badge.src} alt={badge.alt} className={badge.isRank ? "w-[250px] h-[64px]" : "w-[256px] h-[64px]"} width={badge.isRank ? 250 : 256} height={64} />
              </a>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-[11px] font-medium bg-muted text-muted-foreground border border-border/50 rounded-md tracking-wide">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
          >
            Live Site <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Source Code <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="work" className="py-24 px-6 md:px-20 lg:px-32 bg-background border-b border-border/40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Selected Works</h2>
          <p className="text-muted-foreground mt-4 text-sm md:text-base max-w-xl font-light">
            A showcase of our digital products and technical infrastructure solutions.
          </p>
        </div>

        <div className="flex flex-col">
          {projectsData.map((project) => (
             <ProjectCard key={project.index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}