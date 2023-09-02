/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'CardColor': `#` +( Math.floor(Math.random()*16777215).toString(16)),
      },
    },
  },
  plugins: [],
}

