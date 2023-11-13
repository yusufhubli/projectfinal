/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        sm:'360px',
        sd:'660px',
        md:'768px',
      lg:'1240px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}
