/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'emergent-green': '#34d399',
        'dark-bg': '#121212',
        'dark-card': '#1E1E1E',
        'dark-green-button': '#166534',
        'dark-green-button-hover': '#15803d',
      },
    },
  },
  plugins: [],
}
