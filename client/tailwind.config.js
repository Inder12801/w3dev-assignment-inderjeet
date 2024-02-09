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
      boxShadow: {
        custom: {
          neon: "0 0 10px 5px #48abe0,0 0 20px 7px #ebecca,0 0 25px 20px #8a2be2,0 0 30px 25px #ff1493",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
