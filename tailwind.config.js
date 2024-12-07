//Mehdi NAOUI
//BTS SIO
//2024
//Portfolio

/** @type {import('tailwindcss').Config} */
export default {
  //Add Selector strategy for darkmode selection.
  darkMode: "class",

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Adding the google fonts into the tailwind config.
      fontFamily: {
        title: ["Roboto", "sans-serif"], //Roboto for title
        body: ["Poppins", "sans-serif"], //Poppins for classic texte
      },
    },
  },
  plugins: [],
};
