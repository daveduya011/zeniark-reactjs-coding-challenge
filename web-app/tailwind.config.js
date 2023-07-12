/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary)",
        foreground: "var(--color-foreground)",
        background: "var(--color-background)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      borderRadius: {
        card: "10px",
      },
      maxWidth: {
        card: "900px",
      },
      minHeight: {
        card: "700px",
      },
    },
  },
  plugins: [],
};
