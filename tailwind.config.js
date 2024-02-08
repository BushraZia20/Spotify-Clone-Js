/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      "custom-dark": "#262626",
      white: "#ffffff",
      green: "green",
      // darkgreen: "darkgreen",
      red: "red",
      "2a2a2a": "#2a2a2a",
      121212: "#121212",
      181818: "#181818",
    },
    fontSize: {
      "30px": "30px",
    },
    maxWidth: {
      22: "22",
    },
    extend: {
      width: {
        28: "28vw",
        70: "70vw",
        "97%": "97%",
        "98%": "98%",
      },
      height: {
        "66vh": "66vh",
        "12rem": "12rem",
      },
      margin: {
        "39rem": "39rem",
      },
    },
  },
  plugins: [],
};
