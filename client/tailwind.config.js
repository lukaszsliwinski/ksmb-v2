/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      width: {
        '5/12s': '42vw'
      },
      height: {
        '1/3s': '34vh',
        '5/12s': '42vh',
        '2/3s': '66vh'
      },
      fontSize: {
        8: '.8rem',
        9: '.9rem'
      },
      colors: {
        black: '#010101',
        supernova: '#fdcc0a',
        silver: '#bcbcbc',
        boulder: '#797979',
        'buttered-rum': '#a5860c',
        'outer-space': '#1e2328',
        'play-light': '#f2f2f2',
        'play-dark': '#3e4246',
        'fb-btn': '#1877f2',
        'yt-btn': '#ff0000'
      },
      backgroundImage: {
        'photo-1': 'url("./photos/background1.webp")',
        'photo-2': 'url("./photos/background2.webp")',
        'photo-3': 'url("./photos/background3.webp")',
        'photo-4': 'url("./photos/background4.webp")',
        'photo-5': 'url("./photos/background5.webp")'
      },
      backgroundSize: {
        '100%': '100%'
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('prettier-plugin-tailwindcss')
  ]
};
