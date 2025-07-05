/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  safelist: ["translate-y-0", "-translate-y-16", "opacity-0", "opacity-100"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
