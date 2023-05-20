/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#417F56",
        "gray-color": "#717171",
        "background-black": "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        estedad: "estedad",
      },
    },
  },
  plugins: [],
};
