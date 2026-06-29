import useScrollAnimation from '../hooks/useScrollAnimation'

const achievements = [
  { title: "REC Titanium 2026", desc: "Smart City Debug War Room — Winners", icon: "🏆", color: "from-amber-500/10 to-yellow-500/10" },
  { title: "StartUp TN", desc: "Tourism Hackathon Finalist", icon: "🚀", color: "from-blue-500/10 to-cyan-500/10" },
  { title: "Prompt-a-thon", desc: "VIT × Google Gemini — Healthcare platform prototype", icon: "🤖", color: "from-emerald-500/10 to-teal-500/10" },
  { title: "Spark Sync", desc: "St. Joseph's College of Engineering — 3rd Prize", icon: "⚡", color: "from-purple-500/10 to-pink-500/10" },
  { title: "Codeathon CIT", desc: "4th Place", icon: "💻", color: "from-indigo-500/10 to-violet-500/10" },
  { title: "Ramanujan Competition", desc: "National Level Participation", icon: "∑", color: "from-red-500/10 to-rose-500/10" },
  { title: "Chrysalis-25", desc: "Organized & led college Orientation Program and Technical Symposium — coordinated 200+ participants", icon: "🎓", color: "from-sky-500/10 to-blue-500/10", fullWidth: true },
]

export default function Achievements() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="achievements" className="py-24 sm:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="scroll-hidden">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-neon-blue font-mono text-sm">07.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Achievements
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className={`group relative p-6 rounded-2xl border border-white/5 bg-navy-800/20 hover:border-neon-blue/20 hover:bg-neon-blue/[0.02] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden${
                  item.fullWidth ? ' md:col-span-2 lg:col-span-3' : ''
                }`}
              >
                {/* Accent glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                
                <div className={`relative z-10 flex gap-4 ${item.fullWidth ? 'items-center' : 'items-start'}`}>
                  <span className="text-3xl leading-none select-none transition-transform duration-300 group-hover:scale-110 flex-shrink-0">{item.icon}</span>
                  <div className={item.fullWidth ? 'flex flex-col sm:flex-row sm:items-center sm:gap-8 flex-1' : ''}>
                    <h4 className={`text-slate-100 font-bold tracking-tight group-hover:text-neon-blue transition-colors duration-300 flex-shrink-0 ${
                      item.fullWidth ? 'text-lg mb-1 sm:mb-0' : 'text-base mb-1'
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
