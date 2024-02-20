/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#e9ff32", // hsl(75, 94%, 57%)
        white: "#FFFFFF", // hsl(0, 0%, 100%)
        grey: "#333333", // hsl(0, 0%, 20%)
        darkGrey: "#1F1F1F", // hsl(0, 0%, 12%)
        offBlack: "#141414", // hsl(0, 0%, 8%)
      },
      fontFamily: {
        sans: ["Inter", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
