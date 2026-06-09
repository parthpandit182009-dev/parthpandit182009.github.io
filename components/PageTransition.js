'use client'

import { motion } from 'framer-motion'

const BUBBLES = [
  { x: '8%', y: '15%', r: 5, delay: 0.1 },
  { x: '18%', y: '22%', r: 3, delay: 0.25 },
  { x: '28%', y: '12%', r: 6, delay: 0.05 },
  { x: '38%', y: '25%', r: 4, delay: 0.3 },
  { x: '50%', y: '18%', r: 5, delay: 0.15 },
  { x: '62%', y: '28%', r: 3, delay: 0.35 },
  { x: '72%', y: '14%', r: 6, delay: 0.08 },
  { x: '82%', y: '24%', r: 4, delay: 0.22 },
  { x: '92%', y: '16%', r: 5, delay: 0.12 },
  { x: '45%', y: '30%', r: 3, delay: 0.4 }
]

const waveVariants = {
  initial: { y: '0%' },
  animate: (i) => ({
    y: '-120%',
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.1
    }
  }),
  exit: (i) => ({
    y: ['120%', '0%'],
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.1
    }
  })
}

const bubbleVariants = {
  initial: { y: 0, opacity: 0.6 },
  animate: {
    y: -250,
    opacity: 0,
    transition: {
      duration: 0.85,
      ease: 'easeOut'
    }
  },
  exit: {
    y: -250,
    opacity: 0,
    transition: {
      duration: 0.85,
      ease: 'easeOut'
    }
  }
}

export default function PageTransition({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Page Content */}
      <motion.div
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>

      {/* Transition Waves Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {/* Wave 3 (Back - Dark Blue) */}
        <motion.div
          variants={waveVariants}
          custom={0}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-x-0 top-0 w-full h-[120vh]"
        >
          <div className="absolute top-0 left-0 w-full h-[150px] -translate-y-full">
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-full fill-[#1A3A5C]">
              <path d="M0,150 L0,40 C180,-20 360,100 540,30 C720,-40 900,80 1080,20 C1260,-40 1380,60 1440,30 L1440,150 Z" />
            </svg>
          </div>
          <div className="w-full h-full bg-[#1A3A5C]" />
        </motion.div>

        {/* Wave 2 (Mid - Teal Blue) */}
        <motion.div
          variants={waveVariants}
          custom={1}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-x-0 top-0 w-full h-[120vh]"
        >
          <div className="absolute top-0 left-0 w-full h-[150px] -translate-y-full">
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-full fill-[#1A8C99]">
              <path d="M0,150 L0,60 C200,120 400,0 600,80 C800,-40 1000,100 1200,40 C1320,0 1400,80 1440,50 L1440,150 Z" />
            </svg>
          </div>
          <div className="w-full h-full bg-[#1A8C99]" />
        </motion.div>

        {/* Wave 1 (Front - Teal/Cyan) */}
        <motion.div
          variants={waveVariants}
          custom={2}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-x-0 top-0 w-full h-[120vh]"
        >
          <div className="absolute top-0 left-0 w-full h-[150px] -translate-y-full">
            <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-full fill-[#2EC4B6]">
              <path d="M0,150 L0,80 C250,0 500,140 750,50 C1000,140 1200,-10 1440,70 L1440,150 Z" />
            </svg>
          </div>
          <div className="w-full h-full bg-[#2EC4B6]" />

          {/* Bubbles Overlay on top of the front wave */}
          <svg className="absolute inset-0 w-full h-full overflow-visible">
            {BUBBLES.map((bubble, idx) => (
              <motion.circle
                key={idx}
                cx={bubble.x}
                cy={bubble.y}
                r={bubble.r}
                fill="white"
                variants={bubbleVariants}
                transition={{
                  delay: (2 * 0.1) + bubble.delay // Front wave stagger + individual delay
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
