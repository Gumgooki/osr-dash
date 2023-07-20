/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'desert-storm': '#293727',
        'chelsea-cucumber': '#749C46',
        'celery': '#9BC055',
        'gold-sand': '#CBC683',
        'wedgewood': '#5B82A7'
      },

      screens: {
        'sm': '500px'
      }
    },
  },
  plugins: [],
}
