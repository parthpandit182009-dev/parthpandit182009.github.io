module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        stone: {
          950: '#0a0a0a',
          900: '#1c1b1a',
          800: '#292422',
          700: '#44403c',
          600: '#57534e',
          500: '#78716f',
          400: '#a8a29e',
          300: '#d7d3d0',
          200: '#e7e5e4',
          100: '#f5f5f4',
          50: '#fafaf9',
        },
        accent: {
          DEFAULT: '#b89b9b',
          light: '#d4b5b5',
          dark: '#9a7f7f',
        },
      },
      spacing: {
        '120': '120px',
        '128': '128px',
      },
    },
  },
  plugins: [],
};
