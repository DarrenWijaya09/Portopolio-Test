/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        storm: {
          light: "#A5B4FC", // ungu muda
          DEFAULT: "#6366F1", // indigo
          dark: "#1E1B4B",   // ungu gelap
        },
      },
    },
  },
  plugins: [],
};
