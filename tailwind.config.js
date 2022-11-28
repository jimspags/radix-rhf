module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      foreground: "var(--paragraph)",
      primary: "var(--button-background)",
      background: "var(--background)",
      secondary: "var(--secondary)",
      stroke: "var(--stroke)",
      highlight: "var(--highlight)",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
