export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-white text-black overflow-hidden relative">
      <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div className="relative">
          <img
            src="/about-studio-brutalist.jpg"
            alt="Lab68dev Studio Aesthetic"
            className="w-full aspect-[4/5] object-cover grayscale"
          />
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-black flex items-center justify-center p-6 text-white text-center">
            <p className="text-xs font-bold leading-tight uppercase">
              PUSHING THE BOUNDARIES OF WEB INTERACTION SINCE 2023
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
            Breaking <br />
            Rules. <br />
            <span className="text-outline" style={{ WebkitTextStrokeColor: "black" }}>
              Building
            </span>{" "}
            <br />
            Systems.
          </h2>
          <p className="text-base md:text-xl leading-relaxed uppercase">
            I believe that code is a medium for art. My process involves deep technical exploration paired with a
            radical approach to visual identity. No templates. No shortcuts. Just pure, intentional craft.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {["Next.js", "TypeScript", "WebGL", "Framer Motion", "Tailwind", "Node.js", "Java / Springboot", "Docker", "Github Actions", "Supabase", "Neon Database", "React", "Microservices",].map((skill) => (
              <div key={skill} className="border-b border-black/10 py-2 text-xs font-bold uppercase">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
