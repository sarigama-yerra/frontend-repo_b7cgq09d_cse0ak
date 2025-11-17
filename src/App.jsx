import React, { useEffect, useMemo, useState } from 'react'
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
  const [forceSafe, setForceSafe] = useState(false)

  const urlSafe = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('safe') === '1'
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const safe = useMemo(() => urlSafe || prefersReduced || forceSafe, [urlSafe, prefersReduced, forceSafe])

  // Toggle a CSS class for safe-mode (restores system cursor, etc.)
  useEffect(() => {
    const root = document.documentElement
    const body = document.body
    if (safe) {
      root.classList.add('safe-mode')
      body.classList.add('safe-mode')
    } else {
      root.classList.remove('safe-mode')
      body.classList.remove('safe-mode')
    }
  }, [safe])

  return (
    <ErrorBoundary onTrip={() => setForceSafe(true)}>
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
    </ErrorBoundary>
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

function ErrorBoundary({ children, onTrip }) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (!hasError) return
    // Switch to safe mode automatically when any runtime error surfaces
    onTrip && onTrip()
  }, [hasError, onTrip])

  return (
    <Boundary setHasError={setHasError}>
      {hasError ? (
        <div className="min-h-screen flex items-center justify-center text-center p-6">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold text-white/90">Recovered in Safe Mode</h1>
            <p className="mt-3 text-white/70">Heavy effects were disabled to stabilize your device. You can refresh or add ?safe=1 to keep it lightweight.</p>
          </div>
        </div>
      ) : (
        children
      )}
    </Boundary>
  )
}

class Boundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  componentDidCatch() {
    this.props.setHasError(true)
  }
  render() {
    if (this.state.hasError) {
      return this.props.children
    }
    return this.props.children
  }
}

export default App
