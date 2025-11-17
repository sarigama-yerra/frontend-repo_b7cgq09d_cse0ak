import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-28">
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
        <motion.p
          className="mt-4 text-white/70 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Book a 20-minute strategy session. We’ll identify quick wins and architect your AI roadmap.
        </motion.p>

        <div className="mt-10 mx-auto max-w-xl text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-white/70">Name</label>
          <input required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-300" placeholder="Ada Lovelace" />
        </div>
        <div>
          <label className="block text-sm text-white/70">Email</label>
          <input type="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-300" placeholder="you@company.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-white/70">Company</label>
          <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-300" placeholder="Wolf Automation" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm text-white/70">What are you trying to automate?</label>
          <textarea rows={4} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 outline-none focus:border-cyan-300" placeholder="Inbound, outbound, support, ops..." />
        </div>
      </div>
      <button className="magnetic mt-6 w-full rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 text-black font-semibold py-3" data-magnet-strength="16">Request Strategy Call</button>
      <p className="mt-3 text-xs text-white/50 text-center">We reply within hours. Zero spam. Real humans + AI.</p>
    </form>
  )
}
