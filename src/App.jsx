import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import About from './components/About'
import Chatbot from './components/Chatbot'


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <About />
      <Chatbot />
    </div>
  )
}

export default App
