import PrimeUI from "tailwindcss-primeui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "var(--primary-700)",
          600: "var(--primary-600)",
          500: "var(--primary-500)",
          400: "var(--primary-400)",
          300: "var(--primary-300)",
          200: "var(--primary-200)",
          100: "var(--primary-100)",
          50: "var(--primary-50)",
          DEFAULT: "var(--primary-color)",
        },
        secondary: {
          700: "var(--secondary-700)",
          600: "var(--secondary-600)",
          500: "var(--secondary-500)",
          400: "var(--secondary-400)",
          300: "var(--secondary-300)",
          200: "var(--secondary-200)",
          100: "var(--secondary-100)",
          50: "var(--secondary-50)",
          DEFAULT: "var(--secondary-color)",
        },
        neutral: {
          700: "var(--neutral-700)",
          600: "var(--neutral-600)",
          500: "var(--neutral-500)",
          400: "var(--neutral-400)",
          300: "var(--neutral-300)",
          200: "var(--neutral-200)",
          100: "var(--neutral-100)",
          50: "var(--neutral-50)",
        },
      },
    },
  },
  plugins: [PrimeUI],
};
