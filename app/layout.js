import './globals.css'
import { Fredoka, Nunito } from 'next/font/google'

const fredoka = Fredoka({
  subsets: ['latin'],
  variable: '--font-head',
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800']
})

export const metadata = {
  title: 'Parth Pandit — Beachy Portfolio',
  description: 'A playful comic beach-themed portfolio built with Next.js, Tailwind, Framer Motion, and Three.js.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${nunito.variable} bg-[#FFF3D6] text-[#1A3A5C] antialiased`}>{children}</body>
    </html>
  )
}
