'use client'

import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, Sky, Html } from '@react-three/drei'
import * as THREE from 'three'

import { useJourney, ISLANDS, BOAT, FLOAT_Y, LABEL_Y, nav } from './Journey'

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
const ISLAND_GLB = `${BASE}/islands.glb`
const BOAT_GLB = `${BASE}/${BOAT.glb}`

// Live boat transform, shared boat → camera without React re-renders.
const boatState = { x: ISLANDS[0].berth[0], y: FLOAT_Y, z: ISLANDS[0].berth[1], yaw: 0 }

// Sample an [x,z] polyline at u∈[0,1] by arc length → { x, z, dx, dz } (dir unit).
function samplePath(path, u) {
  const segs = []
  let total = 0
  for (let i = 0; i < path.length - 1; i++) {
    const d = Math.hypot(path[i + 1][0] - path[i][0], path[i + 1][1] - path[i][1])
    segs.push(d)
    total += d
  }
  if (total === 0) return { x: path[0][0], z: path[0][1], dx: 0, dz: -1 }
  let dist = Math.max(0, Math.min(1, u)) * total
  for (let i = 0; i < segs.length; i++) {
    if (dist <= segs[i] || i === segs.length - 1) {
      const a = path[i]
      const b = path[i + 1]
      const len = segs[i] || 1
      const t = Math.max(0, Math.min(1, dist / len))
      return { x: a[0] + (b[0] - a[0]) * t, z: a[1] + (b[1] - a[1]) * t, dx: (b[0] - a[0]) / len, dz: (b[1] - a[1]) / len }
    }
    dist -= segs[i]
  }
}

// ─── Animated procedural ocean ───────────────────────────────────────────────
function Ocean() {
  const mesh = useRef()

  useFrame(({ clock }) => {
    if (!mesh.current) return
    const pos = mesh.current.geometry.attributes.position
    const t = clock.elapsedTime

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const z = pos.getY(i)
      const h =
        Math.sin(x * 0.16 + t * 0.85) * 0.28 +
        Math.sin(z * 0.21 + t * 0.65) * 0.20 +
        Math.sin((x - z) * 0.11 + t * 1.15) * 0.14 +
        Math.sin((x + z) * 0.07 + t * 0.45) * 0.09
      pos.setZ(i, h)
    }
    pos.needsUpdate = true
    mesh.current.geometry.computeVertexNormals()
  })

  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.6, 0]} renderOrder={-1}>
      <planeGeometry args={[500, 500, 72, 72]} />
      <meshStandardMaterial
        color="#5abecf"
        roughness={0.08}
        metalness={0.9}
        transparent
        opacity={0.96}
        depthWrite={false}
      />
    </mesh>
  )
}

// ─── Island GLB ───────────────────────────────────────────────────────────────
function IslandModel() {
  const { scene } = useGLTF(ISLAND_GLB)
  const ref = useRef()

  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.position.y = -1.9 + Math.sin(clock.elapsedTime * 0.28 + 1.1) * 0.04
  })

  return <primitive ref={ref} object={scene} scale={[1.8, 1.8, 1.8]} position={[0, -1.9, 0]} />
}

// ─── Sailboat ─────────────────────────────────────────────────────────────────
// Rides the scroll: parked at the current island's berth (progress 0) and
// gliding along the water route toward the next (progress→1) or previous
// (progress→−1) island. Position comes straight from the eased scroll value,
// so it can never leave the channel the route was carved through.
function Boat() {
  const { scene } = useGLTF(BOAT_GLB)
  const group = useRef()
  const yaw = useRef(0)
  const { index } = useJourney()

  useFrame(({ clock }, delta) => {
    const g = group.current
    if (!g) return
    const dt = Math.min(delta, 0.05)
    const e = nav.eased

    const cur = ISLANDS[index]
    const prev = ISLANDS[index - 1]
    let x
    let z
    let faceYaw

    if (e >= 0 && cur && cur.toNext) {
      const s = samplePath(cur.toNext, e)
      x = s.x
      z = s.z
      faceYaw = Math.atan2(s.dx, s.dz)
    } else if (e < 0 && prev && prev.toNext) {
      const s = samplePath(prev.toNext, 1 + e) // sail back toward the previous berth
      x = s.x
      z = s.z
      faceYaw = Math.atan2(-s.dx, -s.dz)
    } else {
      const berth = cur ? cur.berth : ISLANDS[0].berth
      x = berth[0]
      z = berth[1]
      // At rest, point toward wherever the next leg heads.
      if (cur && cur.toNext) {
        const s = samplePath(cur.toNext, 0)
        faceYaw = Math.atan2(s.dx, s.dz)
      } else {
        faceYaw = yaw.current
      }
    }

    g.position.x = x
    g.position.z = z
    g.position.y = FLOAT_Y + Math.sin(clock.elapsedTime * 1.1) * 0.13

    // Shortest-arc yaw smoothing.
    let d = faceYaw - yaw.current
    while (d > Math.PI) d -= Math.PI * 2
    while (d < -Math.PI) d += Math.PI * 2
    yaw.current += d * Math.min(1, dt * 2.6)
    g.rotation.y = yaw.current + BOAT.baseYaw
    g.rotation.z = Math.sin(clock.elapsedTime * 0.9) * 0.03

    boatState.x = x
    boatState.z = z
    boatState.y = g.position.y
    boatState.yaw = yaw.current
  })

  return (
    <primitive
      ref={group}
      object={scene}
      scale={BOAT.scale}
      position={[ISLANDS[0].berth[0], FLOAT_Y, ISLANDS[0].berth[1]]}
    />
  )
}

