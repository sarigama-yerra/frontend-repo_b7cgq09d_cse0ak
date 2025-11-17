import Background from './components/Background'
import Hero from './components/Hero'
import Services from './components/Services'
import Timeline from './components/Timeline'
import TechStack from './components/TechStack'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen text-white bg-black selection:bg-cyan-400/20 selection:text-white">
      <Background />

      {/* Cinematic page sections */}
      <main className="relative">
        <Hero />
        <Services />
        <Timeline />
        <TechStack />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="relative py-10 text-center text-white/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="mt-6 text-sm">© {new Date().getFullYear()} Wolf Automation. Engineered in the quantum field.</p>
      </div>
    </footer>
  )
}

export default App
