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
        foreground: "var(--color-foreground)",
        background: "var(--color-background)",
        success: "var(--color-success)",
        error: "var(--color-error)",
        "primary-dark": "var(--color-primary-dark)",
        "gray-light": "var(--color-gray-light)",
      },
      fontSize: {
        sm: "14px",
        base: "16px",
        lg: "20px",
        xl: "22px",
        "2xl": "25px",
        "3xl": "30px",
        "4xl": "35px",
        "5xl": "50px",
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
