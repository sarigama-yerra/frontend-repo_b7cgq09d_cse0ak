import { motion } from 'framer-motion'
import { Brain, Bot, Workflow, MessageSquare, Headset, Rocket } from 'lucide-react'

const services = [
  { icon: Brain, title: 'AI Sales Agents', desc: 'Autonomous, on-brand closers that never sleep.' },
  { icon: Workflow, title: 'Workflow Automation Engine', desc: 'From intake to invoice—fully orchestrated.' },
  { icon: MessageSquare, title: 'Intelligent Email & CRM Sync', desc: 'Two-way cognition across your stack.' },
  { icon: Bot, title: 'Neural Chat Agents', desc: 'WhatsApp + Web assistants with memory and tone.' },
  { icon: Headset, title: '24/7 AI Support Desks', desc: 'Resolve, retain, and delight at scale.' },
  { icon: Rocket, title: 'Autonomous Lead Generation', desc: 'Self-propelling funnels that adapt in real-time.' },
]

export default function Services() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Holographic Modules
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] hover:shadow-[0_0_60px_rgba(120,230,255,0.15)] transition duration-500"
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100" />
              <div className="relative flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 text-cyan-200">
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white/90">{s.title}</h3>
                  <p className="text-sm text-white/60 mt-1">{s.desc}</p>
                </div>
              </div>
              <div className="mt-5 h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
              <div className="relative mt-4 h-20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(120,230,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 opacity-40 animate-[move-bg_10s_linear_infinite] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 100\'><path d=\'M0 50 Q 50 20 100 50 T 200 50 T 300 50 T 400 50\' stroke=\'%23a0f0ff\' stroke-width=\'2\' fill=\'none\' opacity=\'0.5\'/></svg>')] bg-repeat bg-[length:400px_100px]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
