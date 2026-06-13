'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

// ─── Scene layout constants ───────────────────────────────────────────────────
// Positions are [x, z] in runtime world space (islands.glb rendered at 1.8×).
// Each island is a real landmass; `toNext` is a water-only A* route (string-
// pulled) from this island's berth to the next island's berth, derived from a
// top-down land/water mask of islands.glb — so the boat threads the channels
// between islands instead of sailing through them. Order = the scroll tour.

export const FLOAT_Y = -2.8 // boat hull resting height on the water
export const LABEL_Y = 12 // height of the floating island signs

export const BOAT = {
  glb: 'sailboat.glb',
  scale: 0.0035,
  baseYaw: 0, // set to Math.PI if the hull visually faces backwards
  // Third-person chase camera (outside / behind the boat).
  camBack: 14, // distance behind the boat
  camUp: 7, // height above the boat
  camLookAhead: 3, // look-at point ahead of the boat
  camLookHeight: 1.5 // raise the look-at toward the deck/mast
}

export const ISLANDS = [
  { key: 'home', name: 'Home', href: '/', center: [-3.06, -8.72], berth: [-1.86, -11.76],
    toNext: [[-1.86, -11.76], [-6.81, -16.71], [-14.23, -16.71], [-15.47, -4.33], [-20.42, 1.86], [-19.18, 8.04], [-16.71, 11.76]] },
  { key: 'about', name: 'About', href: '/about', center: [-10.03, 18.48], berth: [-16.71, 11.76],
    toNext: [[-16.71, 11.76], [-20.42, 4.33], [-20.42, 0.62], [3.09, 3.09], [11.76, 9.28], [32.79, 10.52], [34.03, 14.23]] },
  { key: 'projects', name: 'Projects', href: '/projects', center: [28.98, 18.65], berth: [34.03, 14.23],
    toNext: [[34.03, 14.23], [30.32, 4.33], [24.13, -1.86], [21.66, -20.42], [22.89, -24.13], [24.13, -24.13]] },
  { key: 'skills', name: 'Skills', href: '/skills', center: [28.49, -18.59], berth: [24.13, -24.13],
    toNext: [[24.13, -24.13], [-0.62, -24.13], [-3.09, -21.66], [-3.09, -14.23], [-0.62, -14.23]] },
  { key: 'contact', name: 'Contact', href: '/contact', center: [3.4, -16.53], berth: [-0.62, -14.23] }
]

const INDEX_BY_HREF = Object.fromEntries(ISLANDS.map((island, i) => [island.href, i]))

const SCROLL_K = 0.0011 // wheel delta → progress
const NAV_AT = 0.985 // progress at which we cross to the next/prev island
const NAV_COOLDOWN = 450 // ms of input lock after a route change

export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v))

// Live scroll state, shared provider ⇆ Scene3D without React re-renders.
//   progress: scroll target in [-1, 1] (0 = parked, +1 = at next, −1 = at prev)
//   eased:    smoothed value the boat actually rides
export const nav = { progress: 0, eased: 0, navigating: false }

// ─── Context ──────────────────────────────────────────────────────────────────
const JourneyContext = createContext(null)

export function useJourney() {
  const ctx = useContext(JourneyContext)
  if (!ctx) throw new Error('useJourney must be used within <JourneyProvider>')
  return ctx
}

export function JourneyProvider({ children }) {
  const router = useRouter()
  const pathname = usePathname()

  const [index, setIndex] = useState(() => INDEX_BY_HREF[pathname] ?? 0)

  // Refs the rAF / input loops read without re-subscribing.
  const indexRef = useRef(index)
  const nextHref = useRef(ISLANDS[index + 1]?.href ?? null)
  const prevHref = useRef(ISLANDS[index - 1]?.href ?? null)
  const cooldownUntil = useRef(0)

  // Sync tour position to the current route and reset the scrubber.
  useEffect(() => {
    const idx = INDEX_BY_HREF[pathname] ?? 0
    indexRef.current = idx
    nextHref.current = ISLANDS[idx + 1]?.href ?? null
    prevHref.current = ISLANDS[idx - 1]?.href ?? null
    nav.progress = 0
    nav.eased = 0
    nav.navigating = false
    cooldownUntil.current = (typeof performance !== 'undefined' ? performance.now() : 0) + NAV_COOLDOWN
    setIndex(idx)
  }, [pathname])

  // Ease the boat's progress and trip the route change when it arrives.
  useEffect(() => {
    let raf
    let last = performance.now()
    const tick = (now) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      nav.eased += (nav.progress - nav.eased) * Math.min(1, dt * 4)
      if (!nav.navigating) {
        if (nav.eased >= NAV_AT && nextHref.current) {
          nav.navigating = true
          router.push(nextHref.current)
        } else if (nav.eased <= -NAV_AT && prevHref.current) {
          nav.navigating = true
          router.push(prevHref.current)
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [router])

  // Scroll / touch drive the boat along the route to the next (or prev) island.
  useEffect(() => {
    const advance = (delta) => {
      if (nav.navigating || performance.now() < cooldownUntil.current) return
      const lo = prevHref.current ? -1 : 0
      const hi = nextHref.current ? 1 : 0
      nav.progress = clamp(nav.progress + delta * SCROLL_K, lo, hi)
    }
    const onWheel = (e) => {
      e.preventDefault()
      advance(e.deltaY)
    }
    let touchY = null
    const onTouchStart = (e) => { touchY = e.touches[0].clientY }
    const onTouchMove = (e) => {
      if (touchY == null) return
      const dy = touchY - e.touches[0].clientY
      touchY = e.touches[0].clientY
      e.preventDefault()
      advance(dy * 2)
    }
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: false })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [])

  const value = useMemo(
    () => ({
      index,
      island: ISLANDS[index],
      prevIsland: ISLANDS[index - 1] ?? null,
      nextIsland: ISLANDS[index + 1] ?? null
    }),
    [index]
  )

  return <JourneyContext.Provider value={value}>{children}</JourneyContext.Provider>
}

// ─── DOM overlay: scroll prompt + wayfinding indicator ────────────────────────
export function JourneyOverlay() {
  const { index, prevIsland, nextIsland } = useJourney()

  return (
    <>
      {/* Opening prompt, only on the Home island */}
      <AnimatePresence>
        {index === 0 && (
          <motion.div
            key="prompt"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="pointer-events-none fixed inset-x-0 bottom-24 z-30 flex flex-col items-center gap-1 text-center"
          >
            <motion.span
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
              className="text-lg font-semibold tracking-wide text-white drop-shadow-[0_2px_12px_rgba(13,59,94,0.7)] sm:text-xl"
              style={{ fontFamily: 'var(--font-head)' }}
            >
              Scroll to set sail
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wayfinding: which island scrolling up / down sails to */}
      <div className="pointer-events-none fixed inset-x-0 bottom-6 z-30 flex flex-col items-center gap-1 text-center">
        {nextIsland && (
          <motion.span
            key={`next-${nextIsland.key}`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: [0, 4, 0] }}
            transition={{ y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.4 } }}
            className="text-xs font-semibold uppercase tracking-[0.3em] text-white/85 drop-shadow"
          >
            ↓ {nextIsland.name}
          </motion.span>
        )}
        {prevIsland && (
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/55">
            ↑ {prevIsland.name}
          </span>
        )}
      </div>
    </>
  )
}
