export function About() {
  const skills = [
    { name: "Next.js", color: "bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800/30 dark:text-zinc-300 dark:border-zinc-700/50" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20" },
    { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20" },
    { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20" },
    { name: "Java / Springboot", color: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20" },
    { name: "Microservices", color: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20" },
    { name: "Tailwind CSS", color: "bg-teal-100 text-teal-800 border-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20" },
    { name: "PostgreSQL", color: "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/20" },
    { name: "Supabase", color: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20" },
    { name: "Neon Database", color: "bg-lime-100 text-lime-800 border-lime-200 dark:bg-lime-500/10 dark:text-lime-400 dark:border-lime-500/20" },
    { name: "Docker", color: "bg-sky-100 text-sky-800 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/20" },
    { name: "Github Actions", color: "bg-slate-100 text-slate-800 border-slate-200 dark:bg-slate-500/10 dark:text-slate-400 dark:border-slate-500/20" },
    { name: "AWS / Azure", color: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20" }
  ]

  return (
    <section id="about" className="py-24 px-6 md:px-20 lg:px-32 bg-muted/20 border-b border-border/40">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Text content */}
        <div className="flex flex-col">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
            Building Systems. <br />
            <span className="text-orange-500">Scaling Ideas.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 font-light">
            Lab68dev is a specialized development studio. We transform complex logic into refined digital experiences. We believe that software should be robust under the hood, and invisible to the user.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
            Our approach is pragmatic: zero bloated templates, clean architecture, and complete alignment with your business objectives. We craft solutions engineered for scale.
          </p>
        </div>

        {/* Image and skills */}
        <div className="flex flex-col w-full">
          <div className="relative aspect-[4/3] w-full bg-muted rounded-xl overflow-hidden mb-12 shadow-sm">
             <img
                src="/lab68banner.png"
                alt="Lab68dev Studio"
                className="w-full h-full object-cover grayscale opacity-90 transition-opacity hover:opacity-100 hover:grayscale-0"
              />
          </div>

          <div>
             <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground mb-6">Core Technologies</h3>
             <div className="flex flex-wrap gap-2">
               {skills.map((skill) => (
                 <div key={skill.name} className={`px-3 py-1.5 border text-xs font-medium rounded-md transition-colors ${skill.color}`}>
                   {skill.name}
                 </div>
               ))}
             </div>
          </div>
        </div>

      </div>
    </section>
  )
}