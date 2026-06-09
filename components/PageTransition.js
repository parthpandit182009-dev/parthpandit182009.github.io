'use client'

import { motion } from 'framer-motion'

const BUBBLES = [
  { cx: 350, cy: 200, r: 6, delay: 0.1 },
  { cx: 450, cy: 350, r: 4, delay: 0.25 },
  { cx: 380, cy: 550, r: 8, delay: 0.05 },
  { cx: 500, cy: 750, r: 5, delay: 0.3 },
  { cx: 620, cy: 280, r: 7, delay: 0.15 },
  { cx: 540, cy: 480, r: 5, delay: 0.35 },
  { cx: 680, cy: 620, r: 10, delay: 0.08 },
  { cx: 480, cy: 820, r: 6, delay: 0.22 },
  { cx: 410, cy: 450, r: 8, delay: 0.12 },
  { cx: 720, cy: 400, r: 4, delay: 0.4 }
]

const waveVariants = {
  initial: { x: '0vw' },
  animate: (i) => ({
    x: '-100vw',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: i * 0.08
    }
  }),
  exit: (i) => ({
    x: ['100vw', '0vw'],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      delay: i * 0.08
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
              d="M 1440,0 L 50,0 C -80,30 -200,80 -200,160 C -200,220 -120,220 -80,240 C -40,260 -180,340 -180,380 C -180,440 -20,480 -60,620 C -100,720 -150,780 -150,830 C -150,860 -20,880 50,900 L 1440,900 Z" 
              fill="#1A3A5C" 
            />
            {/* Water Depth Lines */}
            <path 
              d="M 100,280 C 160,420 120,580 150,720" 
              fill="none" 
              stroke="#122234" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            <path 
              d="M 250,150 C 320,380 280,630 330,850" 
              fill="none" 
              stroke="#122234" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            {/* Foam Cap */}
            <path 
              d="M 50,0 C -80,30 -200,80 -200,160 C -200,220 -120,220 -80,240 C -40,260 -180,340 -180,380 C -160,360 -130,360 -110,340 C -70,300 -160,260 -160,200 C -160,140 -60,110 0,90 C 30,70 40,30 50,0 Z" 
              fill="#FFFFFF" 
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
              d="M 1440,0 L 150,0 C 20,40 -100,70 -100,120 C -100,160 -40,170 -10,200 C 20,230 -60,290 -60,350 C -60,420 120,480 80,580 C 60,680 -10,750 -10,820 C -10,860 110,880 150,900 L 1440,900 Z" 
              fill="#1A8C88" 
            />
            {/* Water Depth Lines */}
            <path 
              d="M 200,270 C 260,410 220,570 250,710" 
              fill="none" 
              stroke="#11625F" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            <path 
              d="M 350,140 C 420,370 380,620 430,840" 
              fill="none" 
              stroke="#11625F" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.4" 
            />
            {/* Foam Cap */}
            <path 
              d="M 150,0 C 20,40 -100,70 -100,120 C -100,160 -40,170 -10,200 C 10,210 10,190 -10,170 C -40,140 -70,130 -40,100 C -10,70 10,30 150,0 Z" 
              fill="#FFFFFF" 
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
              d="M 1440,0 L 250,0 C 120,30 0,70 0,140 C 0,200 70,200 110,220 C 150,240 10,320 10,360 C 10,420 190,460 150,600 C 110,700 60,760 60,810 C 60,840 190,870 250,900 L 1440,900 Z" 
              fill="#2EC4B6" 
            />
            {/* Water Depth Lines */}
            <path 
              d="M 300,260 C 360,400 320,560 350,700" 
              fill="none" 
              stroke="#1E8C82" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.5" 
            />
            <path 
              d="M 450,130 C 520,360 380,610 430,830" 
              fill="none" 
              stroke="#1E8C82" 
              strokeWidth="4" 
              strokeLinecap="round" 
              opacity="0.5" 
            />
            {/* Foam Cap */}
            <path 
              d="M 250,0 C 120,30 0,70 0,140 C 0,200 70,200 110,220 C 130,230 130,210 110,190 C 80,160 50,150 80,120 C 110,90 130,50 250,0 Z" 
              fill="#FFFFFF" 
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
                  delay: (2 * 0.08) + bubble.delay // Front wave stagger + bubble delay
                }}
              />
            ))}
          </svg>
        </motion.div>

      </div>
    </div>
  )
}
