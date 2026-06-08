'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const boards = [
  { id: 1, rotate: '-16deg', top: '0.2rem', left: '-0.55rem' },
  { id: 2, rotate: '18deg', top: '-0.8rem', right: '-0.45rem' },
  { id: 3, rotate: '-8deg', bottom: '-0.7rem', left: '0.3rem' },
  { id: 4, rotate: '10deg', bottom: '-0.6rem', right: '0.15rem' }
]

export default function SurfboardBurst({ children, className = '' }) {
  const [active, setActive] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((value) => !value)}
    >
      {children}
      <AnimatePresence>
        {active ? (
          <>
            {boards.map((board) => (
              <motion.span
                key={board.id}
                initial={{ opacity: 0, scale: 0, rotate: -12 }}
                animate={{ opacity: 1, scale: 1, rotate: board.rotate }}
                exit={{ opacity: 0, scale: 0, rotate: -20 }}
                transition={{ duration: 0.24, type: 'spring', stiffness: 220, damping: 16 }}
                className="pointer-events-none absolute"
                style={{ top: board.top, left: board.left, right: board.right, bottom: board.bottom }}
              >
                <svg viewBox="0 0 50 50" className="h-6 w-6">
                  <path d="M8 32 L24 8 L42 32 L34 32 L30 24 L18 24 L14 32 Z" fill="#FF6B6B" />
                  <path d="M12 31 L24 14 L38 31" stroke="#2EC4B6" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </motion.span>
            ))}
          </>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
