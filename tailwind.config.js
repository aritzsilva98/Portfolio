/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        indigo: {
          400: '#818cf8',
          600: '#4f46e5',
        },
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      boxShadow: {
        'text-dark': '1px 1px 2px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow-dark': {
            textShadow: '1px 1px 0 rgba(0, 0, 0, 0.8)',
          },
          '.text-shadow-thick': {
            textShadow: '2px 2px 0 rgba(0, 0, 0, 0.8)',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}
