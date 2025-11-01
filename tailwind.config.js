/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#94b0b9',
        secondary: '#c8b2a2',
        'main-blue': '#94b0b9',
        'secondary-green': '#c8b2a2',
        'faint': '#f8f9fa',
      },
    },
  },
  plugins: [],
}
