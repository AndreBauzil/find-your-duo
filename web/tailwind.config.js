/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'gradient': 'linear-gradient(89.86deg, #9572FC 17.08%, #43E7AD 63.94%, #E1D55D 20.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.9) 67.88%)',
      },
    },
  },
  plugins: [],
}

