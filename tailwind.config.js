/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 10px 3px'
      },
      colors: {
        'dark-text-secondary': '#a8a29e'
      },
      transitionDuration: {
        '600': '600ms',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "horizontal-scroll": {
          '0%': { transform: 'translate3d(0, 0, 0)' },
          '100%': { transform: 'translate3d(-50%, 0, 0)' }
        },
        "opacity-appear": {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        "opacity-appear-80": {
          '0%': { opacity: 0 },
          '100%': { opacity: .8 },
        },
        "opacity-disappear": {
          '0%': { opacity: 100 },
          '100%': { opacity: 0 },
        },
        'fill-width': {
          '0%': { left: 0, right: '100%' },
          '100%': { left: 0, right: 0 },
        },
        'empty-width': {
          '0%': { left: 0, right: 0 },
          '100%': { left: '100%', right: 0 },
        },
      },
      animation: {
        "endless-scroll": 'horizontal-scroll 5s linear infinite',
        "endless-scroll-delay": 'horizontal-scroll 2.5s linear infinite delay-[2.5]',
        "appear": 'opacity-appear 1s ease',
        "appear-80": 'opacity-appear-80 1s ease',
        "disappear": 'opacity-disappear 2.5s ease',
        "fill": 'fill-width 1s ease-in-out',
        "empty": 'empty-width 1.5s ease-in'
      }
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
