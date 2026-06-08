'use client'

import { motion } from 'framer-motion'
import SurfboardBurst from './SurfboardBurst'

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto max-w-6xl">
        <div className="rounded-[36px] border border-white/70 bg-white/80 p-8 shadow-[0_24px_70px_-24px_rgba(26,58,92,0.24)] sm:p-10">
          <div className="flex items-start justify-between gap-4">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2EC4B6]">About the tide</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#1A3A5C] sm:text-4xl" style={{ fontFamily: 'var(--font-head)' }}>
                I bring sunny energy to interfaces that need to feel alive, clear, and a little bit cheeky.
              </h2>
            </div>
            <SurfboardBurst>
              <div className="rounded-full border border-[#FF6B6B]/30 bg-[#FFF3D6] px-3 py-2 text-sm font-semibold text-[#1A3A5C]">☀️</div>
            </SurfboardBurst>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[24px] border border-dashed border-[#2EC4B6]/40 bg-[#FFF3D6]/70 p-6 text-sm leading-8 text-[#1A3A5C]/80">
              I love turning ideas into friendly digital moments — from product launches to polished portfolios. {/* Replace with your real bio. */}
            </div>
            <div className="rounded-[24px] border border-[#FFD166]/40 bg-[#FFFFFF]/90 p-6 text-sm leading-8 text-[#1A3A5C]/80">
              The vibe is playful, the pacing is breezy, and the details stay sharp. Think striped towels, bright launches, and a lot of care in the tiny moments. {/* Replace with your real personality. */}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
