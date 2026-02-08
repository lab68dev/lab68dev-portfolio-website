export function Contact() {
  return (
    <footer id="contact" className="pt-32 pb-12 px-6 md:px-10 border-t border-white/10 mt-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-6 flex flex-col justify-between">
          <div>
            <h2 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter leading-[0.85] italic mb-8">
              Think.
              <br />
              Code.
              <br />
              Test.
              <br />
              Ship.
            </h2>
          </div>
        </div>

        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Inquiries</p>
              <a
                href="mailto:lab68dev@gmail.com"
                className="text-xl md:text-2xl font-medium hover:opacity-50 transition-opacity break-all"
              >
                lab68dev@gmail.com
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Location</p>
              <p className="text-xl md:text-2xl font-medium">Remote / Global</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-widest opacity-40">Socials</p>
              <nav className="flex flex-col gap-2">
                {[
                  { name: "GitHub", href: "https://github.com/lab68dev" },
                  { name: "Instagram", href: "https://www.instagram.com/lab68dev/" },
                  { name: "YouTube", href: "https://www.youtube.com/@lab68dev" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-2xl font-medium hover:pl-2 transition-all duration-300 border-b border-white/0 hover:border-white/20 w-fit"
                  >
                    {social.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="md:hidden pt-8 border-t border-white/5">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
            © {new Date().getFullYear()} LAB68DEV STUDIO
          </p>
        </div>
      </div>
    </footer>
  )
}
