'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import WaveDivider from './components/WaveDivider'
import CustomCursor from './components/CustomCursor'

export default function Page() {
  const { scrollYProgress } = useScroll()
  const backgroundColor = useTransform(scrollYProgress, [0, 1], ['#FFF3D6', '#1A3A5C'])

  return (
    <>
      <motion.div className="fixed inset-0 -z-10" style={{ backgroundColor }} />
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
        <CustomCursor />
      </main>
    </>
  )
}
