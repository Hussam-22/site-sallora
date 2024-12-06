/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  // darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: [`"Noto Kufi Arabic", sans-serif`],
      },
    },
  },
  daisyui: {
    themes: ["cupcake"],
    darkTheme: "cupcake", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
