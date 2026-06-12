/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F2EC",
        ink: "#101010",
        klein: "#1F2DEB",
        stone: "#C9C5BA",
        muted: "#3c3c38",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        sans: ['"Inter Tight"', "sans-serif"],
        label: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
