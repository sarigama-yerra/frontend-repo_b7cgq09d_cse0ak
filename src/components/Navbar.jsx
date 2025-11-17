import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, Sparkles } from 'lucide-react'

export default function Navbar() {
  useEffect(() => {
    // Mark nav links as magnetic
    document.querySelectorAll('[data-magnetic]')?.forEach((el) => {
      el.classList.add('magnetic')
      if (!el.getAttribute('data-magnet-strength')) el.setAttribute('data-magnet-strength', '10')
    })
  }, [])

  const links = [
    { href: '#services', label: 'Solutions' },
    { href: '#cases', label: 'Case Studies' },
    { href: '#process', label: 'Process' },
    { href: '#tech', label: 'Stack' },
    { href: '#pricing', label: 'Pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl py-3 px-4">
          <a href="#" className="flex items-center gap-2 group">
            <span className="relative inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400/30 to-purple-500/30 text-cyan-200">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-white/90 font-semibold tracking-tight">Wolf Automation</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-magnetic
                className="text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 text-black font-semibold px-4 py-2"
            >
              Book Strategy Call
            </motion.a>
            <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/70" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
