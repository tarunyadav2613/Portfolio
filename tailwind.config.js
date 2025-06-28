/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          light: '#60a5fa',    // Softer blue-400
          DEFAULT: '#3b82f6',  // Blue-500
          dark: '#1e40af',     // Blue-800
        },
        background: '#000000',
        card: '#111111',
        text: '#e5e7eb',       // Light text
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
