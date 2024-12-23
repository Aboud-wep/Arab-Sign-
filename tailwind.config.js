/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      fontFamily: {
        'janna': ['Janna LT', 'sans-serif'],
        'almarai': ['Almarai', 'sans-serif'],
      },
      },
  },
  plugins: [],
}
