/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827', // Dark Slate
        secondary: '#f59e0b', // Construction Yellow
        dark: '#111827',
        light: '#f9fafb',
        neutral: '#374151',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
