import useScrollAnimation from '../hooks/useScrollAnimation'
import profileImg from '../assets/profile.jpg'

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="about" className="py-24 sm:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="scroll-hidden">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-neon-blue font-mono text-sm">01.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start text-center md:text-left">
            {/* Image */}
            <div className="relative group shrink-0 w-48 h-48 sm:w-64 sm:h-64 order-first md:order-last">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 group-hover:border-neon-blue/50 transition-colors duration-500">
                <img
                  src={profileImg}
                  alt="Vigneshwaran C"
                  className="w-full h-full object-cover object-center scale-110 group-hover:scale-100 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-navy-900 border border-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue animate-float z-10 shadow-lg shadow-black/50">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="max-w-2xl">
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-6">
                I'm a Computer Science Engineering student at <span className="text-slate-200 font-medium">St. Joseph's College of Engineering</span> + pursuing a BS in Data Science and Applications at <span className="text-slate-200 font-medium">IIT Madras</span>. I build production-grade systems spanning <span className="text-neon-blue font-medium">computer vision, legal tech, developer tooling, and AI agents</span>.
              </p>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-6">
                I work primarily with <span className="text-slate-200 font-medium">Python, FastAPI, React, Node.js, and PostgreSQL</span>. I've built biomechanical analyzers using MediaPipe and DTW, multi-tenant enterprise SaaS with JWT/RBAC, AI code review platforms with pgvector RAG pipelines, and a fully offline voice assistant with agentic tool loops.
              </p>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-6">
                Three internships at <span className="text-slate-200 font-medium">ATRIBS Global Technology Solutions</span>, <span className="text-slate-200 font-medium">Toeddro Adventures</span>, and <span className="text-slate-200 font-medium">CodeAlpha</span> have sharpened my ability to ship real systems under real constraints.
              </p>
              <p className="text-slate-400 leading-relaxed text-base sm:text-lg mb-8">
                I'm actively seeking <span className="text-neon-blue font-medium">full-time and placement opportunities</span> where I can build AI-integrated products at scale.
              </p>

              {/* Stats — updated */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { value: '10+', label: 'Projects Built' },
                  { value: '3', label: 'Internships' },
                  { value: '8.18', label: 'CGPA' },
                  { value: '8+', label: 'Languages' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-neon-blue/20 hover:bg-neon-blue/[0.02] transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-neon-blue mb-1">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
