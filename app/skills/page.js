'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'

const categories = [
  {
    title: 'Languages',
    accent: 'bg-[#FF6B6B] text-white',
    items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL']
  },
  {
    title: 'Frameworks',
    accent: 'bg-[#2EC4B6] text-white',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Tools',
    accent: 'bg-[#FFD166] text-[#1A3A5C]',
    items: ['VS Code', 'GitHub', 'Figma', 'Vercel']
  },
  {
    title: 'Other',
    accent: 'bg-[#FFF3D6] text-[#1A3A5C] border border-[#2EC4B6]/30',
    items: ['UI Design', 'Responsive Layouts', 'Accessibility', 'Creative Coding']
  }
]

export default function SkillsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20 px-6 pb-24 text-[#1A3A5C] sm:px-8 lg:px-10">
        <section className="mx-auto max-w-6xl pt-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[32px] border border-white/70 bg-white/80 p-8 shadow-[0_24px_70px_-24px_rgba(26,58,92,0.24)] sm:p-10"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2EC4B6]">Skill set</p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl" style={{ fontFamily: 'var(--font-head)' }}>
              My Skills
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#1A3A5C]/80">
              A bright, beachy snapshot of the tools and ideas you can bring to a project. {/* ADD YOUR SKILLS HERE */}
            </p>
          </motion.div>

          <div className="mt-8 rounded-[32px] border border-white/70 bg-[#FFF3D6]/80 p-6 shadow-[0_24px_70px_-24px_rgba(26,58,92,0.24)] sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FF6B6B]">Categories</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#1A3A5C]" style={{ fontFamily: 'var(--font-head)' }}>
                  Explore the toolkit
                </h2>
              </div>
              <span className="rounded-full border border-[#2EC4B6]/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#1A3A5C]">Beach theme</span>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {categories.map((group, index) => (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[28px] border border-white/80 bg-white/90 p-6"
                >
                  <h3 className="text-xl font-semibold text-[#1A3A5C]" style={{ fontFamily: 'var(--font-head)' }}>{group.title}</h3>
                  <p className="mt-2 text-sm text-[#1A3A5C]/75">A quick place to list your strongest skills. {/* ADD YOUR SKILLS HERE */}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {group.items.map((skill) => (
                      <span key={skill} className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm ${group.accent}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_70px_-24px_rgba(26,58,92,0.24)] sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 md:grid-cols-[1fr_0.9fr] md:items-center"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2EC4B6]">Notes</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1A3A5C]" style={{ fontFamily: 'var(--font-head)' }}>Make this page yours</h3>
                <p className="mt-3 text-base leading-8 text-[#1A3A5C]/80">Swap the placeholder skills and notes with your real stack, then keep the surfboard-style tags and calm palette for the beach theme. {/* ADD YOUR SKILLS HERE */}</p>
              </div>
              <div className="rounded-[24px] border border-dashed border-[#FF6B6B]/30 bg-[#FFF3D6] p-5 text-sm leading-7 text-[#1A3A5C]/80">
                Tip: keep categories short, use clear labels, and replace any placeholder item with your real strengths.
              </div>
            </motion.div>
          </div>

          <svg viewBox="0 0 800 120" className="mt-8 h-16 w-full" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0,60 C140,10 260,110 400,60 S660,10 800,60" fill="none" stroke="#2EC4B6" strokeWidth="6" strokeLinecap="round" />
          </svg>
        </section>
      </main>
    </>
  )
}
