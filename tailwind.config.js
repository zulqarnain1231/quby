/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#A266D8",
        },
        white: {
          main: "#fff",
        },
        black: {
          main: "#12101E",
          secondary: "#0C152C",
        },
      },
      fontFamily: {
        vastago: ["Vastago", "sans-serif"],
      },
    },
  },
  plugins: [],
};
