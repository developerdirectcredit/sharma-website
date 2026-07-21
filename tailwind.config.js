/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0F1F3D", 700: "#16294D", 600: "#1D3560", 100: "#E7EAF1" },
        ink: "#12172A",
        paper: "#F7F6F2",
        brass: { DEFAULT: "#A8843F", 600: "#8F6F32", 100: "#F1E6CE" },
        slate: { 700: "#3B4A63", 500: "#5C6C86", 300: "#AEB8C9" },
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Inter"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      maxWidth: { content: "1180px" },
    },
  },
  plugins: [],
};


