/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'xxs': 	'14rem'
      },
      height: {
        'list': '88vh',
        '5.5/6': '80%',
        '4.5/6': '70%'
      },
      maxHeight: {
        'calories': '250px'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
