'use client'

import PageTransition from '../../components/PageTransition'

export default function ProjectsPage() {
  return (
    <PageTransition>
      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {['Starter project', 'Fresh redesign'].map((title, index) => (
            <article key={title} className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_-30px_rgba(26,58,92,0.35)]">
              <p className="text-sm uppercase tracking-[0.35em] text-[#FF6B6B]">Project {index + 1}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#1A3A5C]" style={{ fontFamily: 'var(--font-head)' }}>{title}</h2>
              <p className="mt-3 text-base leading-7 text-[#1A3A5C]/80">Simple placeholder content for a clean starting point.</p>
            </article>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
