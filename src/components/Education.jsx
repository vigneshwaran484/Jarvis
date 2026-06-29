import useScrollAnimation from '../hooks/useScrollAnimation'

const educationData = [
  {
    institution: "St. Joseph's College Of Engineering, Semmancheri",
    degree: 'BE Computer Science and Engineering',
    period: '2024 — Present',
    stats: 'CGPA: 8.18',
    isCurrent: true,
  },
  {
    institution: 'IIT Madras, Adayar',
    degree: 'BS Data Science and Applications',
    period: '2024 — Present',
    stats: 'Ongoing',
    isCurrent: true,
  },
  {
    institution: 'Devi Academy Senior Secondary School, Valasaravakkam',
    degree: 'Higher Secondary',
    period: 'May 2024',
    stats: '92.2%',
    isCurrent: false,
  },
]

export default function Education() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="education" className="py-24 sm:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="scroll-hidden">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-neon-blue font-mono text-sm">05.</span>
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 text-neon-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Education
              </h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>

          <div className="grid gap-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-neon-blue/20 hover:bg-neon-blue/[0.02] transition-all duration-300"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                        {edu.institution}
                      </h3>
                      <p className="text-neon-purple font-medium mt-1">
                        {edu.degree}
                      </p>
                    </div>
                    {edu.isCurrent && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                        Pursuing
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                    <div className="flex items-center gap-2 text-slate-400">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2 text-neon-blue font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {edu.stats}
                    </div>
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
