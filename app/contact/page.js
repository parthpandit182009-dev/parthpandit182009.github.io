'use client'

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <section className="min-h-[calc(100vh-64px)] px-6 py-16 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className="mx-auto max-w-4xl rounded-[32px] border border-white/30 bg-white/15 p-8 shadow-[0_24px_80px_-30px_rgba(13,59,94,0.5)] backdrop-blur-md sm:p-10"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FFD166]">Contact</p>
        <h1
          className="mt-3 text-4xl font-semibold text-white drop-shadow"
          style={{ fontFamily: 'var(--font-head)' }}
        >
          Get in touch
        </h1>
        <p className="mt-4 text-base leading-8 text-white/80">
          Have a project in mind or just want to say hello? Reach out and let&apos;s make something great together.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:hello@example.com"
            className="rounded-full bg-[#2EC4B6] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#0D3B5E]"
          >
            Send an email
          </a>
        </div>
      </motion.div>
    </section>
  )
}
