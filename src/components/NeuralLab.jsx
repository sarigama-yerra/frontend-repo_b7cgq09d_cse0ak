import { useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function NeuralLab() {
  const ref = useRef(null)
  return (
    <section id="lab" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          3D Neural Lab
        </motion.h2>
        <div className="mt-10 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_300px_at_30%_0%,rgba(120,230,255,0.15),transparent_60%)]" />
          <div className="aspect-[16/9]">
            {/* Replace with your Spline scene URL */}
            <Spline scene="https://prod.spline.design/6QJ2qS7m0-Placeholder/scene.splinecode" onLoad={(app) => (ref.current = app)} />
          </div>
        </div>
      </div>
    </section>
  )
}
