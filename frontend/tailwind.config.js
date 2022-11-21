/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {
            colors: {
                'black': '#010101',
                'supernova': '#fdcc0a',
                'silver': '#bcbcbc',
                'boulder': '#797979',
                'buttered-rum': '#a5860c',
                'outer-space': '#384043',
                'play-light': '#f2f2f2',
                'play-dark': '#53595c'
            },
            backgroundImage: {
                'photo-1': "url('../src/photos/background1.jpg')",
                'photo-2': "url('../src/photos/background2.jpg')",
                'photo-3': "url('../src/photos/background3.jpg')",
                'photo-4': "url('../src/photos/background4.jpg')"
            },
            backgroundSize: {
                '100%': '100%'
            }
        },
    },
    plugins: [
        require('tw-elements/dist/plugin'),
        require('tailwind-scrollbar')({ nocompatible: true }),
        function ({ addVariant }) {
            addVariant('all-inside', '& *:not(nav)');
        }
    ],
}
