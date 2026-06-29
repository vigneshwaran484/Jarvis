import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-navy-950 min-h-screen text-slate-300 selection:bg-neon-blue/30 selection:text-neon-blue">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </main>
    </div>
  )
}

export default App
