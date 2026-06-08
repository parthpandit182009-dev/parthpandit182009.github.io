'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="pointer-events-none fixed z-[60]"
      animate={{ x: position.x - 16, y: position.y - 16, rotate: [0, 4, -4, 0] }}
      transition={{ duration: 1.2, ease: 'easeInOut', repeat: Infinity }}
    >
      <svg viewBox="0 0 64 64" className="h-8 w-8 drop-shadow-lg">
        <path d="M14 48 L30 18 L38 28 L48 24 L18 10 Z" fill="#FF6B6B" />
        <path d="M18 48 L32 24 L42 34" stroke="#2EC4B6" strokeWidth="4" fill="none" strokeLinecap="round" />
      </svg>
    </motion.div>
  )
}
