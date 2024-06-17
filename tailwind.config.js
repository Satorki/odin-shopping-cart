/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-hover': '0 4px 6px rgba(0, 255, 0, 0.5)',
        'custom-active': 'inset 0 4px 6px rgba(255, 0, 0, 0.5)'
      }
    }
  },
  variants: {
    extend: {
      boxShadow: ['hover', 'active']
    }
  },
  plugins: [],
}

