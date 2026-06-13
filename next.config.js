/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/parthpandit182009.github.io' : '',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/parthpandit182009.github.io' : ''
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei']
}

module.exports = nextConfig
