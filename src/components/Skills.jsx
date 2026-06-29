import useScrollAnimation from '../hooks/useScrollAnimation'

const skillGroups = [
  {
    category: 'Languages',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Dart', 'C', 'C++'],
  },
  {
    category: 'AI / ML',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" />
      </svg>
    ),
    skills: ['MediaPipe', 'OpenCV', 'DTW', 'Scikit-learn', 'LangChain', 'Gemini API', 'Groq + Llama 3.3', 'Ollama', 'openWakeWord', 'pandas', 'NumPy'],
  },
  {
    category: 'Backend & Databases',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3" />
      </svg>
    ),
    skills: ['FastAPI', 'Node.js', 'Express.js', 'PostgreSQL', 'Supabase', 'pgvector', 'Firebase', 'MongoDB', 'MySQL', 'Redis', 'BullMQ', 'Cloudflare R2'],
  },
  {
    category: 'Frontend & Mobile',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    skills: ['React', 'Redux Toolkit', 'RTK Query', 'Flutter', 'Expo', 'React Native', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    category: 'DevOps & Tools',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    skills: ['Git', 'GitHub', 'Netlify', 'Railway', 'Render', 'Vercel', 'Docker', 'Postman', 'Streamlit'],
  },
]

export default function Skills() {
  const sectionRef = useScrollAnimation()

  return (
    <section id="skills" className="py-24 sm:py-32 relative bg-grid" ref={sectionRef}>
      <div className="section-container">
        <div className="scroll-hidden">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-neon-blue font-mono text-sm">06.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Skills & Tech Stack</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, idx) => (
            <div
              key={group.category}
              className="scroll-hidden p-6 rounded-2xl border border-white/5 bg-navy-800/30 hover:border-neon-blue/10 transition-all duration-300"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-neon-blue/10 text-neon-blue">{group.icon}</div>
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm text-slate-300 bg-white/[0.04] border border-white/[0.06] rounded-lg hover:border-neon-blue/20 hover:text-neon-blue hover:bg-neon-blue/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
