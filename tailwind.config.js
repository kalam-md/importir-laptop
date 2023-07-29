/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'body': ['Lato', 'sans-serif'],
      'horror': ['Nosifer', 'cursive'],
    },
    colors: {
      'primary': '#012340',
      'white': '#ffffff',
      'yellow': '#FFDE0C',
    }
  },
  plugins: [],
}

