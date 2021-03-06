module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: {
        300: "#E9F4F6",
        400: "#d0e0e3",
        500: "#a2c4c9",
        600: "#76a5af",
        700: "#45818e",
        800: "#134f5c",
        900: "#0c343d",
      },
      accent: {
        100: "#C4C4C4",
        200: "#FEF5E6",
        300: "#FDE4BE",
        400: "#FCD497",
        500: "#FBC36F",
        600: "#FAB042",
        700: "#F99E16",
        800: "#DA8506",
        900: "#AE6A05",
      },
      alert: {
        100: "#FED2DA",
        200: "#FDB9C6",
        300: "#FCA1B1",
        400: "#FC889D",
        500: "#FB6F88",
        600: "#FA516F",
        700: "#F93357",
        800: "#F9163E",
        900: "#E9062F",
      },
      gray: {
        100: "#FEFEFE",
        200: "#F0F0F0",
        300: "#D4D4D4",
        400: "#B8B8B8",
        500: "#808080",
        600: "#616161",
        700: "#434343",
        800: "#242424",
        900: "#151515",
      },
    },
  },
  plugins: [],
};
