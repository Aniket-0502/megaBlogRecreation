/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playwriteIt: ["Playwrite IT Moderna", "sans-serif"],
        playwriteDeGrund: ["Playwrite DE Grund", "sans-serif"],
      },
    },
  },
  plugins: [],
};
