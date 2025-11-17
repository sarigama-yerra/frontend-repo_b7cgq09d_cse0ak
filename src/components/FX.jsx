import { useEffect, useRef } from 'react'
import { useScroll, useVelocity, useMotionValue, useSpring } from 'framer-motion'

// Interaction layer: custom cursor, spotlight, particle trail, magnetic hover
export default function FX() {
  const spotlightRef = useRef(null)
  const cursorRef = useRef(null)
  const trailCanvasRef = useRef(null)

  // Scroll reactive intensity
  const { scrollY } = useScroll()
  const scrollVel = useVelocity(scrollY)
  const intensity = useSpring(useMotionValue(0.3), { stiffness: 220, damping: 30, mass: 0.6 })

  useEffect(() => {
    try {
      const unsub = scrollVel.on('change', (v) => {
        const n = Math.min(1, Math.abs(v) / 2000)
        intensity.set(0.3 + n * 0.5)
      })
      return () => unsub()
    } catch {
      // noop – fail silent in FX
      return () => {}
    }
  }, [scrollVel, intensity])

  useEffect(() => {
    try {
      const spotlight = spotlightRef.current
      const cursor = cursorRef.current
      const canvas = trailCanvasRef.current
      if (!spotlight || !cursor || !canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      let raf

      const resize = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
      resize()
      window.addEventListener('resize', resize)

      const state = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        tx: window.innerWidth / 2,
        ty: window.innerHeight / 2,
        trail: [],
        maxTrail: 18,
      }

      const onMove = (e) => {
        const x = e.clientX
        const y = e.clientY
        state.tx = x
        state.ty = y
        spotlight.style.setProperty('--x', x + 'px')
        spotlight.style.setProperty('--y', y + 'px')
      }

      window.addEventListener('pointermove', onMove)

      // Magnetic hover
      const magnets = Array.from(document.querySelectorAll('.magnetic'))
      const onMagnetMove = (e) => {
        magnets.forEach((el) => {
          const rect = el.getBoundingClientRect()
          const mx = e.clientX - rect.left
          const my = e.clientY - rect.top
          const cx = rect.width / 2
          const cy = rect.height / 2
          const dx = (mx - cx) / (cx || 1)
          const dy = (my - cy) / (cy || 1)
          const strength = el.dataset.magnetStrength ? parseFloat(el.dataset.magnetStrength) : 12
          el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`
        })
      }
      const onMagnetLeave = () => {
        magnets.forEach((el) => {
          el.style.transform = 'translate3d(0,0,0)'
        })
      }
      window.addEventListener('pointermove', onMagnetMove)
      window.addEventListener('pointerleave', onMagnetLeave)

      // Draw loop
      const loop = () => {
        // Clear the canvas each frame to avoid opaque buildup overlays
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Ease cursor position
        state.x += (state.tx - state.x) * 0.18
        state.y += (state.ty - state.y) * 0.18

        // Update cursor element
        cursor.style.transform = `translate3d(${state.x}px, ${state.y}px, 0)`

        // Trail
        state.trail.push({ x: state.x, y: state.y })
        if (state.trail.length > state.maxTrail) state.trail.shift()

        // Draw particles along trail with color shift
        for (let i = 0; i < state.trail.length; i++) {
          const p = state.trail[i]
          const t = i / state.trail.length
          const r = 2 + t * 6 * (1 + (intensity.get?.() || 0.3))
          ctx.beginPath()
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
          const hue = 190 + t * 80
          ctx.fillStyle = `hsla(${hue}, 90%, ${60 - t * 20}%, ${0.25 + t * 0.35})`
          ctx.fill()
        }

        raf = requestAnimationFrame(loop)
      }

      // Kick off with a clear frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      raf = requestAnimationFrame(loop)

      return () => {
        cancelAnimationFrame(raf)
        window.removeEventListener('resize', resize)
        window.removeEventListener('pointermove', onMove)
        window.removeEventListener('pointermove', onMagnetMove)
        window.removeEventListener('pointerleave', onMagnetLeave)
      }
    } catch {
      // Fail silent – FX should never crash the app
      return () => {}
    }
  }, [intensity])

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {/* Spotlight following cursor */}
      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          background: `radial-gradient(300px 300px at var(--x,50%) var(--y,50%), rgba(120,230,255,0.18), transparent 60%)`
        }}
      />

      {/* Particle trail canvas */}
      <canvas ref={trailCanvasRef} className="absolute inset-0" />

      {/* Core cursor dot */}
      <div
        ref={cursorRef}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
        style={{
          background: 'radial-gradient(circle, #a0f0ff, #5eead4) ',
          boxShadow: '0 0 24px rgba(120,230,255,0.8)'
        }}
      />
    </div>
  )
}
