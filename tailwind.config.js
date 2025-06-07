import PrimeUI from "tailwindcss-primeui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#0174a3",
          600: "#0091ca",
          500: "#0aa7db",
          400: "#35cafb",
          300: "#7bdcfe",
          200: "#b9eafe",
          100: "#e0f4fe",
          50: "#f0faff",
          DEFAULT: "var(--primary-color)",
        },
        secondary: {
          700: "#8336ba",
          600: "#9b4cdd",
          500: "#ae6e84",
          400: "#c492ee",
          300: "#dbbcf6",
          200: "#ebdafa",
          100: "#f4ebfc",
          50: "#faf6fe",
          DEFAULT: "var(--secondary-color)",
        },
        neutral: {
          700: "#2C2B31",
          600: "#4B4B4B",
          500: "#8E8E8E",
          400: "#CACACA",
          300: "#E1E1E1",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
      },
    },
  },
  plugins: [PrimeUI],
};
