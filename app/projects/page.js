'use client'

import { motion } from 'framer-motion'

const projects = [
  { title: 'Beach Portfolio', tag: 'Web', desc: 'This very site — a 3D island scene built with Three.js, Framer Motion, and Next.js 14.' },
  { title: 'Fresh Redesign', tag: 'UI/UX', desc: 'A clean, minimal interface study focusing on typography and whitespace.' }
]

export default function ProjectsPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] px-6 py-16 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="mx-auto max-w-6xl"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#FFD166]">Work</p>
        <h1
          className="mb-8 text-4xl font-semibold text-white drop-shadow"
          style={{ fontFamily: 'var(--font-head)' }}
        >
          Projects
        </h1>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ scale: 1.02 }}
              className="rounded-[28px] border border-white/30 bg-white/15 p-6 shadow-[0_16px_60px_-20px_rgba(13,59,94,0.4)] backdrop-blur-md"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#2EC4B6]">{project.tag}</p>
              <h2
                className="mt-2 text-2xl font-semibold text-white drop-shadow"
                style={{ fontFamily: 'var(--font-head)' }}
              >
                {project.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-white/75">{project.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
