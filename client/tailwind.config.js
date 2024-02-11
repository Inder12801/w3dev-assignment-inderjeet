/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkish: "#D63484",
        "pinkish-dark": "#C2255C",
        "pinkish-light": "#E85090",
        "pinkish-lighter": "#F068B4",
        "pinkish-lightest": "#F880D8",
        blueish: "#3A86FF",
        "blueish-dark": "#2D73FF",
        "blueish-light": "#5191FF",
        "blueish-lighter": "#75B1FF",
        "blueish-lightest": "#99D1FF",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
