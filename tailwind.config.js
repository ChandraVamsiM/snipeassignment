/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },

      fontFamily: {},

      fontSize: {
        sm: "1rem",
        base: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },

      spacing: {
        1: "8px",
        2: "12px",
        3: "16px",
        4: "24px",
        5: "32px",
        6: "48px",
      },
    },
  },
  extend: {
    colors: {
      h1color: "#66ff99",
    },
  },
  plugins: [],
};
export const plugins = [];
