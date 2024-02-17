/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['PPMori-SemiBold', 'PPMori-Regular', 'PPMori-Extralight', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
