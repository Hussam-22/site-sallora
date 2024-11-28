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
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: colors.yellow, // Accent colors, used mainly for star color, heading and buttons
      orange: colors.orange, // Primary colors, used mainly for links, buttons and svg icons
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
      primary: "#6B9080",
      secondary: "#D4A373",
      accent: "#ac6359",
      green: {
        50: "#F6FFF8",
        100: "#EAF4F4",
        300: "#CCE3DE",
        500: "#A4C3B2",
        700: "#6B9080",
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
  ],
};
