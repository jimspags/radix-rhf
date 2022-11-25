module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "var(--button-background)",
      foreground: "var(--paragraph)",
      background: "var(--background)",
      secondary: "var(--secondary)",
      stroke: "var(--stroke)",
      highlight: "var(--highlight)",
    },
    extend: {},
  },
  plugins: [],
};
