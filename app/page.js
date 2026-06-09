'use client'

import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WaveDivider from './components/WaveDivider'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="relative overflow-hidden">
        <Hero />
        <WaveDivider accent="#FF6B6B" />
        <About />
        <WaveDivider accent="#2EC4B6" />
        <Skills />
        <WaveDivider accent="#FFD166" />
        <Projects />
        <WaveDivider accent="#FF6B6B" />
        <Contact />
      </main>
    </>
  )
}
