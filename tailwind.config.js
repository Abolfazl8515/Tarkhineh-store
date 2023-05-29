/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "green-primary": "#417F56",
        "gray-color": "#717171",
        "background-black": "rgba(0, 0, 0, 0.75)",
        "title-color": "#353535",
      },
      fontFamily: {
        estedad: "estedad",
      },
      animation: {
        hover: "hoverImage 0.2s ease",
        menu: "showMenu 0.2s ease",
      },
      keyframes: {
        hoverImage: {
          "0%": { opacity: 0, height: 0 },
          "100%": { opacity: 1 },
        },
        showMenu: {
          "0%": { width: 0 },
          "100%": { width: "66%" },
        },
      },
    },
  },
  plugins: [],
};
