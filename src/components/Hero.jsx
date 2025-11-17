import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center">
      <div className="absolute inset-0 pointer-events-none">
        {/* Light rays */}
        <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(50%_60%_at_50%_0%,rgba(122,94,255,0.15),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        {/* Hologram calibration flicker */}
        <motion.div
          initial={{ opacity: 0.2, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-cyan-200/80 tracking-widest text-xs sm:text-sm uppercase"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            Wolf Automation • AI Agency
          </motion.p>
          <motion.h1
            className="mt-3 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-cyan-200 via-white to-purple-200 drop-shadow-[0_0_20px_rgba(120,230,255,0.25)]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            AI AGENTS THAT THINK, ACT & SCALE YOUR BUSINESS AUTOMATICALLY
          </motion.h1>

          <motion.p
            className="mt-6 text-base sm:text-lg md:text-xl text-cyan-100/80 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Deploy autonomous sales, support and ops agents that plug into your stack, learn your tone, and deliver compounding results.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <CTA />
            <a href="#cases" className="magnetic text-white/70 hover:text-white" data-magnet-strength="12">See Proof</a>
          </motion.div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left text-white/60">
            {[
              ['Avg reply time', '~2.1s'],
              ['Close rate lift', '+19-38%'],
              ['Deflection', '60-80%'],
              ['ROI', '3-8x'],
            ].map(([k,v]) => (
              <div key={k} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
                <div className="text-xs uppercase tracking-wider">{k}</div>
                <div className="mt-1 text-2xl font-bold text-white">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <motion.a
      href="#contact"
      whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(120, 230, 255, 0.6)' }}
      whileTap={{ scale: 0.98 }}
      className="magnetic group relative overflow-hidden rounded-full px-8 py-3 text-lg font-semibold text-black bg-cyan-200/90 backdrop-blur-md"
      data-magnet-strength="14"
    >
      <span className="relative z-10">Engage the Core</span>
      {/* Magnetic particles */}
      <span className="pointer-events-none absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute -inset-[40%] bg-[conic-gradient(from_0deg,rgba(120,230,255,0.6),transparent_40%)] animate-[spin_6s_linear_infinite]" />
      </span>
    </motion.a>
  )
}
