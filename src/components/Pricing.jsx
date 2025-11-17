import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$2.5k',
    blurb: 'Single agent + core automations',
    features: ['Discovery + Blueprint', 'One AI Agent (Sales or Support)', 'Up to 3 system integrations', 'Weekly tuning']
  },
  {
    name: 'Scale',
    price: '$6k',
    blurb: 'Multi-agent orchestration',
    features: ['3+ AI Agents across funnels', 'Custom workflows + RPA', 'CRM + Comms + Data sync', 'Daily optimization']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Bespoke cognitive platform',
    features: ['On-prem or VPC', 'SLAs + Governance', 'Private models + vector DB', 'Dedicated squad']
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Flexible Engagements
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.06 }}
              className="relative rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6 hover:shadow-[0_0_60px_rgba(120,230,255,0.2)]"
            >
              <div className="text-sm text-white/60">{t.name}</div>
              <div className="mt-2 text-4xl font-extrabold">{t.price}</div>
              <p className="mt-2 text-white/70">{t.blurb}</p>
              <ul className="mt-4 space-y-2 text-white/70">
                {t.features.map((f) => (<li key={f} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />{f}</li>))}
              </ul>
              <button className="magnetic mt-6 w-full rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 text-black font-semibold py-2" data-magnet-strength="14">Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
