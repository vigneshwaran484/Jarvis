import { useState } from 'react'
import useScrollAnimation from '../hooks/useScrollAnimation'

const timelineItems = [
  {
    role: 'AI Automation & Data Science Intern',
    company: 'Toeddro Adventures Pvt. Ltd.',
    period: 'Apr 2026 · Remote',
    color: 'rgb(0, 201, 167)',
    points: [
      'Built a 3-script Python web scraping pipeline extracting structured lead data from Google Maps, websites, and social media — outputting clean CSVs with 8+ fields.',
      'Developed TourMind, an AI-powered adventure travel planner using FastAPI, SQLite, and Azure AI Foundry — submitted to the Microsoft Agents League Contest at AI Skills Fest 2026.',
    ],
  },
  {
    role: 'Application Development Intern',
    company: 'ATRIBS Global Technology Solutions',
    period: 'Jun–Jul 2025 · Dec 2025–Jan 2026',
    color: 'rgb(108, 99, 255)',
    points: [
      'Selected for a second internship term — one of few interns retained based on outstanding first-round performance.',
      "Led end-to-end development of 'Police Akka', a dual-platform SOS system (citizen app + police dashboard) with real-time Firebase streams, live GPS tracking, RBAC, and AI legal guidance via GroqAPI.",
      'Delivered technical presentations on Industry 4.0 and system architecture to mentors from Rockwell Automation.',
    ],
  },
  {
    role: 'AI / ML Intern',
    company: 'CodeAlpha',
    period: 'Jun–Jul 2026',
    color: 'rgb(0, 212, 255)',
    points: [
      'FAQ Chatbot (NLP): Built a domain-specific chatbot using Python, NLTK, TF-IDF vectorization, and Cosine Similarity for intent matching.',
      'Language Translation Tool: Developed a Streamlit app with deep-translator and gTTS for real-time multi-language translation with audio output.',
      'Object Detection (Web): Implemented browser-based real-time object detection using TensorFlow.js and COCO-SSD.',
      'Sentiment Analysis: Built a classification pipeline with Pandas, Scikit-learn, and Seaborn for data visualization.',
    ],
  },
]

export default function Experience() {
  const sectionRef = useScrollAnimation()
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section id="experience" className="py-24 sm:py-32 relative" ref={sectionRef}>
      <div className="section-container">
        <div className="scroll-hidden">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-neon-blue font-mono text-sm">03.</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Experience</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-slate-700 to-transparent" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/30 via-neon-blue/10 to-transparent" />

          {timelineItems.map((item, idx) => {
            const isHighlighted = hoveredIdx === idx
            const accentColor = item.color

            return (
              <div
                key={idx}
                className="scroll-hidden relative pl-8 sm:pl-20 pb-12 last:pb-0 cursor-pointer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <div
                  className="absolute left-0 sm:left-8 top-1 -translate-x-1/2 w-4 h-4 rounded-full transition-all duration-300 ring-4 ring-navy-900"
                  style={{
                    backgroundColor: isHighlighted ? accentColor : '#00d4ff',
                    boxShadow: isHighlighted ? `0 0 16px ${accentColor}` : '0 4px 6px rgba(0, 212, 255, 0.3)',
                  }}
                />

                <div
                  className="p-6 sm:p-8 rounded-2xl border bg-navy-800/30 transition-all duration-500 relative overflow-hidden"
                  style={{
                    borderColor: isHighlighted ? `${accentColor}50` : 'rgba(255, 255, 255, 0.05)',
                    boxShadow: isHighlighted ? `0 10px 30px -15px ${accentColor}20` : 'none',
                    transform: isHighlighted ? 'translateY(-2px)' : 'translateY(0)',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 10% 20%, ${accentColor}08, transparent 50%)`,
                      opacity: isHighlighted ? 1 : 0,
                    }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 relative z-10">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white">{item.role}</h3>
                      <p className="font-semibold text-sm transition-colors duration-300" style={{ color: accentColor }}>
                        {item.company}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full self-start border border-white/5">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-3 relative z-10">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 text-sm text-slate-400 hover:text-slate-200 transition-colors duration-300">
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0"
                          style={{ color: accentColor }}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
