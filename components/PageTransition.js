'use client'

import { motion } from 'framer-motion'

const BUBBLES = [
  { cx: 1090, cy: 200, r: 6, delay: 0.1 },
  { cx: 990, cy: 350, r: 4, delay: 0.25 },
  { cx: 1060, cy: 500, r: 8, delay: 0.05 },
  { cx: 940, cy: 750, r: 5, delay: 0.3 },
  { cx: 820, cy: 280, r: 7, delay: 0.15 },
  { cx: 900, cy: 480, r: 5, delay: 0.35 },
  { cx: 760, cy: 620, r: 10, delay: 0.08 },
  { cx: 960, cy: 820, r: 6, delay: 0.22 },
  { cx: 1030, cy: 450, r: 8, delay: 0.12 },
  { cx: 720, cy: 400, r: 4, delay: 0.4 }
]

const waveVariants = {
  initial: { x: '0vw' },
  animate: (i) => ({
    x: '100vw',
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
      delay: i * 0.1
    }
  }),
  exit: (i) => ({
    x: ['-100vw', '0vw'],
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
      delay: i * 0.1
    }
  })
}

const bubbleVariants = {
  initial: { y: 0, opacity: 0.6 },
  animate: {
    y: -200,
    opacity: 0,
    transition: {
      duration: 0.85,
      ease: 'easeOut'
    }
  },
  exit: {
    y: -200,
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
      {/* Page Content Wrapper */}
      <motion.div
        initial={{ opacity: 0.95 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>

      {/* Transition Waves Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden w-screen h-screen">
        
        {/* Wave 3 (Back - Dark Blue) */}
        <motion.div
          variants={waveVariants}
          custom={0}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-screen h-screen"
        >
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            {/* Wave Body */}
            <path 
              d="M 0,0 L 1390,0 C 1520,30 1640,80 1640,160 C 1640,220 1560,220 1520,240 C 1480,260 1620,340 1620,380 C 1620,440 1460,480 1500,620 C 1540,720 1590,780 1590,830 C 1590,860 1460,880 1390,900 L 0,900 Z" 
              fill="#1A3A5C" 
              stroke="#1A3A5C"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            {/* Water Depth Lines */}
            <path 
              d="M 1340,280 C 1280,420 1320,580 1290,720" 
              fill="none" 
              stroke="#122234" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            <path 
              d="M 1190,150 C 1120,380 1160,630 1110,850" 
              fill="none" 
              stroke="#122234" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            {/* Foam Cap */}
            <path 
              d="M 1390,0 C 1520,30 1640,80 1640,160 C 1640,220 1560,220 1520,240 C 1480,260 1620,340 1620,380 C 1600,360 1570,360 1550,340 C 1510,300 1600,260 1600,200 C 1600,140 1500,110 1440,90 C 1410,70 1400,30 1390,0 Z" 
              fill="#FFFFFF" 
              stroke="#1A3A5C"
              strokeWidth="8"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Wave 2 (Mid - Medium Blue/Teal) */}
        <motion.div
          variants={waveVariants}
          custom={1}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-screen h-screen"
        >
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            {/* Wave Body */}
            <path 
              d="M 0,0 L 1290,0 C 1420,40 1540,70 1540,120 C 1540,160 1480,170 1450,200 C 1420,230 1500,290 1500,350 C 1500,420 1320,480 1360,580 C 1380,680 1450,750 1450,820 C 1450,860 1330,880 1290,900 L 0,900 Z" 
              fill="#1A8C88" 
              stroke="#1A3A5C"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            {/* Water Depth Lines */}
            <path 
              d="M 1140,270 C 1080,410 1120,570 1090,710" 
              fill="none" 
              stroke="#11625F" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            <path 
              d="M 1090,140 C 1020,370 1060,620 1010,840" 
              fill="none" 
              stroke="#11625F" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            {/* Foam Cap */}
            <path 
              d="M 1290,0 C 1420,40 1540,70 1540,120 C 1540,160 1480,170 1450,200 C 1450,170 1480,140 1480,100 C 1450,70 1430,30 1290,0 Z" 
              fill="#FFFFFF" 
              stroke="#1A3A5C"
              strokeWidth="8"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>

        {/* Wave 1 (Front - Cyan) */}
        <motion.div
          variants={waveVariants}
          custom={2}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 w-screen h-screen"
        >
          <svg viewBox="0 0 1440 900" preserveAspectRatio="none" className="w-full h-full overflow-visible">
            {/* Wave Body */}
            <path 
              d="M 0,0 L 1190,0 C 1320,30 1440,70 1440,140 C 1440,200 1370,200 1330,220 C 1290,240 1430,320 1430,360 C 1430,420 1250,460 1290,600 C 1330,700 1380,760 1380,810 C 1380,840 1250,870 1190,900 L 0,900 Z" 
              fill="#2EC4B6" 
              stroke="#1A3A5C"
              strokeWidth="8"
              strokeLinejoin="round"
            />
            {/* Water Depth Lines */}
            <path 
              d="M 1140,260 C 1080,400 1120,560 1090,700" 
              fill="none" 
              stroke="#1E8C82" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.5" 
            />
            <path 
              d="M 990,130 C 920,360 960,610 910,830" 
              fill="none" 
              stroke="#1E8C82" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.5" 
            />
            {/* Foam Cap */}
            <path 
              d="M 1190,0 C 1320,30 1440,70 1440,140 C 1440,200 1370,200 1330,220 C 1310,230 1310,210 1330,190 C 1360,160 1390,150 1360,120 C 1330,90 1310,50 1190,0 Z" 
              fill="#FFFFFF" 
              stroke="#1A3A5C"
              strokeWidth="8"
              strokeLinejoin="round"
            />

            {/* Bubble Circles */}
            {BUBBLES.map((bubble, idx) => (
              <motion.circle
                key={idx}
                cx={bubble.cx}
                cy={bubble.cy}
                r={bubble.r}
                fill="white"
                variants={bubbleVariants}
                transition={{
                  delay: (2 * 0.1) + bubble.delay // Front wave stagger + bubble delay
                }}
              />
            ))}
          </svg>
        </motion.div>

      </div>
    </div>
  )
}
