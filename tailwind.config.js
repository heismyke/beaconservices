/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        beacon: {
          ink: "#151918",
          forest: "#123b36",
          emerald: "#1f6f63",
          mist: "#edf7f4",
          pearl: "#f8f6f1",
          gold: "#c5974a",
          rose: "#c77d68",
        },
      },
      fontFamily: {
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(18, 59, 54, 0.12)",
      },
    },
  },
  plugins: [],
};
