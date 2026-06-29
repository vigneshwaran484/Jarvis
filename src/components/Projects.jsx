import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const GITHUB = 'https://github.com/vigneshwaran484'

const projects = [
  {
    title: 'NeuroMotion AI',
    badge: 'AI/ML Project',
    description: 'Biomechanical analysis system tracking 33 body landmarks per frame via MediaPipe, computing 6 joint angles to score free throw form with DTW alignment and expert coaching engine.',
    tech: ['Python', 'FastAPI', 'MediaPipe', 'DTW', 'Flutter'],
    github: `${GITHUB}/neuromotion-ai`,
    demo: null,
    gradient: 'from-indigo-500/20 to-purple-500/20',
    category: 'AI/ML',
    color: '#6C63FF',
    details: 'Captures real-time video to analyze basketball free throw posture. MediaPipe Pose maps 33 anatomical landmarks, computes 6 joint angles per frame, then Dynamic Time Warping aligns the shot against an expert Ideal Motion Vector Sequence (IMVS). A 10-rule coaching engine generates prioritized corrections and a skeleton heatmap at the frame of maximum deviation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'DevPulse',
    badge: 'In Development',
    description: 'AI-powered GitHub App that posts automated inline code review comments on PRs using Gemini, with a RAG codebase Q&A pipeline backed by pgvector.',
    tech: ['Node.js', 'BullMQ', 'Redis', 'Supabase', 'pgvector', 'Gemini API', 'React'],
    github: `${GITHUB}/devpulse`,
    demo: null,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    category: 'Full-Stack',
    color: '#06b6d4',
    details: 'GitHub App listens to PR webhooks, validates HMAC signatures, and drops jobs into a BullMQ/Redis queue — responding to GitHub in <200ms. Workers do the heavy lifting: language-aware logical chunking (function/class boundaries), Gemini Embeddings, pgvector storage, and context-aware reviews that query the codebase for similar patterns before generating feedback.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
  },
  {
    title: 'Law-Suite',
    badge: 'Full-Stack Project',
    description: '14-module multi-tenant SaaS for law firms — JWT/RBAC auth, case lifecycle management, document versioning, billing automation, and analytics dashboards.',
    tech: ['React', 'Redux Toolkit', 'Node.js', 'PostgreSQL', 'JWT'],
    github: `${GITHUB}/law-suite`,
    demo: null,
    gradient: 'from-amber-500/20 to-orange-500/20',
    category: 'Full-Stack',
    color: '#F59E0B',
    details: 'Multi-tenant case workflow platform for law firms. 4-tier RBAC hierarchy (SuperAdmin → Firm Admin → Advocate → Client) with granular per-endpoint permission enforcement, immutable audit trails, and JWT access/refresh token rotation. Auth module includes bcrypt hashing, 6-digit OTP with 5-min expiry, and rate limiting (5 attempts / 10 min).',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.33l-7.5-5-7.5 5V21m12-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'Jarvis',
    badge: 'AI/ML Project',
    description: 'Fully offline, Iron Man-style voice assistant with a ReAct tool loop, custom Arc Reactor GUI, and wake word detection — runs entirely on local LLMs via Ollama.',
    tech: ['Python', 'Ollama', 'openWakeWord', 'edge-tts', 'Tkinter', 'Pygame'],
    github: `${GITHUB}/jarvis`,
    demo: null,
    gradient: 'from-yellow-500/20 to-orange-500/20',
    category: 'AI/ML',
    color: '#F59E0B',
    details: 'Multi-threaded architecture: Tkinter Arc Reactor GUI on main thread (changes color: Sleeping→Listening→Thinking→Speaking), agent loop on background thread. ReAct loop calls tools — open/close apps, web search, system stats, weather (IPWhois geolocation), screenshot, screen recording, file R/W. Wake word detection via openWakeWord (fully offline, pre-trained "hey jarvis" model, Apache 2.0).',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
  },
  {
    title: 'PulseTN',
    badge: 'Full-Stack Project',
    description: 'Real-time Tamil Nadu Tourism Companion monitoring crowd density, comfort scoring, vibe-based filtering, and Smart Pick recommendation algorithm.',
    tech: ['React 19', 'Vite 7', 'Framer Motion', 'Expo', 'React Native'],
    github: 'https://github.com/vigneshwaran484/tourism',
    demo: null,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    category: 'Full-Stack',
    color: '#00C9A7',
    details: 'Monitors 30+ Tamil Nadu destinations with real-time crowd density and comfort scoring. Smart Pick algorithm auto-suggests optimal destinations and generates backup choices when scores exceed thresholds. Glassmorphic dark-mode UI with Framer Motion micro-animations; cross-platform mobile app via Expo.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: 'PillMatrix',
    badge: 'Healthcare Project',
    description: 'Multi-role healthcare platform with Firestore medical records, QR-based patient UUID access, and Gemini-powered prescription chatbot.',
    tech: ['Firebase', 'Gemini API', 'OCR', 'Expo', 'React Native'],
    github: `${GITHUB}/pillmatrix`,
    demo: null,
    gradient: 'from-pink-500/20 to-rose-500/20',
    category: 'AI/ML',
    color: '#EC4899',
    details: 'Multi-role platform bridging doctors, patients, labs, and pharmacies. Prescriptions parsed via built-in OCR. Each patient gets a UUID encoded in a QR code for cross-hospital access. Gemini analyzes dosage patterns and provides medication reminders via chat. Firestore handles real-time medical record sync.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: 'DocuMind',
    badge: 'AI/ML Project',
    description: 'RAG-based document Q&A platform. Solved free-tier embedding constraints using TF-IDF via scikit-learn with zero external API dependencies — live on Railway.',
    tech: ['LangChain', 'FastAPI', 'Supabase', 'Railway', 'scikit-learn'],
    github: `${GITHUB}/documind`,
    demo: 'https://documind-production-6c3b.up.railway.app',
    gradient: 'from-violet-500/20 to-purple-500/20',
    category: 'AI/ML',
    color: '#8B5CF6',
    details: 'Upload documents and query them in natural language. LangChain orchestrates the RAG pipeline. Supabase stores vectors and metadata. Key insight: solved Render/Railway free-tier blocking of HuggingFace Inference API by switching to TF-IDF cosine similarity via scikit-learn — no external embedding dependencies.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Deepfake Defender',
    badge: 'AI/ML Project',
    description: 'AI-powered content authenticity detection for text, images, videos, and URLs — ML confidence scoring with explainable AI outputs.',
    tech: ['Python', 'Machine Learning', 'Firebase', 'OpenCV'],
    github: 'https://github.com/vigneshwaran484/Deepfake-Home',
    demo: null,
    gradient: 'from-red-500/20 to-orange-500/20',
    category: 'AI/ML',
    color: '#EF4444',
    details: 'Multi-modal deepfake detection system. Scores input media on a probability scale and explains detection vectors visually. Uses pre-trained CNN models for synthesis artifact detection across image, video, and text modalities.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Police Akka',
    badge: 'Internship Project',
    description: 'Citizen app and police dashboard with real-time Firebase streams, live GPS tracking, role-based access control, and AI legal guidance.',
    tech: ['Firebase', 'GroqAPI', 'GPS', 'React Native', 'Expo'],
    github: 'https://github.com/vigneshwaran484/police-akka-copy',
    demo: null,
    gradient: 'from-blue-500/20 to-indigo-500/20',
    category: 'Full-Stack',
    color: '#3B82F6',
    details: 'Dual-platform crisis response SOS system connecting citizens to police dispatch. Real-time state management over Firebase, live GPS routing, RBAC separating citizen/officer/admin roles, and automated legal guidelines lookup via GroqAPI LLM. Built during internship at ATRIBS.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
]

export default function Projects() {
  const sectionRef = useScrollAnimation()
  const [filter, setFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-grid" ref={sectionRef}>
      <div className="section-container">
        <div className="scroll-hidden">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-neon-blue font-mono text-sm">02.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Projects</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
          <p className="text-slate-500 mb-12 max-w-xl">
            Production-grade systems across AI, full-stack, and developer tooling. Click any card for details.
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-3 mb-10 scroll-hidden">
          {['All', 'AI/ML', 'Full-Stack'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider rounded-full border transition-all duration-300 ${
                filter === cat
                  ? 'border-neon-blue bg-neon-blue/10 text-neon-blue shadow-lg shadow-neon-blue/15'
                  : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl border border-white/5 bg-navy-800/50 hover:border-neon-blue/20 transition-all duration-500 overflow-hidden cursor-pointer hover:-translate-y-1"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div style={{ color: project.color }}>{project.icon}</div>
                    <span
                      className="text-[10px] sm:text-xs font-mono px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: `${project.color}30`,
                        backgroundColor: `${project.color}10`,
                        color: project.color,
                      }}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1 text-[11px] font-mono rounded-md border border-neon-blue/20 text-neon-blue hover:bg-neon-blue/10 transition-colors"
                        aria-label="Live Demo"
                      >
                        Live ↗
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 text-slate-500 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono text-slate-500 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-navy-900 p-6 sm:p-8 shadow-2xl shadow-black/80 max-h-[90vh] overflow-y-auto animate-fade-in-up">
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: selectedProject.color }} />

            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div style={{ color: selectedProject.color }}>{selectedProject.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: selectedProject.color }}>
                    {selectedProject.badge}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{selectedProject.description}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Architecture</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{selectedProject.details}</p>
              </div>
              <div>
                <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-slate-300 px-3 py-1.5 rounded-lg border"
                      style={{ backgroundColor: `${selectedProject.color}10`, borderColor: `${selectedProject.color}25` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-neon-blue text-navy-950 hover:bg-neon-blue/90 transition-colors"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white text-navy-950 hover:bg-slate-200 transition-colors"
                  >
                    <span>View Repository</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-700 text-slate-300 hover:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
