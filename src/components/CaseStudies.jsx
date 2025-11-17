import { motion } from 'framer-motion'

const cases = [
  {
    company: 'Solvex Labs',
    metric: '3.1x',
    headline: 'Pipeline expansion with autonomous prospecting',
    detail: 'Multi-agent lead engine scanning 240k sources daily, prioritizing by intent and fit.'
  },
  {
    company: 'Nimbus SaaS',
    metric: '-72%',
    headline: 'Support load reduction via AI helpdesk',
    detail: 'Deflection and auto-resolve with on-brand tone and real-time product context.'
  },
  {
    company: 'Arcade Retail',
    metric: '+41%',
    headline: 'Checkout uplift with cognitive email sequences',
    detail: 'Hyper-personalized flows that adapt to behavior and seasonality.'
  },
]

export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Proof In The Field
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6"
            >
              <div className="text-sm text-white/50">{c.company}</div>
              <div className="mt-3 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-white to-cyan-200">{c.metric}</div>
              <h3 className="mt-3 text-lg font-semibold text-white/90">{c.headline}</h3>
              <p className="mt-2 text-white/60">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
