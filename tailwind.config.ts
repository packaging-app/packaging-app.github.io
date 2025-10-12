import type { Config } from 'tailwindcss';

const config: Config = {
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
          25: '#f0f4f5',
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
          25: '#f9f7f5',
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
        success: {
          500: "#12B76A",
          800: "#05603A"
        },
        error: {
          25: "#FFFAFA",
          50: "#FFF0F0",
          100: "#FEE2E1",
          200: "#FEC5C3",
          300: "#FD8B87",
          400: "#FB514B",
          500: "#F00D05",
          600: "#CD0B04",
          700: "#A50903"
        },
        gray: {
          25: "#FCFCFD",
          50:"#F9F9FB",
          100: "#EFF1F5",
          200: "#DCDFEA",
          300: "#B8BED5",
          400: "#7D89B0",
          500: '#5D6B98',
          700: "#404968",
          900: '#111322',
        },
        blue: {
          50: '#F0F9FF',
          400: '#2589FE',
          500: '#0070F3',
          600: '#2F6FEB',
          700: '#FF9165',
        },
        "poder-blue": {
          50: "#F7FAFA",
          100: "#E6EFF0",
          200: "#DAE7E8",
          500: "#AECACD",
          600: "#9EB8BB"
        },
        "light-blue": {
          500: "#0BA5EC",
          800: "#065986"
        },
        pink: {
          300: "#FAA7E0"
        },
        violet: {
          300: "#C3B5FD"
        },
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
