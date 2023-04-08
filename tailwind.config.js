/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        cyan: "#2acfcf",
        "dark-violet": "#3b3054",
        "secondary-red": "#f46262",
        light: "#bfbfbf",
        "gray-violet": "#9e9aa7",
        "very-dark-blue": "#35323e",
        "very-dark-violet": "#232127",
      },
    },
  },
  plugins: [],
};
