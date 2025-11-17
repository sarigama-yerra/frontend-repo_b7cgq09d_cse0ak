import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

// Global cinematic background with 5 layered depths
export default function Background() {
  const canvasRef = useRef(null)
  const { scrollY } = useScroll()

  // Parallax ratios 1 : 0.7 : 0.4 : 0.2
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -140])
  const y3 = useTransform(scrollY, [0, 1000], [0, -80])
  const y4 = useTransform(scrollY, [0, 1000], [0, -40])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    const particles = Array.from({ length: 180 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.5 + 0.3,
      s: Math.random() * 0.6 + 0.2,
      a: Math.random() * Math.PI * 2,
      hue: 200 + Math.random() * 80,
    }))

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Vaporwave haze
      const grad = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.6,
        0,
        canvas.width * 0.5,
        canvas.height * 0.6,
        Math.max(canvas.width, canvas.height)
      )
      grad.addColorStop(0, 'rgba(10,10,20,0.25)')
      grad.addColorStop(1, 'rgba(0,0,0,0.9)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Neon particle nebula
      particles.forEach(p => {
        p.a += 0.002
        p.x += Math.cos(p.a) * p.s
        p.y += Math.sin(p.a * 0.7) * p.s
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fillStyle = `hsla(${p.hue}, 90%, 60%, 0.6)`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Layer 1: Deep space gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1250px_650px_at_50%_10%,rgba(31,0,50,0.6),rgba(0,8,30,0.9)_60%,#000_100%)]" />

      {/* Layer 2: Neural threads */}
      <motion.div style={{ y: y4 }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.25]">
          <div className="neural-grid" />
        </div>
      </motion.div>

      {/* Layer 3: Orbital rings */}
      <motion.div style={{ y: y3 }} className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[140vmin] h-[140vmin]">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
        </div>
      </motion.div>

      {/* Layer 4: Holographic glyphs */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <div className="glyphs" />
      </motion.div>

      {/* Layer 5: Plasma lens distortion + particles on canvas */}
      <motion.canvas style={{ y: y1 }} ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,transparent_60%,rgba(0,0,0,0.6)_100%)]" />
    </div>
  )
}
