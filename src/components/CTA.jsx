import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function CTA() {
  const navigate = useNavigate()
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          className="text-4xl sm:text-5xl font-extrabold text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Enter the Automation Era.
        </motion.h3>
        <motion.button
          onClick={() => navigate('/test')}
          whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(180,120,255,0.6)' }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 text-black font-semibold px-8 py-3"
        >
          Open Quantum Gateway
        </motion.button>
      </div>
    </section>
  )
}
