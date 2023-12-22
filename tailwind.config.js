/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,sass,ts}"],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk"],
        inconsolata: ["Inconsolata"],
      },
    },
  },
  plugins: [],
};
