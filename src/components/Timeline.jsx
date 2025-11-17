import { motion } from 'framer-motion'

const steps = ['Diagnose', 'Architect', 'Train', 'Deploy']

export default function Timeline() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/60 via-purple-500/60 to-transparent" />
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-300 shadow-[0_0_30px_rgba(120,230,255,0.9)]"
            initial={{ y: 0 }}
            whileInView={{ y: '90%' }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />

          <ul className="relative z-10 space-y-20">
            {steps.map((s, i) => (
              <motion.li
                key={s}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className={`ml-${i % 2 ? '0' : '8'} mr-${i % 2 ? '8' : '0'} max-w-[80%] ${i % 2 ? 'text-right ml-auto' : ''}`}>
                  <h3 className="text-2xl font-semibold text-white/90">{s}</h3>
                  <p className="mt-2 text-white/60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
