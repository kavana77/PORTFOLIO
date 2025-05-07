import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          '"Open Sans"',
          '"Helvetica Neue"',
          "sans-serif",
        ],
      },
    },
  },

  plugins: [],
};
export default config;
