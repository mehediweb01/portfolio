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
        header: "#10E85BE5",
        innerShadow: "#00000040",
        whites: "#FFFDFD",
        activeColor: "#17DFF5",
        darkBlack: "#1E1E1E",
        blueMagenta: "#151030",
      },
      backgroundColor: {
        cardBg: "#17DFF55C",
        faqBg: "#E9E149B8",
        blueTints: "#100D25",
        blueMagenta: "#151030",
      },
      fontFamily: {
        inter: '"Inter", serif',
        itim: ' "Itim", serif',
      },
      boxShadow: {
        btn: "0 0 25px #17DFF5, 0 0 850px #17DFF5",
        btnWhite: "0 0 15px #432E54, 0 0 450px #B1F0F7",
      },
      fontSize: {
        100: "100px",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
