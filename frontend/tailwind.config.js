/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        backgroundSize: {
            '100%': '100%'
        },
        extend: {
            backgroundImage: {
                'photo-1': "url('../public/photo1.jpg')",
                'photo-2': "url('../public/photo2.jpg')",
                'photo-3': "url('../public/photo3.jpg')",
                'photo-4': "url('../public/photo4.jpg')"
            }
        },
    },
    plugins: [
        require('tw-elements/dist/plugin')
    ],
}
