'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const navLinks = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const background = useTransform(scrollY, [0, 80], ['rgba(255,243,214,0)', 'rgba(255,243,214,0.95)'])

  return (
    <motion.nav style={{ background }} className="fixed inset-x-0 top-0 z-50 border-b border-white/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#hero" className="text-lg font-semibold tracking-[0.25em] text-[#1A3A5C]" style={{ fontFamily: 'var(--font-head)' }}>
          PARTH
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="rounded-full border border-[#2EC4B6]/40 bg-white px-4 py-2 text-sm font-semibold text-[#1A3A5C] shadow-sm sm:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <div className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-[#1A3A5C] transition hover:text-[#FF6B6B]">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/50 bg-[#FFF3D6]/95 px-6 pb-6 pt-4 sm:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full bg-white/90 px-4 py-3 text-sm font-semibold text-[#1A3A5C]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </motion.nav>
  )
}
