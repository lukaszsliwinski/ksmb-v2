/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        extend: {
            colors: {
                'temp-light': '#f5f5f5',
                'temp-dark': '#333333'
            },
            backgroundImage: {
                'photo-1': "url('../public/photo1.jpg')",
                'photo-2': "url('../public/photo2.jpg')",
                'photo-3': "url('../public/photo3.jpg')",
                'photo-4': "url('../public/photo4.jpg')"
            },
            backgroundSize: {
                '100%': '100%'
            }
        },
    },
    plugins: [
        require('tw-elements/dist/plugin'),
        function ({ addVariant }) {
            addVariant('all-inside', '& *:not(nav)');
        }
    ],
}
