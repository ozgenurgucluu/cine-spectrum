/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        "-1": "-1px",
        2: "2px",
        3: "3px",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      lineClamp: {
        2: "2",
      },
    },
  },
  plugins: [],
};
