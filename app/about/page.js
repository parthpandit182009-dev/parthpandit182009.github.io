'use client'

import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] px-6 py-16 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="mx-auto max-w-4xl rounded-[32px] border border-white/30 bg-white/15 p-8 shadow-[0_24px_80px_-30px_rgba(13,59,94,0.5)] backdrop-blur-md sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2EC4B6]">About</p>
        <h1
          className="mt-3 text-4xl font-semibold text-white drop-shadow"
          style={{ fontFamily: 'var(--font-head)' }}
        >
          Parth Pandit
        </h1>
        <p className="mt-4 text-base leading-8 text-white/80">
          A creative developer who builds immersive, beach-inspired digital experiences using modern web technology —
          Next.js, React, Tailwind CSS, Framer Motion, and 3D rendering with Three.js.
        </p>
      </motion.div>
    </section>
  )
}
