/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      maxWidth: {
        xxs: "14rem",
      },
      height: {
        list: "90vh",
        "5.5/6": "80%",
        "4.5/6": "70%",
      },
      maxHeight: {
        calories: "250px",
      },
      boxShadow: {
        well: "inset 0 2px 5px 0 #404040",
        wellShadow: "inset 0 10px 4px 0 rgb(0 0 0 / 0.25)",
      },
      colors: {
        LoginGray: "#D9D9D9",
        ExerciseSearchBackground: "#8A8A8A",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
