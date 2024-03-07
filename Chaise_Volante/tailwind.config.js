/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode:"class",
  theme: {
    fontFamily: {
      AMERSN__: ["AMERSN__", "sans-seriff"],
    },
    extend: {
      colors:{
        primary: "#000000",
      }
    },
  },
  plugins: [],
}
