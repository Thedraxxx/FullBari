/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-lite': ' #A3B18A',
        'deep-green': '#2E8B57',
        'sage-green': '#A8D5BA',
        'warm-gold': '#FFD700',
        'light-beige': '#F5F5DC',
        'charcoal': '#333333',
        'soft-mint': '#98FF98',
        'earthy-brown': '#8B4513',
        background: "var(--background)",
        foreground: "var(--foreground)",
      }
    }
  },
  plugins: [],
};
