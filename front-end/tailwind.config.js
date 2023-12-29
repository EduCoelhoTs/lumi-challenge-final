/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#12f48d",
      secondary: "#02231c",
      white: "#ffffff",
      black: "#000000",
      primaryHover: "#0eba6a",
      secondaryHover: "#011410",
      darkGray: "#111111",
      lightGray: "#e6e6e6",
      gray: "#999999",
      blue: "#007bff",
      indigo: "#6610f2",
      purple: "#6f42c1",
      slate: "#eaeaea"
    },
    extend: {},
  },
  plugins: [],
}

