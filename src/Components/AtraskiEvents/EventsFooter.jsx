
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function EventsFooter() {
  const socialLinks = [
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <footer className="bg-black px-6 py-12 text-sm text-white md:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Top row with text links */}
        <div className="mb-12 flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="text-white/80">© 2024 TWOFIFTYK™</div>
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <a
              href="/cookie-policy"
              className="transition-colors hover:text-white/70"
            >
              COOKIE-POLICY
            </a>
            <a
              href="/terms"
              className="transition-colors hover:text-white/70"
            >
              TERMS AND CONDITIONS
            </a>
          </div>
          <div className="text-white/80">
            <a
              href="https://stuurmen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white/70"
            >
              WEBSITE BY STUURMEN
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.label}
                href={social.href}
                className="group rounded-full border border-white/10 p-3 transition-colors hover:border-white/30"
                aria-label={social.label}
              >
                <Icon className="h-5 w-5 text-white transition-colors group-hover:text-white/70" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}