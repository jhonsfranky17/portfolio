/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#0A0A0A",
          text: "#EEE5E0",
          textHover: "#decdc3",
        },
      },
    },
    fontFamily: {
      RedHat: ["Red Hat Display", "sans-serif"],
      ShadowsIntoLight: ["Shadows Into Light", "cursive"],
      AntonSC: ["Anton SC", "sans-serif"],
    },
  },
  plugins: [],
};
