/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#94b0b9',
          50: '#f0f4f5',
          100: '#e1e9eb',
          200: '#c3d3d7',
          300: '#a5bdc3',
          400: '#87a7af',
          500: '#94b0b9',
          600: '#7a9ba3',
          700: '#5f7c87',
          800: '#455d6b',
          900: '#2a3e4f',
        },
        secondary: {
          DEFAULT: '#c8b2a2',
          50: '#f9f7f5',
          100: '#f3efeb',
          200: '#e7dfd7',
          300: '#dbcfc3',
          400: '#cfbfaf',
          500: '#c8b2a2',
          600: '#a08e7e',
          700: '#786a5a',
          800: '#504636',
          900: '#282212',
        },
        'main-blue': '#94b0b9',
        'secondary-green': '#c8b2a2',
        'faint': '#f8f9fa',
      },
    },
  },
  plugins: [],
}
