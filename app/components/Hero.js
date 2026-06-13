'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden px-6 py-16 sm:px-8"
    >
      <motion.div style={{ y, opacity }} className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-[#FFD166] backdrop-blur-sm"
        >
          oceanfront design
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="mt-6 text-5xl font-semibold leading-tight tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl"
          style={{ fontFamily: 'var(--font-head)' }}
        >
          I build immersive digital experiences.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/80 drop-shadow sm:text-lg"
        >
          Light motion, 3D shorelines, and polished interaction meet modern product storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="rounded-full bg-[#2EC4B6] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0D3B5E]"
          >
            Let&apos;s connect
          </a>
          <a
            href="/projects"
            className="rounded-full border border-white/40 bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
          >
            Explore projects
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
