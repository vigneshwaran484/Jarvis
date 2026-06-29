import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouse = { x: undefined, y: undefined }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouse)

    const particleCount = Math.min(80, Math.floor(window.innerWidth / 15))
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x
          const dy = p.y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 150)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }

        if (mouse.x !== undefined) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 200) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.12 * (1 - dist / 200)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      })
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-transparent to-navy-900 z-[1]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-[100px] z-[1]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-blue/20 bg-neon-blue/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide">
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4 animate-fade-in-up">
          <span className="text-white">Vigneshwaran</span>{' '}
          <span className="text-neon-blue glow-text">C</span>
        </h1>

        {/* Headline — leads with what you build, not student status */}
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-light mb-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <span className="text-neon-blue font-medium">Full-Stack Dev</span> ·{' '}
          <span className="text-neon-blue font-medium">AI Engineer</span> ·{' '}
          <span className="text-neon-blue font-medium">Systems Builder</span>
        </p>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          Building production-grade AI systems across computer vision, legal tech, and developer tooling — with Python, FastAPI, React, and PostgreSQL.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-neon-blue text-navy-950 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/25 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <span className="relative z-10">View Projects</span>
            <svg className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="/vigneshwaran_resume.pdf"
            download="Vigneshwaran_C_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-slate-600 text-slate-300 font-medium rounded-lg hover:border-neon-blue/50 hover:text-white hover:bg-neon-blue/5 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-neon-blue rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
