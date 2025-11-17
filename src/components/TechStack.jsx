import { motion } from 'framer-motion'

const logos = [
  { name: 'OpenAI', color: '#a0f0ff' },
  { name: 'Zapier', color: '#ff8a00' },
  { name: 'Make', color: '#8b5cf6' },
  { name: 'Tidio', color: '#60a5fa' },
  { name: 'WhatsApp', color: '#22c55e' },
  { name: 'Vercel', color: '#ffffff' },
]

export default function TechStack() {
  return (
    <section id="tech" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Floating Zero-G Platform
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {logos.map((l, i) => (
            <motion.div
              key={l.name}
              className="relative aspect-square rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center"
              initial={{ opacity: 0, rotateX: -20, y: 20 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
            >
              <div className="absolute inset-x-8 bottom-4 h-4 bg-gradient-to-b from-white/40 to-transparent blur-md opacity-50" />
              <motion.div
                animate={{ rotateY: [0, 180, 360] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="text-sm font-semibold"
                style={{ color: l.color }}
              >
                {l.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
