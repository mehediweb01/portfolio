import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: "#38BDF8",
        innerShadow: "#00000040",
        whites: "#FFFDFD",
        activeColor: "#17DFF5",
        darkBlack: "#1E1E1E",
        blueMagenta: "#151030",
        blueTints: "#100D25",
        cardBg: "#17DFF55C",
      },
      fontFamily: {
        inter: '"Inter", serif',
        itim: ' "Itim", serif',
      },
      boxShadow: {
        btn: "0 0 25px #17DFF5, 0 0 850px #17DFF5",
        faq: "0 0 0.2px #17DFF5, 0 0 8px #17DFF5",
        btnWhite: "0 0 15px #432E54, 0 0 450px #B1F0F7",
      },
      fontSize: {
        100: "100px",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