// ─── Floating island labels (display only) ────────────────────────────────────
function IslandLabels() {
  return (
    <>
      {ISLANDS.map((island) => (
        <Html
          key={island.key}
          position={[island.center[0], LABEL_Y, island.center[1]]}
          center
          distanceFactor={22}
          occlude={false}
          style={{ pointerEvents: 'none' }}
        >
          <span
            className="whitespace-nowrap rounded-full border border-white/35 bg-white/15 px-4 py-1.5 text-base font-semibold text-white shadow-[0_14px_40px_-12px_rgba(13,59,94,0.8)] backdrop-blur-md"
            style={{ fontFamily: 'var(--font-head)' }}
          >
            {island.name}
          </span>
        </Html>
      ))}
    </>
  )
}

// ─── Third-person chase camera (rides behind/above the boat) ──────────────────
function CameraRig() {
  const first = useRef(true)
  const lookAt = useRef(new THREE.Vector3())

  useFrame(({ camera }, delta) => {
    const dt = Math.min(delta, 0.05)
    const fwdX = Math.sin(boatState.yaw)
    const fwdZ = Math.cos(boatState.yaw)

    const eyeX = boatState.x - fwdX * BOAT.camBack
    const eyeZ = boatState.z - fwdZ * BOAT.camBack
    const eyeY = boatState.y + BOAT.camUp

    const a = first.current ? 1 : Math.min(1, dt * 3)
    camera.position.x += (eyeX - camera.position.x) * a
    camera.position.y += (eyeY - camera.position.y) * a
    camera.position.z += (eyeZ - camera.position.z) * a

    lookAt.current.set(
      boatState.x + fwdX * BOAT.camLookAhead,
      boatState.y + BOAT.camLookHeight,
      boatState.z + fwdZ * BOAT.camLookAhead
    )
    camera.lookAt(lookAt.current)
    first.current = false
  })

  return null
}

// ─── All scene objects ────────────────────────────────────────────────────────
function SceneContents() {
  return (
    <>
      <Sky
        distance={450000}
        sunPosition={[2, 0.08, -1]}
        turbidity={11}
        rayleigh={0.55}
        mieCoefficient={0.004}
        mieDirectionalG={0.82}
      />

      <ambientLight intensity={0.65} />
      <directionalLight position={[10, 18, 6]} intensity={1.5} color="#FFF2CC" />
      <directionalLight position={[-8, 5, -10]} intensity={0.28} color="#B8D4E3" />

      <fog attach="fog" args={['#a8d8ea', 70, 220]} />

      <CameraRig />

      <Suspense fallback={null}>
        <Ocean />
        <IslandModel />
        <Boat />
        <Environment preset="dawn" />
      </Suspense>

      <IslandLabels />
    </>
  )
}

// ─── Root component ───────────────────────────────────────────────────────────
export default function Scene3D() {
  return (
    // Pure background: the scroll journey drives the boat; page content (and the
    // header) render on top. Sky-blue fallback while WebGL initialises.
    <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: '#a8d8ea' }}>
      <Canvas
        camera={{ position: [ISLANDS[0].berth[0], FLOAT_Y + BOAT.camUp, ISLANDS[0].berth[1] + BOAT.camBack], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ width: '100%', height: '100%' }}
      >
        <SceneContents />
      </Canvas>
    </div>
  )
}

if (typeof window !== 'undefined') {
  useGLTF.preload(ISLAND_GLB)
  useGLTF.preload(BOAT_GLB)
}
