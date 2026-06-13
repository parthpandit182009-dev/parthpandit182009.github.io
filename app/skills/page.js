'use client'

import { motion } from 'framer-motion'

const skills = [
  'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
  'Framer Motion', 'Three.js', 'React Three Fiber', 'GitHub'
]

export default function SkillsPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] px-6 py-16 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="mx-auto max-w-4xl rounded-[32px] border border-white/30 bg-white/15 p-8 shadow-[0_24px_80px_-30px_rgba(13,59,94,0.5)] backdrop-blur-md sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#2EC4B6]">Skills</p>
        <h1
          className="mt-3 text-4xl font-semibold text-white drop-shadow"
          style={{ fontFamily: 'var(--font-head)' }}
        >
          Core skills
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
