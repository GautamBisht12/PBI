/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f5ff",
          100: "#e0ebff",
          200: "#c6d9ff",
          300: "#a4c0fe",
          400: "#7d9efa",
          500: "#5574f7",
          600: "#3b50ea",
          700: "#2c3fd0",
          800: "#2736a9",
          900: "#263585",
          950: "#0f1d50",
        },
        secondary: {
          50: "#f5f7fa",
          100: "#ebeef3",
          200: "#d2dae5",
          300: "#aab9ce",
          400: "#7d94b3",
          500: "#5b7599",
          600: "#475e7e",
          700: "#3b4d67",
          800: "#344056",
          900: "#2e394a",
          950: "#1f252f",
        },
        accent: {
          50: "#fff8eb",
          100: "#ffeec6",
          200: "#ffd988",
          300: "#ffbf4a",
          400: "#ffa71c",
          500: "#f98305",
          600: "#dd5d02",
          700: "#b73e06",
          800: "#942e0c",
          900: "#7a270e",
          950: "#461104",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        "float-slow": "float-slow 6s ease-in-out infinite",
        "float-medium": "float-medium 5s ease-in-out infinite",
        "float-fast": "float-fast 4s ease-in-out infinite",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
