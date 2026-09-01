import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'

function App() {
  return (
    <main id="home" className="overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      {/* Temporary sections */}
      <section id="about" className="min-h-screen" />
      <section id="work" className="min-h-screen" />
      <section id="services" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  )
}

export default App