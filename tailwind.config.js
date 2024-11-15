/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-70": "#706F6F",
        "color-40": "#403F3F",
        "color-d7": "#D72050",
        "color-9f": "#9F9F9F",
        "color-e7": "#E7E7E7",
        "color-f3": "#F3F3F3",
        "color-google": "#4285F4",
        "color-github": "#24292e",
        "color-ff-0": "rgba(255, 140, 71, 1)",
        "color-f7-100": "rgba(247, 91, 95, 1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
