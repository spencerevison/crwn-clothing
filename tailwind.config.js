/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: ["Open Sans Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        google: {
          100: "#4285f4",
          120: "#357ae8",
        },
      },
    },
  },
  plugins: [],
};
