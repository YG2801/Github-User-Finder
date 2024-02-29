/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "selector",
  fontFamily: {
    "code-pro": ["Source Code Pro", "monospace"],
  },
  theme: {
    extend: {
      colors: {
        "bg-very-dark": "#141c2f",
        "bg-dark": "#1f2a48",
        "bg-light": "#f5f8ff",
        "bg-very-light": "#fefefe",
        blue: "#0079fe",
        "txt-blue": "#0271eb",
        "txt-gray": "#8e94a4",
        "txt-light": "#fdfdfc",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
