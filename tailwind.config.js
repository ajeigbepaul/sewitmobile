/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      color: {
        white: "#ffffff",
        lemon: "#e8d53d",
        black: "#f9f9f9",
      },
      fontFamily:{
        poppins_black:["Poppins-Black"],
        roboto_black:["Roboto-Black"],
      }
    },
  },
  plugins: [],
};
