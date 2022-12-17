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
        'list': '90vh',
        '5.5/6': '80%',
        '4.5/6': '70%'
      },
      maxHeight: {
        'calories': '250px'
      },
      boxShadow: {
        'well': 'inset 0 2px 5px 0 #404040'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
