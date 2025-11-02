import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Context/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#054eb4",
          25: "#f0f4ff",
          50: "#e6f0ff",
          100: "#cce0ff",
          200: "#99c1ff",
          300: "#66a2ff",
          400: "#3383ff",
          500: "#2874fc",
          600: "#1f5cc9",
          700: "#164496",
          800: "#054eb4",
          900: "#041430",
        },
        secondary: {
          DEFAULT: "#4e4c4c",
          25: "#fafafa",
          50: "#f5f5f5",
          100: "#e5e5e5",
          200: "#d4d4d4",
          300: "#a3a3a3",
          400: "#737373",
          500: "#4e4c4c",
          600: "#3d3b3b",
          700: "#2c2a2a",
          800: "#1b1919",
          900: "#0a0808",
        },
        "main-blue": "#054eb4",
        "secondary-gray": "#4e4c4c",
        faint: "#f8f9fa",
        success: {
          500: "#12B76A",
          800: "#05603A",
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
          700: "#A50903",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9F9FB",
          100: "#EFF1F5",
          200: "#DCDFEA",
          300: "#B8BED5",
          400: "#7D89B0",
          500: "#5D6B98",
          700: "#404968",
          900: "#111322",
        },
        blue: {
          50: "#F0F9FF",
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
          700: "#FF9165",
        },
        "poder-blue": {
          50: "#F7FAFA",
          100: "#E6EFF0",
          200: "#DAE7E8",
          500: "#AECACD",
          600: "#9EB8BB",
        },
        "light-blue": {
          500: "#0BA5EC",
          800: "#065986",
        },
        pink: {
          300: "#FAA7E0",
        },
        violet: {
          300: "#C3B5FD",
        },
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
      animation: {
        "bounce-vertical": "bounce-vertical 3s ease-in-out infinite",
      },
      keyframes: {
        "bounce-vertical": {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
