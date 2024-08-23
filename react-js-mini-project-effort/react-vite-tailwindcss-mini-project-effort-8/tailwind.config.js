/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: 'typewriter 4s steps(40, end) infinite',
        blink: 'blink 0.75s step-start infinite'
      },
      keyframes: {
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        },
        blink: {
          '50%': { opacity: 0 }
        }
      },
      screens: {
        'xs': '480px', // Example screen size, adjust or add as needed
      },
    },
  },
  plugins: [],
}

