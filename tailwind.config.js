import PrimeUI from "tailwindcss-primeui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0faff",
          100: "#e0f4fe",
          200: "#b9eafe",
          300: "#7bdcfe",
          400: "#35cafb",
          DEFAULT: "var(--primary-color)",
          600: "#0091ca",
          700: "#0174a3",
        },
        secondary: {
          DEFAULT: "var(--secondary-color)",
        },
      },
    },
  },
  plugins: [PrimeUI],
};
