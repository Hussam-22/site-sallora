/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      primary: "#6B9080",
      secondary: "#F9D88C",
      accent: "#F9B38C",
      green: {
        50: "#F6FFF8",
        100: "#EAF4F4",
        300: "#CCE3DE",
        500: "#A4C3B2",
        700: "#6B9080",
        900: "#3A4D4A",
      },
      gold: {
        50: "#FFFDF6",
        100: "#FEF9ED",
        300: "#FCE9C5",
        500: "#F9D88C",
        700: "#D4A373",
        900: "#8B5A3E",
      },
      copper: {
        50: "#FFF8F6",
        100: "#FEF1ED",
        300: "#FCD9C5",
        500: "#F9B38C",
        700: "#D48A73",
        900: "#8B513E",
      },
      // green: {
      //   300: "#83d265",
      //   400: "#75bf58",
      // },
    },
    extend: {
      fontFamily: {
        sans: [`"Noto Kufi Arabic", sans-serif`],
      },
    },
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
