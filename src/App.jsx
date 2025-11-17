import Navbar from './components/Navbar'
import Background from './components/Background'
import Hero from './components/Hero'
import Services from './components/Services'
import CaseStudies from './components/CaseStudies'
import Timeline from './components/Timeline'
import NeuralLab from './components/NeuralLab'
import TechStack from './components/TechStack'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import FX from './components/FX'

function App() {
  const safe = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('safe') === '1'
  return (
    <div className="min-h-screen text-white bg-black selection:bg-cyan-400/20 selection:text-white">
      <Background />
      <Navbar />
      {/* Global grain + spotlight/cursor FX */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.08] grain" />
      {!safe && <FX />}

      {/* Cinematic page sections */}
      <main className="relative">
        <Hero />
        <Services />
        <CaseStudies />
        <Timeline />
        {!safe && <NeuralLab />}
        <TechStack />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative py-16 text-center text-white/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="space-y-1">
            <div className="font-semibold text-white/80">Wolf Automation</div>
            <p>Agents, automations and cognitive workflows — engineered to scale your revenue.</p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-white/80">HQ</div>
            <p>Global • Remote • 24/7</p>
            <p className="text-white/50">contact@wolfauto.ai</p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-white/80">Navigate</div>
            <p><a href="#services" className="hover:text-white">Solutions</a> · <a href="#cases" className="hover:text-white">Case Studies</a> · <a href="#process" className="hover:text-white">Process</a> · <a href="#tech" className="hover:text-white">Stack</a></p>
          </div>
        </div>
        <p className="mt-8 text-xs">© {new Date().getFullYear()} Wolf Automation. Engineered in the quantum field.</p>
      </div>
    </footer>
  )
}

export default App
