import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'

export default function ROI() {
  const [seats, setSeats] = useState(5)
  const [hours, setHours] = useState(2)
  const [integrations, setIntegrations] = useState(3)
  const [acv, setAcv] = useState(6000)

  const results = useMemo(() => {
    // Simple illustrative model
    const hourlyCost = 45 // blended cost per human hour
    const deflection = Math.min(0.8, 0.05 * integrations + 0.02 * hours) // 0-80%
    const timeSavedPerSeat = hours * 20 * deflection // hours saved per seat per month
    const laborSavings = seats * timeSavedPerSeat * hourlyCost

    const uplift = 0.02 * hours + 0.03 * Math.max(integrations - 2, 0) // sales uplift factor
    const extraDeals = Math.max(0, Math.round(seats * uplift))
    const revenueLift = extraDeals * acv / 12 // monthlyized

    const platformCost = 2500 + Math.max(0, seats - 5) * 150 + Math.max(0, integrations - 3) * 200
    const totalValue = laborSavings + revenueLift
    const roi = platformCost ? ((totalValue - platformCost) / platformCost) : 0

    return {
      deflection,
      timeSavedPerSeat,
      laborSavings,
      revenueLift,
      platformCost,
      totalValue,
      roi
    }
  }, [seats, hours, integrations, acv])

  const Stat = ({ label, value, prefix = '', suffix = '' }) => (
    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4">
      <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
      <div className="mt-1 text-2xl font-bold text-white">{prefix}{value}{suffix}</div>
    </div>
  )

  return (
    <section id="roi" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-bold text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Interactive ROI Calculator
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
            <div className="space-y-6">
              <Field label={`Team Seats (${seats})`}>
                <input type="range" min={1} max={50} value={seats} onChange={(e) => setSeats(parseInt(e.target.value))} className="w-full" />
              </Field>
              <Field label={`Daily Hours Automated (${hours}h)`}>
                <input type="range" min={0} max={8} step={0.5} value={hours} onChange={(e) => setHours(parseFloat(e.target.value))} className="w-full" />
              </Field>
              <Field label={`Integrations (${integrations})`}>
                <input type="range" min={1} max={10} value={integrations} onChange={(e) => setIntegrations(parseInt(e.target.value))} className="w-full" />
              </Field>
              <Field label={`Average Contract Value ($${acv.toLocaleString()})`}>
                <input type="range" min={1000} max={50000} step={500} value={acv} onChange={(e) => setAcv(parseInt(e.target.value))} className="w-full" />
              </Field>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Stat label="Deflection" value={(results.deflection * 100).toFixed(0)} suffix="%" />
            <Stat label="Time Saved / Seat" value={results.timeSavedPerSeat.toFixed(1)} suffix="h/mo" />
            <Stat label="Labor Savings" value={results.laborSavings.toLocaleString()} prefix="$" />
            <Stat label="Revenue Lift" value={Math.round(results.revenueLift).toLocaleString()} prefix="$" />
            <Stat label="Platform Cost" value={Math.round(results.platformCost).toLocaleString()} prefix="$" />
            <Stat label="Net ROI" value={(results.roi * 100).toFixed(0)} suffix="%" />

            <div className="col-span-2 rounded-xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-6">
              <div className="text-white/70 text-sm">Projected Monthly Value</div>
              <div className="mt-2 text-4xl font-extrabold">${Math.round(results.totalValue).toLocaleString()}</div>
              <p className="mt-2 text-white/60 text-sm">Estimate only. We tailor the model to your funnel during strategy.</p>
              <a href="#contact" className="magnetic mt-4 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 text-black font-semibold px-5 py-2" data-magnet-strength="14">Get Custom Plan</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-sm text-white/70 mb-2">{label}</div>
      <div className="relative">
        {children}
      </div>
    </label>
  )
}
