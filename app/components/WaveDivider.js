'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function WaveDivider({ accent = '#FF6B6B' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const path = useTransform(scrollYProgress, [0, 1], ['M0,80 C140,20 260,140 400,80 S660,20 800,70', 'M0,40 C140,120 260,0 400,70 S660,120 800,40'])

  return (
    <div ref={ref} className="relative h-16 overflow-hidden">
      <svg viewBox="0 0 800 140" className="h-16 w-full" preserveAspectRatio="none">
        <motion.path
          d={path}
          fill="none"
          stroke={accent}
          strokeWidth="8"
          strokeLinecap="round"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.6, repeat: Infinity }}
        />
      </svg>
    </div>
  )
}
