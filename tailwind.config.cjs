/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5e6e6',
          100: '#e6b3b3',
          200: '#d68080',
          300: '#c74d4d',
          400: '#b71a1a',
          500: '#700000',
          600: '#5c0000',
          700: '#470000',
          800: '#330000',
          900: '#1f0000',
        },
      },
    },
  },
  plugins: [],
}
