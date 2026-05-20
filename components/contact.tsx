import { Mail, MapPin, Github, Instagram, Youtube, Sparkles } from "lucide-react"

const SOCIALS = [
  { name: "Unikorn",   href: "https://unikorn.vn/u/duong-phu-dong",     icon: Sparkles },
  { name: "GitHub",    href: "https://github.com/lab68dev",             icon: Github },
  { name: "Instagram", href: "https://www.instagram.com/lab68dev/",     icon: Instagram },
  { name: "YouTube",   href: "https://www.youtube.com/@lab68dev",       icon: Youtube },
]

export function Contact() {
  return (
    <footer id="contact" className="bg-background pt-24 pb-8 px-6 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-start">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Ready to build <br className="hidden md:block" />
              <span className="text-orange-500">something great?</span>
            </h2>
            <a 
              href="mailto:lab68dev@gmail.com" 
              className="mt-4 inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors w-fit"
            >
              Start a Project
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</h3>
              <a href="mailto:lab68dev@gmail.com" className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> lab68dev@gmail.com
              </a>
              <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Remote / Global
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Socials</h3>
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-muted-foreground transition-colors flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" /> {social.name}
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs font-medium text-muted-foreground">
            &copy; {new Date().getFullYear()} lab68dev Studio. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="https://ko-fi.com/dongphuduong" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">Ko-fi</a>
            <a href="https://buymeacoffee.com/lab68dev" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">Buy Me a Coffee</a>
            <a href="https://github.com/sponsors/lab68dev" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">Sponsors</a>
          </div>
        </div>
      </div>
    </footer>
  )
}