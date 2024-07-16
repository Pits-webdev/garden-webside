/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      /* "2xl": "1536px", */
    },
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      Inter: "Inter, sans-serif",
    },

    extend: {
      colors: {
        background: "var(--background)",
        background_light: "var(--backgroundLight)",
        accent: "var(--accent)",
        gray: "var(--gray)",
      },
      aria: {
        current: "current=page",
      },
    },
  },
  plugins: [],
};
