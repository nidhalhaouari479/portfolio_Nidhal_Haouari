import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
